/* GreenHaven — internationalisation layer (UZ / EN / RU / ZH / AR) */
(function (root) {
  'use strict';

  const LOCALES = {
    en: { label: 'English',   native: 'English',   dir: 'ltr', flag: '🇬🇧', locale: 'en-US' },
    uz: { label: 'Uzbek',     native: "O'zbekcha", dir: 'ltr', flag: '🇺🇿', locale: 'uz-UZ' },
    ru: { label: 'Russian',   native: 'Русский',   dir: 'ltr', flag: '🇷🇺', locale: 'ru-RU' },
    zh: { label: 'Chinese',   native: '中文',       dir: 'ltr', flag: '🇨🇳', locale: 'zh-CN' },
    ar: { label: 'Arabic',    native: 'العربية',    dir: 'rtl', flag: '🇸🇦', locale: 'ar-SA' }
  };

  /* Demo conversion rates from USD — clearly indicative, not a live feed. */
  const CURRENCIES = {
    USD: { symbol: '$',   rate: 1,      pos: 'before', dp: 2 },
    UZS: { symbol: "so'm", rate: 12650, pos: 'after',  dp: 0 },
    RUB: { symbol: '₽',   rate: 92,     pos: 'after',  dp: 0 },
    CNY: { symbol: '¥',   rate: 7.1,    pos: 'before', dp: 2 },
    AED: { symbol: 'د.إ', rate: 3.67,   pos: 'after',  dp: 2 }
  };

  const DEFAULT_CURRENCY = { en: 'USD', uz: 'UZS', ru: 'RUB', zh: 'CNY', ar: 'AED' };

  const T = {
/* ========================================================= ENGLISH ===== */
en: {
  'meta.title': 'GreenHaven Nursery — Plants, Flowers & AI Plant Care',
  'meta.desc': 'Buy healthy indoor and outdoor plants, track your order, and ask our AI plant doctor anything about plant care.',

  'topbar.msg': 'Free delivery on orders over $75 · Plant care support for life',
  'nav.home': 'Home', 'nav.shop': 'Plants', 'nav.care': 'AI Care', 'nav.track': 'Track Order',
  'nav.about': 'About', 'nav.contact': 'Contact', 'nav.cart': 'Cart', 'nav.quote': 'Get a Quote',
  'nav.menu': 'Menu', 'nav.close': 'Close', 'nav.search': 'Search plants',

  'hero.eyebrow': 'Bring nature home',
  'hero.title1': 'Beautiful Plants', 'hero.title2': 'for a happier,', 'hero.title3': 'greener tomorrow.',
  'hero.sub': 'Discover a wide variety of indoor, outdoor and decorative plants to make your home, office and garden come alive with natural beauty.',
  'hero.cta1': 'Explore Plants', 'hero.cta2': 'Ask the AI Doctor',
  'hero.note': 'Plants Make Life Better',
  'hero.f1': 'Wide Variety', 'hero.f1s': '1000+ Plants',
  'hero.f2': 'Home Delivery', 'hero.f2s': 'Safe & Secure',
  'hero.f3': 'Quality Plants', 'hero.f3s': 'Healthy & Fresh',
  'hero.f4': 'Eco Friendly', 'hero.f4s': 'Sustainable Living',

  'coll.eyebrow': 'Explore our collection', 'coll.title': 'Find the Perfect Plant',
  'coll.sub': 'From indoor greenery to outdoor trees, we have everything for your green space.',

  'cat.indoor': 'Indoor Plants', 'cat.indoor.s': 'Bring freshness indoors',
  'cat.outdoor': 'Outdoor Plants', 'cat.outdoor.s': 'Perfect for your garden',
  'cat.succulent': 'Succulents & Cacti', 'cat.succulent.s': 'Low maintenance beauty',
  'cat.flowering': 'Flowering Plants', 'cat.flowering.s': 'Colour all year round',
  'cat.herb': 'Herbs & Edibles', 'cat.herb.s': 'Fresh from your kitchen',
  'cat.bonsai': 'Bonsai & Rare', 'cat.bonsai.s': 'Living works of art',
  'cat.all': 'All Plants',

  'about.eyebrow': 'About us', 'about.title1': 'Growing Happiness', 'about.title2': 'One Plant at a Time',
  'about.body': 'At GreenHaven Nursery, we believe plants do more than decorate — they bring life, positivity and peace to your space. With a passion for greenery, we offer high quality plants, expert guidance and reliable service to help you create a healthier, happier environment.',
  'about.cta': 'Know More',
  'about.s1': 'Years of Experience', 'about.s2': 'Happy Customers', 'about.s3': 'Plant Varieties',
  'about.quote': 'Good Plants, Good Mood',

  'why.eyebrow': 'Why choose us', 'why.title': 'More Than Just a Nursery',
  'why.1': 'Healthy Plants', 'why.1s': 'Carefully nurtured and quality checked',
  'why.2': 'Expert Guidance', 'why.2s': 'Get advice from plant care specialists',
  'why.3': 'Fast Delivery', 'why.3s': 'Safe packaging and delivery to your doorstep',
  'why.4': 'Plant Care Support', 'why.4s': "We're here even after your purchase",

  'band.title': "Let's Make the World Greener Together",
  'band.sub': 'Join thousands of plant lovers and start your green journey today.',
  'band.cta': 'Shop Now',

  'feat.eyebrow': 'Most loved', 'feat.title': 'Best Sellers', 'feat.sub': 'Loved by thousands of plant parents worldwide.',
  'feat.all': 'View all plants',

  'shop.title': 'All Plants', 'shop.sub': 'plants found',
  'shop.filters': 'Filters', 'shop.category': 'Category', 'shop.price': 'Price range',
  'shop.light': 'Light needs', 'shop.care': 'Care level', 'shop.petsafe': 'Pet friendly only',
  'shop.sort': 'Sort by', 'shop.sort.featured': 'Featured', 'shop.sort.priceAsc': 'Price: low to high',
  'shop.sort.priceDesc': 'Price: high to low', 'shop.sort.rating': 'Top rated', 'shop.sort.name': 'Name A–Z',
  'shop.clear': 'Clear all', 'shop.none': 'No plants match your filters.',
  'shop.search.ph': 'Search by name…',

  'care.easy': 'Easy', 'care.medium': 'Moderate', 'care.hard': 'Expert',
  'light.low': 'Low light', 'light.medium': 'Medium light', 'light.bright': 'Bright indirect', 'light.direct': 'Full sun',
  'water.low': 'Every 2–3 weeks', 'water.medium': 'Every 7–10 days', 'water.high': 'Every 3–5 days',
  'hum.low': 'Normal room humidity', 'hum.medium': 'Medium humidity (50%)', 'hum.high': 'High humidity (60%+)',

  'p.add': 'Add to Cart', 'p.added': 'Added ✓', 'p.view': 'View details', 'p.out': 'Out of stock',
  'p.in': 'In stock', 'p.left': 'only {n} left', 'p.reviews': '{n} reviews',
  'p.petsafe': 'Pet friendly', 'p.pettoxic': 'Toxic if eaten',
  'p.height': 'Height', 'p.pot': 'Pot size', 'p.difficulty': 'Care level',
  'p.desc': 'Description', 'p.careguide': 'Care guide', 'p.delivery': 'Delivery & returns',
  'p.related': 'You may also like', 'p.qty': 'Quantity', 'p.ask': 'Ask the AI about this plant',
  'p.deliverytext': 'Dispatched within 24 hours in insulated, plastic-free packaging. Free delivery on orders over $75. If a plant arrives damaged, send us a photo within 7 days for a free replacement.',
  'p.back': 'Back to plants',

  'cart.title': 'Your Cart', 'cart.empty': 'Your cart is empty.', 'cart.emptycta': 'Browse plants',
  'cart.item': 'Item', 'cart.price': 'Price', 'cart.qty': 'Qty', 'cart.total': 'Total',
  'cart.remove': 'Remove', 'cart.subtotal': 'Subtotal', 'cart.shipping': 'Shipping',
  'cart.free': 'Free', 'cart.tax': 'Tax (estimated)', 'cart.grand': 'Order total',
  'cart.checkout': 'Proceed to Checkout', 'cart.continue': 'Continue shopping',
  'cart.promo': 'Promo code', 'cart.apply': 'Apply', 'cart.promoOk': 'Promo applied: {n}% off',
  'cart.promoBad': 'That code is not valid.', 'cart.discount': 'Discount',
  'cart.freeHint': 'Add {n} more for free shipping.',

  'co.title': 'Checkout',
  'co.step1': 'Delivery', 'co.step2': 'Shipping', 'co.step3': 'Payment', 'co.step4': 'Confirm',
  'co.name': 'Full name', 'co.email': 'Email address', 'co.phone': 'Phone number',
  'co.country': 'Country', 'co.city': 'City', 'co.address': 'Street address',
  'co.zip': 'Postal code', 'co.notes': 'Delivery notes (optional)',
  'co.ship.std': 'Standard', 'co.ship.stds': '4–6 business days',
  'co.ship.exp': 'Express', 'co.ship.exps': '2–3 business days',
  'co.ship.next': 'Next day', 'co.ship.nexts': 'Order before 14:00',
  'co.pay.card': 'Credit / debit card', 'co.pay.cards': 'Visa, Mastercard, UnionPay, Mir',
  'co.pay.wallet': 'Digital wallet', 'co.pay.wallets': 'Apple Pay, Google Pay, Alipay',
  'co.pay.cod': 'Cash on delivery', 'co.pay.cods': 'Pay the courier on arrival',
  'co.card.num': 'Card number', 'co.card.name': 'Name on card',
  'co.card.exp': 'Expiry (MM/YY)', 'co.card.cvc': 'CVC',
  'co.next': 'Continue', 'co.back': 'Back', 'co.place': 'Place Order',
  'co.processing': 'Processing payment…', 'co.summary': 'Order summary',
  'co.secure': 'Encrypted demo checkout — no real payment is taken',
  'co.req': 'This field is required.', 'co.bademail': 'Enter a valid email address.',
  'co.badcard': 'Enter a valid card number.', 'co.badexp': 'Enter a valid future expiry date.',
  'co.badcvc': 'CVC must be 3 or 4 digits.', 'co.badphone': 'Enter a valid phone number.',
  'co.agree': 'I agree to the terms of sale and the privacy policy.',
  'co.review': 'Review your order', 'co.editinfo': 'Edit',
  'co.demoTitle': 'Demo payment',
  'co.demoBody': 'This is a portfolio demonstration. Card details are validated in your browser and never sent anywhere. Use 4242 4242 4242 4242 to simulate success, or 4000 0000 0000 0002 to simulate a decline.',
  'co.declined': 'Your card was declined. Please try another payment method.',

  'ok.title': 'Thank you — your order is confirmed!',
  'ok.sub': 'We have emailed a confirmation to {email}. Your plants are being prepared with care.',
  'ok.order': 'Order number', 'ok.eta': 'Estimated delivery', 'ok.track': 'Track this order',
  'ok.shop': 'Continue shopping', 'ok.save': 'Save your order number to track delivery at any time.',

  'tr.title': 'Track Your Order', 'tr.sub': 'Enter your order number to see exactly where your plants are.',
  'tr.ph': 'e.g. GH-7K2M9X', 'tr.btn': 'Track', 'tr.notfound': 'No order found with that number. Check and try again.',
  'tr.recent': 'Your recent orders', 'tr.placed': 'Placed', 'tr.items': 'items', 'tr.status': 'Status',
  'tr.st1': 'Order confirmed', 'tr.st1s': 'We received your order and payment.',
  'tr.st2': 'Preparing plants', 'tr.st2s': 'Our team is selecting and wrapping your plants.',
  'tr.st3': 'Dispatched', 'tr.st3s': 'Your parcel has left our nursery.',
  'tr.st4': 'In transit', 'tr.st4s': 'On the way to your city.',
  'tr.st5': 'Out for delivery', 'tr.st5s': 'The courier will reach you today.',
  'tr.st6': 'Delivered', 'tr.st6s': 'Enjoy your new plants!',
  'tr.courier': 'Courier', 'tr.tracking': 'Tracking ID', 'tr.eta': 'Estimated arrival',
  'tr.address': 'Delivering to', 'tr.contents': 'Order contents', 'tr.advance': 'Simulate next step',
  'tr.demoNote': 'Demo: orders progress automatically over time. Use the button to advance manually.',

  'ai.title': 'AI Plant Care Doctor', 'ai.sub': 'Ask anything about watering, light, pests, soil or reviving a sick plant. Answers come instantly.',
  'ai.ph': 'Ask anything… e.g. why are my monstera leaves turning yellow?',
  'ai.send': 'Ask', 'ai.thinking': 'Thinking…', 'ai.clear': 'New conversation',
  'ai.greeting': "Hello! I'm your plant care assistant. Tell me what's happening with your plant — the species, the symptom, and how you've been watering it — and I'll give you a clear plan.",
  'ai.sug': 'Try asking',
  'ai.sug1': 'Why are my monstera leaves turning yellow?',
  'ai.sug2': 'How often should I water a snake plant?',
  'ai.sug3': 'How do I get rid of fungus gnats?',
  'ai.sug4': 'Which plants are safe for cats?',
  'ai.sug5': 'My fern has brown crispy tips — what now?',
  'ai.sug6': 'When should I repot my plant?',
  'ai.offtopic': 'Sorry — I can only help with plants and plant care. Ask me about watering, light, soil, pests, repotting, propagation, or whether a plant is safe for pets, and I will give you a clear answer.',
  'ai.disclaimer': 'Guidance is general horticultural advice. For a plant that is valuable or badly affected, consult a local specialist.',
  'ai.engine.local': 'Built-in knowledge base',
  'ai.engine.live': 'Claude AI (live)',
  'ai.connect': 'Connect live AI',
  'ai.connected': 'Live AI connected',
  'ai.keyTitle': 'Use the live Claude model',
  'ai.keyBody': 'The assistant already answers from a built-in horticultural knowledge base, offline. To route questions to the live Claude model instead, paste an Anthropic API key. It is stored only in this browser and sent only to api.anthropic.com.',
  'ai.keyPh': 'sk-ant-…', 'ai.keySave': 'Save key', 'ai.keyRemove': 'Remove key',
  'ai.keyNote': 'Never paste a production key into a site you do not control. This page is open source — read the code first.',
  'ai.error': 'The live model could not be reached, so I answered from the built-in knowledge base instead.',
  'ai.relatedPlants': 'Plants that match this advice',
  'ai.copy': 'Copy', 'ai.copied': 'Copied',
  'ai.topics': 'Popular care topics',

  'ct.title': 'Contact Us', 'ct.sub': "Questions about an order or a struggling plant? We reply within one working day.",
  'ct.name': 'Your name', 'ct.email': 'Email', 'ct.subject': 'Subject', 'ct.msg': 'Message',
  'ct.send': 'Send message', 'ct.sent': 'Thank you — your message has been sent.',
  'ct.addr': 'Nursery address', 'ct.hours': 'Opening hours', 'ct.hourstext': 'Mon–Sat 09:00–19:00, Sun 10:00–16:00',
  'ct.phone': 'Phone', 'ct.emaillabel': 'Email',

  'ab.title': 'About GreenHaven', 'ab.lead': 'We are a family nursery that has been growing plants for five years and shipping them to plant lovers in more than 20 countries.',
  'ab.story': 'Our story', 'ab.storytext': 'GreenHaven began as a single glasshouse and a simple belief: that everyone deserves something living in their home. Today our team of growers, botanists and couriers raises more than a thousand varieties, from hardy snake plants to rare variegated monsteras. Every plant is grown without synthetic pesticides, hardened off before it ships, and packed in plastic-free, compostable materials.',
  'ab.photos': 'Photography credits', 'ab.photoslead': 'Plants without a photograph are shown as illustrations drawn for this site.', 'ab.values': 'What we stand for',
  'ab.v1': 'Grown, not resold', 'ab.v1s': 'Almost everything we sell is propagated in our own glasshouses.',
  'ab.v2': 'Plastic-free shipping', 'ab.v2s': 'Moulded pulp, paper tape and compostable wrap only.',
  'ab.v3': 'Advice for life', 'ab.v3s': 'Free care support for as long as you own the plant.',
  'ab.v4': 'Replace, not refund', 'ab.v4s': 'If a plant fails in its first month we send a new one.',

  'ft.tag': 'Plants for a greener tomorrow.',
  'ft.shop': 'Shop', 'ft.help': 'Help', 'ft.company': 'Company', 'ft.follow': 'Follow us',
  'ft.newsletter': 'Plant care tips in your inbox', 'ft.nph': 'Your email', 'ft.njoin': 'Join',
  'ft.njoined': 'Welcome aboard! 🌱',
  'ft.faq': 'FAQ', 'ft.shipping': 'Shipping', 'ft.returns': 'Returns', 'ft.privacy': 'Privacy',
  'ft.terms': 'Terms', 'ft.rights': 'All rights reserved.',
  'ft.demo': 'A demonstration project — no real orders are fulfilled and no payments are taken.',

  'c.currency': 'Currency', 'c.language': 'Language', 'c.loading': 'Loading…',
  'c.page': 'Page', 'c.of': 'of', 'c.prev': 'Previous', 'c.next': 'Next',
  'c.rated': 'Rated {r} out of 5'
},

/* ========================================================= UZBEK ======= */
uz: {
  'meta.title': 'GreenHaven Nursery — O‘simliklar, gullar va sun’iy intellekt yordami',
  'meta.desc': 'Sog‘lom xonaki va tashqi o‘simliklarni xarid qiling, buyurtmangizni kuzating va AI o‘simlik shifokoridan parvarish haqida so‘rang.',

  'topbar.msg': '$75 dan ortiq buyurtmalarga bepul yetkazish · Umrbod parvarish yordami',
  'nav.home': 'Bosh sahifa', 'nav.shop': 'O‘simliklar', 'nav.care': 'AI Parvarish', 'nav.track': 'Buyurtmani kuzatish',
  'nav.about': 'Biz haqimizda', 'nav.contact': 'Aloqa', 'nav.cart': 'Savat', 'nav.quote': 'Narx olish',
  'nav.menu': 'Menyu', 'nav.close': 'Yopish', 'nav.search': 'O‘simlik qidirish',

  'hero.eyebrow': 'Tabiatni uyingizga olib keling',
  'hero.title1': 'Go‘zal o‘simliklar', 'hero.title2': 'baxtliroq va', 'hero.title3': 'yashilroq ertangi kun uchun.',
  'hero.sub': 'Uyingiz, ofisingiz va bog‘ingizni tabiiy go‘zallik bilan jonlantiradigan xonaki, tashqi va dekorativ o‘simliklarning keng turlarini kashf eting.',
  'hero.cta1': 'O‘simliklarni ko‘rish', 'hero.cta2': 'AI shifokordan so‘rash',
  'hero.note': 'O‘simliklar hayotni go‘zallashtiradi',
  'hero.f1': 'Keng tanlov', 'hero.f1s': '1000+ o‘simlik',
  'hero.f2': 'Uyga yetkazish', 'hero.f2s': 'Xavfsiz va ishonchli',
  'hero.f3': 'Sifatli o‘simliklar', 'hero.f3s': 'Sog‘lom va yangi',
  'hero.f4': 'Ekologik toza', 'hero.f4s': 'Barqaror hayot',

  'coll.eyebrow': 'Kolleksiyamizni ko‘ring', 'coll.title': 'Mukammal o‘simlikni toping',
  'coll.sub': 'Xonaki yashillikdan tortib bog‘ daraxtlarigacha — yashil maydoningiz uchun hammasi bor.',

  'cat.indoor': 'Xonaki o‘simliklar', 'cat.indoor.s': 'Uyga tarovat olib keling',
  'cat.outdoor': 'Tashqi o‘simliklar', 'cat.outdoor.s': 'Bog‘ingiz uchun ideal',
  'cat.succulent': 'Sukkulent va kaktuslar', 'cat.succulent.s': 'Parvarishi oson go‘zallik',
  'cat.flowering': 'Gulli o‘simliklar', 'cat.flowering.s': 'Yil bo‘yi rang-baranglik',
  'cat.herb': 'Ko‘katlar va ziravorlar', 'cat.herb.s': 'Oshxonangizdan yangi',
  'cat.bonsai': 'Bonsay va noyob turlar', 'cat.bonsai.s': 'Tirik san’at asarlari',
  'cat.all': 'Barcha o‘simliklar',

  'about.eyebrow': 'Biz haqimizda', 'about.title1': 'Baxt yetishtiramiz', 'about.title2': 'Har bir o‘simlik bilan',
  'about.body': 'GreenHaven Nursery’da biz o‘simliklar shunchaki bezak emas deb hisoblaymiz — ular makoningizga hayot, ijobiylik va osoyishtalik olib keladi. Yashillikka bo‘lgan mehr bilan biz yuqori sifatli o‘simliklar, mutaxassis maslahati va ishonchli xizmatni taklif qilamiz.',
  'about.cta': 'Batafsil',
  'about.s1': 'Yillik tajriba', 'about.s2': 'Mamnun mijozlar', 'about.s3': 'O‘simlik turlari',
  'about.quote': 'Yaxshi o‘simlik — yaxshi kayfiyat',

  'why.eyebrow': 'Nega aynan biz', 'why.title': 'Oddiy ko‘chatzordan ko‘ra ko‘proq',
  'why.1': 'Sog‘lom o‘simliklar', 'why.1s': 'Ehtiyotkorlik bilan parvarishlangan va tekshirilgan',
  'why.2': 'Mutaxassis maslahati', 'why.2s': 'Parvarish bo‘yicha mutaxassislardan maslahat oling',
  'why.3': 'Tez yetkazib berish', 'why.3s': 'Xavfsiz qadoqlash va eshigingizgacha yetkazish',
  'why.4': 'Doimiy yordam', 'why.4s': 'Xariddan keyin ham yoningizdamiz',

  'band.title': 'Keling, dunyoni birgalikda yashilroq qilamiz',
  'band.sub': 'Minglab o‘simlik ixlosmandlariga qo‘shiling va yashil safaringizni bugun boshlang.',
  'band.cta': 'Xarid qilish',

  'feat.eyebrow': 'Eng sevimlilari', 'feat.title': 'Eng ko‘p sotilganlar', 'feat.sub': 'Dunyo bo‘ylab minglab o‘simlikseverlar tanlovi.',
  'feat.all': 'Barcha o‘simliklar',

  'shop.title': 'Barcha o‘simliklar', 'shop.sub': 'ta o‘simlik topildi',
  'shop.filters': 'Filtrlar', 'shop.category': 'Turkum', 'shop.price': 'Narx oralig‘i',
  'shop.light': 'Yorug‘lik ehtiyoji', 'shop.care': 'Parvarish darajasi', 'shop.petsafe': 'Faqat uy hayvonlariga xavfsiz',
  'shop.sort': 'Saralash', 'shop.sort.featured': 'Tavsiya etilgan', 'shop.sort.priceAsc': 'Narx: arzondan qimmatga',
  'shop.sort.priceDesc': 'Narx: qimmatdan arzonga', 'shop.sort.rating': 'Eng yuqori reyting', 'shop.sort.name': 'Nomi A–Z',
  'shop.clear': 'Tozalash', 'shop.none': 'Filtrlaringizga mos o‘simlik topilmadi.',
  'shop.search.ph': 'Nomi bo‘yicha qidirish…',

  'care.easy': 'Oson', 'care.medium': 'O‘rtacha', 'care.hard': 'Tajribali uchun',
  'light.low': 'Kam yorug‘lik', 'light.medium': 'O‘rtacha yorug‘lik', 'light.bright': 'Yorug‘, to‘g‘ridan emas', 'light.direct': 'To‘liq quyosh',
  'water.low': 'Har 2–3 haftada', 'water.medium': 'Har 7–10 kunda', 'water.high': 'Har 3–5 kunda',
  'hum.low': 'Oddiy xona namligi', 'hum.medium': 'O‘rtacha namlik (50%)', 'hum.high': 'Yuqori namlik (60%+)',

  'p.add': 'Savatga qo‘shish', 'p.added': 'Qo‘shildi ✓', 'p.view': 'Batafsil', 'p.out': 'Sotuvda yo‘q',
  'p.in': 'Mavjud', 'p.left': 'atigi {n} ta qoldi', 'p.reviews': '{n} ta sharh',
  'p.petsafe': 'Uy hayvonlariga xavfsiz', 'p.pettoxic': 'Yeyilsa zaharli',
  'p.height': 'Balandligi', 'p.pot': 'Tuvak o‘lchami', 'p.difficulty': 'Parvarish darajasi',
  'p.desc': 'Tavsif', 'p.careguide': 'Parvarish qo‘llanmasi', 'p.delivery': 'Yetkazish va qaytarish',
  'p.related': 'Sizga yoqishi mumkin', 'p.qty': 'Miqdori', 'p.ask': 'Bu o‘simlik haqida AI dan so‘rang',
  'p.deliverytext': '24 soat ichida issiqlikdan himoyalangan, plastiksiz qadoqda jo‘natiladi. $75 dan ortiq buyurtmalarga yetkazish bepul. O‘simlik shikastlangan holda yetib kelsa, 7 kun ichida rasm yuboring — bepul almashtiramiz.',
  'p.back': 'O‘simliklarga qaytish',

  'cart.title': 'Savatingiz', 'cart.empty': 'Savatingiz bo‘sh.', 'cart.emptycta': 'O‘simliklarni ko‘rish',
  'cart.item': 'Mahsulot', 'cart.price': 'Narxi', 'cart.qty': 'Soni', 'cart.total': 'Jami',
  'cart.remove': 'O‘chirish', 'cart.subtotal': 'Oraliq jami', 'cart.shipping': 'Yetkazish',
  'cart.free': 'Bepul', 'cart.tax': 'Soliq (taxminiy)', 'cart.grand': 'Umumiy summa',
  'cart.checkout': 'To‘lovga o‘tish', 'cart.continue': 'Xaridni davom ettirish',
  'cart.promo': 'Promo-kod', 'cart.apply': 'Qo‘llash', 'cart.promoOk': 'Promo qo‘llandi: {n}% chegirma',
  'cart.promoBad': 'Bu kod yaroqsiz.', 'cart.discount': 'Chegirma',
  'cart.freeHint': 'Bepul yetkazish uchun yana {n} qo‘shing.',

  'co.title': 'Buyurtmani rasmiylashtirish',
  'co.step1': 'Yetkazish', 'co.step2': 'Usul', 'co.step3': 'To‘lov', 'co.step4': 'Tasdiqlash',
  'co.name': 'To‘liq ism', 'co.email': 'Email manzil', 'co.phone': 'Telefon raqam',
  'co.country': 'Mamlakat', 'co.city': 'Shahar', 'co.address': 'Ko‘cha, uy',
  'co.zip': 'Pochta indeksi', 'co.notes': 'Yetkazish izohi (ixtiyoriy)',
  'co.ship.std': 'Oddiy', 'co.ship.stds': '4–6 ish kuni',
  'co.ship.exp': 'Tezkor', 'co.ship.exps': '2–3 ish kuni',
  'co.ship.next': 'Ertangi kun', 'co.ship.nexts': 'Soat 14:00 gacha buyurtma bering',
  'co.pay.card': 'Bank kartasi', 'co.pay.cards': 'Visa, Mastercard, UnionPay, Mir, Humo, Uzcard',
  'co.pay.wallet': 'Raqamli hamyon', 'co.pay.wallets': 'Apple Pay, Google Pay, Payme, Click',
  'co.pay.cod': 'Yetkazilganda naqd', 'co.pay.cods': 'Kuryerga yetib kelganda to‘lang',
  'co.card.num': 'Karta raqami', 'co.card.name': 'Kartadagi ism',
  'co.card.exp': 'Amal qilish muddati (OO/YY)', 'co.card.cvc': 'CVC',
  'co.next': 'Davom etish', 'co.back': 'Orqaga', 'co.place': 'Buyurtma berish',
  'co.processing': 'To‘lov amalga oshirilmoqda…', 'co.summary': 'Buyurtma xulosasi',
  'co.secure': 'Shifrlangan demo to‘lov — haqiqiy pul yechilmaydi',
  'co.req': 'Bu maydon to‘ldirilishi shart.', 'co.bademail': 'To‘g‘ri email manzil kiriting.',
  'co.badcard': 'To‘g‘ri karta raqamini kiriting.', 'co.badexp': 'Kelajakdagi to‘g‘ri sanani kiriting.',
  'co.badcvc': 'CVC 3 yoki 4 raqamdan iborat bo‘lishi kerak.', 'co.badphone': 'To‘g‘ri telefon raqam kiriting.',
  'co.agree': 'Sotuv shartlari va maxfiylik siyosatiga roziman.',
  'co.review': 'Buyurtmangizni tekshiring', 'co.editinfo': 'Tahrirlash',
  'co.demoTitle': 'Demo to‘lov',
  'co.demoBody': 'Bu namoyish loyihasi. Karta ma’lumotlari faqat brauzeringizda tekshiriladi va hech qayerga yuborilmaydi. Muvaffaqiyatli to‘lov uchun 4242 4242 4242 4242, rad etish uchun 4000 0000 0000 0002 dan foydalaning.',
  'co.declined': 'Kartangiz rad etildi. Boshqa to‘lov usulini tanlang.',

  'ok.title': 'Rahmat — buyurtmangiz tasdiqlandi!',
  'ok.sub': 'Tasdiqnomani {email} manziliga yubordik. O‘simliklaringiz ehtiyotkorlik bilan tayyorlanmoqda.',
  'ok.order': 'Buyurtma raqami', 'ok.eta': 'Taxminiy yetkazish', 'ok.track': 'Buyurtmani kuzatish',
  'ok.shop': 'Xaridni davom ettirish', 'ok.save': 'Yetkazishni kuzatish uchun buyurtma raqamini saqlab qo‘ying.',

  'tr.title': 'Buyurtmangizni kuzating', 'tr.sub': 'O‘simliklaringiz qayerdaligini bilish uchun buyurtma raqamini kiriting.',
  'tr.ph': 'masalan GH-7K2M9X', 'tr.btn': 'Kuzatish', 'tr.notfound': 'Bunday raqamli buyurtma topilmadi. Tekshirib, qayta urinib ko‘ring.',
  'tr.recent': 'Oxirgi buyurtmalaringiz', 'tr.placed': 'Berilgan', 'tr.items': 'ta mahsulot', 'tr.status': 'Holati',
  'tr.st1': 'Buyurtma tasdiqlandi', 'tr.st1s': 'Buyurtma va to‘lovni qabul qildik.',
  'tr.st2': 'O‘simliklar tayyorlanmoqda', 'tr.st2s': 'Jamoamiz o‘simliklarni tanlab, o‘rab bermoqda.',
  'tr.st3': 'Jo‘natildi', 'tr.st3s': 'Posilka ko‘chatzorimizdan chiqdi.',
  'tr.st4': 'Yo‘lda', 'tr.st4s': 'Shahringizga yo‘l olgan.',
  'tr.st5': 'Yetkazishga chiqdi', 'tr.st5s': 'Kuryer bugun yetib boradi.',
  'tr.st6': 'Yetkazildi', 'tr.st6s': 'Yangi o‘simliklaringizdan bahramand bo‘ling!',
  'tr.courier': 'Kuryer', 'tr.tracking': 'Kuzatuv ID', 'tr.eta': 'Taxminiy yetib kelish',
  'tr.address': 'Yetkazish manzili', 'tr.contents': 'Buyurtma tarkibi', 'tr.advance': 'Keyingi bosqichni ko‘rsatish',
  'tr.demoNote': 'Demo: buyurtmalar vaqt o‘tishi bilan avtomatik oldinga siljiydi. Qo‘lda siljitish uchun tugmadan foydalaning.',

  'ai.title': 'AI O‘simlik Shifokori', 'ai.sub': 'Sug‘orish, yorug‘lik, zararkunandalar, tuproq yoki kasal o‘simlikni tiklash haqida so‘rang. Javob darhol keladi.',
  'ai.ph': 'Savolingizni yozing… masalan: monstera barglari nega sarg‘aymoqda?',
  'ai.send': 'So‘rash', 'ai.thinking': 'O‘ylamoqda…', 'ai.clear': 'Yangi suhbat',
  'ai.greeting': 'Salom! Men sizning o‘simlik parvarishi bo‘yicha yordamchingizman. O‘simlik turini, belgilarini va qanday sug‘organingizni ayting — men aniq reja beraman.',
  'ai.sug': 'Namuna savollar',
  'ai.sug1': 'Monstera barglari nega sarg‘aymoqda?',
  'ai.sug2': 'Sansevieriyani qanchalik tez-tez sug‘orish kerak?',
  'ai.sug3': 'Tuproq pashshalaridan qanday qutulaman?',
  'ai.sug4': 'Mushuklar uchun qaysi o‘simliklar xavfsiz?',
  'ai.sug5': 'Paportnikning uchlari qurib qoldi — nima qilay?',
  'ai.sug6': 'O‘simlikni qachon ko‘chirib o‘tkazish kerak?',
  'ai.offtopic': 'Kechirasiz — men faqat o‘simliklar va ularni parvarish qilish bo‘yicha yordam bera olaman. Sug‘orish, yorug‘lik, tuproq, zararkunandalar, ko‘chirib o‘tkazish, ko‘paytirish yoki o‘simlik uy hayvonlari uchun xavfsizmi — shular haqida so‘rang, aniq javob beraman.',
  'ai.disclaimer': 'Maslahatlar umumiy bog‘dorchilik tavsiyalari. Qimmatbaho yoki og‘ir ahvoldagi o‘simlik uchun mahalliy mutaxassisga murojaat qiling.',
  'ai.engine.local': 'Ichki bilimlar bazasi',
  'ai.engine.live': 'Claude AI (jonli)',
  'ai.connect': 'Jonli AI ulash',
  'ai.connected': 'Jonli AI ulandi',
  'ai.keyTitle': 'Jonli Claude modelidan foydalanish',
  'ai.keyBody': 'Yordamchi allaqachon internetdan mustaqil, ichki bog‘dorchilik bilimlar bazasidan javob beradi. Savollarni jonli Claude modeliga yo‘naltirish uchun Anthropic API kalitini kiriting. U faqat shu brauzerda saqlanadi va faqat api.anthropic.com ga yuboriladi.',
  'ai.keyPh': 'sk-ant-…', 'ai.keySave': 'Kalitni saqlash', 'ai.keyRemove': 'Kalitni o‘chirish',
  'ai.keyNote': 'O‘zingiz nazorat qilmaydigan saytga hech qachon ishlab chiqarish kalitini kiritmang. Bu sahifa ochiq kodli — avval kodni o‘qing.',
  'ai.error': 'Jonli modelga ulanib bo‘lmadi, shuning uchun ichki bilimlar bazasidan javob berdim.',
  'ai.relatedPlants': 'Shu maslahatga mos o‘simliklar',
  'ai.copy': 'Nusxalash', 'ai.copied': 'Nusxalandi',
  'ai.topics': 'Ommabop parvarish mavzulari',

  'ct.title': 'Biz bilan bog‘laning', 'ct.sub': 'Buyurtma yoki kasal o‘simlik haqida savolingiz bormi? Bir ish kuni ichida javob beramiz.',
  'ct.name': 'Ismingiz', 'ct.email': 'Email', 'ct.subject': 'Mavzu', 'ct.msg': 'Xabar',
  'ct.send': 'Xabar yuborish', 'ct.sent': 'Rahmat — xabaringiz yuborildi.',
  'ct.addr': 'Ko‘chatzor manzili', 'ct.hours': 'Ish vaqti', 'ct.hourstext': 'Du–Sha 09:00–19:00, Yak 10:00–16:00',
  'ct.phone': 'Telefon', 'ct.emaillabel': 'Email',

  'ab.title': 'GreenHaven haqida', 'ab.lead': 'Biz besh yildan beri o‘simlik yetishtirib, 20 dan ortiq mamlakatdagi o‘simlikseverlarga jo‘natayotgan oilaviy ko‘chatzormiz.',
  'ab.story': 'Bizning tariximiz', 'ab.storytext': 'GreenHaven bitta issiqxona va oddiy ishonchdan boshlandi: har bir insonning uyida tirik narsa bo‘lishi kerak. Bugun bog‘bonlar, botaniklar va kuryerlardan iborat jamoamiz mingdan ortiq turni — chidamli sansevieriyadan noyob variegat monsteragacha — yetishtiradi. Har bir o‘simlik sintetik pestitsidlarsiz o‘stiriladi, jo‘natishdan oldin chiniqtiriladi va plastiksiz, parchalanadigan materialda qadoqlanadi.',
  'ab.photos': 'Fotosuratlar mualliflari', 'ab.photoslead': 'Fotosurati yo‘q o‘simliklar shu sayt uchun chizilgan rasmlarda ko‘rsatilgan.', 'ab.values': 'Biz nimaga tayanamiz',
  'ab.v1': 'Yetishtiramiz, qayta sotmaymiz', 'ab.v1s': 'Sotadiganimizning deyarli barchasi o‘z issiqxonamizda ko‘paytiriladi.',
  'ab.v2': 'Plastiksiz jo‘natish', 'ab.v2s': 'Faqat qolipli qog‘oz massasi, qog‘oz lenta va parchalanadigan o‘ram.',
  'ab.v3': 'Umrbod maslahat', 'ab.v3s': 'O‘simlik sizda ekan, parvarish yordami bepul.',
  'ab.v4': 'Pul emas, almashtirish', 'ab.v4s': 'Birinchi oyda o‘simlik nobud bo‘lsa, yangisini yuboramiz.',

  'ft.tag': 'Yashilroq ertangi kun uchun o‘simliklar.',
  'ft.shop': 'Do‘kon', 'ft.help': 'Yordam', 'ft.company': 'Kompaniya', 'ft.follow': 'Bizni kuzating',
  'ft.newsletter': 'Parvarish maslahatlari emailingizga', 'ft.nph': 'Emailingiz', 'ft.njoin': 'Qo‘shilish',
  'ft.njoined': 'Xush kelibsiz! 🌱',
  'ft.faq': 'Savol-javob', 'ft.shipping': 'Yetkazish', 'ft.returns': 'Qaytarish', 'ft.privacy': 'Maxfiylik',
  'ft.terms': 'Shartlar', 'ft.rights': 'Barcha huquqlar himoyalangan.',
  'ft.demo': 'Namoyish loyihasi — haqiqiy buyurtmalar bajarilmaydi va to‘lov olinmaydi.',

  'c.currency': 'Valyuta', 'c.language': 'Til', 'c.loading': 'Yuklanmoqda…',
  'c.page': 'Sahifa', 'c.of': '/', 'c.prev': 'Oldingi', 'c.next': 'Keyingi',
  'c.rated': '5 dan {r} ball'
},

/* ========================================================= RUSSIAN ===== */
ru: {
  'meta.title': 'GreenHaven Nursery — растения, цветы и ИИ-помощник по уходу',
  'meta.desc': 'Покупайте здоровые комнатные и садовые растения, отслеживайте заказ и спрашивайте ИИ-доктора о любом уходе за растениями.',

  'topbar.msg': 'Бесплатная доставка от $75 · Поддержка по уходу навсегда',
  'nav.home': 'Главная', 'nav.shop': 'Растения', 'nav.care': 'ИИ-уход', 'nav.track': 'Отследить заказ',
  'nav.about': 'О нас', 'nav.contact': 'Контакты', 'nav.cart': 'Корзина', 'nav.quote': 'Запросить цену',
  'nav.menu': 'Меню', 'nav.close': 'Закрыть', 'nav.search': 'Поиск растений',

  'hero.eyebrow': 'Принесите природу домой',
  'hero.title1': 'Красивые растения', 'hero.title2': 'для счастливого,', 'hero.title3': 'зелёного завтра.',
  'hero.sub': 'Откройте для себя широкий выбор комнатных, садовых и декоративных растений, которые оживят ваш дом, офис и сад природной красотой.',
  'hero.cta1': 'Смотреть растения', 'hero.cta2': 'Спросить ИИ-доктора',
  'hero.note': 'С растениями жизнь лучше',
  'hero.f1': 'Большой выбор', 'hero.f1s': '1000+ растений',
  'hero.f2': 'Доставка на дом', 'hero.f2s': 'Надёжно и безопасно',
  'hero.f3': 'Качественные растения', 'hero.f3s': 'Здоровые и свежие',
  'hero.f4': 'Экологичность', 'hero.f4s': 'Устойчивый образ жизни',

  'coll.eyebrow': 'Наша коллекция', 'coll.title': 'Найдите идеальное растение',
  'coll.sub': 'От комнатной зелени до садовых деревьев — у нас есть всё для вашего зелёного уголка.',

  'cat.indoor': 'Комнатные растения', 'cat.indoor.s': 'Свежесть в вашем доме',
  'cat.outdoor': 'Садовые растения', 'cat.outdoor.s': 'Идеально для сада',
  'cat.succulent': 'Суккуленты и кактусы', 'cat.succulent.s': 'Красота без хлопот',
  'cat.flowering': 'Цветущие растения', 'cat.flowering.s': 'Цвет круглый год',
  'cat.herb': 'Травы и зелень', 'cat.herb.s': 'Свежесть с вашей кухни',
  'cat.bonsai': 'Бонсай и редкие виды', 'cat.bonsai.s': 'Живые произведения искусства',
  'cat.all': 'Все растения',

  'about.eyebrow': 'О нас', 'about.title1': 'Выращиваем счастье', 'about.title2': 'по одному растению',
  'about.body': 'В GreenHaven Nursery мы верим, что растения не просто украшают — они приносят жизнь, позитив и покой в ваше пространство. С любовью к зелени мы предлагаем качественные растения, экспертные советы и надёжный сервис.',
  'about.cta': 'Подробнее',
  'about.s1': 'Лет опыта', 'about.s2': 'Довольных клиентов', 'about.s3': 'Сортов растений',
  'about.quote': 'Хорошие растения — хорошее настроение',

  'why.eyebrow': 'Почему мы', 'why.title': 'Больше, чем питомник',
  'why.1': 'Здоровые растения', 'why.1s': 'Бережно выращены и проверены по качеству',
  'why.2': 'Экспертный совет', 'why.2s': 'Консультации специалистов по уходу',
  'why.3': 'Быстрая доставка', 'why.3s': 'Надёжная упаковка и доставка до двери',
  'why.4': 'Поддержка после покупки', 'why.4s': 'Мы рядом и после оформления заказа',

  'band.title': 'Сделаем мир зеленее вместе',
  'band.sub': 'Присоединяйтесь к тысячам любителей растений и начните свой зелёный путь сегодня.',
  'band.cta': 'В магазин',

  'feat.eyebrow': 'Выбор покупателей', 'feat.title': 'Хиты продаж', 'feat.sub': 'Выбор тысяч любителей растений по всему миру.',
  'feat.all': 'Все растения',

  'shop.title': 'Все растения', 'shop.sub': 'растений найдено',
  'shop.filters': 'Фильтры', 'shop.category': 'Категория', 'shop.price': 'Диапазон цен',
  'shop.light': 'Потребность в свете', 'shop.care': 'Уровень ухода', 'shop.petsafe': 'Только безопасные для животных',
  'shop.sort': 'Сортировка', 'shop.sort.featured': 'Рекомендуемые', 'shop.sort.priceAsc': 'Цена: по возрастанию',
  'shop.sort.priceDesc': 'Цена: по убыванию', 'shop.sort.rating': 'Высокий рейтинг', 'shop.sort.name': 'Название А–Я',
  'shop.clear': 'Сбросить', 'shop.none': 'Нет растений, подходящих под фильтры.',
  'shop.search.ph': 'Поиск по названию…',

  'care.easy': 'Лёгкий', 'care.medium': 'Средний', 'care.hard': 'Для опытных',
  'light.low': 'Мало света', 'light.medium': 'Умеренный свет', 'light.bright': 'Яркий рассеянный', 'light.direct': 'Прямое солнце',
  'water.low': 'Каждые 2–3 недели', 'water.medium': 'Каждые 7–10 дней', 'water.high': 'Каждые 3–5 дней',
  'hum.low': 'Обычная влажность', 'hum.medium': 'Средняя влажность (50%)', 'hum.high': 'Высокая влажность (60%+)',

  'p.add': 'В корзину', 'p.added': 'Добавлено ✓', 'p.view': 'Подробнее', 'p.out': 'Нет в наличии',
  'p.in': 'В наличии', 'p.left': 'осталось всего {n}', 'p.reviews': '{n} отзывов',
  'p.petsafe': 'Безопасно для животных', 'p.pettoxic': 'Ядовито при проглатывании',
  'p.height': 'Высота', 'p.pot': 'Размер горшка', 'p.difficulty': 'Уровень ухода',
  'p.desc': 'Описание', 'p.careguide': 'Руководство по уходу', 'p.delivery': 'Доставка и возврат',
  'p.related': 'Вам также может понравиться', 'p.qty': 'Количество', 'p.ask': 'Спросить ИИ об этом растении',
  'p.deliverytext': 'Отправка в течение 24 часов в термоизолирующей упаковке без пластика. Бесплатная доставка при заказе от $75. Если растение прибыло повреждённым, пришлите фото в течение 7 дней — заменим бесплатно.',
  'p.back': 'Назад к растениям',

  'cart.title': 'Ваша корзина', 'cart.empty': 'Ваша корзина пуста.', 'cart.emptycta': 'Смотреть растения',
  'cart.item': 'Товар', 'cart.price': 'Цена', 'cart.qty': 'Кол-во', 'cart.total': 'Сумма',
  'cart.remove': 'Удалить', 'cart.subtotal': 'Подытог', 'cart.shipping': 'Доставка',
  'cart.free': 'Бесплатно', 'cart.tax': 'Налог (оценка)', 'cart.grand': 'Итого к оплате',
  'cart.checkout': 'Перейти к оплате', 'cart.continue': 'Продолжить покупки',
  'cart.promo': 'Промокод', 'cart.apply': 'Применить', 'cart.promoOk': 'Промокод применён: скидка {n}%',
  'cart.promoBad': 'Этот код недействителен.', 'cart.discount': 'Скидка',
  'cart.freeHint': 'Добавьте ещё на {n} для бесплатной доставки.',

  'co.title': 'Оформление заказа',
  'co.step1': 'Доставка', 'co.step2': 'Способ', 'co.step3': 'Оплата', 'co.step4': 'Подтверждение',
  'co.name': 'Полное имя', 'co.email': 'Электронная почта', 'co.phone': 'Номер телефона',
  'co.country': 'Страна', 'co.city': 'Город', 'co.address': 'Улица, дом',
  'co.zip': 'Почтовый индекс', 'co.notes': 'Примечания к доставке (необязательно)',
  'co.ship.std': 'Стандартная', 'co.ship.stds': '4–6 рабочих дней',
  'co.ship.exp': 'Экспресс', 'co.ship.exps': '2–3 рабочих дня',
  'co.ship.next': 'На следующий день', 'co.ship.nexts': 'Закажите до 14:00',
  'co.pay.card': 'Банковская карта', 'co.pay.cards': 'Visa, Mastercard, UnionPay, Мир',
  'co.pay.wallet': 'Цифровой кошелёк', 'co.pay.wallets': 'Apple Pay, Google Pay, Alipay',
  'co.pay.cod': 'Оплата при получении', 'co.pay.cods': 'Заплатите курьеру при доставке',
  'co.card.num': 'Номер карты', 'co.card.name': 'Имя на карте',
  'co.card.exp': 'Срок действия (ММ/ГГ)', 'co.card.cvc': 'CVC',
  'co.next': 'Продолжить', 'co.back': 'Назад', 'co.place': 'Оформить заказ',
  'co.processing': 'Обработка платежа…', 'co.summary': 'Сводка заказа',
  'co.secure': 'Зашифрованная демо-оплата — реальные деньги не списываются',
  'co.req': 'Это поле обязательно.', 'co.bademail': 'Введите корректный email.',
  'co.badcard': 'Введите корректный номер карты.', 'co.badexp': 'Введите корректную будущую дату.',
  'co.badcvc': 'CVC должен состоять из 3 или 4 цифр.', 'co.badphone': 'Введите корректный номер телефона.',
  'co.agree': 'Я согласен с условиями продажи и политикой конфиденциальности.',
  'co.review': 'Проверьте заказ', 'co.editinfo': 'Изменить',
  'co.demoTitle': 'Демонстрационная оплата',
  'co.demoBody': 'Это демонстрационный проект. Данные карты проверяются в вашем браузере и никуда не отправляются. Используйте 4242 4242 4242 4242 для успешной оплаты или 4000 0000 0000 0002 для отказа.',
  'co.declined': 'Ваша карта отклонена. Попробуйте другой способ оплаты.',

  'ok.title': 'Спасибо — ваш заказ подтверждён!',
  'ok.sub': 'Мы отправили подтверждение на {email}. Ваши растения уже бережно готовят к отправке.',
  'ok.order': 'Номер заказа', 'ok.eta': 'Ожидаемая доставка', 'ok.track': 'Отследить заказ',
  'ok.shop': 'Продолжить покупки', 'ok.save': 'Сохраните номер заказа, чтобы отслеживать доставку.',

  'tr.title': 'Отследить заказ', 'tr.sub': 'Введите номер заказа, чтобы узнать, где сейчас ваши растения.',
  'tr.ph': 'например GH-7K2M9X', 'tr.btn': 'Отследить', 'tr.notfound': 'Заказ с таким номером не найден. Проверьте и попробуйте снова.',
  'tr.recent': 'Ваши последние заказы', 'tr.placed': 'Создан', 'tr.items': 'товаров', 'tr.status': 'Статус',
  'tr.st1': 'Заказ подтверждён', 'tr.st1s': 'Мы получили ваш заказ и оплату.',
  'tr.st2': 'Готовим растения', 'tr.st2s': 'Наша команда отбирает и упаковывает растения.',
  'tr.st3': 'Отправлено', 'tr.st3s': 'Посылка покинула наш питомник.',
  'tr.st4': 'В пути', 'tr.st4s': 'Едет в ваш город.',
  'tr.st5': 'Передано курьеру', 'tr.st5s': 'Курьер доставит сегодня.',
  'tr.st6': 'Доставлено', 'tr.st6s': 'Наслаждайтесь новыми растениями!',
  'tr.courier': 'Служба доставки', 'tr.tracking': 'Трек-номер', 'tr.eta': 'Ожидаемое прибытие',
  'tr.address': 'Адрес доставки', 'tr.contents': 'Состав заказа', 'tr.advance': 'Показать следующий этап',
  'tr.demoNote': 'Демо: заказы продвигаются автоматически со временем. Кнопка продвигает вручную.',

  'ai.title': 'ИИ-доктор по растениям', 'ai.sub': 'Спросите о поливе, свете, вредителях, почве или спасении больного растения. Ответ приходит сразу.',
  'ai.ph': 'Спросите что угодно… например: почему желтеют листья монстеры?',
  'ai.send': 'Спросить', 'ai.thinking': 'Думаю…', 'ai.clear': 'Новый разговор',
  'ai.greeting': 'Здравствуйте! Я ваш помощник по уходу за растениями. Расскажите, что происходит: вид растения, симптом и как вы его поливаете — и я дам чёткий план.',
  'ai.sug': 'Попробуйте спросить',
  'ai.sug1': 'Почему желтеют листья монстеры?',
  'ai.sug2': 'Как часто поливать сансевиерию?',
  'ai.sug3': 'Как избавиться от почвенных мошек?',
  'ai.sug4': 'Какие растения безопасны для кошек?',
  'ai.sug5': 'У папоротника сохнут кончики — что делать?',
  'ai.sug6': 'Когда пересаживать растение?',
  'ai.offtopic': 'Извините — я могу помочь только с растениями и уходом за ними. Спросите о поливе, свете, почве, вредителях, пересадке, размножении или о том, безопасно ли растение для питомцев, и я отвечу подробно.',
  'ai.disclaimer': 'Советы носят общий агрономический характер. Для ценного или сильно пострадавшего растения обратитесь к местному специалисту.',
  'ai.engine.local': 'Встроенная база знаний',
  'ai.engine.live': 'Claude AI (онлайн)',
  'ai.connect': 'Подключить ИИ',
  'ai.connected': 'ИИ подключён',
  'ai.keyTitle': 'Использовать живую модель Claude',
  'ai.keyBody': 'Помощник уже отвечает из встроенной агрономической базы знаний, без интернета. Чтобы направлять вопросы к живой модели Claude, вставьте ключ Anthropic API. Он хранится только в этом браузере и отправляется только на api.anthropic.com.',
  'ai.keyPh': 'sk-ant-…', 'ai.keySave': 'Сохранить ключ', 'ai.keyRemove': 'Удалить ключ',
  'ai.keyNote': 'Никогда не вставляйте рабочий ключ на сайт, который вам не принадлежит. Эта страница — открытый код, сначала прочитайте его.',
  'ai.error': 'Не удалось связаться с живой моделью, поэтому я ответил из встроенной базы знаний.',
  'ai.relatedPlants': 'Растения, подходящие под этот совет',
  'ai.copy': 'Копировать', 'ai.copied': 'Скопировано',
  'ai.topics': 'Популярные темы ухода',

  'ct.title': 'Свяжитесь с нами', 'ct.sub': 'Вопросы о заказе или о растении, которому плохо? Отвечаем в течение рабочего дня.',
  'ct.name': 'Ваше имя', 'ct.email': 'Email', 'ct.subject': 'Тема', 'ct.msg': 'Сообщение',
  'ct.send': 'Отправить', 'ct.sent': 'Спасибо — ваше сообщение отправлено.',
  'ct.addr': 'Адрес питомника', 'ct.hours': 'Часы работы', 'ct.hourstext': 'Пн–Сб 09:00–19:00, Вс 10:00–16:00',
  'ct.phone': 'Телефон', 'ct.emaillabel': 'Email',

  'ab.title': 'О GreenHaven', 'ab.lead': 'Мы семейный питомник: пять лет выращиваем растения и отправляем их любителям более чем в 20 стран.',
  'ab.story': 'Наша история', 'ab.storytext': 'GreenHaven начался с одной теплицы и простой веры: у каждого дома должно быть что-то живое. Сегодня наша команда садоводов, ботаников и курьеров выращивает более тысячи сортов — от выносливой сансевиерии до редкой вариегатной монстеры. Каждое растение выращено без синтетических пестицидов, закалено перед отправкой и упаковано в компостируемые материалы без пластика.',
  'ab.photos': 'Авторы фотографий', 'ab.photoslead': 'Растения без фотографии показаны иллюстрациями, нарисованными для этого сайта.', 'ab.values': 'Наши принципы',
  'ab.v1': 'Выращиваем, а не перепродаём', 'ab.v1s': 'Почти всё, что мы продаём, размножено в наших теплицах.',
  'ab.v2': 'Упаковка без пластика', 'ab.v2s': 'Только формованная целлюлоза, бумажный скотч и компостируемая плёнка.',
  'ab.v3': 'Советы навсегда', 'ab.v3s': 'Бесплатная поддержка по уходу, пока растение у вас.',
  'ab.v4': 'Замена, а не возврат', 'ab.v4s': 'Если растение погибло в первый месяц — пришлём новое.',

  'ft.tag': 'Растения для зелёного завтра.',
  'ft.shop': 'Магазин', 'ft.help': 'Помощь', 'ft.company': 'Компания', 'ft.follow': 'Мы в соцсетях',
  'ft.newsletter': 'Советы по уходу на почту', 'ft.nph': 'Ваш email', 'ft.njoin': 'Подписаться',
  'ft.njoined': 'Добро пожаловать! 🌱',
  'ft.faq': 'Вопросы', 'ft.shipping': 'Доставка', 'ft.returns': 'Возврат', 'ft.privacy': 'Конфиденциальность',
  'ft.terms': 'Условия', 'ft.rights': 'Все права защищены.',
  'ft.demo': 'Демонстрационный проект — реальные заказы не выполняются и оплата не взимается.',

  'c.currency': 'Валюта', 'c.language': 'Язык', 'c.loading': 'Загрузка…',
  'c.page': 'Страница', 'c.of': 'из', 'c.prev': 'Назад', 'c.next': 'Вперёд',
  'c.rated': 'Оценка {r} из 5'
},

/* ========================================================= CHINESE ===== */
zh: {
  'meta.title': 'GreenHaven 苗圃 — 植物、鲜花与 AI 养护助手',
  'meta.desc': '选购健康的室内外植物，追踪订单，并随时向 AI 植物医生咨询养护问题。',

  'topbar.msg': '订单满 75 美元免运费 · 终身养护支持',
  'nav.home': '首页', 'nav.shop': '植物', 'nav.care': 'AI 养护', 'nav.track': '订单追踪',
  'nav.about': '关于我们', 'nav.contact': '联系我们', 'nav.cart': '购物车', 'nav.quote': '获取报价',
  'nav.menu': '菜单', 'nav.close': '关闭', 'nav.search': '搜索植物',

  'hero.eyebrow': '把自然带回家',
  'hero.title1': '美丽的植物', 'hero.title2': '让明天更幸福、', 'hero.title3': '更绿意盎然。',
  'hero.sub': '探索各式室内、户外与观赏植物，让您的家、办公室与花园焕发自然之美。',
  'hero.cta1': '浏览植物', 'hero.cta2': '咨询 AI 医生',
  'hero.note': '植物让生活更美好',
  'hero.f1': '品种齐全', 'hero.f1s': '1000+ 种植物',
  'hero.f2': '送货上门', 'hero.f2s': '安全可靠',
  'hero.f3': '优质植物', 'hero.f3s': '健康新鲜',
  'hero.f4': '环保理念', 'hero.f4s': '可持续生活',

  'coll.eyebrow': '探索我们的系列', 'coll.title': '找到最合适的植物',
  'coll.sub': '从室内绿植到庭院树木，您的绿色空间所需，这里应有尽有。',

  'cat.indoor': '室内植物', 'cat.indoor.s': '为室内带来清新',
  'cat.outdoor': '户外植物', 'cat.outdoor.s': '庭院的理想之选',
  'cat.succulent': '多肉与仙人掌', 'cat.succulent.s': '易养护的美丽',
  'cat.flowering': '开花植物', 'cat.flowering.s': '四季色彩',
  'cat.herb': '香草与食用植物', 'cat.herb.s': '厨房里的新鲜味道',
  'cat.bonsai': '盆景与稀有品种', 'cat.bonsai.s': '活的艺术品',
  'cat.all': '全部植物',

  'about.eyebrow': '关于我们', 'about.title1': '种下幸福', 'about.title2': '一次一株植物',
  'about.body': '在 GreenHaven 苗圃，我们相信植物不只是装饰——它们为空间带来生命、积极与宁静。怀着对绿色的热爱，我们提供高品质植物、专业指导与可靠服务。',
  'about.cta': '了解更多',
  'about.s1': '年行业经验', 'about.s2': '满意客户', 'about.s3': '植物品种',
  'about.quote': '好植物，好心情',

  'why.eyebrow': '为什么选择我们', 'why.title': '不只是一家苗圃',
  'why.1': '健康植物', 'why.1s': '精心培育，层层质检',
  'why.2': '专业指导', 'why.2s': '养护专家为您答疑',
  'why.3': '快速配送', 'why.3s': '安全包装，送达家门',
  'why.4': '售后养护支持', 'why.4s': '购买之后我们依然在',

  'band.title': '让我们一起把世界变得更绿',
  'band.sub': '加入成千上万的植物爱好者，今天就开始您的绿色旅程。',
  'band.cta': '立即选购',

  'feat.eyebrow': '人气之选', 'feat.title': '热销植物', 'feat.sub': '全球数千位植物爱好者的共同选择。',
  'feat.all': '查看全部植物',

  'shop.title': '全部植物', 'shop.sub': '种植物',
  'shop.filters': '筛选', 'shop.category': '类别', 'shop.price': '价格区间',
  'shop.light': '光照需求', 'shop.care': '养护难度', 'shop.petsafe': '仅显示对宠物友好',
  'shop.sort': '排序方式', 'shop.sort.featured': '推荐', 'shop.sort.priceAsc': '价格：从低到高',
  'shop.sort.priceDesc': '价格：从高到低', 'shop.sort.rating': '评分最高', 'shop.sort.name': '名称 A–Z',
  'shop.clear': '清除全部', 'shop.none': '没有符合筛选条件的植物。',
  'shop.search.ph': '按名称搜索…',

  'care.easy': '容易', 'care.medium': '中等', 'care.hard': '需经验',
  'light.low': '弱光', 'light.medium': '中等光照', 'light.bright': '明亮散射光', 'light.direct': '全日照',
  'water.low': '每 2–3 周一次', 'water.medium': '每 7–10 天一次', 'water.high': '每 3–5 天一次',
  'hum.low': '普通室内湿度', 'hum.medium': '中等湿度（50%）', 'hum.high': '高湿度（60% 以上）',

  'p.add': '加入购物车', 'p.added': '已加入 ✓', 'p.view': '查看详情', 'p.out': '已售罄',
  'p.in': '现货', 'p.left': '仅剩 {n} 件', 'p.reviews': '{n} 条评价',
  'p.petsafe': '对宠物友好', 'p.pettoxic': '误食有毒',
  'p.height': '高度', 'p.pot': '花盆尺寸', 'p.difficulty': '养护难度',
  'p.desc': '商品描述', 'p.careguide': '养护指南', 'p.delivery': '配送与退换',
  'p.related': '您可能也喜欢', 'p.qty': '数量', 'p.ask': '向 AI 咨询这株植物',
  'p.deliverytext': '24 小时内发出，采用保温、无塑料包装。订单满 75 美元免运费。若植物到货受损，请在 7 天内发送照片，我们免费更换。',
  'p.back': '返回植物列表',

  'cart.title': '您的购物车', 'cart.empty': '购物车是空的。', 'cart.emptycta': '去逛逛植物',
  'cart.item': '商品', 'cart.price': '单价', 'cart.qty': '数量', 'cart.total': '小计',
  'cart.remove': '移除', 'cart.subtotal': '商品合计', 'cart.shipping': '运费',
  'cart.free': '免费', 'cart.tax': '税费（预估）', 'cart.grand': '订单总额',
  'cart.checkout': '去结算', 'cart.continue': '继续购物',
  'cart.promo': '优惠码', 'cart.apply': '使用', 'cart.promoOk': '优惠码已使用：减 {n}%',
  'cart.promoBad': '该优惠码无效。', 'cart.discount': '优惠',
  'cart.freeHint': '再买 {n} 即可免运费。',

  'co.title': '结算',
  'co.step1': '收货信息', 'co.step2': '配送方式', 'co.step3': '支付', 'co.step4': '确认',
  'co.name': '姓名', 'co.email': '电子邮箱', 'co.phone': '手机号码',
  'co.country': '国家 / 地区', 'co.city': '城市', 'co.address': '详细地址',
  'co.zip': '邮政编码', 'co.notes': '配送备注（选填）',
  'co.ship.std': '标准配送', 'co.ship.stds': '4–6 个工作日',
  'co.ship.exp': '加急配送', 'co.ship.exps': '2–3 个工作日',
  'co.ship.next': '次日达', 'co.ship.nexts': '请于 14:00 前下单',
  'co.pay.card': '银行卡支付', 'co.pay.cards': 'Visa、Mastercard、银联、Mir',
  'co.pay.wallet': '电子钱包', 'co.pay.wallets': 'Apple Pay、Google Pay、支付宝、微信支付',
  'co.pay.cod': '货到付款', 'co.pay.cods': '收货时付给快递员',
  'co.card.num': '卡号', 'co.card.name': '持卡人姓名',
  'co.card.exp': '有效期（月/年）', 'co.card.cvc': '安全码 CVC',
  'co.next': '继续', 'co.back': '返回', 'co.place': '提交订单',
  'co.processing': '正在处理支付…', 'co.summary': '订单摘要',
  'co.secure': '加密演示结算 — 不会产生真实扣款',
  'co.req': '此项为必填。', 'co.bademail': '请输入有效的电子邮箱。',
  'co.badcard': '请输入有效的卡号。', 'co.badexp': '请输入有效的未来有效期。',
  'co.badcvc': '安全码应为 3 或 4 位数字。', 'co.badphone': '请输入有效的电话号码。',
  'co.agree': '我同意销售条款与隐私政策。',
  'co.review': '请核对订单', 'co.editinfo': '修改',
  'co.demoTitle': '演示支付',
  'co.demoBody': '这是一个作品演示项目。卡号仅在您的浏览器中校验，不会发送到任何地方。使用 4242 4242 4242 4242 模拟支付成功，或 4000 0000 0000 0002 模拟支付失败。',
  'co.declined': '您的银行卡被拒绝，请尝试其他支付方式。',

  'ok.title': '感谢您 — 订单已确认！',
  'ok.sub': '确认邮件已发送至 {email}。我们正在精心准备您的植物。',
  'ok.order': '订单编号', 'ok.eta': '预计送达', 'ok.track': '追踪此订单',
  'ok.shop': '继续购物', 'ok.save': '请保存订单编号，以便随时查询配送进度。',

  'tr.title': '追踪您的订单', 'tr.sub': '输入订单编号，查看植物当前位置。',
  'tr.ph': '例如 GH-7K2M9X', 'tr.btn': '查询', 'tr.notfound': '未找到该编号的订单，请核对后重试。',
  'tr.recent': '您最近的订单', 'tr.placed': '下单时间', 'tr.items': '件商品', 'tr.status': '状态',
  'tr.st1': '订单已确认', 'tr.st1s': '我们已收到您的订单与付款。',
  'tr.st2': '植物准备中', 'tr.st2s': '团队正在挑选并包装您的植物。',
  'tr.st3': '已发货', 'tr.st3s': '包裹已离开我们的苗圃。',
  'tr.st4': '运输中', 'tr.st4s': '正在运往您所在的城市。',
  'tr.st5': '派送中', 'tr.st5s': '快递员今天将送达。',
  'tr.st6': '已送达', 'tr.st6s': '祝您享受新植物！',
  'tr.courier': '承运商', 'tr.tracking': '运单号', 'tr.eta': '预计到达',
  'tr.address': '配送至', 'tr.contents': '订单内容', 'tr.advance': '模拟下一步',
  'tr.demoNote': '演示：订单会随时间自动推进，也可用按钮手动推进。',

  'ai.title': 'AI 植物养护医生', 'ai.sub': '浇水、光照、虫害、土壤或拯救病株，随时提问，即刻获得答案。',
  'ai.ph': '随便问… 例如：我的龟背竹叶子为什么发黄？',
  'ai.send': '提问', 'ai.thinking': '思考中…', 'ai.clear': '新对话',
  'ai.greeting': '您好！我是您的植物养护助手。告诉我植物的种类、出现的症状以及您的浇水方式，我会给出清晰的方案。',
  'ai.sug': '试试这样问',
  'ai.sug1': '我的龟背竹叶子为什么发黄？',
  'ai.sug2': '虎尾兰多久浇一次水？',
  'ai.sug3': '怎么消灭小黑飞（蕈蚊）？',
  'ai.sug4': '哪些植物对猫是安全的？',
  'ai.sug5': '蕨类叶尖干枯发褐怎么办？',
  'ai.sug6': '什么时候需要换盆？',
  'ai.offtopic': '抱歉——我只能回答与植物和植物养护有关的问题。您可以问我浇水、光照、土壤、虫害、换盆、繁殖，或某种植物对宠物是否安全，我会给出明确的建议。',
  'ai.disclaimer': '以上为一般园艺建议。若植物珍贵或受损严重，请咨询当地专业人士。',
  'ai.engine.local': '内置知识库',
  'ai.engine.live': 'Claude AI（在线）',
  'ai.connect': '连接在线 AI',
  'ai.connected': '在线 AI 已连接',
  'ai.keyTitle': '使用在线 Claude 模型',
  'ai.keyBody': '助手已可离线使用内置园艺知识库作答。若希望改由在线 Claude 模型回答，请粘贴 Anthropic API 密钥。密钥仅保存在本浏览器，且只发送至 api.anthropic.com。',
  'ai.keyPh': 'sk-ant-…', 'ai.keySave': '保存密钥', 'ai.keyRemove': '删除密钥',
  'ai.keyNote': '切勿将生产环境密钥粘贴到您无法掌控的网站。本页面开源，请先阅读代码。',
  'ai.error': '无法连接在线模型，已改用内置知识库作答。',
  'ai.relatedPlants': '符合此建议的植物',
  'ai.copy': '复制', 'ai.copied': '已复制',
  'ai.topics': '热门养护主题',

  'ct.title': '联系我们', 'ct.sub': '关于订单或植物状况有疑问？我们会在一个工作日内回复。',
  'ct.name': '您的姓名', 'ct.email': '电子邮箱', 'ct.subject': '主题', 'ct.msg': '留言内容',
  'ct.send': '发送留言', 'ct.sent': '谢谢 — 您的留言已发送。',
  'ct.addr': '苗圃地址', 'ct.hours': '营业时间', 'ct.hourstext': '周一至周六 09:00–19:00，周日 10:00–16:00',
  'ct.phone': '电话', 'ct.emaillabel': '邮箱',

  'ab.title': '关于 GreenHaven', 'ab.lead': '我们是一家家族苗圃，培育植物五年，并将它们寄往 20 多个国家的植物爱好者手中。',
  'ab.story': '我们的故事', 'ab.storytext': 'GreenHaven 始于一间玻璃温室和一个朴素的信念：每个人的家中都该有一点生命。如今，我们由园艺师、植物学家与配送团队组成，培育一千多个品种，从强健的虎尾兰到稀有的锦斑龟背竹。每一株都不使用合成农药，发货前经过炼苗，并以无塑料、可堆肥的材料包装。',
  'ab.photos': '图片来源', 'ab.photoslead': '没有照片的植物以本站绘制的插画呈现。', 'ab.values': '我们坚持的理念',
  'ab.v1': '自家培育，而非转售', 'ab.v1s': '我们出售的几乎所有植物都在自家温室繁殖。',
  'ab.v2': '无塑料配送', 'ab.v2s': '只用模塑纸浆、纸胶带和可堆肥包装材料。',
  'ab.v3': '终身养护咨询', 'ab.v3s': '只要植物在您手中，养护支持始终免费。',
  'ab.v4': '更换而非退款', 'ab.v4s': '若植物在首月未能成活，我们重新寄送一株。',

  'ft.tag': '为更绿的明天而生的植物。',
  'ft.shop': '商店', 'ft.help': '帮助', 'ft.company': '公司', 'ft.follow': '关注我们',
  'ft.newsletter': '养护技巧发送到您的邮箱', 'ft.nph': '您的邮箱', 'ft.njoin': '订阅',
  'ft.njoined': '欢迎加入！🌱',
  'ft.faq': '常见问题', 'ft.shipping': '配送', 'ft.returns': '退换货', 'ft.privacy': '隐私政策',
  'ft.terms': '服务条款', 'ft.rights': '保留所有权利。',
  'ft.demo': '这是一个演示项目 — 不会真正发货，也不会收取任何款项。',

  'c.currency': '货币', 'c.language': '语言', 'c.loading': '加载中…',
  'c.page': '第', 'c.of': '/', 'c.prev': '上一页', 'c.next': '下一页',
  'c.rated': '评分 {r} / 5'
},

/* ========================================================= ARABIC ====== */
ar: {
  'meta.title': 'مشتل غرين هيفن — نباتات وزهور ومساعد ذكاء اصطناعي للعناية',
  'meta.desc': 'اشترِ نباتات داخلية وخارجية سليمة، وتتبّع طلبك، واسأل طبيب النباتات الذكي عن أي أمر يخص العناية.',

  'topbar.msg': 'توصيل مجاني للطلبات فوق ٧٥ دولارًا · دعم العناية مدى الحياة',
  'nav.home': 'الرئيسية', 'nav.shop': 'النباتات', 'nav.care': 'العناية الذكية', 'nav.track': 'تتبّع الطلب',
  'nav.about': 'من نحن', 'nav.contact': 'اتصل بنا', 'nav.cart': 'السلة', 'nav.quote': 'اطلب عرض سعر',
  'nav.menu': 'القائمة', 'nav.close': 'إغلاق', 'nav.search': 'ابحث عن نبات',

  'hero.eyebrow': 'أحضر الطبيعة إلى بيتك',
  'hero.title1': 'نباتات جميلة', 'hero.title2': 'من أجل غدٍ أسعد', 'hero.title3': 'وأكثر اخضرارًا.',
  'hero.sub': 'اكتشف تشكيلة واسعة من النباتات الداخلية والخارجية والزينة لتمنح منزلك ومكتبك وحديقتك حياةً وجمالًا طبيعيًا.',
  'hero.cta1': 'تصفّح النباتات', 'hero.cta2': 'اسأل الطبيب الذكي',
  'hero.note': 'النباتات تجعل الحياة أجمل',
  'hero.f1': 'تشكيلة واسعة', 'hero.f1s': 'أكثر من ١٠٠٠ نبتة',
  'hero.f2': 'توصيل للمنزل', 'hero.f2s': 'آمن وموثوق',
  'hero.f3': 'نباتات عالية الجودة', 'hero.f3s': 'سليمة وطازجة',
  'hero.f4': 'صديق للبيئة', 'hero.f4s': 'حياة مستدامة',

  'coll.eyebrow': 'استكشف مجموعتنا', 'coll.title': 'اعثر على النبتة المثالية',
  'coll.sub': 'من الخضرة الداخلية إلى أشجار الحديقة، لدينا كل ما تحتاجه مساحتك الخضراء.',

  'cat.indoor': 'نباتات داخلية', 'cat.indoor.s': 'انتعاش داخل المنزل',
  'cat.outdoor': 'نباتات خارجية', 'cat.outdoor.s': 'مثالية لحديقتك',
  'cat.succulent': 'عصاريات وصبّار', 'cat.succulent.s': 'جمال بأقل عناية',
  'cat.flowering': 'نباتات مزهرة', 'cat.flowering.s': 'ألوان طوال العام',
  'cat.herb': 'أعشاب ونباتات مأكولة', 'cat.herb.s': 'طازجة من مطبخك',
  'cat.bonsai': 'بونساي وأنواع نادرة', 'cat.bonsai.s': 'أعمال فنية حيّة',
  'cat.all': 'كل النباتات',

  'about.eyebrow': 'من نحن', 'about.title1': 'نزرع السعادة', 'about.title2': 'نبتةً بعد نبتة',
  'about.body': 'في مشتل غرين هيفن نؤمن بأن النباتات أكثر من مجرد زينة — فهي تمنح مساحتك حياةً وإيجابيةً وسكينة. وبشغفٍ بالخضرة، نقدّم نباتات عالية الجودة وإرشادًا متخصصًا وخدمة موثوقة.',
  'about.cta': 'اعرف المزيد',
  'about.s1': 'سنوات من الخبرة', 'about.s2': 'عميل سعيد', 'about.s3': 'صنف نباتي',
  'about.quote': 'نباتات جيدة، مزاج جميل',

  'why.eyebrow': 'لماذا نحن', 'why.title': 'أكثر من مجرد مشتل',
  'why.1': 'نباتات سليمة', 'why.1s': 'مُعتنى بها بعناية وخاضعة لفحص الجودة',
  'why.2': 'إرشاد متخصص', 'why.2s': 'احصل على نصيحة من مختصي العناية بالنبات',
  'why.3': 'توصيل سريع', 'why.3s': 'تغليف آمن وتوصيل حتى بابك',
  'why.4': 'دعم بعد الشراء', 'why.4s': 'نبقى معك حتى بعد إتمام الطلب',

  'band.title': 'لنجعل العالم أكثر اخضرارًا معًا',
  'band.sub': 'انضم إلى آلاف محبي النباتات وابدأ رحلتك الخضراء اليوم.',
  'band.cta': 'تسوّق الآن',

  'feat.eyebrow': 'الأكثر تفضيلًا', 'feat.title': 'الأكثر مبيعًا', 'feat.sub': 'اختيار آلاف محبي النباتات حول العالم.',
  'feat.all': 'عرض كل النباتات',

  'shop.title': 'كل النباتات', 'shop.sub': 'نبتة',
  'shop.filters': 'عوامل التصفية', 'shop.category': 'الفئة', 'shop.price': 'نطاق السعر',
  'shop.light': 'احتياج الإضاءة', 'shop.care': 'مستوى العناية', 'shop.petsafe': 'الآمن للحيوانات الأليفة فقط',
  'shop.sort': 'ترتيب حسب', 'shop.sort.featured': 'المميّزة', 'shop.sort.priceAsc': 'السعر: من الأقل للأعلى',
  'shop.sort.priceDesc': 'السعر: من الأعلى للأقل', 'shop.sort.rating': 'الأعلى تقييمًا', 'shop.sort.name': 'الاسم أ–ي',
  'shop.clear': 'مسح الكل', 'shop.none': 'لا توجد نباتات مطابقة لعوامل التصفية.',
  'shop.search.ph': 'ابحث بالاسم…',

  'care.easy': 'سهلة', 'care.medium': 'متوسطة', 'care.hard': 'تحتاج خبرة',
  'light.low': 'إضاءة منخفضة', 'light.medium': 'إضاءة متوسطة', 'light.bright': 'ضوء ساطع غير مباشر', 'light.direct': 'شمس مباشرة',
  'water.low': 'كل ٢–٣ أسابيع', 'water.medium': 'كل ٧–١٠ أيام', 'water.high': 'كل ٣–٥ أيام',
  'hum.low': 'رطوبة الغرفة العادية', 'hum.medium': 'رطوبة متوسطة (٥٠٪)', 'hum.high': 'رطوبة عالية (٦٠٪+)',

  'p.add': 'أضف إلى السلة', 'p.added': 'تمت الإضافة ✓', 'p.view': 'عرض التفاصيل', 'p.out': 'غير متوفر',
  'p.in': 'متوفر', 'p.left': 'بقي {n} فقط', 'p.reviews': '{n} تقييمًا',
  'p.petsafe': 'آمن للحيوانات الأليفة', 'p.pettoxic': 'سامّ عند الابتلاع',
  'p.height': 'الارتفاع', 'p.pot': 'مقاس الأصيص', 'p.difficulty': 'مستوى العناية',
  'p.desc': 'الوصف', 'p.careguide': 'دليل العناية', 'p.delivery': 'التوصيل والإرجاع',
  'p.related': 'قد يعجبك أيضًا', 'p.qty': 'الكمية', 'p.ask': 'اسأل الذكاء الاصطناعي عن هذه النبتة',
  'p.deliverytext': 'يتم الشحن خلال ٢٤ ساعة في تغليف عازل وخالٍ من البلاستيك. التوصيل مجاني للطلبات فوق ٧٥ دولارًا. إذا وصلت النبتة متضررة، أرسل صورة خلال ٧ أيام لاستبدالها مجانًا.',
  'p.back': 'العودة إلى النباتات',

  'cart.title': 'سلّتك', 'cart.empty': 'سلّتك فارغة.', 'cart.emptycta': 'تصفّح النباتات',
  'cart.item': 'المنتج', 'cart.price': 'السعر', 'cart.qty': 'الكمية', 'cart.total': 'الإجمالي',
  'cart.remove': 'إزالة', 'cart.subtotal': 'المجموع الفرعي', 'cart.shipping': 'الشحن',
  'cart.free': 'مجاني', 'cart.tax': 'الضريبة (تقديرية)', 'cart.grand': 'إجمالي الطلب',
  'cart.checkout': 'المتابعة إلى الدفع', 'cart.continue': 'متابعة التسوق',
  'cart.promo': 'رمز الخصم', 'cart.apply': 'تطبيق', 'cart.promoOk': 'تم تطبيق الخصم: {n}٪',
  'cart.promoBad': 'هذا الرمز غير صالح.', 'cart.discount': 'الخصم',
  'cart.freeHint': 'أضف {n} أخرى للحصول على شحن مجاني.',

  'co.title': 'إتمام الطلب',
  'co.step1': 'التوصيل', 'co.step2': 'الشحن', 'co.step3': 'الدفع', 'co.step4': 'التأكيد',
  'co.name': 'الاسم الكامل', 'co.email': 'البريد الإلكتروني', 'co.phone': 'رقم الهاتف',
  'co.country': 'الدولة', 'co.city': 'المدينة', 'co.address': 'العنوان',
  'co.zip': 'الرمز البريدي', 'co.notes': 'ملاحظات التوصيل (اختياري)',
  'co.ship.std': 'عادي', 'co.ship.stds': '٤–٦ أيام عمل',
  'co.ship.exp': 'سريع', 'co.ship.exps': '٢–٣ أيام عمل',
  'co.ship.next': 'اليوم التالي', 'co.ship.nexts': 'اطلب قبل الساعة ١٤:٠٠',
  'co.pay.card': 'بطاقة بنكية', 'co.pay.cards': 'فيزا، ماستركارد، يونيون باي، مير',
  'co.pay.wallet': 'محفظة رقمية', 'co.pay.wallets': 'Apple Pay، Google Pay، Alipay',
  'co.pay.cod': 'الدفع عند الاستلام', 'co.pay.cods': 'ادفع لمندوب التوصيل عند وصوله',
  'co.card.num': 'رقم البطاقة', 'co.card.name': 'الاسم على البطاقة',
  'co.card.exp': 'تاريخ الانتهاء (شهر/سنة)', 'co.card.cvc': 'رمز CVC',
  'co.next': 'متابعة', 'co.back': 'رجوع', 'co.place': 'تأكيد الطلب',
  'co.processing': 'جارٍ معالجة الدفع…', 'co.summary': 'ملخص الطلب',
  'co.secure': 'دفع تجريبي مشفّر — لا يتم خصم أي مبلغ حقيقي',
  'co.req': 'هذا الحقل مطلوب.', 'co.bademail': 'أدخل بريدًا إلكترونيًا صحيحًا.',
  'co.badcard': 'أدخل رقم بطاقة صحيحًا.', 'co.badexp': 'أدخل تاريخ انتهاء مستقبليًا صحيحًا.',
  'co.badcvc': 'يجب أن يتكوّن رمز CVC من ٣ أو ٤ أرقام.', 'co.badphone': 'أدخل رقم هاتف صحيحًا.',
  'co.agree': 'أوافق على شروط البيع وسياسة الخصوصية.',
  'co.review': 'راجع طلبك', 'co.editinfo': 'تعديل',
  'co.demoTitle': 'دفع تجريبي',
  'co.demoBody': 'هذا مشروع عرض توضيحي. يتم التحقق من بيانات البطاقة داخل متصفحك فقط ولا تُرسل إلى أي جهة. استخدم 4242 4242 4242 4242 لمحاكاة نجاح الدفع، أو 4000 0000 0000 0002 لمحاكاة الرفض.',
  'co.declined': 'تم رفض بطاقتك. يُرجى تجربة وسيلة دفع أخرى.',

  'ok.title': 'شكرًا لك — تم تأكيد طلبك!',
  'ok.sub': 'أرسلنا رسالة تأكيد إلى {email}. يجري تجهيز نباتاتك بعناية.',
  'ok.order': 'رقم الطلب', 'ok.eta': 'موعد التوصيل المتوقع', 'ok.track': 'تتبّع هذا الطلب',
  'ok.shop': 'متابعة التسوق', 'ok.save': 'احتفظ برقم الطلب لتتبّع التوصيل في أي وقت.',

  'tr.title': 'تتبّع طلبك', 'tr.sub': 'أدخل رقم الطلب لمعرفة مكان نباتاتك بالضبط.',
  'tr.ph': 'مثال GH-7K2M9X', 'tr.btn': 'تتبّع', 'tr.notfound': 'لا يوجد طلب بهذا الرقم. تحقّق وحاول مرة أخرى.',
  'tr.recent': 'طلباتك الأخيرة', 'tr.placed': 'تاريخ الطلب', 'tr.items': 'منتجات', 'tr.status': 'الحالة',
  'tr.st1': 'تم تأكيد الطلب', 'tr.st1s': 'استلمنا طلبك ودفعتك.',
  'tr.st2': 'تجهيز النباتات', 'tr.st2s': 'فريقنا يختار نباتاتك ويغلّفها.',
  'tr.st3': 'تم الشحن', 'tr.st3s': 'غادر الطرد مشتلنا.',
  'tr.st4': 'في الطريق', 'tr.st4s': 'في طريقه إلى مدينتك.',
  'tr.st5': 'خرج للتوصيل', 'tr.st5s': 'سيصل إليك المندوب اليوم.',
  'tr.st6': 'تم التوصيل', 'tr.st6s': 'استمتع بنباتاتك الجديدة!',
  'tr.courier': 'شركة الشحن', 'tr.tracking': 'رقم التتبّع', 'tr.eta': 'الوصول المتوقع',
  'tr.address': 'التوصيل إلى', 'tr.contents': 'محتويات الطلب', 'tr.advance': 'محاكاة الخطوة التالية',
  'tr.demoNote': 'عرض توضيحي: تتقدّم الطلبات تلقائيًا مع الوقت. استخدم الزر للتقدّم يدويًا.',

  'ai.title': 'طبيب النباتات الذكي', 'ai.sub': 'اسأل عن الري أو الإضاءة أو الآفات أو التربة أو إنقاذ نبتة مريضة. الإجابة تصل فورًا.',
  'ai.ph': 'اسأل أي شيء… مثال: لماذا تصفرّ أوراق المونستيرا لديّ؟',
  'ai.send': 'اسأل', 'ai.thinking': 'جارٍ التفكير…', 'ai.clear': 'محادثة جديدة',
  'ai.greeting': 'مرحبًا! أنا مساعدك للعناية بالنباتات. أخبرني بنوع النبتة والعَرَض الذي تلاحظه وطريقة ريّك لها، وسأعطيك خطة واضحة.',
  'ai.sug': 'جرّب أن تسأل',
  'ai.sug1': 'لماذا تصفرّ أوراق المونستيرا لديّ؟',
  'ai.sug2': 'كم مرة أروي نبات سانسيفيريا؟',
  'ai.sug3': 'كيف أتخلّص من ذباب الفطر في التربة؟',
  'ai.sug4': 'ما النباتات الآمنة للقطط؟',
  'ai.sug5': 'أطراف أوراق السرخس جافة وبنية — ماذا أفعل؟',
  'ai.sug6': 'متى يجب أن أغيّر أصيص نبتتي؟',
  'ai.offtopic': 'عذرًا — يمكنني المساعدة في النباتات والعناية بها فقط. اسألني عن الري أو الإضاءة أو التربة أو الآفات أو تغيير الأصيص أو الإكثار أو ما إذا كانت النبتة آمنة للحيوانات الأليفة، وسأعطيك إجابة واضحة.',
  'ai.disclaimer': 'هذه إرشادات بستنة عامة. وإذا كانت النبتة ثمينة أو متضررة بشدة، استشر مختصًا محليًا.',
  'ai.engine.local': 'قاعدة المعرفة المدمجة',
  'ai.engine.live': 'Claude AI (مباشر)',
  'ai.connect': 'توصيل الذكاء المباشر',
  'ai.connected': 'تم توصيل الذكاء المباشر',
  'ai.keyTitle': 'استخدام نموذج Claude المباشر',
  'ai.keyBody': 'يجيب المساعد أصلًا من قاعدة معرفة بستنة مدمجة تعمل دون إنترنت. ولتوجيه الأسئلة إلى نموذج Claude المباشر، الصق مفتاح Anthropic API. يُحفظ المفتاح في هذا المتصفح فقط ولا يُرسل إلا إلى api.anthropic.com.',
  'ai.keyPh': 'sk-ant-…', 'ai.keySave': 'حفظ المفتاح', 'ai.keyRemove': 'إزالة المفتاح',
  'ai.keyNote': 'لا تلصق مفتاحًا إنتاجيًا في موقع لا تتحكم به. هذه الصفحة مفتوحة المصدر — اقرأ الشيفرة أولًا.',
  'ai.error': 'تعذّر الوصول إلى النموذج المباشر، لذلك أجبتك من قاعدة المعرفة المدمجة.',
  'ai.relatedPlants': 'نباتات تناسب هذه النصيحة',
  'ai.copy': 'نسخ', 'ai.copied': 'تم النسخ',
  'ai.topics': 'مواضيع العناية الشائعة',

  'ct.title': 'اتصل بنا', 'ct.sub': 'لديك سؤال عن طلب أو نبتة متعبة؟ نردّ خلال يوم عمل واحد.',
  'ct.name': 'اسمك', 'ct.email': 'البريد الإلكتروني', 'ct.subject': 'الموضوع', 'ct.msg': 'الرسالة',
  'ct.send': 'إرسال الرسالة', 'ct.sent': 'شكرًا لك — تم إرسال رسالتك.',
  'ct.addr': 'عنوان المشتل', 'ct.hours': 'ساعات العمل', 'ct.hourstext': 'الاثنين–السبت ٠٩:٠٠–١٩:٠٠، الأحد ١٠:٠٠–١٦:٠٠',
  'ct.phone': 'الهاتف', 'ct.emaillabel': 'البريد',

  'ab.title': 'عن غرين هيفن', 'ab.lead': 'نحن مشتل عائلي يزرع النباتات منذ خمس سنوات ويشحنها إلى محبي النبات في أكثر من ٢٠ دولة.',
  'ab.story': 'قصتنا', 'ab.storytext': 'بدأ غرين هيفن ببيت زجاجي واحد وإيمان بسيط: كل إنسان يستحق شيئًا حيًّا في بيته. واليوم يرعى فريقنا من المزارعين وعلماء النبات ومندوبي التوصيل أكثر من ألف صنف، من سانسيفيريا القوية إلى المونستيرا المبرقشة النادرة. تُزرع كل نبتة دون مبيدات صناعية، وتُقسّى قبل الشحن، وتُغلّف بمواد قابلة للتحلل وخالية من البلاستيك.',
  'ab.photos': 'حقوق الصور', 'ab.photoslead': 'النباتات التي لا توجد لها صورة تُعرض برسوم أُنشئت لهذا الموقع.', 'ab.values': 'ما نؤمن به',
  'ab.v1': 'نزرع ولا نعيد البيع', 'ab.v1s': 'نُكثّر معظم ما نبيعه في بيوتنا الزجاجية.',
  'ab.v2': 'شحن خالٍ من البلاستيك', 'ab.v2s': 'لبّ ورقي مقولب وشريط ورقي وتغليف قابل للتحلل فقط.',
  'ab.v3': 'إرشاد مدى الحياة', 'ab.v3s': 'دعم مجاني للعناية ما دامت النبتة لديك.',
  'ab.v4': 'استبدال لا استرداد', 'ab.v4s': 'إذا لم تنجُ النبتة في شهرها الأول نرسل لك بديلًا.',

  'ft.tag': 'نباتات من أجل غدٍ أكثر اخضرارًا.',
  'ft.shop': 'المتجر', 'ft.help': 'المساعدة', 'ft.company': 'الشركة', 'ft.follow': 'تابعنا',
  'ft.newsletter': 'نصائح العناية إلى بريدك', 'ft.nph': 'بريدك الإلكتروني', 'ft.njoin': 'اشترك',
  'ft.njoined': 'أهلًا بك! 🌱',
  'ft.faq': 'الأسئلة الشائعة', 'ft.shipping': 'الشحن', 'ft.returns': 'الإرجاع', 'ft.privacy': 'الخصوصية',
  'ft.terms': 'الشروط', 'ft.rights': 'جميع الحقوق محفوظة.',
  'ft.demo': 'مشروع عرض توضيحي — لا تُنفَّذ طلبات حقيقية ولا تُحصَّل أي مدفوعات.',

  'c.currency': 'العملة', 'c.language': 'اللغة', 'c.loading': 'جارٍ التحميل…',
  'c.page': 'صفحة', 'c.of': 'من', 'c.prev': 'السابق', 'c.next': 'التالي',
  'c.rated': 'التقييم {r} من ٥'
}
  };

  /* ---------------------------------------------------------- runtime -- */
  let current = 'en';
  let currency = 'USD';
  const listeners = [];

  function detect() {
    const saved = localStorage.getItem('gh.lang');
    if (saved && T[saved]) return saved;
    const nav = (navigator.languages || [navigator.language || 'en']).map(s => String(s).toLowerCase());
    for (const l of nav) {
      const two = l.slice(0, 2);
      if (T[two]) return two;
      if (l.startsWith('uz')) return 'uz';
      if (l.startsWith('zh')) return 'zh';
    }
    return 'en';
  }

  function t(key, vars) {
    let s = (T[current] && T[current][key]);
    if (s === undefined) s = (T.en[key] !== undefined ? T.en[key] : key);
    if (vars) Object.keys(vars).forEach(k => { s = s.split('{' + k + '}').join(vars[k]); });
    return s;
  }

  function setLang(code) {
    if (!T[code]) return;
    current = code;
    localStorage.setItem('gh.lang', code);
    const saved = localStorage.getItem('gh.currency');
    if (!saved) currency = DEFAULT_CURRENCY[code] || 'USD';
    applyDocument();
    listeners.forEach(fn => fn(code));
  }

  function setCurrency(code) {
    if (!CURRENCIES[code]) return;
    currency = code;
    localStorage.setItem('gh.currency', code);
    listeners.forEach(fn => fn(current));
  }

  function applyDocument() {
    const meta = LOCALES[current];
    document.documentElement.lang = current;
    document.documentElement.dir = meta.dir;
    document.documentElement.setAttribute('data-lang', current);
    document.title = t('meta.title');
    const d = document.querySelector('meta[name="description"]');
    if (d) d.setAttribute('content', t('meta.desc'));
  }

  /** Format a USD amount in the active display currency. */
  function money(usd) {
    const c = CURRENCIES[currency];
    const v = usd * c.rate;
    const s = v.toLocaleString(LOCALES[current].locale, {
      minimumFractionDigits: c.dp, maximumFractionDigits: c.dp
    });
    return c.pos === 'before' ? c.symbol + s : s + ' ' + c.symbol;
  }

  function date(ts) {
    try {
      return new Date(ts).toLocaleDateString(LOCALES[current].locale,
        { year: 'numeric', month: 'short', day: 'numeric' });
    } catch (e) { return new Date(ts).toDateString(); }
  }

  function dateTime(ts) {
    try {
      return new Date(ts).toLocaleString(LOCALES[current].locale,
        { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' });
    } catch (e) { return new Date(ts).toString(); }
  }

  root.I18N = {
    LOCALES, CURRENCIES, T,
    get lang() { return current; },
    get dir() { return LOCALES[current].dir; },
    get currency() { return currency; },
    t, setLang, setCurrency, money, date, dateTime, applyDocument,
    onChange(fn) { listeners.push(fn); },
    init() {
      current = detect();
      currency = localStorage.getItem('gh.currency') || DEFAULT_CURRENCY[current] || 'USD';
      applyDocument();
    }
  };
})(window);
