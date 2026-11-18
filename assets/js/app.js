/* GreenHaven — application shell, router and views */
(function () {
  'use strict';

  const I = window.I18N, DATA = window.DATA, STORE = window.STORE, AI = window.AI;
  const t = (k, v) => I.t(k, v);
  const money = v => I.money(v);
  const $ = s => document.querySelector(s);
  const $$ = s => Array.prototype.slice.call(document.querySelectorAll(s));
  const app = () => document.getElementById('app');

  function esc(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  }

  const ICON = {
    arrow: '<svg class="ico ico-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 6l6 6-6 6" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    plus: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 5v14M5 12h14" stroke-linecap="round"/></svg>',
    check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="m5 13 4 4 10-10" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    heart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 20s-7-4.4-7-9.3A4 4 0 0 1 12 8a4 4 0 0 1 7 2.7C19 15.6 12 20 12 20Z" stroke-linejoin="round"/></svg>',
    leaf: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 22c0-6 3-10 9-11-1 7-4 10-9 11Z"/><path d="M12 22C8 18 3 17 3 9c6 1 9 6 9 13Z" opacity=".55"/></svg>',
    truck: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M2 7h11v9H2zM13 10h4l4 3.5V16h-8z" stroke-linejoin="round"/><circle cx="6" cy="18" r="2"/><circle cx="17" cy="18" r="2"/></svg>',
    shield: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M12 3 5 6v5.5c0 4.3 3 8.2 7 9.5 4-1.3 7-5.2 7-9.5V6l-7-3Z" stroke-linejoin="round"/><path d="m9 12 2 2 4-4" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    globe: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 3 2.5 15 0 18M12 3c-2.5 3-2.5 15 0 18"/></svg>',
    users: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><circle cx="9" cy="8" r="3.2"/><path d="M3 20c0-3.3 2.7-5.5 6-5.5s6 2.2 6 5.5" stroke-linecap="round"/><path d="M16 11a3 3 0 1 0 0-6M18 20c0-2.6-1-4.3-2.5-5.2" stroke-linecap="round"/></svg>',
    spark: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M18.4 5.6l-2.8 2.8M8.4 15.6l-2.8 2.8" stroke-linecap="round"/></svg>',
    chat: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M21 12a8 8 0 0 1-8 8H4l2-3a8 8 0 1 1 15-5Z" stroke-linejoin="round"/></svg>',
    send: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9"><path d="M4 12 20 4l-8 16-2-6-6-2Z" stroke-linejoin="round"/></svg>',
    pin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M12 21s7-6 7-11a7 7 0 1 0-14 0c0 5 7 11 7 11Z" stroke-linejoin="round"/><circle cx="12" cy="10" r="2.5"/></svg>',
    clock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2" stroke-linecap="round"/></svg>',
    phone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M6 3h3l2 5-2.5 1.5a12 12 0 0 0 6 6L16 13l5 2v3a2 2 0 0 1-2.2 2A17 17 0 0 1 4 5.2 2 2 0 0 1 6 3Z" stroke-linejoin="round"/></svg>',
    mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><rect x="3" y="5" width="18" height="14" rx="2.5"/><path d="m4 7 8 6 8-6" stroke-linecap="round"/></svg>',
    drop: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M12 3s6 6.6 6 10.5A6 6 0 0 1 6 13.5C6 9.6 12 3 12 3Z" stroke-linejoin="round"/></svg>',
    sun: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M19.1 4.9l-1.4 1.4M6.3 17.7l-1.4 1.4" stroke-linecap="round"/></svg>',
    therm: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M10 14V5a2 2 0 1 1 4 0v9a4 4 0 1 1-4 0Z"/></svg>',
    seed: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M12 21v-7M12 14c0-4 3-7 8-7 0 4-3 7-8 7ZM12 14c0-3-2.5-5.5-6-5.5 0 3 2.5 5.5 6 5.5Z" stroke-linejoin="round"/></svg>',
    box: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M3 8 12 3l9 5v8l-9 5-9-5V8Z" stroke-linejoin="round"/><path d="m3 8 9 5 9-5M12 13v8" stroke-linejoin="round"/></svg>'
  };

  /* ---------------------------------------------------------- utilities */
  function toast(msg) {
    const box = document.getElementById('toasts');
    const d = document.createElement('div');
    d.className = 'toast';
    d.innerHTML = ICON.check + '<span>' + esc(msg) + '</span>';
    box.appendChild(d);
    setTimeout(() => { d.style.opacity = '0'; d.style.transform = 'translateY(8px)'; }, 2400);
    setTimeout(() => d.remove(), 2800);
  }

  function stars(r) {
    const full = Math.round(r);
    let s = '';
    for (let i = 1; i <= 5; i++) s += i <= full ? '★' : '☆';
    return s;
  }

  function wishlist() { try { return JSON.parse(localStorage.getItem('gh.wish') || '[]'); } catch (e) { return []; } }
  function toggleWish(id) {
    const w = wishlist();
    const i = w.indexOf(id);
    if (i === -1) w.push(id); else w.splice(i, 1);
    try { localStorage.setItem('gh.wish', JSON.stringify(w)); } catch (e) {}
    return i === -1;
  }

  /**
   * Image source for a product. Prefers a real photograph and falls back to
   * the generated illustration, including when the photo 404s at runtime.
   */
  function pimg(p, cls, w, h, lazy) {
    const alt = esc(DATA.name(p.id, I.lang));
    const fallback = esc(p.img);
    const src = esc(p.photo || p.img);
    const onerr = p.photo
      ? ' onerror="this.onerror=null;this.src=&quot;' + fallback + '&quot;"'
      : '';
    return '<img' + (cls ? ' class="' + cls + '"' : '') + ' src="' + src + '" alt="' + alt + '"' +
      (w ? ' width="' + w + '" height="' + h + '"' : '') +
      (lazy ? ' loading="lazy"' : '') + onerr + '>';
  }

  /* ------------------------------------------------------- product card */
  let cardSeq = 0;
  function productCard(p, i) {
    const lang = I.lang;
    const idx = (typeof i === 'number') ? i : (cardSeq++);
    const out = p.stock <= 0;
    const wished = wishlist().indexOf(p.id) !== -1;
    return '' +
    '<article class="card' + (out ? ' out' : '') + '" data-id="' + p.id + '" style="--i:' + idx + '">' +
      '<a class="card-media" href="#/product/' + p.id + '">' +
        (p.badge ? '<span class="badge ' + p.badge + '">' + esc(badgeLabel(p.badge)) + '</span>' : '') +
        pimg(p, null, 560, 560, true) +
      '</a>' +
      '<button class="wish' + (wished ? ' on' : '') + '" data-wish="' + p.id + '" aria-label="Save">' + ICON.heart + '</button>' +
      '<div class="card-body">' +
        '<span class="card-cat">' + esc(t('cat.' + p.cat)) + '</span>' +
        '<h3 class="card-name"><a href="#/product/' + p.id + '">' + esc(DATA.name(p.id, lang)) + '</a></h3>' +
        '<div class="stars"><span class="s">' + stars(p.rating) + '</span><span>' + p.rating.toFixed(1) + ' · ' + t('p.reviews', { n: p.reviews }) + '</span></div>' +
        '<div class="tags">' +
          '<span class="tag">' + esc(t('care.' + p.diff)) + '</span>' +
          '<span class="tag">' + esc(t('light.' + p.light)) + '</span>' +
          (p.pet ? '<span class="tag pet">' + esc(t('p.petsafe')) + '</span>' : '') +
        '</div>' +
        '<div class="card-foot">' +
          '<span class="price">' + money(p.price) + (p.old ? '<s>' + money(p.old) + '</s>' : '') + '</span>' +
          (out
            ? '<span class="tag">' + esc(t('p.out')) + '</span>'
            : '<button class="add-btn" data-add="' + p.id + '" aria-label="' + esc(t('p.add')) + '">' + ICON.plus + '</button>') +
        '</div>' +
      '</div>' +
    '</article>';
  }

  function badgeLabel(b) {
    const m = {
      bestseller: { en: 'Bestseller', uz: 'Eng ommabop', ru: 'Хит', zh: '热销', ar: 'الأكثر مبيعًا' },
      sale:       { en: 'Sale',       uz: 'Chegirma',    ru: 'Скидка', zh: '特价', ar: 'تخفيض' },
      new:        { en: 'New',        uz: 'Yangi',       ru: 'Новинка', zh: '新品', ar: 'جديد' },
      rare:       { en: 'Rare',       uz: 'Noyob',       ru: 'Редкое',  zh: '稀有', ar: 'نادر' }
    };
    return (m[b] && (m[b][I.lang] || m[b].en)) || b;
  }

  /* ------------------------------------------------------------- views */
  const V = {};

  V.home = function () {
    const feat = DATA.PRODUCTS.filter(p => p.feat).slice(0, 8);
    const quarters = [
      { id: 'indoor',    img: 'monstera-deliciosa' },
      { id: 'outdoor',   img: 'english-lavender' },
      { id: 'succulent', img: 'golden-barrel' },
      { id: 'flowering', img: 'phalaenopsis-orchid' }
    ];
    const count = c => DATA.PRODUCTS.filter(p => p.cat === c).length;

    return '' +
    '<section class="garden"><div class="wrap">' +
      '<div class="inscription">' +
        '<h1><span class="ln">' + esc(t('hero.title1')) + '</span>' +
          '<span class="ln">' + esc(t('hero.title2')) + '</span>' +
          '<span class="ln"><em>' + esc(t('hero.title3')) + '</em></span></h1>' +
        '<p>' + esc(t('hero.sub')) + '</p>' +
      '</div>' +

      '<div class="garden-frame"><div class="garden-plan">' +
        quarters.map(function (q, i) {
          return '<a class="quarter q' + (i + 1) + '" href="#/shop?cat=' + q.id + '">' +
            pimgSrc(q.img) +
            '<span class="q-count">' + count(q.id) + ' ' + esc(t('shop.sub')) + '</span>' +
            '<span class="q-name">' + esc(t('cat.' + q.id)) + '</span>' +
            '<span class="q-enter">' + esc(t('p.view')) + ICON.arrow + '</span>' +
          '</a>';
        }).join('') +
        '<div class="channel channel-v"></div>' +
        '<div class="channel channel-h">' +
          '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5" stroke-linecap="round"/></svg>' +
          '<input class="garden-search" id="gardenSearch" type="search" autocomplete="off" ' +
            'placeholder="' + esc(t('shop.search.ph')) + '" aria-label="' + esc(t('nav.search')) + '">' +
        '</div>' +
      '</div></div>' +

      '<div class="garden-actions">' +
        '<a class="btn btn-primary btn-lg" href="#/shop">' + esc(t('hero.cta1')) + ICON.arrow + '</a>' +
        '<a class="btn btn-ghost btn-lg" href="#/care">' + ICON.chat + esc(t('hero.cta2')) + '</a>' +
        '<span class="garden-note">' + esc(t('hero.note')) + '</span>' +
      '</div>' +

      '<div class="feature-strip">' +
        [['leaf', 'f1'], ['truck', 'f2'], ['shield', 'f3'], ['globe', 'f4']].map(function (f) {
          return '<div class="feat"><span class="fi">' + ICON[f[0]] + '</span><div>' +
                 '<b>' + esc(t('hero.' + f[1])) + '</b><span>' + esc(t('hero.' + f[1] + 's')) + '</span></div></div>';
        }).join('') +
      '</div>' +
    '</div></section>' +

    '<section class="section"><div class="wrap">' +
      '<div class="section-head center">' +
        '<h2>' + esc(t('coll.title')) + '</h2>' +
        '<p class="lead">' + esc(t('coll.sub')) + '</p>' +
      '</div>' +
      '<div class="prod-grid">' + feat.map(productCard).join('') + '</div>' +
      '<div class="center" style="margin-top:34px"><a class="btn btn-ghost" href="#/shop">' + esc(t('feat.all')) + ICON.arrow + '</a></div>' +
    '</div></section>' +

    '<section class="section" style="padding-top:0"><div class="wrap">' +
      '<div class="about-grid">' +
        '<div class="about-art">' +
          '<img src="assets/img/ui/about.svg" alt="" loading="lazy" width="820" height="840">' +
          '<div class="about-quote">' + esc(t('about.quote')) + '</div>' +
        '</div>' +
        '<div>' +
          '<h2 style="margin:0 0 16px">' + esc(t('about.title1')) + '<br>' + esc(t('about.title2')) + '</h2>' +
          '<p class="lead">' + esc(t('about.body')) + '</p>' +
          '<div class="about-row" style="margin-top:26px">' +
            '<a class="btn btn-primary" href="#/about">' + esc(t('about.cta')) + ICON.arrow + '</a>' +
            '<div class="stats">' +
              '<div class="stat"><span class="si">' + ICON.seed + '</span><div><b>5+</b><span>' + esc(t('about.s1')) + '</span></div></div>' +
              '<div class="stat"><span class="si">' + ICON.users + '</span><div><b>10K+</b><span>' + esc(t('about.s2')) + '</span></div></div>' +
              '<div class="stat"><span class="si">' + ICON.leaf + '</span><div><b>1000+</b><span>' + esc(t('about.s3')) + '</span></div></div>' +
            '</div>' +
          '</div>' +
        '</div>' +
      '</div>' +
    '</div></section>' +

    '<section class="section" style="padding-top:0"><div class="wrap">' +
      '<div class="section-head center">' +
        '<h2>' + esc(t('why.title')) + '</h2>' +
      '</div>' +
      '<div class="why-grid">' +
        [['leaf', '1'], ['users', '2'], ['truck', '3'], ['heart', '4']].map(function (w) {
          return '<div class="why"><span class="wi">' + ICON[w[0]] + '</span>' +
                 '<b>' + esc(t('why.' + w[1])) + '</b><span>' + esc(t('why.' + w[1] + 's')) + '</span></div>';
        }).join('') +
      '</div>' +
    '</div></section>' +

    '<section style="padding-bottom:70px"><div class="wrap">' +
      '<div class="band">' +
        '<div><h2>' + esc(t('band.title')) + '</h2><p>' + esc(t('band.sub')) + '</p></div>' +
        '<a class="btn btn-light btn-lg" href="#/shop">' + esc(t('band.cta')) + ICON.arrow + '</a>' +
      '</div>' +
    '</div></section>';
  };

  /** Scenery plant for the garden quarters: transparent ground, so it sits
      on the tile rather than in a pale box. */
  function pimgSrc(slug) {
    return '<img src="assets/img/world/q-' + slug + '.svg" alt="" loading="lazy" width="560" height="560">';
  }

  /* ------------------------------------------------------------- shop */
  let shopState = { cat: 'all', max: 100, light: [], diff: [], pet: false, sort: 'featured', q: '' };

  V.shop = function (params) {
    if (params.cat) shopState.cat = params.cat;
    if (params.q !== undefined) shopState.q = params.q;
    return '' +
    '<div class="wrap page-head">' +
      '<div class="crumbs"><a href="#/">' + esc(t('nav.home')) + '</a><span>/</span>' + esc(t('shop.title')) + '</div>' +
      '<h1>' + esc(t('shop.title')) + '</h1>' +
    '</div>' +
    '<div class="wrap" style="padding-bottom:70px">' +
      '<div class="shop-layout">' +
        '<aside class="filters" id="filters">' + filtersHtml() + '</aside>' +
        '<div>' +
          '<div class="shop-bar">' +
            '<button class="chip filter-toggle" id="filterToggle">' + esc(t('shop.filters')) + '</button>' +
            '<span class="count" id="shopCount"></span>' +
            '<select class="select" id="sortSel" aria-label="' + esc(t('shop.sort')) + '">' +
              ['featured', 'priceAsc', 'priceDesc', 'rating', 'name'].map(function (s) {
                return '<option value="' + s + '"' + (shopState.sort === s ? ' selected' : '') + '>' + esc(t('shop.sort.' + s)) + '</option>';
              }).join('') +
            '</select>' +
          '</div>' +
          '<div class="prod-grid" id="shopGrid"></div>' +
        '</div>' +
      '</div>' +
    '</div>';
  };

  function filtersHtml() {
    const count = c => DATA.PRODUCTS.filter(p => c === 'all' || p.cat === c).length;
    return '' +
      '<div class="filter-grp"><h4>' + esc(t('shop.category')) + '</h4>' +
        ['all'].concat(DATA.CATEGORIES).map(function (c) {
          const fid = 'f-cat-' + c;
          return '<div class="opt"><input type="radio" id="' + fid + '" name="cat" value="' + c + '"' +
            (shopState.cat === c ? ' checked' : '') + '><label for="' + fid + '">' + esc(t('cat.' + c)) + '</label>' +
            '<span class="n">' + count(c) + '</span></div>';
        }).join('') +
      '</div>' +
      '<div class="filter-grp"><h4>' + esc(t('shop.price')) + '</h4>' +
        '<input class="range" type="range" id="priceRange" min="10" max="100" step="5" value="' + shopState.max + '">' +
        '<div class="range-val"><span>' + money(0) + '</span><span id="priceOut">' + money(shopState.max) + '</span></div>' +
      '</div>' +
      '<div class="filter-grp"><h4>' + esc(t('shop.light')) + '</h4>' +
        ['low', 'medium', 'bright', 'direct'].map(function (l) {
          const fid = 'f-light-' + l;
          return '<div class="opt"><input type="checkbox" id="' + fid + '" name="light" value="' + l + '"' +
            (shopState.light.indexOf(l) !== -1 ? ' checked' : '') + '><label for="' + fid + '">' + esc(t('light.' + l)) + '</label></div>';
        }).join('') +
      '</div>' +
      '<div class="filter-grp"><h4>' + esc(t('shop.care')) + '</h4>' +
        ['easy', 'medium', 'hard'].map(function (d) {
          const fid = 'f-diff-' + d;
          return '<div class="opt"><input type="checkbox" id="' + fid + '" name="diff" value="' + d + '"' +
            (shopState.diff.indexOf(d) !== -1 ? ' checked' : '') + '><label for="' + fid + '">' + esc(t('care.' + d)) + '</label></div>';
        }).join('') +
      '</div>' +
      '<div class="filter-grp">' +
        '<div class="opt"><input type="checkbox" id="petOnly"' + (shopState.pet ? ' checked' : '') + '><label for="petOnly">' + esc(t('shop.petsafe')) + '</label></div>' +
        '<button class="btn btn-ghost btn-sm btn-block" id="clearFilters" style="margin-top:14px">' + esc(t('shop.clear')) + '</button>' +
      '</div>';
  }

  function applyShop() {
    const q = shopState.q.trim().toLowerCase();
    let list = DATA.PRODUCTS.filter(function (p) {
      if (shopState.cat !== 'all' && p.cat !== shopState.cat) return false;
      if (p.price > shopState.max) return false;
      if (shopState.light.length && shopState.light.indexOf(p.light) === -1) return false;
      if (shopState.diff.length && shopState.diff.indexOf(p.diff) === -1) return false;
      if (shopState.pet && !p.pet) return false;
      if (q) {
        const hay = ['en', 'uz', 'ru', 'zh', 'ar'].map(l => DATA.name(p.id, l)).join(' ').toLowerCase() + ' ' + p.id;
        if (hay.indexOf(q) === -1) return false;
      }
      return true;
    });

    const s = shopState.sort;
    if (s === 'priceAsc') list.sort((a, b) => a.price - b.price);
    else if (s === 'priceDesc') list.sort((a, b) => b.price - a.price);
    else if (s === 'rating') list.sort((a, b) => b.rating - a.rating);
    else if (s === 'name') list.sort((a, b) => DATA.name(a.id, I.lang).localeCompare(DATA.name(b.id, I.lang)));
    else list.sort((a, b) => (b.feat ? 1 : 0) - (a.feat ? 1 : 0) || b.rating - a.rating);

    const grid = document.getElementById('shopGrid');
    const cnt = document.getElementById('shopCount');
    if (!grid) return;
    cardSeq = 0;
    grid.innerHTML = list.length
      ? list.map(productCard).join('')
      : '<div class="empty-state" style="grid-column:1/-1">' + ICON.leaf + '<p>' + esc(t('shop.none')) + '</p></div>';
    if (cnt) cnt.textContent = list.length + ' ' + t('shop.sub');
  }

  /* ---------------------------------------------------------- product */
  V.product = function (params) {
    const p = DATA.get(params.id);
    if (!p) return notFound();
    const lang = I.lang;
    const sp = window.KB.SPECIES[p.id];
    const L = window.KB.LABELS[lang] || window.KB.LABELS.en;
    const related = DATA.PRODUCTS.filter(x => x.cat === p.cat && x.id !== p.id).slice(0, 4);
    const stockClass = p.stock <= 0 ? 'no' : p.stock < 10 ? 'low' : '';
    const stockText = p.stock <= 0 ? t('p.out') : p.stock < 10 ? t('p.left', { n: p.stock }) : t('p.in');

    return '' +
    '<div class="wrap page-head">' +
      '<div class="crumbs"><a href="#/">' + esc(t('nav.home')) + '</a><span>/</span>' +
        '<a href="#/shop">' + esc(t('nav.shop')) + '</a><span>/</span>' +
        '<a href="#/shop?cat=' + p.cat + '">' + esc(t('cat.' + p.cat)) + '</a></div>' +
    '</div>' +
    '<div class="wrap" style="padding-bottom:70px">' +
      '<div class="pd">' +
        '<div class="pd-art">' + pimg(p, null, 560, 560, false) + '</div>' +
        '<div>' +
          '<span class="card-cat">' + esc(t('cat.' + p.cat)) + '</span>' +
          '<h1>' + esc(DATA.name(p.id, lang)) + '</h1>' +
          '<div class="stars" style="margin-top:8px"><span class="s">' + stars(p.rating) + '</span>' +
            '<span>' + p.rating.toFixed(1) + ' · ' + t('p.reviews', { n: p.reviews }) + '</span></div>' +
          '<p class="lead" style="margin-top:14px">' + esc(DATA.blurb(p.id, lang)) + '</p>' +
          '<div class="pd-price"><span class="price">' + money(p.price) + '</span>' +
            (p.old ? '<s style="color:var(--ink-3)">' + money(p.old) + '</s>' : '') + '</div>' +
          '<div class="stock-line"><span class="dot ' + stockClass + '"></span>' + esc(stockText) + '</div>' +

          '<dl class="pd-meta">' +
            '<div><dt>' + esc(t('p.height')) + '</dt><dd>' + esc(p.height) + '</dd></div>' +
            '<div><dt>' + esc(t('p.pot')) + '</dt><dd>' + esc(p.pot) + '</dd></div>' +
            '<div><dt>' + esc(t('p.difficulty')) + '</dt><dd>' + esc(t('care.' + p.diff)) + '</dd></div>' +
            '<div><dt>' + esc(t('shop.light')) + '</dt><dd>' + esc(t('light.' + p.light)) + '</dd></div>' +
          '</dl>' +

          '<div class="pd-buy">' +
            '<div class="qty"><button data-q="-1" aria-label="-">−</button>' +
              '<input id="pdQty" type="text" inputmode="numeric" value="1" aria-label="' + esc(t('p.qty')) + '">' +
              '<button data-q="1" aria-label="+">+</button></div>' +
            '<button class="btn btn-primary btn-lg" id="pdAdd"' + (p.stock <= 0 ? ' disabled' : '') + '>' +
              esc(p.stock <= 0 ? t('p.out') : t('p.add')) + '</button>' +
            '<a class="btn btn-ghost" href="#/care?q=' + encodeURIComponent(DATA.name(p.id, lang)) + '">' + ICON.chat + esc(t('p.ask')) + '</a>' +
          '</div>' +

          '<div class="acc">' +
            accItem(t('p.careguide'), careGuideHtml(p, sp, L), true) +
            accItem(t('p.desc'), '<p>' + esc(DATA.blurb(p.id, lang)) + '</p><p>' +
              esc(L.toxic[sp.toxic]) + '</p>', false) +
            accItem(t('p.delivery'), '<p>' + esc(t('p.deliverytext')) + '</p>', false) +
          '</div>' +
        '</div>' +
      '</div>' +

      (related.length ? '<section class="section" style="padding-bottom:0">' +
        '<h2 style="margin-bottom:24px">' + esc(t('p.related')) + '</h2>' +
        '<div class="prod-grid">' + related.map(productCard).join('') + '</div></section>' : '') +
    '</div>';
  };

  function accItem(title, body, open) {
    return '<div class="acc-item' + (open ? ' open' : '') + '">' +
      '<button class="acc-head">' + esc(title) + ICON.plus + '</button>' +
      '<div class="acc-panel">' + body + '</div></div>';
  }

  function careGuideHtml(p, sp, L) {
    const C = [
      ['drop', t('cart.item') === '' ? '' : (window.AI ? '' : ''), ''],
    ];
    const rows = [
      [ICON.drop,  t('shop.light') === '' ? '' : null],
    ];
    const items = [
      { i: ICON.drop,  k: labelFor('water'), v: waterSentence(sp) },
      { i: ICON.sun,   k: labelFor('light'), v: L.light[sp.light] },
      { i: ICON.therm, k: labelFor('temp'),  v: tempSentence(sp) },
      { i: ICON.drop,  k: labelFor('hum'),   v: t('hum.' + sp.hum) },
      { i: ICON.seed,  k: labelFor('soil'),  v: L.soil[sp.soil] },
      { i: ICON.spark, k: labelFor('fert'),  v: L.fert[sp.fert] },
      { i: ICON.leaf,  k: labelFor('prop'),  v: L.prop[sp.prop] },
      { i: ICON.shield, k: labelFor('tox'),  v: L.toxic[sp.toxic] }
    ];
    return '<ul class="care-list">' + items.map(function (it) {
      return '<li><span class="ci">' + it.i + '</span><span><b>' + esc(it.k) + ':</b> ' + esc(it.v) + '</span></li>';
    }).join('') + '</ul>';
  }

  /* care-card wording shared with the AI assistant */
  function cardStrings() {
    const C = {
      en: { water:'Water', light:'Light', temp:'Temperature', hum:'Humidity', soil:'Soil', fert:'Feeding', prop:'Propagation', tox:'Pets & children',
            w:'about every {s} days in spring and summer, every {w} days in winter', tp:'{a}–{b}°C, never below {m}°C' },
      uz: { water:'Sug‘orish', light:'Yorug‘lik', temp:'Harorat', hum:'Namlik', soil:'Tuproq', fert:'O‘g‘itlash', prop:'Ko‘paytirish', tox:'Uy hayvonlari va bolalar',
            w:'bahor va yozda taxminan har {s} kunda, qishda har {w} kunda', tp:'{a}–{b}°C, hech qachon {m}°C dan past emas' },
      ru: { water:'Полив', light:'Свет', temp:'Температура', hum:'Влажность', soil:'Грунт', fert:'Подкормка', prop:'Размножение', tox:'Питомцы и дети',
            w:'примерно каждые {s} дней весной и летом, каждые {w} дней зимой', tp:'{a}–{b}°C, не ниже {m}°C' },
      zh: { water:'浇水', light:'光照', temp:'温度', hum:'湿度', soil:'基质', fert:'施肥', prop:'繁殖', tox:'宠物与儿童',
            w:'春夏约每 {s} 天一次，冬季每 {w} 天一次', tp:'{a}–{b}°C，不要低于 {m}°C' },
      ar: { water:'الري', light:'الإضاءة', temp:'الحرارة', hum:'الرطوبة', soil:'التربة', fert:'التسميد', prop:'الإكثار', tox:'الحيوانات الأليفة والأطفال',
            w:'كل {s} أيام تقريبًا في الربيع والصيف، وكل {w} يومًا في الشتاء', tp:'{a}–{b}°C، ولا تقل عن {m}°C' }
    };
    return C[I.lang] || C.en;
  }
  function labelFor(k) { return cardStrings()[k]; }
  function waterSentence(sp) { return cardStrings().w.replace('{s}', sp.w[0]).replace('{w}', sp.w[1]); }
  function tempSentence(sp) { return cardStrings().tp.replace('{a}', sp.temp[0]).replace('{b}', sp.temp[1]).replace('{m}', sp.tempMin); }

  /* ------------------------------------------------------------- cart */
  V.cart = function () {
    const cart = STORE.getCart();
    if (!cart.length) {
      return '<div class="wrap page-head"><h1>' + esc(t('cart.title')) + '</h1></div>' +
        '<div class="wrap" style="padding-bottom:80px"><div class="empty-state">' + ICON.box +
        '<p>' + esc(t('cart.empty')) + '</p>' +
        '<a class="btn btn-primary" href="#/shop" style="margin-top:14px">' + esc(t('cart.emptycta')) + ICON.arrow + '</a></div></div>';
    }
    return '' +
    '<div class="wrap page-head">' +
      '<div class="crumbs"><a href="#/">' + esc(t('nav.home')) + '</a><span>/</span>' + esc(t('cart.title')) + '</div>' +
      '<h1>' + esc(t('cart.title')) + '</h1>' +
    '</div>' +
    '<div class="wrap" style="padding-bottom:80px"><div class="cart-layout">' +
      '<div class="cart-list" id="cartList">' + cartRows() + '</div>' +
      '<div class="summary" id="cartSummary">' + summaryHtml(false) + '</div>' +
    '</div></div>';
  };

  function cartRows() {
    const lang = I.lang;
    return STORE.getCart().map(function (l) {
      const p = DATA.get(l.id);
      return '<div class="cart-row" data-id="' + p.id + '">' +
        '<a href="#/product/' + p.id + '">' + pimg(p, null, 92, 92, true) + '</a>' +
        '<div><a href="#/product/' + p.id + '" class="nm">' + esc(DATA.name(p.id, lang)) + '</a>' +
          '<div class="meta">' + esc(t('cat.' + p.cat)) + ' · ' + esc(p.pot) + '</div>' +
          '<button class="rm" data-rm="' + p.id + '">' + esc(t('cart.remove')) + '</button></div>' +
        '<div class="qty-sm"><button data-dec="' + p.id + '">−</button>' +
          '<input type="text" inputmode="numeric" value="' + l.qty + '" data-qty="' + p.id + '" aria-label="' + esc(t('cart.qty')) + '">' +
          '<button data-inc="' + p.id + '">+</button></div>' +
        '<div class="lt">' + money(p.price * l.qty) + '</div>' +
      '</div>';
    }).join('');
  }

  function summaryHtml(inCheckout, shipMethod) {
    const tt = STORE.totals(shipMethod || 'std');
    let h = '<h3>' + esc(t('co.summary')) + '</h3>';
    if (!inCheckout) {
      h += '<div class="promo-row">' +
        '<input id="promoInput" placeholder="' + esc(t('cart.promo')) + '" value="' + esc(tt.promo ? tt.promo.code : '') + '">' +
        '<button class="btn btn-ghost btn-sm" id="promoBtn">' + esc(t('cart.apply')) + '</button></div>' +
        '<div id="promoMsg"></div>';
      if (tt.freeShippingGap > 0) {
        h += '<div class="note info">' + esc(t('cart.freeHint', { n: money(tt.freeShippingGap) })) + '</div>';
      }
    }
    h += '<div class="sum-row"><span>' + esc(t('cart.subtotal')) + '</span><span>' + money(tt.subtotal) + '</span></div>';
    if (tt.discount > 0) {
      h += '<div class="sum-row"><span>' + esc(t('cart.discount')) + (tt.promo ? ' (' + esc(tt.promo.code) + ')' : '') +
           '</span><span class="disc">−' + money(tt.discount) + '</span></div>';
    }
    h += '<div class="sum-row"><span>' + esc(t('cart.shipping')) + '</span><span' + (tt.shipping === 0 ? ' class="free"' : '') + '>' +
         (tt.shipping === 0 ? esc(t('cart.free')) : money(tt.shipping)) + '</span></div>';
    h += '<div class="sum-row"><span>' + esc(t('cart.tax')) + '</span><span>' + money(tt.tax) + '</span></div>';
    h += '<div class="sum-row total"><span>' + esc(t('cart.grand')) + '</span><span>' + money(tt.total) + '</span></div>';
    if (!inCheckout) {
      h += '<a class="btn btn-primary btn-block btn-lg" href="#/checkout" style="margin-top:16px">' + esc(t('cart.checkout')) + ICON.arrow + '</a>';
      h += '<a class="btn btn-ghost btn-block btn-sm" href="#/shop" style="margin-top:10px">' + esc(t('cart.continue')) + '</a>';
    }
    return h;
  }

  /* --------------------------------------------------------- checkout */
  let CO = { step: 1, data: {}, ship: 'std' };

  V.checkout = function () {
    if (!STORE.getCart().length) { location.hash = '#/cart'; return ''; }
    return '' +
    '<div class="wrap page-head"><h1>' + esc(t('co.title')) + '</h1></div>' +
    '<div class="wrap" style="padding-bottom:80px">' +
      '<div class="steps" id="coSteps"></div>' +
      '<div class="cart-layout">' +
        '<div id="coBody"></div>' +
        '<div class="summary" id="coSummary"></div>' +
      '</div>' +
    '</div>';
  };

  function renderCheckout() {
    const stepsEl = document.getElementById('coSteps');
    const body = document.getElementById('coBody');
    const sum = document.getElementById('coSummary');
    if (!stepsEl) return;

    const labels = [t('co.step1'), t('co.step2'), t('co.step3'), t('co.step4')];
    stepsEl.innerHTML = labels.map(function (l, i) {
      const n = i + 1;
      const cls = CO.step === n ? 'on' : (CO.step > n ? 'done' : '');
      return '<div class="step ' + cls + '"><span class="num">' + (CO.step > n ? '✓' : n) + '</span>' + esc(l) + '</div>' +
        (i < 3 ? '<span class="step-line"></span>' : '');
    }).join('');

    const d = CO.data;
    if (CO.step === 1) {
      body.innerHTML = '<div class="form-card"><div class="form-grid">' +
        fld('name', t('co.name'), 'text', d.name) +
        fld('email', t('co.email'), 'email', d.email) +
        fld('phone', t('co.phone'), 'tel', d.phone) +
        fldSelect('country', t('co.country'), d.country) +
        fld('city', t('co.city'), 'text', d.city) +
        fld('zip', t('co.zip'), 'text', d.zip) +
        fld('address', t('co.address'), 'text', d.address, true) +
        '<div class="field wide"><label for="f-notes">' + esc(t('co.notes')) + '</label>' +
          '<textarea id="f-notes">' + esc(d.notes || '') + '</textarea></div>' +
        '</div>' +
        '<div class="form-actions"><a class="btn btn-ghost" href="#/cart">' + esc(t('co.back')) + '</a>' +
        '<button class="btn btn-primary" id="coNext">' + esc(t('co.next')) + ICON.arrow + '</button></div></div>';
    } else if (CO.step === 2) {
      body.innerHTML = '<div class="form-card"><div class="ship-opts">' +
        ['std', 'exp', 'next'].map(function (m) {
          const s = STORE.SHIPPING[m];
          return '<div class="ship-opt' + (CO.ship === m ? ' on' : '') + '">' +
            '<input type="radio" id="ship-' + m + '" name="ship" value="' + m + '"' + (CO.ship === m ? ' checked' : '') + '>' +
            '<label for="ship-' + m + '"><b>' + esc(t('co.ship.' + m)) + '</b><span>' + esc(t('co.ship.' + m + 's')) + '</span></label>' +
            '<span class="c">' + money(s.cost) + '</span></div>';
        }).join('') + '</div>' +
        '<div class="form-actions"><button class="btn btn-ghost" id="coBack">' + esc(t('co.back')) + '</button>' +
        '<button class="btn btn-primary" id="coNext">' + esc(t('co.next')) + ICON.arrow + '</button></div></div>';
    } else if (CO.step === 3) {
      body.innerHTML = '<div class="form-card">' +
        '<div class="note info" style="margin-bottom:16px"><b>' + esc(t('co.demoTitle')) + ' — </b>' + esc(t('co.demoBody')) + '</div>' +
        '<div class="pay-opts">' +
          payOpt('card', t('co.pay.card'), t('co.pay.cards'), true) +
          payOpt('wallet', t('co.pay.wallet'), t('co.pay.wallets'), false) +
          payOpt('cod', t('co.pay.cod'), t('co.pay.cods'), false) +
        '</div>' +
        '<div id="cardFields" style="margin-top:18px"></div>' +
        '<div class="checkbox"><input type="checkbox" id="agree"' + (d.agree ? ' checked' : '') + '>' +
          '<label for="agree">' + esc(t('co.agree')) + '</label></div>' +
        '<div class="field"><span class="msg" id="agreeMsg"></span></div>' +
        '<div class="form-actions"><button class="btn btn-ghost" id="coBack">' + esc(t('co.back')) + '</button>' +
        '<button class="btn btn-primary" id="coNext">' + esc(t('co.next')) + ICON.arrow + '</button></div></div>';
      renderCardFields();
    } else {
      const tt = STORE.totals(CO.ship);
      body.innerHTML = '<div class="form-card">' +
        '<h3 style="margin-bottom:16px">' + esc(t('co.review')) + '</h3>' +
        reviewBlock(t('co.step1'), 1,
          esc(d.name) + '<br>' + esc(d.address) + ', ' + esc(d.city) + ' ' + esc(d.zip) + '<br>' +
          esc(d.country) + '<br>' + esc(d.email) + ' · ' + esc(d.phone)) +
        reviewBlock(t('co.step2'), 2, esc(t('co.ship.' + CO.ship)) + ' — ' + esc(t('co.ship.' + CO.ship + 's'))) +
        reviewBlock(t('co.step3'), 3, esc(t('co.pay.' + (d.payment || 'card'))) +
          (d.cardLast4 ? ' •••• ' + esc(d.cardLast4) : '')) +
        '<div class="review-block"><h4>' + esc(t('tr.contents')) + '</h4>' +
          STORE.getCart().map(function (l) {
            const p = DATA.get(l.id);
            return '<div class="mini-item">' + pimg(p, null, 50, 50, true) + '<div>' +
              '<div class="nm">' + esc(DATA.name(p.id, I.lang)) + '</div>' +
              '<div class="q">× ' + l.qty + '</div></div>' +
              '<div class="p">' + money(p.price * l.qty) + '</div></div>';
          }).join('') + '</div>' +
        '<div id="payMsg"></div>' +
        '<div class="form-actions"><button class="btn btn-ghost" id="coBack">' + esc(t('co.back')) + '</button>' +
        '<button class="btn btn-primary btn-lg" id="coPlace">' + esc(t('co.place')) + ' · ' + money(tt.total) + '</button></div>' +
        '<p class="tiny" style="margin-top:14px">' + ICON.shield.replace('<svg', '<svg style="width:14px;height:14px;display:inline;vertical-align:-2px"') + ' ' + esc(t('co.secure')) + '</p>' +
        '</div>';
    }

    sum.innerHTML = summaryHtml(true, CO.ship);
    wireCheckout();
  }

  function fld(id, label, type, val, wide) {
    return '<div class="field' + (wide ? ' wide' : '') + '" data-f="' + id + '">' +
      '<label for="f-' + id + '">' + esc(label) + '</label>' +
      '<input id="f-' + id + '" type="' + type + '" value="' + esc(val || '') + '" autocomplete="' + autoc(id) + '">' +
      '<span class="msg"></span></div>';
  }
  function autoc(id) {
    return { name: 'name', email: 'email', phone: 'tel', city: 'address-level2',
             zip: 'postal-code', address: 'street-address', country: 'country-name' }[id] || 'on';
  }
  function fldSelect(id, label, val) {
    const list = ['Uzbekistan', 'United Kingdom', 'United States', 'Russia', 'China',
                  'United Arab Emirates', 'Saudi Arabia', 'Kazakhstan', 'Turkey', 'Germany', 'France', 'Other'];
    return '<div class="field" data-f="' + id + '"><label for="f-' + id + '">' + esc(label) + '</label>' +
      '<select id="f-' + id + '">' + list.map(c =>
        '<option' + (val === c ? ' selected' : '') + '>' + esc(c) + '</option>').join('') +
      '</select><span class="msg"></span></div>';
  }
  function payOpt(id, label, sub) {
    const on = (CO.data.payment || 'card') === id;
    return '<div class="ship-opt' + (on ? ' on' : '') + '">' +
      '<input type="radio" id="pay-' + id + '" name="pay" value="' + id + '"' + (on ? ' checked' : '') + '>' +
      '<label for="pay-' + id + '"><b>' + esc(label) + '</b><span>' + esc(sub) + '</span></label>' +
      (id === 'card' ? '<span class="card-brands"><span>VISA</span><span>MC</span><span>UNION</span></span>' : '') +
      '</div>';
  }
  function reviewBlock(title, step, html) {
    return '<div class="review-block"><h4>' + esc(title) +
      '<button data-goto="' + step + '">' + esc(t('co.editinfo')) + '</button></h4><p>' + html + '</p></div>';
  }
  function renderCardFields() {
    const box = document.getElementById('cardFields');
    if (!box) return;
    const pay = CO.data.payment || 'card';
    box.innerHTML = pay !== 'card' ? '' : '<div class="form-grid">' +
      '<div class="field wide" data-f="cardnum"><label for="f-cardnum">' + esc(t('co.card.num')) + '</label>' +
        '<input id="f-cardnum" inputmode="numeric" placeholder="4242 4242 4242 4242" value="' + esc(CO.data.cardnum || '') + '" autocomplete="cc-number"><span class="msg"></span></div>' +
      '<div class="field wide" data-f="cardname"><label for="f-cardname">' + esc(t('co.card.name')) + '</label>' +
        '<input id="f-cardname" value="' + esc(CO.data.cardname || '') + '" autocomplete="cc-name"><span class="msg"></span></div>' +
      '<div class="field" data-f="exp"><label for="f-exp">' + esc(t('co.card.exp')) + '</label>' +
        '<input id="f-exp" placeholder="12/29" value="' + esc(CO.data.exp || '') + '" autocomplete="cc-exp"><span class="msg"></span></div>' +
      '<div class="field" data-f="cvc"><label for="f-cvc">' + esc(t('co.card.cvc')) + '</label>' +
        '<input id="f-cvc" inputmode="numeric" placeholder="123" value="' + esc(CO.data.cvc || '') + '" autocomplete="cc-csc"><span class="msg"></span></div>' +
      '</div>';
  }

  function setErr(field, msg) {
    const wrap = document.querySelector('[data-f="' + field + '"]');
    if (!wrap) return;
    wrap.classList.toggle('err', !!msg);
    const m = wrap.querySelector('.msg');
    if (m) m.textContent = msg || '';
  }

  function luhn(num) {
    const s = String(num).replace(/\D/g, '');
    if (s.length < 13 || s.length > 19) return false;
    let sum = 0, dbl = false;
    for (let i = s.length - 1; i >= 0; i--) {
      let d = +s[i];
      if (dbl) { d *= 2; if (d > 9) d -= 9; }
      sum += d; dbl = !dbl;
    }
    return sum % 10 === 0;
  }

  function validateStep() {
    let ok = true;
    const need = (id, test, msg) => {
      const el = document.getElementById('f-' + id);
      if (!el) return;
      const v = el.value.trim();
      CO.data[id] = v;
      const bad = test ? !test(v) : !v;
      setErr(id, bad ? msg : '');
      if (bad) ok = false;
    };

    if (CO.step === 1) {
      need('name', v => v.length >= 2, t('co.req'));
      need('email', v => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v), t('co.bademail'));
      need('phone', v => v.replace(/\D/g, '').length >= 7, t('co.badphone'));
      need('city', null, t('co.req'));
      need('zip', null, t('co.req'));
      need('address', v => v.length >= 4, t('co.req'));
      const c = document.getElementById('f-country');
      if (c) CO.data.country = c.value;
      const n = document.getElementById('f-notes');
      if (n) CO.data.notes = n.value;
    }

    if (CO.step === 3) {
      const pay = CO.data.payment || 'card';
      if (pay === 'card') {
        need('cardnum', v => luhn(v), t('co.badcard'));
        need('cardname', v => v.length >= 2, t('co.req'));
        need('exp', function (v) {
          const m = /^(\d{2})\s*\/\s*(\d{2})$/.exec(v);
          if (!m) return false;
          const mm = +m[1], yy = 2000 + +m[2];
          if (mm < 1 || mm > 12) return false;
          const now = new Date();
          return new Date(yy, mm, 1) > now;
        }, t('co.badexp'));
        need('cvc', v => /^\d{3,4}$/.test(v), t('co.badcvc'));
        if (ok) CO.data.cardLast4 = CO.data.cardnum.replace(/\D/g, '').slice(-4);
      }
      const ag = document.getElementById('agree');
      CO.data.agree = ag && ag.checked;
      const am = document.getElementById('agreeMsg');
      if (!CO.data.agree) { if (am) am.textContent = t('co.req'); ok = false; }
      else if (am) am.textContent = '';
    }
    return ok;
  }

  function wireCheckout() {
    const next = document.getElementById('coNext');
    if (next) next.onclick = function () {
      if (!validateStep()) {
        const bad = document.querySelector('.field.err');
        if (bad) bad.scrollIntoView({ block: 'center', behavior: 'smooth' });
        return;
      }
      CO.step++;
      renderCheckout();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    const back = document.getElementById('coBack');
    if (back) back.onclick = function () { CO.step--; renderCheckout(); };

    $$('[data-goto]').forEach(b => b.onclick = function () { CO.step = +b.dataset.goto; renderCheckout(); });

    $$('input[name="ship"]').forEach(r => r.onchange = function () {
      CO.ship = r.value;
      renderCheckout();
    });

    $$('input[name="pay"]').forEach(r => r.onchange = function () {
      CO.data.payment = r.value;
      $$('.pay-opts .ship-opt').forEach(o => o.classList.remove('on'));
      r.parentElement.classList.add('on');
      renderCardFields();
    });

    const cn = document.getElementById('f-cardnum');
    if (cn) cn.oninput = function () {
      const v = cn.value.replace(/\D/g, '').slice(0, 19);
      cn.value = v.replace(/(.{4})/g, '$1 ').trim();
    };
    const ex = document.getElementById('f-exp');
    if (ex) ex.oninput = function () {
      let v = ex.value.replace(/\D/g, '').slice(0, 4);
      if (v.length > 2) v = v.slice(0, 2) + '/' + v.slice(2);
      ex.value = v;
    };

    const place = document.getElementById('coPlace');
    if (place) place.onclick = function () {
      const msg = document.getElementById('payMsg');
      msg.innerHTML = '';
      place.disabled = true;
      place.innerHTML = '<span class="spinner"></span>' + esc(t('co.processing'));

      setTimeout(function () {
        const num = String(CO.data.cardnum || '').replace(/\D/g, '');
        const declined = (CO.data.payment || 'card') === 'card' && num === '4000000000000002';
        if (declined) {
          msg.innerHTML = '<div class="note bad">' + esc(t('co.declined')) + '</div>';
          place.disabled = false;
          place.innerHTML = esc(t('co.place'));
          return;
        }
        const order = STORE.placeOrder({
          name: CO.data.name, email: CO.data.email, phone: CO.data.phone,
          country: CO.data.country, city: CO.data.city, address: CO.data.address,
          zip: CO.data.zip, notes: CO.data.notes,
          payment: CO.data.payment || 'card', cardLast4: CO.data.cardLast4
        }, CO.ship);
        CO = { step: 1, data: {}, ship: 'std' };
        if (order) location.hash = '#/confirm/' + order.number;
      }, 1500);
    };
  }

  /* ------------------------------------------------------- confirmation */
  V.confirm = function (params) {
    const o = STORE.getOrder(params.id);
    if (!o) return notFound();
    return '<div class="wrap" style="padding-block:40px 80px"><div class="confirm">' +
      '<div class="confirm-ico">' + ICON.check + '</div>' +
      '<h1>' + esc(t('ok.title')) + '</h1>' +
      '<p class="lead" style="margin-top:12px">' + esc(t('ok.sub', { email: o.customer.email })) + '</p>' +
      '<div class="order-box">' +
        '<div><dt>' + esc(t('ok.order')) + '</dt><dd>' + esc(o.number) + '</dd></div>' +
        '<div><dt>' + esc(t('ok.eta')) + '</dt><dd style="font-size:1.05rem">' + esc(I.date(o.eta)) + '</dd></div>' +
        '<div><dt>' + esc(t('cart.grand')) + '</dt><dd>' + money(o.totals.total) + '</dd></div>' +
      '</div>' +
      '<p class="tiny">' + esc(t('ok.save')) + '</p>' +
      '<div style="display:flex;gap:12px;justify-content:center;margin-top:22px;flex-wrap:wrap">' +
        '<a class="btn btn-primary btn-lg" href="#/track?o=' + o.number + '">' + ICON.truck + esc(t('ok.track')) + '</a>' +
        '<a class="btn btn-ghost btn-lg" href="#/shop">' + esc(t('ok.shop')) + '</a>' +
      '</div>' +
    '</div></div>';
  };

  /* --------------------------------------------------------- tracking */
  V.track = function (params) {
    const orders = STORE.getOrders();
    const pre = params.o || '';
    return '' +
    '<div class="wrap page-head center">' +
      '<h1 style="margin:12px 0 10px">' + esc(t('tr.title')) + '</h1>' +
      '<p class="lead" style="margin-inline:auto">' + esc(t('tr.sub')) + '</p>' +
    '</div>' +
    '<div class="wrap" style="padding-bottom:80px">' +
      '<form class="track-form" id="trackForm">' +
        '<input id="trackInput" value="' + esc(pre) + '" placeholder="' + esc(t('tr.ph')) + '" aria-label="' + esc(t('ok.order')) + '">' +
        '<button class="btn btn-primary" type="submit">' + esc(t('tr.btn')) + '</button>' +
      '</form>' +
      (orders.length && !pre ? '<div class="order-pick"><p class="tiny center" style="margin-bottom:4px">' + esc(t('tr.recent')) + '</p>' +
        orders.slice(0, 5).map(function (o) {
          const si = STORE.statusIndex(o);
          return '<button data-order="' + o.number + '"><div><b>' + esc(o.number) + '</b>' +
            '<div class="tiny">' + esc(I.date(o.placedAt)) + ' · ' + o.items.length + ' ' + esc(t('tr.items')) + '</div></div>' +
            '<span class="st">' + esc(t('tr.st' + (si + 1))) + '</span></button>';
        }).join('') + '</div>' : '') +
      '<div id="trackResult" style="margin-top:34px"></div>' +
    '</div>';
  };

  function renderTracking(num) {
    const box = document.getElementById('trackResult');
    if (!box) return;
    const o = STORE.getOrder(num);
    if (!o) {
      box.innerHTML = '<div class="note bad center" style="max-width:480px;margin-inline:auto">' + esc(t('tr.notfound')) + '</div>';
      return;
    }
    const si = STORE.statusIndex(o);
    box.innerHTML = '<div class="track-grid">' +
      '<div class="info-card">' +
        '<h3>' + esc(o.number) + '</h3>' +
        '<div class="timeline">' + STORE.STATUSES.map(function (s, i) {
          const cls = i < si ? 'done' : i === si ? 'now' : 'pending';
          return '<div class="tl ' + cls + '"><b>' + esc(t('tr.st' + (i + 1))) + '</b>' +
            '<span>' + esc(t('tr.st' + (i + 1) + 's')) + '</span>' +
            '<time>' + esc(I.dateTime(STORE.stepTime(o, i))) + '</time></div>';
        }).join('') + '</div>' +
        (si < STORE.STATUSES.length - 1
          ? '<button class="btn btn-ghost btn-sm" id="advBtn" style="margin-top:12px">' + esc(t('tr.advance')) + '</button>'
          : '') +
        '<p class="tiny" style="margin-top:12px">' + esc(t('tr.demoNote')) + '</p>' +
      '</div>' +
      '<div>' +
        '<div class="info-card"><h3>' + esc(t('tr.status')) + '</h3><dl>' +
          '<div class="kv"><dt>' + esc(t('tr.courier')) + '</dt><dd>' + esc(o.courier) + '</dd></div>' +
          '<div class="kv"><dt>' + esc(t('tr.tracking')) + '</dt><dd>' + esc(o.trackingId) + '</dd></div>' +
          '<div class="kv"><dt>' + esc(t('tr.eta')) + '</dt><dd>' + esc(I.date(o.eta)) + '</dd></div>' +
          '<div class="kv"><dt>' + esc(t('cart.shipping')) + '</dt><dd>' + esc(t('co.ship.' + o.shipMethod)) + '</dd></div>' +
          '<div class="kv"><dt>' + esc(t('cart.grand')) + '</dt><dd>' + money(o.totals.total) + '</dd></div>' +
        '</dl></div>' +
        '<div class="info-card"><h3>' + esc(t('tr.address')) + '</h3>' +
          '<p style="margin:0;font-size:.92rem">' + esc(o.customer.name) + '<br>' + esc(o.customer.address) + '<br>' +
          esc(o.customer.city) + ' ' + esc(o.customer.zip) + '<br>' + esc(o.customer.country) + '</p></div>' +
        '<div class="info-card"><h3>' + esc(t('tr.contents')) + '</h3>' +
          o.items.map(function (it) {
            const p = DATA.get(it.id);
            return '<div class="mini-item">' + pimg(p, null, 50, 50, true) + '<div>' +
              '<div class="nm">' + esc(DATA.name(p.id, I.lang)) + '</div><div class="q">× ' + it.qty + '</div></div>' +
              '<div class="p">' + money(it.price * it.qty) + '</div></div>';
          }).join('') + '</div>' +
      '</div>' +
    '</div>';

    const adv = document.getElementById('advBtn');
    if (adv) adv.onclick = function () { STORE.advance(o.number); renderTracking(o.number); };
  }

  /* --------------------------------------------------------- AI care */
  let chat = [];

  V.care = function (params) {
    const sugs = ['sug1', 'sug2', 'sug3', 'sug4', 'sug5', 'sug6'];
    const topics = AI.topicList();
    return '' +
    '<div class="wrap page-head center">' +
      '<h1 style="margin:12px 0 10px">' + esc(t('ai.title')) + '</h1>' +
      '<p class="lead" style="margin-inline:auto">' + esc(t('ai.sub')) + '</p>' +
    '</div>' +
    '<div class="wrap" style="padding-bottom:80px"><div class="ai-layout">' +
      '<div class="chat">' +
        '<div class="chat-head">' +
          '<span class="chat-av">' + ICON.leaf + '</span>' +
          '<div><b>' + esc(t('ai.title')) + '</b>' +
            '<span class="eng"><span class="dot' + (AI.hasKey() ? '' : ' low') + '"></span>' +
            '<span id="engineLabel">' + esc(AI.hasKey() ? t('ai.engine.live') : t('ai.engine.local')) + '</span></span></div>' +
          '<div class="tools"><button class="chip" id="clearChat">' + esc(t('ai.clear')) + '</button></div>' +
        '</div>' +
        '<div class="chat-log" id="chatLog"></div>' +
        '<div class="chat-sug" id="chatSug">' + sugs.map(function (s) {
          return '<button class="chip" data-sug="' + esc(t('ai.' + s)) + '">' + esc(t('ai.' + s)) + '</button>';
        }).join('') + '</div>' +
        '<form class="chat-input" id="chatForm">' +
          '<textarea id="chatInput" rows="1" placeholder="' + esc(t('ai.ph')) + '" aria-label="' + esc(t('ai.send')) + '"></textarea>' +
          '<button class="send-btn" type="submit" aria-label="' + esc(t('ai.send')) + '">' + ICON.send + '</button>' +
        '</form>' +
      '</div>' +
      '<div class="ai-side">' +
        '<div class="side-card"><h4>' + esc(t('ai.topics')) + '</h4>' +
          '<div class="topic-list">' + topics.map(function (id) {
            return '<button data-topic="' + id + '">' + esc(AI.topicTitle(id, I.lang)) + '</button>';
          }).join('') + '</div></div>' +
        '<div class="side-card"><h4>' + esc(t('ai.keyTitle')) + '</h4>' +
          '<p class="tiny">' + esc(t('ai.keyBody')) + '</p>' +
          '<div class="key-row">' +
            '<input id="aiKey" type="password" placeholder="' + esc(t('ai.keyPh')) + '" value="' + (AI.hasKey() ? '' : '') + '" autocomplete="off">' +
            '<button class="btn btn-primary btn-sm" id="saveKey">' + esc(AI.hasKey() ? t('ai.keyRemove') : t('ai.keySave')) + '</button>' +
          '</div>' +
          '<p class="tiny" style="margin-top:10px">' + esc(t('ai.keyNote')) + '</p></div>' +
        '<div class="side-card"><p class="tiny" style="margin:0">' + esc(t('ai.disclaimer')) + '</p></div>' +
      '</div>' +
    '</div></div>';
  };

  function chatPush(role, html, meta) {
    chat.push({ role, html, meta: meta || null, text: meta && meta.text ? meta.text : '' });
    paintChat();
  }

  function paintChat() {
    const log = document.getElementById('chatLog');
    if (!log) return;
    log.innerHTML = chat.map(function (m) {
      const av = m.role === 'user' ? '<span class="msg-av">' + esc((m.text || '?').trim().charAt(0).toUpperCase()) + '</span>'
                                   : '<span class="msg-av">' + ICON.leaf + '</span>';
      let extra = '';
      if (m.meta && m.meta.related && m.meta.related.length) {
        extra = '<div class="ai-rel"><div class="lbl">' + esc(t('ai.relatedPlants')) + '</div><div class="ai-rel-row">' +
          m.meta.related.map(function (id) {
            const p = DATA.get(id);
            return '<a href="#/product/' + id + '">' + pimg(p, null, 0, 0, true) +
              '<div class="n">' + esc(DATA.name(id, I.lang)) + '</div></a>';
          }).join('') + '</div></div>';
      }
      return '<div class="msg ' + (m.role === 'user' ? 'me' : '') + '">' + av +
             '<div class="msg-body">' + m.html + extra + '</div></div>';
    }).join('');
    log.scrollTop = log.scrollHeight;
  }

  function showTyping() {
    const log = document.getElementById('chatLog');
    if (!log) return;
    const d = document.createElement('div');
    d.className = 'msg';
    d.id = 'typing';
    d.innerHTML = '<span class="msg-av">' + ICON.leaf + '</span><div class="msg-body"><div class="typing"><i></i><i></i><i></i></div></div>';
    log.appendChild(d);
    log.scrollTop = log.scrollHeight;
  }
  function hideTyping() { const d = document.getElementById('typing'); if (d) d.remove(); }

  async function askAI(question) {
    chatPush('user', '<p>' + esc(question) + '</p>', { text: question });
    showTyping();

    const lang = I.lang;
    const local = AI.answerLocal(question, lang);

    if (AI.hasKey()) {
      try {
        const history = chat.filter(m => m.text).map(m => ({ role: m.role, text: m.text })).slice(0, -1);
        const reply = await AI.answerLive(question, lang, history);
        hideTyping();
        chatPush('ai', AI.liveToHtml(reply), { related: local.related, text: reply });
        return;
      } catch (e) {
        hideTyping();
        chatPush('ai', '<div class="note info" style="margin-bottom:10px">' + esc(t('ai.error')) + '</div>' + local.html,
                 { related: local.related, text: '' });
        return;
      }
    }

    setTimeout(function () {
      hideTyping();
      chatPush('ai', local.html, { related: local.related, text: '' });
    }, 420 + Math.random() * 380);
  }

  /* ----------------------------------------------------------- about */
  V.about = function () {
    return '' +
    '<div class="wrap page-head">' +
      '<div class="crumbs"><a href="#/">' + esc(t('nav.home')) + '</a><span>/</span>' + esc(t('nav.about')) + '</div>' +
      '<h1>' + esc(t('ab.title')) + '</h1>' +
      '<p class="lead" style="margin-top:14px">' + esc(t('ab.lead')) + '</p>' +
    '</div>' +
    '<div class="wrap" style="padding-bottom:80px">' +
      '<div class="about-grid" style="margin-top:20px">' +
        '<div class="about-art"><img src="assets/img/ui/about.svg" alt="" width="820" height="840"></div>' +
        '<div><h2>' + esc(t('ab.story')) + '</h2><p class="lead" style="margin-top:14px">' + esc(t('ab.storytext')) + '</p>' +
          '<div class="stats" style="flex-direction:row;gap:34px;flex-wrap:wrap;margin-top:22px">' +
            '<div class="stat"><div><b>5+</b><span>' + esc(t('about.s1')) + '</span></div></div>' +
            '<div class="stat"><div><b>10K+</b><span>' + esc(t('about.s2')) + '</span></div></div>' +
            '<div class="stat"><div><b>1000+</b><span>' + esc(t('about.s3')) + '</span></div></div>' +
          '</div></div>' +
      '</div>' +
      '<section class="section" style="padding-bottom:0">' +
        '<h2>' + esc(t('ab.photos')) + '</h2>' +
        '<p class="lead" style="margin-top:10px">' + esc(t('ab.photoslead')) + '</p>' +
        '<ul class="credit-list">' + Object.keys(root_credits()).sort().map(function (id) {
          const c = root_credits()[id];
          return '<li><b>' + esc(DATA.name(id, I.lang)) + '</b>' +
            '<span>' + esc(c.author) + ' · ' + esc(c.licence) + ' · ' +
            '<a href="' + esc(c.page) + '" target="_blank" rel="noopener">Wikimedia Commons</a></span></li>';
        }).join('') + '</ul>' +
      '</section>' +
      '<section class="section" style="padding-bottom:0">' +
        '<h2>' + esc(t('ab.values')) + '</h2>' +
        '<div class="values-grid">' + ['1', '2', '3', '4'].map(function (n) {
          return '<div class="value"><b>' + esc(t('ab.v' + n)) + '</b><span>' + esc(t('ab.v' + n + 's')) + '</span></div>';
        }).join('') + '</div>' +
      '</section>' +
    '</div>';
  };

  /* --------------------------------------------------------- contact */
  V.contact = function () {
    return '' +
    '<div class="wrap page-head">' +
      '<div class="crumbs"><a href="#/">' + esc(t('nav.home')) + '</a><span>/</span>' + esc(t('nav.contact')) + '</div>' +
      '<h1>' + esc(t('ct.title')) + '</h1>' +
      '<p class="lead" style="margin-top:12px">' + esc(t('ct.sub')) + '</p>' +
    '</div>' +
    '<div class="wrap" style="padding-bottom:80px"><div class="contact-grid">' +
      '<form class="form-card" id="contactForm">' +
        '<div class="form-grid">' +
          '<div class="field"><label for="c-name">' + esc(t('ct.name')) + '</label><input id="c-name" required></div>' +
          '<div class="field"><label for="c-email">' + esc(t('ct.email')) + '</label><input id="c-email" type="email" required></div>' +
          '<div class="field wide"><label for="c-sub">' + esc(t('ct.subject')) + '</label><input id="c-sub" required></div>' +
          '<div class="field wide"><label for="c-msg">' + esc(t('ct.msg')) + '</label><textarea id="c-msg" rows="5" required></textarea></div>' +
        '</div>' +
        '<div id="contactMsg"></div>' +
        '<button class="btn btn-primary" type="submit" style="margin-top:16px">' + esc(t('ct.send')) + ICON.arrow + '</button>' +
      '</form>' +
      '<div class="info-card">' +
        '<div class="contact-item"><span class="ci">' + ICON.pin + '</span><div><b>' + esc(t('ct.addr')) + '</b>' +
          '<span>14 Glasshouse Lane, Tashkent 100015, Uzbekistan</span></div></div>' +
        '<div class="contact-item"><span class="ci">' + ICON.clock + '</span><div><b>' + esc(t('ct.hours')) + '</b>' +
          '<span>' + esc(t('ct.hourstext')) + '</span></div></div>' +
        '<div class="contact-item"><span class="ci">' + ICON.phone + '</span><div><b>' + esc(t('ct.phone')) + '</b>' +
          '<span>+998 71 000 00 00</span></div></div>' +
        '<div class="contact-item"><span class="ci">' + ICON.mail + '</span><div><b>' + esc(t('ct.emaillabel')) + '</b>' +
          '<span>hello@greenhaven.example</span></div></div>' +
        '<div class="contact-item"><span class="ci">' + ICON.chat + '</span><div><b>' + esc(t('nav.care')) + '</b>' +
          '<span><a href="#/care" style="color:var(--brand);font-weight:600">' + esc(t('ai.title')) + ' →</a></span></div></div>' +
      '</div>' +
    '</div></div>';
  };

  function root_credits() { return window.PHOTO_CREDITS || {}; }

  function notFound() {
    return '<div class="wrap" style="padding-block:80px"><div class="empty-state">' + ICON.leaf +
      '<h2>404</h2><p>' + esc(t('shop.none')) + '</p>' +
      '<a class="btn btn-primary" href="#/" style="margin-top:16px">' + esc(t('nav.home')) + '</a></div></div>';
  }

  /* ---------------------------------------------------------- router */
  function parseHash() {
    const raw = (location.hash || '#/').replace(/^#/, '');
    const [path, query] = raw.split('?');
    const parts = path.split('/').filter(Boolean);
    const params = {};
    if (query) query.split('&').forEach(function (kv) {
      const [k, v] = kv.split('=');
      params[decodeURIComponent(k)] = decodeURIComponent(v || '');
    });
    return { name: parts[0] || 'home', id: parts[1] || '', params };
  }

  let current = null;

  function render() {
    const r = parseHash();
    current = r;
    const fn = V[r.name];
    const params = Object.assign({}, r.params, { id: r.id });
    app().innerHTML = fn ? fn(params) : notFound();

    $$('[data-route]').forEach(function (a) {
      a.classList.toggle('active', a.dataset.route === r.name);
    });

    const host = app();
    host.classList.remove('view-enter');
    void host.offsetWidth;            /* restart the animation on every route */
    host.classList.add('view-enter');

    afterRender(r, params);
    closeDrawer();
    if (!r.params.keepScroll) window.scrollTo(0, 0);
  }

  function afterRender(r, params) {
    if (r.name === 'home') wireGarden();
    if (r.name === 'shop') {
      applyShop();
      wireFilters();
    }
    if (r.name === 'product') wireProduct(params.id);
    if (r.name === 'cart') wireCart();
    if (r.name === 'checkout') renderCheckout();
    if (r.name === 'track') {
      const form = document.getElementById('trackForm');
      if (form) form.onsubmit = function (e) {
        e.preventDefault();
        renderTracking(document.getElementById('trackInput').value);
      };
      $$('[data-order]').forEach(b => b.onclick = function () {
        document.getElementById('trackInput').value = b.dataset.order;
        renderTracking(b.dataset.order);
      });
      if (params.o) renderTracking(params.o);
    }
    if (r.name === 'care') wireCare(params);
    if (r.name === 'contact') {
      const f = document.getElementById('contactForm');
      if (f) f.onsubmit = function (e) {
        e.preventDefault();
        document.getElementById('contactMsg').innerHTML = '<div class="note ok" style="margin-top:14px">' + esc(t('ct.sent')) + '</div>';
        f.reset();
      };
    }

    /* Add-to-cart, wishlist and accordions are bound once, by delegation, in
       boot(). Re-rendering just the product grid (a filter or sort change)
       must not be able to leave those buttons dead. */
  }

  /** The water channel is the search field; Enter walks into the garden. */
  function wireGarden() {
    const input = document.getElementById('gardenSearch');
    if (!input) return;
    const go = function () {
      const v = input.value.trim();
      if (!v) { location.hash = '#/shop'; return; }
      shopState.q = v;
      shopState.cat = 'all';
      location.hash = '#/shop';
    };
    input.onkeydown = function (e) { if (e.key === 'Enter') { e.preventDefault(); go(); } };
  }

  function wireFilters() {
    const box = document.getElementById('filters');
    if (!box) return;
    box.addEventListener('change', function (e) {
      const el = e.target;
      if (el.name === 'cat') shopState.cat = el.value;
      if (el.name === 'light') shopState.light = $$('input[name="light"]:checked').map(i => i.value);
      if (el.name === 'diff') shopState.diff = $$('input[name="diff"]:checked').map(i => i.value);
      if (el.id === 'petOnly') shopState.pet = el.checked;
      applyShop();
    });
    const pr = document.getElementById('priceRange');
    if (pr) pr.oninput = function () {
      shopState.max = +pr.value;
      document.getElementById('priceOut').textContent = money(shopState.max);
      applyShop();
    };
    const cl = document.getElementById('clearFilters');
    if (cl) cl.onclick = function () {
      shopState = { cat: 'all', max: 100, light: [], diff: [], pet: false, sort: shopState.sort, q: '' };
      box.innerHTML = filtersHtml();
      wireFilters();
      applyShop();
    };
    const ss = document.getElementById('sortSel');
    if (ss) ss.onchange = function () { shopState.sort = ss.value; applyShop(); };
    const ft = document.getElementById('filterToggle');
    if (ft) ft.onclick = function () { box.classList.toggle('open'); };
  }

  function wireProduct(id) {
    const input = document.getElementById('pdQty');
    if (!input) return;
    $$('[data-q]').forEach(b => b.onclick = function () {
      const v = Math.max(1, (parseInt(input.value, 10) || 1) + (+b.dataset.q));
      input.value = Math.min(v, Math.max(1, DATA.get(id).stock));
    });
    const add = document.getElementById('pdAdd');
    if (add) add.onclick = function () {
      STORE.add(id, parseInt(input.value, 10) || 1);
      toast(DATA.name(id, I.lang) + ' — ' + t('p.added'));
    };
  }

  function wireCart() {
    const refresh = function () {
      const list = document.getElementById('cartList');
      const sum = document.getElementById('cartSummary');
      if (!list) return;
      if (!STORE.getCart().length) { render(); return; }
      list.innerHTML = cartRows();
      sum.innerHTML = summaryHtml(false);
      wireCart();
    };
    $$('[data-inc]').forEach(b => b.onclick = function () {
      const id = b.dataset.inc;
      const l = STORE.getCart().filter(x => x.id === id)[0];
      STORE.setQty(id, (l ? l.qty : 0) + 1); refresh();
    });
    $$('[data-dec]').forEach(b => b.onclick = function () {
      const id = b.dataset.dec;
      const l = STORE.getCart().filter(x => x.id === id)[0];
      STORE.setQty(id, (l ? l.qty : 1) - 1); refresh();
    });
    $$('[data-qty]').forEach(i => i.onchange = function () { STORE.setQty(i.dataset.qty, i.value); refresh(); });
    $$('[data-rm]').forEach(b => b.onclick = function () { STORE.remove(b.dataset.rm); refresh(); });

    const pb = document.getElementById('promoBtn');
    if (pb) pb.onclick = function () {
      const code = document.getElementById('promoInput').value;
      const pct = STORE.applyPromo(code);
      const msg = document.getElementById('promoMsg');
      if (pct) { refresh(); toast(t('cart.promoOk', { n: pct })); }
      else if (msg) msg.innerHTML = '<div class="note bad">' + esc(t('cart.promoBad')) + '</div>';
    };
  }

  function wireCare(params) {
    if (!chat.length) {
      chat.push({ role: 'ai', html: '<p>' + esc(t('ai.greeting')) + '</p>', meta: null, text: '' });
    }
    paintChat();

    const form = document.getElementById('chatForm');
    const input = document.getElementById('chatInput');
    form.onsubmit = function (e) {
      e.preventDefault();
      const v = input.value.trim();
      if (!v) return;
      input.value = '';
      input.style.height = 'auto';
      askAI(v);
    };
    input.oninput = function () {
      input.style.height = 'auto';
      input.style.height = Math.min(120, input.scrollHeight) + 'px';
    };
    input.onkeydown = function (e) {
      if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); form.requestSubmit(); }
    };
    $$('[data-sug]').forEach(b => b.onclick = function () { askAI(b.dataset.sug); });
    $$('[data-topic]').forEach(b => b.onclick = function () { askAI(AI.topicTitle(b.dataset.topic, I.lang)); });

    const clear = document.getElementById('clearChat');
    if (clear) clear.onclick = function () {
      chat = [{ role: 'ai', html: '<p>' + esc(t('ai.greeting')) + '</p>', meta: null, text: '' }];
      paintChat();
    };

    const keyBtn = document.getElementById('saveKey');
    const keyIn = document.getElementById('aiKey');
    if (keyBtn) keyBtn.onclick = function () {
      if (AI.hasKey()) {
        AI.setKey('');
        toast(t('ai.engine.local'));
      } else {
        const v = keyIn.value.trim();
        if (!v) return;
        AI.setKey(v);
        toast(t('ai.connected'));
      }
      render();
    };

    if (params.q) { setTimeout(() => askAI(params.q), 250); }
  }

  /* ----------------------------------------------------------- header */
  let lastCartCount = null;
  function updateCart() {
    const n = STORE.count();
    const el = document.getElementById('cartCount');
    el.textContent = n;
    el.hidden = n === 0;
    if (lastCartCount !== null && n > lastCartCount) {
      el.classList.remove('pop');
      void el.offsetWidth;
      el.classList.add('pop');
    }
    lastCartCount = n;
  }

  function buildPickers() {
    const lm = document.getElementById('langMenu');
    lm.innerHTML = Object.keys(I.LOCALES).map(function (code) {
      const L = I.LOCALES[code];
      return '<button data-lang="' + code + '"' + (I.lang === code ? ' class="on"' : '') + '>' +
        '<span class="flag">' + L.flag + '</span><span>' + esc(L.native) + '</span>' +
        '<span class="sub">' + code.toUpperCase() + '</span></button>';
    }).join('');
    $$('#langMenu [data-lang]').forEach(b => b.onclick = function () {
      I.setLang(b.dataset.lang);
      document.getElementById('langPicker').classList.remove('open');
    });

    const cm = document.getElementById('curMenu');
    cm.innerHTML = Object.keys(I.CURRENCIES).map(function (code) {
      return '<button data-cur="' + code + '"' + (I.currency === code ? ' class="on"' : '') + '>' +
        '<span>' + code + '</span><span class="sub">' + I.CURRENCIES[code].symbol + '</span></button>';
    }).join('');
    $$('#curMenu [data-cur]').forEach(b => b.onclick = function () {
      I.setCurrency(b.dataset.cur);
      document.getElementById('curPicker').classList.remove('open');
    });

    document.getElementById('langFlag').textContent = I.LOCALES[I.lang].flag;
    document.getElementById('langLabel').textContent = I.lang.toUpperCase();
    document.getElementById('curLabel').textContent = I.currency;

    /* the same controls inside the mobile drawer */
    const dl = document.getElementById('drawerLang');
    if (dl) {
      dl.innerHTML = Object.keys(I.LOCALES).map(function (code) {
        const L = I.LOCALES[code];
        return '<button data-dlang="' + code + '"' + (I.lang === code ? ' class="on"' : '') + '>' +
          '<span>' + L.flag + '</span><span>' + esc(L.native) + '</span></button>';
      }).join('');
      $$('[data-dlang]').forEach(b => b.onclick = function () { I.setLang(b.dataset.dlang); closeDrawer(); });
    }
    const dc = document.getElementById('drawerCur');
    if (dc) {
      dc.innerHTML = Object.keys(I.CURRENCIES).map(function (code) {
        return '<button data-dcur="' + code + '"' + (I.currency === code ? ' class="on"' : '') + '>' +
          code + ' ' + I.CURRENCIES[code].symbol + '</button>';
      }).join('');
      $$('[data-dcur]').forEach(b => b.onclick = function () { I.setCurrency(b.dataset.dcur); });
    }
  }

  function applyI18n() {
    $$('[data-i18n]').forEach(function (el) { el.textContent = t(el.dataset.i18n); });
    $$('[data-i18n-ph]').forEach(function (el) { el.setAttribute('placeholder', t(el.dataset.i18nPh)); });
  }

  function openDrawer() {
    document.getElementById('drawer').classList.add('open');
    document.getElementById('drawerBack').classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  function closeDrawer() {
    document.getElementById('drawer').classList.remove('open');
    document.getElementById('drawerBack').classList.remove('open');
    document.body.style.overflow = '';
  }

  function wireSearch() {
    const input = document.getElementById('search');
    const pop = document.getElementById('searchPop');
    if (!input) return;
    let timer;
    input.oninput = function () {
      clearTimeout(timer);
      timer = setTimeout(function () {
        const q = input.value.trim().toLowerCase();
        if (q.length < 2) { pop.classList.remove('open'); return; }
        const hits = DATA.PRODUCTS.filter(function (p) {
          const hay = ['en', 'uz', 'ru', 'zh', 'ar'].map(l => DATA.name(p.id, l)).join(' ').toLowerCase() + ' ' + p.id;
          return hay.indexOf(q) !== -1;
        }).slice(0, 6);
        pop.innerHTML = hits.length
          ? hits.map(p => '<a href="#/product/' + p.id + '">' + pimg(p, null, 0, 0, true) +
              '<span><span class="nm">' + esc(DATA.name(p.id, I.lang)) + '</span><br>' +
              '<span class="pr">' + money(p.price) + '</span></span></a>').join('')
          : '<div class="empty">' + esc(t('shop.none')) + '</div>';
        pop.classList.add('open');
      }, 140);
    };
    input.onkeydown = function (e) {
      if (e.key === 'Enter') {
        e.preventDefault();
        pop.classList.remove('open');
        shopState.q = input.value.trim();
        location.hash = '#/shop';
        if (parseHash().name === 'shop') render();
      }
    };
    pop.addEventListener('click', () => pop.classList.remove('open'));
    document.addEventListener('click', function (e) {
      if (!e.target.closest('.search-wrap')) pop.classList.remove('open');
    });
  }

  /* Scroll reveals were removed deliberately: an identical entrance on every
     section is decoration, and it put real content behind a timer. The
     authored motion lives in the hero and in list and feedback transitions. */

  /* -------------------------------------------------------------- boot */
  function boot() {
    I.init();
    buildPickers();
    applyI18n();
    updateCart();
    wireSearch();
    document.getElementById('year').textContent = new Date().getFullYear();

    ['langPicker', 'curPicker'].forEach(function (id) {
      const p = document.getElementById(id);
      p.querySelector('.picker-btn').onclick = function (e) {
        e.stopPropagation();
        const wasOpen = p.classList.contains('open');
        $$('.picker').forEach(x => x.classList.remove('open'));
        p.classList.toggle('open', !wasOpen);
      };
    });
    document.addEventListener('click', function (e) {
      if (!e.target.closest('.picker')) $$('.picker').forEach(x => x.classList.remove('open'));
    });

    /* One delegated handler for controls that live inside re-rendered markup. */
    document.addEventListener('click', function (e) {
      const add = e.target.closest ? e.target.closest('[data-add]') : null;
      if (add) {
        e.preventDefault();
        STORE.add(add.dataset.add, 1);
        add.classList.add('done');
        add.innerHTML = ICON.check;
        toast(DATA.name(add.dataset.add, I.lang) + ' — ' + t('p.added'));
        const btn = add;
        setTimeout(function () { btn.classList.remove('done'); btn.innerHTML = ICON.plus; }, 1400);
        return;
      }
      const wish = e.target.closest ? e.target.closest('[data-wish]') : null;
      if (wish) {
        e.preventDefault();
        wish.classList.toggle('on', toggleWish(wish.dataset.wish));
        return;
      }
      const acc = e.target.closest ? e.target.closest('.acc-head') : null;
      if (acc) acc.parentElement.classList.toggle('open');
    });

    document.getElementById('burger').onclick = openDrawer;
    document.getElementById('drawerClose').onclick = closeDrawer;
    document.getElementById('drawerBack').onclick = closeDrawer;

    document.getElementById('newsForm').onsubmit = function (e) {
      e.preventDefault();
      e.target.reset();
      toast(t('ft.njoined'));
    };

    window.addEventListener('scroll', function () {
      document.getElementById('head').classList.toggle('stuck', window.scrollY > 8);
    }, { passive: true });

    STORE.onChange(updateCart);
    I.onChange(function () {
      buildPickers();
      applyI18n();
      chat = [];
      render();
    });

    window.addEventListener('hashchange', render);
    render();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();
})();
