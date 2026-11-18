/* GreenHaven — product catalogue */
(function (root) {
  'use strict';

  /* cat: indoor | outdoor | succulent | flowering | herb | bonsai
     light: low|medium|bright|direct   water: low|medium|high
     hum: low|medium|high              diff: easy|medium|hard
     pet: true = non-toxic to cats & dogs                               */
  const PRODUCTS = [
    { id:'monstera-deliciosa',  cat:'indoor',    price: 48, old: 62, rating:4.9, reviews:412, badge:'bestseller', light:'bright', water:'medium', hum:'medium', diff:'easy',   pet:false, height:'70–90 cm', pot:'19 cm', stock:24, feat:true },
    { id:'monstera-adansonii',  cat:'indoor',    price: 36,          rating:4.7, reviews:238, badge:null,         light:'bright', water:'medium', hum:'high',   diff:'easy',   pet:false, height:'40–55 cm', pot:'15 cm', stock:31, feat:false },
    { id:'fiddle-leaf-fig',     cat:'indoor',    price: 72,          rating:4.4, reviews:186, badge:null,         light:'bright', water:'medium', hum:'medium', diff:'hard',   pet:false, height:'100–130 cm', pot:'24 cm', stock:9,  feat:true },
    { id:'rubber-plant',        cat:'indoor',    price: 44,          rating:4.6, reviews:203, badge:null,         light:'bright', water:'medium', hum:'low',    diff:'easy',   pet:false, height:'80–100 cm', pot:'21 cm', stock:18, feat:false },
    { id:'boston-fern',         cat:'indoor',    price: 29,          rating:4.5, reviews:167, badge:null,         light:'medium', water:'high',   hum:'high',   diff:'medium', pet:true,  height:'45–60 cm', pot:'17 cm', stock:27, feat:false },
    { id:'maidenhair-fern',     cat:'indoor',    price: 26,          rating:4.1, reviews: 94, badge:null,         light:'medium', water:'high',   hum:'high',   diff:'hard',   pet:true,  height:'30–40 cm', pot:'14 cm', stock:12, feat:false },
    { id:'echeveria-rosette',   cat:'succulent', price: 14,          rating:4.8, reviews:356, badge:'bestseller', light:'direct', water:'low',    hum:'low',    diff:'easy',   pet:true,  height:'10–15 cm', pot:'9 cm',  stock:60, feat:true },
    { id:'jade-plant',          cat:'succulent', price: 22,          rating:4.8, reviews:289, badge:null,         light:'direct', water:'low',    hum:'low',    diff:'easy',   pet:false, height:'25–35 cm', pot:'14 cm', stock:41, feat:false },
    { id:'golden-barrel',       cat:'succulent', price: 34, old: 42, rating:4.6, reviews:121, badge:'sale',       light:'direct', water:'low',    hum:'low',    diff:'easy',   pet:true,  height:'20–25 cm', pot:'16 cm', stock:15, feat:true },
    { id:'san-pedro-cactus',    cat:'succulent', price: 39,          rating:4.5, reviews: 76, badge:null,         light:'direct', water:'low',    hum:'low',    diff:'easy',   pet:true,  height:'40–50 cm', pot:'15 cm', stock:11, feat:false },
    { id:'peace-lily',          cat:'flowering', price: 31,          rating:4.7, reviews:331, badge:'bestseller', light:'low',    water:'medium', hum:'medium', diff:'easy',   pet:false, height:'50–65 cm', pot:'17 cm', stock:36, feat:true },
    { id:'anthurium',           cat:'flowering', price: 38,          rating:4.6, reviews:214, badge:null,         light:'bright', water:'medium', hum:'high',   diff:'medium', pet:false, height:'40–55 cm', pot:'15 cm', stock:22, feat:false },
    { id:'african-violet',      cat:'flowering', price: 18,          rating:4.4, reviews:152, badge:null,         light:'medium', water:'medium', hum:'medium', diff:'medium', pet:true,  height:'12–18 cm', pot:'11 cm', stock:44, feat:false },
    { id:'hibiscus',            cat:'outdoor',   price: 42,          rating:4.5, reviews: 98, badge:null,         light:'direct', water:'high',   hum:'medium', diff:'medium', pet:true,  height:'60–80 cm', pot:'20 cm', stock:17, feat:false },
    { id:'kentia-palm',         cat:'indoor',    price: 89, old:112, rating:4.8, reviews:143, badge:'sale',       light:'medium', water:'medium', hum:'medium', diff:'easy',   pet:true,  height:'120–150 cm', pot:'27 cm', stock:7, feat:true },
    { id:'areca-palm',          cat:'indoor',    price: 58,          rating:4.5, reviews:176, badge:null,         light:'bright', water:'medium', hum:'high',   diff:'medium', pet:true,  height:'90–120 cm', pot:'24 cm', stock:19, feat:false },
    { id:'golden-pothos',       cat:'indoor',    price: 19,          rating:4.9, reviews:521, badge:'bestseller', light:'low',    water:'medium', hum:'low',    diff:'easy',   pet:false, height:'30 cm trailing', pot:'14 cm', stock:73, feat:true },
    { id:'string-of-hearts',    cat:'succulent', price: 24,          rating:4.7, reviews:198, badge:null,         light:'bright', water:'low',    hum:'low',    diff:'easy',   pet:true,  height:'40 cm trailing', pot:'12 cm', stock:28, feat:false },
    { id:'snake-plant',         cat:'indoor',    price: 27,          rating:4.9, reviews:487, badge:'bestseller', light:'low',    water:'low',    hum:'low',    diff:'easy',   pet:false, height:'60–75 cm', pot:'17 cm', stock:55, feat:true },
    { id:'zz-plant',            cat:'indoor',    price: 33,          rating:4.8, reviews:364, badge:null,         light:'low',    water:'low',    hum:'low',    diff:'easy',   pet:false, height:'55–70 cm', pot:'17 cm', stock:38, feat:false },
    { id:'phalaenopsis-orchid', cat:'flowering', price: 35,          rating:4.6, reviews:276, badge:null,         light:'bright', water:'low',    hum:'medium', diff:'medium', pet:true,  height:'50–65 cm', pot:'12 cm', stock:26, feat:true },
    { id:'dendrobium-orchid',   cat:'flowering', price: 41,          rating:4.3, reviews:108, badge:null,         light:'bright', water:'low',    hum:'medium', diff:'hard',   pet:true,  height:'45–60 cm', pot:'12 cm', stock:13, feat:false },
    { id:'ficus-bonsai',        cat:'bonsai',    price: 68,          rating:4.5, reviews: 87, badge:'rare',       light:'bright', water:'medium', hum:'medium', diff:'medium', pet:false, height:'30–40 cm', pot:'20 cm', stock:8,  feat:true },
    { id:'juniper-bonsai',      cat:'bonsai',    price: 76,          rating:4.4, reviews: 64, badge:'rare',       light:'direct', water:'medium', hum:'low',    diff:'hard',   pet:true,  height:'25–35 cm', pot:'22 cm', stock:5,  feat:false },
    { id:'english-lavender',    cat:'outdoor',   price: 21,          rating:4.6, reviews:231, badge:null,         light:'direct', water:'low',    hum:'low',    diff:'easy',   pet:true,  height:'35–45 cm', pot:'15 cm', stock:48, feat:false },
    { id:'rosemary',            cat:'herb',      price: 16,          rating:4.7, reviews:194, badge:null,         light:'direct', water:'low',    hum:'low',    diff:'easy',   pet:true,  height:'30–40 cm', pot:'14 cm', stock:52, feat:false },
    { id:'sweet-basil',         cat:'herb',      price: 12,          rating:4.5, reviews:263, badge:'new',        light:'direct', water:'high',   hum:'medium', diff:'easy',   pet:true,  height:'25–35 cm', pot:'12 cm', stock:66, feat:true },
    { id:'aloe-vera',           cat:'succulent', price: 20,          rating:4.8, reviews:398, badge:null,         light:'direct', water:'low',    hum:'low',    diff:'easy',   pet:false, height:'30–40 cm', pot:'15 cm', stock:47, feat:false },
    { id:'calathea-orbifolia',  cat:'indoor',    price: 46,          rating:4.2, reviews:139, badge:'new',        light:'medium', water:'medium', hum:'high',   diff:'hard',   pet:true,  height:'50–65 cm', pot:'19 cm', stock:14, feat:false },
    { id:'bird-of-paradise',    cat:'outdoor',   price: 95,          rating:4.7, reviews:112, badge:'rare',       light:'direct', water:'medium', hum:'medium', diff:'medium', pet:false, height:'130–160 cm', pot:'28 cm', stock:6, feat:true }
  ];

  const NAMES = {
    en: {
      'monstera-deliciosa':'Monstera Deliciosa','monstera-adansonii':'Swiss Cheese Vine','fiddle-leaf-fig':'Fiddle Leaf Fig',
      'rubber-plant':'Rubber Plant','boston-fern':'Boston Fern','maidenhair-fern':'Maidenhair Fern',
      'echeveria-rosette':'Echeveria Rosette','jade-plant':'Jade Plant','golden-barrel':'Golden Barrel Cactus',
      'san-pedro-cactus':'San Pedro Cactus','peace-lily':'Peace Lily','anthurium':'Flamingo Flower',
      'african-violet':'African Violet','hibiscus':'Tropical Hibiscus','kentia-palm':'Kentia Palm',
      'areca-palm':'Areca Palm','golden-pothos':'Golden Pothos','string-of-hearts':'String of Hearts',
      'snake-plant':'Snake Plant','zz-plant':'ZZ Plant','phalaenopsis-orchid':'Phalaenopsis Orchid',
      'dendrobium-orchid':'Dendrobium Orchid','ficus-bonsai':'Ficus Bonsai','juniper-bonsai':'Juniper Bonsai',
      'english-lavender':'English Lavender','rosemary':'Rosemary','sweet-basil':'Sweet Basil',
      'aloe-vera':'Aloe Vera','calathea-orbifolia':'Calathea Orbifolia','bird-of-paradise':'Bird of Paradise'
    },
    uz: {
      'monstera-deliciosa':'Monstera Deliciosa','monstera-adansonii':'Teshikbarg monstera','fiddle-leaf-fig':'Skripkabargli fikus',
      'rubber-plant':'Kauchuk fikusi','boston-fern':'Boston paportnigi','maidenhair-fern':'Adiantum paportnigi',
      'echeveria-rosette':'Exeveriya','jade-plant':'Semizo‘t (Krassula)','golden-barrel':'Oltin bochka kaktusi',
      'san-pedro-cactus':'San-Pedro kaktusi','peace-lily':'Spatifillum','anthurium':'Anturium',
      'african-violet':'Afrika binafshasi','hibiscus':'Tropik gibiskus','kentia-palm':'Kentiya palmasi',
      'areca-palm':'Areka palmasi','golden-pothos':'Oltin stsindapsus','string-of-hearts':'Yuraklar shodasi',
      'snake-plant':'Sansevieriya','zz-plant':'Zamiokulkas','phalaenopsis-orchid':'Falenopsis orxideyasi',
      'dendrobium-orchid':'Dendrobium orxideyasi','ficus-bonsai':'Fikus bonsayi','juniper-bonsai':'Archa bonsayi',
      'english-lavender':'Ingliz lavandasi','rosemary':'Rozmarin','sweet-basil':'Rayhon',
      'aloe-vera':'Aloe Vera','calathea-orbifolia':'Kalateya Orbifoliya','bird-of-paradise':'Jannat qushi (Strelitsiya)'
    },
    ru: {
      'monstera-deliciosa':'Монстера деликатесная','monstera-adansonii':'Монстера Адансона','fiddle-leaf-fig':'Фикус лировидный',
      'rubber-plant':'Фикус каучуконосный','boston-fern':'Нефролепис (бостонский папоротник)','maidenhair-fern':'Адиантум',
      'echeveria-rosette':'Эхеверия','jade-plant':'Денежное дерево (крассула)','golden-barrel':'Эхинокактус Грузони',
      'san-pedro-cactus':'Кактус Сан-Педро','peace-lily':'Спатифиллум','anthurium':'Антуриум',
      'african-violet':'Узамбарская фиалка','hibiscus':'Гибискус тропический','kentia-palm':'Пальма кентия',
      'areca-palm':'Арека (хризалидокарпус)','golden-pothos':'Эпипремнум золотистый','string-of-hearts':'Церопегия Вуда',
      'snake-plant':'Сансевиерия','zz-plant':'Замиокулькас','phalaenopsis-orchid':'Орхидея фаленопсис',
      'dendrobium-orchid':'Орхидея дендробиум','ficus-bonsai':'Фикус бонсай','juniper-bonsai':'Можжевельник бонсай',
      'english-lavender':'Лаванда английская','rosemary':'Розмарин','sweet-basil':'Базилик душистый',
      'aloe-vera':'Алоэ вера','calathea-orbifolia':'Калатея орбифолия','bird-of-paradise':'Стрелиция (райская птица)'
    },
    zh: {
      'monstera-deliciosa':'龟背竹','monstera-adansonii':'窗孔龟背竹','fiddle-leaf-fig':'琴叶榕',
      'rubber-plant':'橡皮树','boston-fern':'波士顿蕨','maidenhair-fern':'铁线蕨',
      'echeveria-rosette':'石莲花','jade-plant':'翡翠木（玉树）','golden-barrel':'金琥',
      'san-pedro-cactus':'圣佩德罗仙人掌','peace-lily':'白鹤芋','anthurium':'红掌',
      'african-violet':'非洲堇','hibiscus':'朱槿（扶桑）','kentia-palm':'荷威椰子',
      'areca-palm':'散尾葵','golden-pothos':'绿萝','string-of-hearts':'爱之蔓',
      'snake-plant':'虎尾兰','zz-plant':'金钱树','phalaenopsis-orchid':'蝴蝶兰',
      'dendrobium-orchid':'石斛兰','ficus-bonsai':'榕树盆景','juniper-bonsai':'真柏盆景',
      'english-lavender':'英国薰衣草','rosemary':'迷迭香','sweet-basil':'甜罗勒',
      'aloe-vera':'芦荟','calathea-orbifolia':'圆叶竹芋','bird-of-paradise':'天堂鸟（鹤望兰）'
    },
    ar: {
      'monstera-deliciosa':'مونستيرا ديليسيوزا','monstera-adansonii':'مونستيرا أدانسوني','fiddle-leaf-fig':'تين الكمان',
      'rubber-plant':'نبات المطاط','boston-fern':'سرخس بوسطن','maidenhair-fern':'سرخس شعر البنات',
      'echeveria-rosette':'إتشيفيريا','jade-plant':'شجرة اليشم','golden-barrel':'صبار البرميل الذهبي',
      'san-pedro-cactus':'صبار سان بيدرو','peace-lily':'زنبق السلام','anthurium':'أنثوريوم',
      'african-violet':'البنفسج الأفريقي','hibiscus':'الكركديه الاستوائي','kentia-palm':'نخيل الكنتيا',
      'areca-palm':'نخيل الأريكا','golden-pothos':'البوتس الذهبي','string-of-hearts':'سلسلة القلوب',
      'snake-plant':'سانسيفيريا','zz-plant':'زاميوكولكاس','phalaenopsis-orchid':'أوركيد فالاينوبسيس',
      'dendrobium-orchid':'أوركيد دندروبيوم','ficus-bonsai':'بونساي الفيكس','juniper-bonsai':'بونساي العرعر',
      'english-lavender':'الخزامى الإنجليزية','rosemary':'إكليل الجبل','sweet-basil':'الريحان',
      'aloe-vera':'الصبار (ألوفيرا)','calathea-orbifolia':'كالاثيا أوربيفوليا','bird-of-paradise':'عصفور الجنة'
    }
  };

  const BLURBS = {
    en: {
      'monstera-deliciosa':'The icon of indoor jungles — huge glossy leaves that split dramatically as the plant matures.',
      'monstera-adansonii':'A fast trailing vine whose small leaves are perforated like lace. Perfect for a shelf or hanger.',
      'fiddle-leaf-fig':'Sculptural violin-shaped leaves on a single elegant trunk. Rewards a consistent routine.',
      'rubber-plant':'Thick burgundy-green leaves with a mirror shine. Forgiving, fast and architectural.',
      'boston-fern':'Soft arching fronds that soften any corner and love a steamy bathroom.',
      'maidenhair-fern':'Delicate fan-shaped leaflets on wiry black stems — the most graceful fern there is.',
      'echeveria-rosette':'A perfect geometric rosette with a dusty blue bloom. Thrives on neglect and sunshine.',
      'jade-plant':'A miniature tree of plump coin-shaped leaves, said to bring prosperity. Lives for decades.',
      'golden-barrel':'A spherical cactus ribbed with golden spines — a living sculpture for the sunniest window.',
      'san-pedro-cactus':'Fast-growing columnar cactus with a soft blue-green bloom. Striking and nearly indestructible.',
      'peace-lily':'Glossy dark leaves and elegant white spathes that keep coming back, even in low light.',
      'anthurium':'Waxy heart-shaped blooms in vivid red that last for weeks and repeat all year.',
      'african-violet':'Velvet leaves and clustered purple blooms — a compact windowsill classic.',
      'hibiscus':'Enormous tropical flowers that open fresh each morning, all through the warm season.',
      'kentia-palm':'The grand hotel palm: tall, slow, elegant and remarkably tolerant of dim rooms.',
      'areca-palm':'Feathery golden-green fronds that humidify a room while they soften it.',
      'golden-pothos':'The easiest houseplant alive. Marbled gold leaves trail happily from any shelf.',
      'string-of-hearts':'Fine purple stems strung with tiny marbled hearts, cascading up to a metre.',
      'snake-plant':'Upright architectural blades with gold margins. Survives almost anything, including you.',
      'zz-plant':'Lacquered emerald leaflets on thick stems. Tolerates dark corners and weeks without water.',
      'phalaenopsis-orchid':'Arching sprays of butterfly blooms that last three months and rebloom each year.',
      'dendrobium-orchid':'Tall canes crowded with vivid blossoms — the showiest orchid in the collection.',
      'ficus-bonsai':'A hand-trained ficus with aerial roots and a thick gnarled trunk. Ten years in the making.',
      'juniper-bonsai':'A classic outdoor bonsai with dense blue-green foliage and a weathered, windswept form.',
      'english-lavender':'Silvery foliage and fragrant violet spikes that bees adore. Dries beautifully for the house.',
      'rosemary':'Aromatic evergreen needles for the kitchen and a Mediterranean scent for the balcony.',
      'sweet-basil':'Fragrant soft leaves ready to pick. The fastest route from windowsill to plate.',
      'aloe-vera':'Thick healing leaves full of soothing gel. The most useful plant you can own.',
      'calathea-orbifolia':'Enormous round leaves pinstriped in silver. Folds its leaves up each night.',
      'bird-of-paradise':'Giant paddle leaves and, in time, the famous orange crane-shaped flower.'
    },
    uz: {
      'monstera-deliciosa':'Xonaki jungli ramzi — yetilgani sari kesilgan naqshlar paydo bo‘ladigan yirik yaltiroq barglar.',
      'monstera-adansonii':'Dantel kabi teshikli mayda barglarga ega tez o‘suvchi chirmashuvchi o‘simlik. Javon uchun ideal.',
      'fiddle-leaf-fig':'Yagona nafis tanada skripka shaklidagi haykaltarosh barglar. Barqaror parvarishni qadrlaydi.',
      'rubber-plant':'Oyna kabi yaltiroq, qalin to‘q yashil-bordo barglar. Kechirimli, tez o‘sadi va ko‘rkam.',
      'boston-fern':'Har qanday burchakni yumshatadigan va nam hammomni yaxshi ko‘radigan yumshoq egilgan barglar.',
      'maidenhair-fern':'Ingichka qora poyalarda nozik yelpig‘ichsimon barglar — eng nafis paportnik.',
      'echeveria-rosette':'Moviy g‘uborli mukammal geometrik rozetka. Quyosh va e’tiborsizlikni yaxshi ko‘radi.',
      'jade-plant':'Tangasimon serbar barglardan iborat kichik daraxt. Farovonlik ramzi, o‘nlab yil yashaydi.',
      'golden-barrel':'Oltin tikanlar bilan qoplangan sharsimon kaktus — eng quyoshli deraza uchun tirik haykal.',
      'san-pedro-cactus':'Moviy-yashil g‘uborli, tez o‘sadigan ustunsimon kaktus. Ko‘zga tashlanadi va deyarli buzilmas.',
      'peace-lily':'Yaltiroq to‘q barglar va nafis oq gullar — hatto kam yorug‘likda ham qayta-qayta gullaydi.',
      'anthurium':'Haftalab turadigan va yil bo‘yi qaytariladigan yorqin qizil, mumsimon yuraksimon gullar.',
      'african-violet':'Baxmal barglar va binafsha gul to‘plamlari — deraza tokchasining ixcham klassikasi.',
      'hibiscus':'Iliq mavsum davomida har tongda yangi ochiladigan ulkan tropik gullar.',
      'kentia-palm':'Mashhur mehmonxona palmasi: baland, sekin o‘sadigan, nafis va xira xonalarga chidamli.',
      'areca-palm':'Xonani namlantirib, yumshatadigan patsimon oltin-yashil barglar.',
      'golden-pothos':'Dunyodagi eng oson xonaki o‘simlik. Oltin marmarsimon barglar har qanday javondan osiladi.',
      'string-of-hearts':'Bir metrgacha osilib tushadigan, mayda marmar yuraklar tizilgan ingichka binafsha poyalar.',
      'snake-plant':'Oltin hoshiyali tik barglar. Deyarli hamma narsaga chidaydi — hatto sizga ham.',
      'zz-plant':'Qalin poyalarda lakli zumrad barglar. Qorong‘i burchak va haftalab suvsizlikka chidaydi.',
      'phalaenopsis-orchid':'Uch oy turadigan va har yili qayta gullaydigan kapalaksimon gul shodalari.',
      'dendrobium-orchid':'Yorqin gullar bilan qoplangan baland poyalar — kolleksiyadagi eng ko‘rkam orxideya.',
      'ficus-bonsai':'Havo ildizlari va qalin burishgan tanaga ega qo‘lda shakllantirilgan fikus. O‘n yillik mehnat.',
      'juniper-bonsai':'Zich moviy-yashil nina bargli, shamolda toblangan shakldagi klassik tashqi bonsay.',
      'english-lavender':'Kumushrang barglar va asalarilar sevadigan xushbo‘y binafsha boshoqlar. Quritilsa ham go‘zal.',
      'rosemary':'Oshxona uchun xushbo‘y doimiy yashil ignalar va balkon uchun O‘rta yer dengizi hidi.',
      'sweet-basil':'Terishga tayyor xushbo‘y yumshoq barglar. Deraza tokchasidan dasturxongacha eng qisqa yo‘l.',
      'aloe-vera':'Tinchlantiruvchi gelga to‘la qalin shifobaxsh barglar. Eng foydali uy o‘simligi.',
      'calathea-orbifolia':'Kumush chiziqli ulkan yumaloq barglar. Har kecha barglarini yig‘ib oladi.',
      'bird-of-paradise':'Ulkan eshkaksimon barglar va vaqti kelib mashhur turna shaklidagi to‘q sariq gul.'
    },
    ru: {
      'monstera-deliciosa':'Символ домашних джунглей — огромные глянцевые листья, которые эффектно рассекаются с возрастом.',
      'monstera-adansonii':'Быстрорастущая лиана с небольшими листьями, продырявленными как кружево. Идеальна для полки.',
      'fiddle-leaf-fig':'Скульптурные листья в форме скрипки на одном изящном стволе. Любит постоянный режим.',
      'rubber-plant':'Плотные тёмно-зелёные листья с зеркальным блеском. Неприхотливый, быстрый, архитектурный.',
      'boston-fern':'Мягкие изогнутые вайи, которые смягчают любой угол и обожают влажную ванную.',
      'maidenhair-fern':'Нежные веерные листочки на тонких чёрных черешках — самый грациозный папоротник.',
      'echeveria-rosette':'Идеальная геометрическая розетка с голубоватым налётом. Любит солнце и забывчивых хозяев.',
      'jade-plant':'Деревце из пухлых листьев-монеток, символ достатка. Живёт десятилетиями.',
      'golden-barrel':'Шаровидный кактус с золотыми колючками — живая скульптура для самого солнечного окна.',
      'san-pedro-cactus':'Быстрорастущий колонновидный кактус с сизо-голубым налётом. Эффектный и почти неубиваемый.',
      'peace-lily':'Глянцевые тёмные листья и белые покрывала, которые возвращаются даже при слабом свете.',
      'anthurium':'Восковые сердцевидные соцветия яркого красного цвета — держатся неделями и цветут круглый год.',
      'african-violet':'Бархатные листья и охапки фиолетовых цветков — компактная классика подоконника.',
      'hibiscus':'Огромные тропические цветы, распускающиеся каждое утро весь тёплый сезон.',
      'kentia-palm':'Та самая «отельная» пальма: высокая, медленная, элегантная и терпимая к полумраку.',
      'areca-palm':'Перистые золотисто-зелёные вайи, которые увлажняют комнату и смягчают интерьер.',
      'golden-pothos':'Самое простое комнатное растение на свете. Золотисто-мраморные плети свисают с любой полки.',
      'string-of-hearts':'Тонкие пурпурные нити с крошечными мраморными сердечками, свисающие до метра.',
      'snake-plant':'Вертикальные листья-мечи с золотой каймой. Переживёт почти всё, включая вас.',
      'zz-plant':'Лакированные изумрудные листочки на толстых стеблях. Терпит тёмные углы и недели без полива.',
      'phalaenopsis-orchid':'Дуги цветоносов с цветками-бабочками: держатся три месяца и повторяют цветение ежегодно.',
      'dendrobium-orchid':'Высокие псевдобульбы, усыпанные яркими цветками — самая зрелищная орхидея коллекции.',
      'ficus-bonsai':'Фикус ручной формировки с воздушными корнями и толстым узловатым стволом. Десять лет работы.',
      'juniper-bonsai':'Классический уличный бонсай с густой сизо-зелёной хвоей и «продутой ветром» формой.',
      'english-lavender':'Серебристая листва и душистые фиолетовые колоски, которые обожают пчёлы. Отлично сохнет.',
      'rosemary':'Ароматная вечнозелёная хвоя для кухни и средиземноморский запах для балкона.',
      'sweet-basil':'Душистые мягкие листья, готовые к срезке. Кратчайший путь от подоконника до тарелки.',
      'aloe-vera':'Толстые целебные листья, полные успокаивающего геля. Самое полезное растение в доме.',
      'calathea-orbifolia':'Огромные круглые листья в серебряную полоску. Каждый вечер складывает листья вверх.',
      'bird-of-paradise':'Гигантские вёсельные листья и со временем — знаменитый оранжевый цветок-журавль.'
    },
    zh: {
      'monstera-deliciosa':'室内丛林的标志——硕大光亮的叶片随着成熟而裂出迷人的孔洞。',
      'monstera-adansonii':'生长迅速的藤本，小叶上布满蕾丝般的孔洞，最适合放在层架或吊盆。',
      'fiddle-leaf-fig':'单一优雅主干上托着提琴形的雕塑感叶片，规律养护便回报丰厚。',
      'rubber-plant':'厚实的墨绿带酒红叶片，带镜面光泽。好养、长得快、造型利落。',
      'boston-fern':'柔软拱垂的羽叶，能柔化任何角落，尤其喜欢潮湿的浴室。',
      'maidenhair-fern':'纤细黑茎上托着扇形小叶，是最优雅的一种蕨类。',
      'echeveria-rosette':'带蓝灰白粉的完美几何莲座。喜阳光，越「疏于照顾」长得越好。',
      'jade-plant':'由圆润铜钱状叶片组成的小树，寓意招财进宝，可养数十年。',
      'golden-barrel':'布满金色棘刺的球形仙人掌——献给最向阳窗台的活雕塑。',
      'san-pedro-cactus':'生长迅速的柱状仙人掌，披着蓝绿色白霜。造型抢眼，几乎养不死。',
      'peace-lily':'光亮的深色叶片与优雅的白色佛焰苞，即使光线不足也会反复开花。',
      'anthurium':'蜡质心形花苞呈鲜艳红色，单朵可开数周，全年反复开放。',
      'african-violet':'天鹅绒般的叶片与成簇紫花——窗台上的经典小品。',
      'hibiscus':'硕大的热带花朵，在整个温暖季节里每天清晨绽放一朵新花。',
      'kentia-palm':'传说中的酒店大堂棕榈：高挑、慢生、优雅，而且相当耐阴。',
      'areca-palm':'羽状的金绿色叶片，在柔化空间的同时为房间增添湿度。',
      'golden-pothos':'世上最易养的室内植物。金色斑纹的叶片可从任何层架自在垂落。',
      'string-of-hearts':'细长的紫色茎蔓串起点点大理石纹心形小叶，可垂落一米。',
      'snake-plant':'挺拔的剑形叶片镶着金边。几乎什么都能扛过去——包括你的疏忽。',
      'zz-plant':'粗壮茎上长着漆亮的翠绿小叶。耐阴暗角落，数周不浇水也无妨。',
      'phalaenopsis-orchid':'拱形花梗上成串的蝴蝶状花朵，可开三个月，年年复花。',
      'dendrobium-orchid':'高挺的假鳞茎上缀满鲜艳花朵——系列中最华丽的兰花。',
      'ficus-bonsai':'手工蟠扎十年的榕树盆景，带气生根与粗壮虬结的主干。',
      'juniper-bonsai':'经典的户外盆景，枝叶浓密呈蓝绿色，姿态苍劲如经风霜。',
      'english-lavender':'银灰色的叶与芬芳的紫色花穗，蜜蜂最爱。干燥后同样美丽。',
      'rosemary':'芳香的常绿针叶，既可入厨，也为阳台带来地中海的气息。',
      'sweet-basil':'柔软芬芳、随摘随用的叶片。从窗台到餐盘的最短路径。',
      'aloe-vera':'肥厚的叶片饱含舒缓凝胶，是家中最实用的一株植物。',
      'calathea-orbifolia':'硕大的圆叶上布满银色细条纹，每到夜里便把叶片合拢立起。',
      'bird-of-paradise':'巨大的桨状叶片，假以时日还会开出著名的橙色鹤形花。'
    },
    ar: {
      'monstera-deliciosa':'أيقونة الأدغال المنزلية — أوراق ضخمة لامعة تتشقّق بشكل مذهل مع نضج النبتة.',
      'monstera-adansonii':'متسلّقة سريعة النمو بأوراق صغيرة مثقّبة كالدانتيل. مثالية للرف أو السلة المعلّقة.',
      'fiddle-leaf-fig':'أوراق نحتية على شكل كمان فوق جذع أنيق واحد. تكافئ من يلتزم بروتين ثابت.',
      'rubber-plant':'أوراق سميكة خضراء داكنة بلمعة المرآة. متسامحة وسريعة النمو وذات حضور معماري.',
      'boston-fern':'سعف ناعم منحنٍ يلطّف أي ركن، ويعشق حمّامًا رطبًا دافئًا.',
      'maidenhair-fern':'وُريقات مروحية رقيقة على سيقان سوداء دقيقة — أرشق أنواع السرخس على الإطلاق.',
      'echeveria-rosette':'وردة هندسية مثالية بغبار أزرق رمادي. تزدهر مع الشمس وقلة الاهتمام.',
      'jade-plant':'شجيرة مصغّرة بأوراق ممتلئة كالعملات، يُقال إنها تجلب الرخاء. تعيش عقودًا.',
      'golden-barrel':'صبار كروي مضلّع بأشواك ذهبية — منحوتة حيّة لأكثر النوافذ شمسًا.',
      'san-pedro-cactus':'صبار عمودي سريع النمو بغبار أزرق مخضر. لافت للنظر ويكاد لا يموت.',
      'peace-lily':'أوراق داكنة لامعة وأغلفة زهرية بيضاء أنيقة تتكرّر حتى في الإضاءة الخافتة.',
      'anthurium':'أزهار شمعية قلبية الشكل بلون أحمر زاهٍ تدوم أسابيع وتتكرّر طوال العام.',
      'african-violet':'أوراق مخملية وعناقيد زهور بنفسجية — كلاسيكية صغيرة لحافة النافذة.',
      'hibiscus':'أزهار استوائية ضخمة تتفتّح جديدة كل صباح طوال الموسم الدافئ.',
      'kentia-palm':'نخلة الفنادق الكبرى: طويلة وبطيئة النمو وأنيقة وتتحمّل الغرف الخافتة بشكل لافت.',
      'areca-palm':'سعف ريشي ذهبي مخضر يرطّب الغرفة ويلطّف مظهرها في آن واحد.',
      'golden-pothos':'أسهل نبتة منزلية على الإطلاق. أوراق مرخّمة بالذهبي تتدلّى بسعادة من أي رف.',
      'string-of-hearts':'سيقان أرجوانية رفيعة تتخلّلها قلوب صغيرة مرخّمة، تتدلّى حتى متر كامل.',
      'snake-plant':'نصال قائمة ذات حواف ذهبية. تنجو من كل شيء تقريبًا، بما في ذلك إهمالك.',
      'zz-plant':'وُريقات زمردية لامعة على سيقان سميكة. تتحمّل الأركان المظلمة وأسابيع دون ري.',
      'phalaenopsis-orchid':'أفرع منحنية من أزهار تشبه الفراشات تدوم ثلاثة أشهر وتعاود الإزهار كل عام.',
      'dendrobium-orchid':'سيقان طويلة مكتظّة بأزهار زاهية — أبهى أوركيد في المجموعة.',
      'ficus-bonsai':'فيكس مُشكّل يدويًا بجذور هوائية وجذع سميك متعرّج. ثمرة عشر سنوات من العمل.',
      'juniper-bonsai':'بونساي خارجي كلاسيكي بأوراق كثيفة زرقاء مخضرة وهيئة تبدو منحوتة بالرياح.',
      'english-lavender':'أوراق فضية وسنابل بنفسجية عطرة يعشقها النحل. وتجفّ بشكل جميل للمنزل.',
      'rosemary':'إبر دائمة الخضرة عطرة للمطبخ، ورائحة متوسطية للشرفة.',
      'sweet-basil':'أوراق طرية عطرة جاهزة للقطف. أقصر طريق من حافة النافذة إلى الطبق.',
      'aloe-vera':'أوراق سميكة علاجية مليئة بالهلام المهدّئ. أنفع نبتة يمكن أن تقتنيها.',
      'calathea-orbifolia':'أوراق مستديرة ضخمة مخطّطة بالفضي. تطوي أوراقها إلى أعلى كل ليلة.',
      'bird-of-paradise':'أوراق مجدافية عملاقة، ومع الوقت تلك الزهرة البرتقالية الشهيرة على شكل طائر.'
    }
  };

  const CATEGORIES = ['indoor', 'outdoor', 'succulent', 'flowering', 'herb', 'bonsai'];

  const PROMOS = { GREEN10: 10, PLANT20: 20, WELCOME15: 15 };

  /* Real photography, keyed by product id. Drop a file in
     assets/img/photos/<id>.jpg and add the id here, or point at a full URL.
     Anything absent falls back to the generated illustration. */
  const PHOTOS = {
    // 'monstera-deliciosa': 'assets/img/photos/monstera-deliciosa.jpg',
  };

  const byId = {};
  PRODUCTS.forEach(p => {
    p.img = 'assets/img/plants/' + p.id + '.svg';   // always present
    p.photo = PHOTOS[p.id] || null;                 // preferred when set
    byId[p.id] = p;
  });

  root.DATA = {
    PRODUCTS, CATEGORIES, PROMOS, PHOTOS,
    get(id) { return byId[id] || null; },
    name(id, lang) { const m = NAMES[lang] || NAMES.en; return m[id] || NAMES.en[id] || id; },
    blurb(id, lang) { const m = BLURBS[lang] || BLURBS.en; return m[id] || BLURBS.en[id] || ''; },
    NAMES, BLURBS
  };
})(window);
