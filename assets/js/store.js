/* GreenHaven — cart, orders and delivery tracking (browser storage only) */
(function (root) {
  'use strict';

  const DATA = root.DATA;
  const CART_KEY = 'gh.cart';
  const ORDER_KEY = 'gh.orders';
  const FREE_SHIPPING_OVER = 75;      // USD
  const TAX_RATE = 0.08;

  const SHIPPING = {
    std:  { cost: 6.95,  days: [4, 6] },
    exp:  { cost: 14.95, days: [2, 3] },
    next: { cost: 24.95, days: [1, 1] }
  };

  const COURIERS = ['GreenPost Express', 'EcoFreight', 'Verdant Logistics', 'BloomLine Courier'];
  const STATUSES = ['confirmed', 'preparing', 'dispatched', 'transit', 'out', 'delivered'];
  /* Hours after the order is placed at which each status becomes current.  */
  const STATUS_AT = { confirmed: 0, preparing: 3, dispatched: 10, transit: 26, out: 50, delivered: 62 };

  const listeners = [];
  function emit() { listeners.forEach(fn => { try { fn(); } catch (e) {} }); }

  function read(key, fallback) {
    try { const v = JSON.parse(localStorage.getItem(key)); return v == null ? fallback : v; }
    catch (e) { return fallback; }
  }
  function write(key, value) {
    try { localStorage.setItem(key, JSON.stringify(value)); } catch (e) {}
  }

  /* ------------------------------------------------------------- cart */
  function getCart() {
    const c = read(CART_KEY, []);
    return Array.isArray(c) ? c.filter(l => l && DATA.get(l.id) && l.qty > 0) : [];
  }
  function saveCart(c) { write(CART_KEY, c); emit(); }

  function add(id, qty) {
    qty = Math.max(1, parseInt(qty, 10) || 1);
    const p = DATA.get(id);
    if (!p) return false;
    const cart = getCart();
    const line = cart.filter(l => l.id === id)[0];
    const cap = Math.max(1, p.stock);
    if (line) line.qty = Math.min(cap, line.qty + qty);
    else cart.push({ id, qty: Math.min(cap, qty) });
    saveCart(cart);
    return true;
  }

  function setQty(id, qty) {
    qty = parseInt(qty, 10) || 0;
    let cart = getCart();
    if (qty <= 0) cart = cart.filter(l => l.id !== id);
    else cart.forEach(l => { if (l.id === id) l.qty = Math.min(Math.max(1, DATA.get(id).stock), qty); });
    saveCart(cart);
  }

  function remove(id) { saveCart(getCart().filter(l => l.id !== id)); }
  function clear() { saveCart([]); }
  function count() { return getCart().reduce((n, l) => n + l.qty, 0); }

  /* ----------------------------------------------------------- promos */
  function getPromo() { return read('gh.promo', null); }
  function applyPromo(code) {
    const c = String(code || '').trim().toUpperCase();
    if (DATA.PROMOS[c]) { write('gh.promo', { code: c, pct: DATA.PROMOS[c] }); emit(); return DATA.PROMOS[c]; }
    return 0;
  }
  function clearPromo() { write('gh.promo', null); emit(); }

  /** All money figures in USD; the display layer converts. */
  function totals(shipMethod) {
    const cart = getCart();
    const subtotal = cart.reduce((s, l) => s + DATA.get(l.id).price * l.qty, 0);
    const promo = getPromo();
    const discount = promo ? subtotal * promo.pct / 100 : 0;
    const afterDiscount = subtotal - discount;
    const ship = SHIPPING[shipMethod] || SHIPPING.std;
    let shipping = cart.length === 0 ? 0 : ship.cost;
    if (afterDiscount >= FREE_SHIPPING_OVER && (shipMethod === 'std' || !shipMethod)) shipping = 0;
    const tax = afterDiscount * TAX_RATE;
    return {
      subtotal, discount, shipping, tax,
      total: afterDiscount + shipping + tax,
      freeShippingGap: Math.max(0, FREE_SHIPPING_OVER - afterDiscount),
      promo
    };
  }

  /* ---------------------------------------------------------- orders */
  function orderNumber() {
    const abc = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
    let s = '';
    for (let i = 0; i < 6; i++) s += abc[Math.floor(Math.random() * abc.length)];
    return 'GH-' + s;
  }

  function getOrders() {
    const o = read(ORDER_KEY, []);
    return Array.isArray(o) ? o : [];
  }

  function getOrder(num) {
    const n = String(num || '').trim().toUpperCase();
    return getOrders().filter(o => o.number === n)[0] || null;
  }

  function placeOrder(details, shipMethod) {
    const cart = getCart();
    if (!cart.length) return null;
    const t = totals(shipMethod);
    const ship = SHIPPING[shipMethod] || SHIPPING.std;
    const now = Date.now();
    const order = {
      number: orderNumber(),
      placedAt: now,
      items: cart.map(l => ({ id: l.id, qty: l.qty, price: DATA.get(l.id).price })),
      totals: { subtotal: t.subtotal, discount: t.discount, shipping: t.shipping, tax: t.tax, total: t.total },
      promo: t.promo ? t.promo.code : null,
      shipMethod: shipMethod || 'std',
      courier: COURIERS[Math.floor(Math.random() * COURIERS.length)],
      trackingId: 'TRK' + Math.floor(100000000 + Math.random() * 899999999),
      eta: now + ship.days[1] * 86400000,
      customer: {
        name: details.name, email: details.email, phone: details.phone,
        country: details.country, city: details.city,
        address: details.address, zip: details.zip, notes: details.notes || ''
      },
      payment: details.payment,
      cardLast4: details.cardLast4 || null,
      manualStep: 0
    };
    const all = getOrders();
    all.unshift(order);
    write(ORDER_KEY, all.slice(0, 40));
    clear();
    clearPromo();
    emit();
    return order;
  }

  /** Current status index: time elapsed, or a manually advanced step. */
  function statusIndex(order) {
    if (!order) return 0;
    const hours = (Date.now() - order.placedAt) / 3600000;
    let idx = 0;
    STATUSES.forEach((s, i) => { if (hours >= STATUS_AT[s]) idx = i; });
    return Math.min(STATUSES.length - 1, Math.max(idx, order.manualStep || 0));
  }

  /** Demo control so a visitor can watch the timeline move. */
  function advance(num) {
    const all = getOrders();
    const o = all.filter(x => x.number === num)[0];
    if (!o) return null;
    o.manualStep = Math.min(STATUSES.length - 1, statusIndex(o) + 1);
    write(ORDER_KEY, all);
    emit();
    return o;
  }

  /** Timestamp each step is expected at, for the tracking timeline. */
  function stepTime(order, i) {
    return order.placedAt + STATUS_AT[STATUSES[i]] * 3600000;
  }

  root.STORE = {
    SHIPPING, STATUSES, COURIERS, FREE_SHIPPING_OVER, TAX_RATE,
    getCart, add, setQty, remove, clear, count, totals,
    getPromo, applyPromo, clearPromo,
    getOrders, getOrder, placeOrder, statusIndex, advance, stepTime,
    onChange(fn) { listeners.push(fn); }
  };
})(window);
