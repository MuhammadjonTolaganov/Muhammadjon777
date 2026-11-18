/* GreenHaven — plant-care knowledge base powering the AI assistant.
   Species facts are stored as language-neutral codes and rendered through
   translated label tables, so every fact stays consistent in all 5 languages. */
(function (root) {
  'use strict';

  /* ------------------------------------------------------- label tables */
  const LABELS = {
    en: {
      light:  { low:'tolerates low light', medium:'medium, filtered light', bright:'bright indirect light', direct:'direct sun, 4+ hours' },
      soil:   { aroid:'chunky aroid mix — bark, perlite and coir', cactus:'free-draining cactus and succulent grit', standard:'good quality peat-free houseplant compost', orchid:'coarse bark, never soil', herb:'loose, sandy compost that drains fast' },
      fert:   { heavy:'balanced liquid feed every 2 weeks in spring and summer', monthly:'balanced liquid feed monthly in spring and summer', light:'half-strength feed every 6–8 weeks in the growing season', none:'feed rarely — once or twice a year is plenty' },
      prop:   { stem:'stem cuttings in water or damp moss', leaf:'single leaf laid on damp compost', division:'divide the root ball when repotting', offset:'detach and pot the offsets ("pups")', seed:'from seed, slow but reliable' },
      toxic:  { oxalate:'Toxic if chewed — contains calcium oxalate crystals that burn the mouth. Keep away from cats, dogs and small children.', latex:'Toxic if chewed — the milky sap irritates the mouth and skin.', mild:'Mildly toxic if eaten in quantity — may cause an upset stomach.', safe:'Non-toxic to cats and dogs — safe for a home with pets.' },
      units:  { days:'days', cm:'cm', c:'°C' }
    },
    uz: {
      light:  { low:'kam yorug‘likka chidaydi', medium:'o‘rtacha, tarqoq yorug‘lik', bright:'yorug‘, to‘g‘ridan tushmaydigan yorug‘lik', direct:'to‘g‘ridan quyosh, 4+ soat' },
      soil:   { aroid:'yirik aroid aralashmasi — po‘stloq, perlit va kokos tolasi', cactus:'suv o‘tkazadigan kaktus va sukkulent aralashmasi', standard:'sifatli, torfsiz xonaki o‘simlik tuprog‘i', orchid:'yirik po‘stloq, hech qachon oddiy tuproq emas', herb:'yumshoq, qumli va tez quriydigan tuproq' },
      fert:   { heavy:'bahor va yozda har 2 haftada muvozanatli suyuq o‘g‘it', monthly:'bahor va yozda oyiga bir marta muvozanatli suyuq o‘g‘it', light:'o‘sish davrida har 6–8 haftada yarim dozali o‘g‘it', none:'kamdan-kam o‘g‘itlang — yiliga bir-ikki marta yetarli' },
      prop:   { stem:'poya qalamchalari suvda yoki nam moxda', leaf:'bitta bargni nam tuproq ustiga qo‘yish orqali', division:'ko‘chirib o‘tkazishda ildiz to‘pini bo‘lish', offset:'yon kurtaklarni ajratib, alohida tuvakka ekish', seed:'urug‘dan — sekin, ammo ishonchli' },
      toxic:  { oxalate:'Chaynalsa zaharli — og‘izni kuydiradigan kalsiy oksalat kristallari bor. Mushuk, it va kichik bolalardan uzoq tuting.', latex:'Chaynalsa zaharli — sutsimon shira og‘iz va teriga ta’sir qiladi.', mild:'Ko‘p miqdorda yeyilsa yengil zaharli — oshqozon buzilishi mumkin.', safe:'Mushuk va itlar uchun zaharsiz — uy hayvonlari bor uy uchun xavfsiz.' },
      units:  { days:'kun', cm:'sm', c:'°C' }
    },
    ru: {
      light:  { low:'переносит слабое освещение', medium:'умеренный рассеянный свет', bright:'яркий рассеянный свет', direct:'прямое солнце, 4+ часа' },
      soil:   { aroid:'крупнофракционный субстрат для ароидных — кора, перлит и кокос', cactus:'рыхлая водопроницаемая смесь для кактусов и суккулентов', standard:'качественный безторфяной грунт для комнатных растений', orchid:'крупная кора, ни в коем случае не земля', herb:'рыхлый песчаный грунт, быстро просыхающий' },
      fert:   { heavy:'сбалансированное жидкое удобрение раз в 2 недели весной и летом', monthly:'сбалансированное жидкое удобрение раз в месяц весной и летом', light:'удобрение половинной концентрации раз в 6–8 недель в период роста', none:'подкармливать редко — одного-двух раз в год достаточно' },
      prop:   { stem:'стеблевые черенки в воде или влажном мхе', leaf:'отдельный лист, уложенный на влажный субстрат', division:'деление корневого кома при пересадке', offset:'отделить и посадить боковые детки', seed:'семенами — медленно, но надёжно' },
      toxic:  { oxalate:'Ядовито при разжёвывании — содержит кристаллы оксалата кальция, обжигающие рот. Держите подальше от кошек, собак и маленьких детей.', latex:'Ядовито при разжёвывании — млечный сок раздражает рот и кожу.', mild:'Слабо ядовито при поедании в большом количестве — возможно расстройство желудка.', safe:'Нетоксично для кошек и собак — безопасно для дома с питомцами.' },
      units:  { days:'дней', cm:'см', c:'°C' }
    },
    zh: {
      light:  { low:'可耐受弱光', medium:'中等的散射光', bright:'明亮的散射光', direct:'每天 4 小时以上直射阳光' },
      soil:   { aroid:'颗粒型天南星科基质——树皮、珍珠岩与椰糠', cactus:'排水极佳的仙人掌多肉颗粒土', standard:'优质无泥炭室内植物培养土', orchid:'粗树皮，切勿使用普通泥土', herb:'疏松含砂、排水迅速的培养土' },
      fert:   { heavy:'春夏每 2 周施一次均衡液肥', monthly:'春夏每月施一次均衡液肥', light:'生长季每 6–8 周施一次半浓度肥', none:'极少施肥——一年一到两次足矣' },
      prop:   { stem:'枝条扦插，水插或湿水苔皆可', leaf:'single 叶片平放于湿润基质上', division:'换盆时分株', offset:'分离侧芽（小崽）另行上盆', seed:'播种繁殖——较慢但可靠' },
      toxic:  { oxalate:'误嚼有毒——含草酸钙针晶，会灼痛口腔。请远离猫、狗与幼童。', latex:'误嚼有毒——乳白色汁液会刺激口腔与皮肤。', mild:'大量误食有轻微毒性——可能引起肠胃不适。', safe:'对猫狗无毒——有宠物的家庭可安心种植。' },
      units:  { days:'天', cm:'厘米', c:'°C' }
    },
    ar: {
      light:  { low:'تتحمّل الإضاءة المنخفضة', medium:'ضوء متوسط مُرشَّح', bright:'ضوء ساطع غير مباشر', direct:'شمس مباشرة ٤ ساعات فأكثر' },
      soil:   { aroid:'خليط خشن للنباتات القلقاسية — لحاء وبيرلايت وألياف جوز الهند', cactus:'خليط صبّار وعصاريات سريع الصرف', standard:'تربة منزلية عالية الجودة خالية من الخث', orchid:'لحاء خشن، ولا تستخدم التربة العادية أبدًا', herb:'تربة رخوة رملية سريعة الصرف' },
      fert:   { heavy:'سماد سائل متوازن كل أسبوعين في الربيع والصيف', monthly:'سماد سائل متوازن مرة شهريًا في الربيع والصيف', light:'سماد بنصف التركيز كل ٦–٨ أسابيع في موسم النمو', none:'سمّد نادرًا — مرة أو مرتين سنويًا تكفي' },
      prop:   { stem:'عُقل ساقية في الماء أو الطحلب الرطب', leaf:'ورقة واحدة توضع على تربة رطبة', division:'تقسيم كتلة الجذور عند تغيير الأصيص', offset:'فصل الخلفات الجانبية وزراعتها', seed:'بالبذور — بطيء لكنه موثوق' },
      toxic:  { oxalate:'سامّ عند المضغ — يحتوي بلورات أكسالات الكالسيوم التي تحرق الفم. أبعده عن القطط والكلاب والأطفال الصغار.', latex:'سامّ عند المضغ — العصارة اللبنية تهيّج الفم والجلد.', mild:'سُمّية خفيفة عند تناول كمية كبيرة — قد يسبب اضطرابًا معويًا.', safe:'غير سامّ للقطط والكلاب — آمن للمنازل التي فيها حيوانات أليفة.' },
      units:  { days:'يومًا', cm:'سم', c:'°C' }
    }
  };

  /* ------------------------------------------------------ species facts */
  /* w = [summerDays, winterDays]; temp = [min, max] comfortable °C        */
  const SPECIES = {
    'monstera-deliciosa':  { w:[8,14],  light:'bright', temp:[18,29], tempMin:12, hum:'medium', soil:'aroid',    fert:'monthly', prop:'stem',     toxic:'oxalate', repotY:2, issues:['yellow-leaves','brown-tips','light','pests-mites'] },
    'monstera-adansonii':  { w:[7,12],  light:'bright', temp:[18,28], tempMin:13, hum:'high',   soil:'aroid',    fert:'monthly', prop:'stem',     toxic:'oxalate', repotY:2, issues:['brown-tips','humidity','pests-mites'] },
    'fiddle-leaf-fig':     { w:[9,16],  light:'bright', temp:[18,27], tempMin:13, hum:'medium', soil:'standard', fert:'monthly', prop:'stem',     toxic:'latex',   repotY:2, issues:['leaf-drop','brown-tips','light','overwater'] },
    'rubber-plant':        { w:[9,18],  light:'bright', temp:[16,27], tempMin:10, hum:'low',    soil:'standard', fert:'monthly', prop:'stem',     toxic:'latex',   repotY:2, issues:['leaf-drop','yellow-leaves','light'] },
    'boston-fern':         { w:[3,6],   light:'medium', temp:[16,24], tempMin:10, hum:'high',   soil:'standard', fert:'light',   prop:'division', toxic:'safe',    repotY:1, issues:['brown-tips','humidity','underwater'] },
    'maidenhair-fern':     { w:[2,4],   light:'medium', temp:[16,24], tempMin:12, hum:'high',   soil:'standard', fert:'light',   prop:'division', toxic:'safe',    repotY:1, issues:['brown-tips','humidity','underwater'] },
    'echeveria-rosette':   { w:[14,28], light:'direct', temp:[15,30], tempMin:5,  hum:'low',    soil:'cactus',   fert:'none',    prop:'leaf',     toxic:'safe',    repotY:3, issues:['overwater','root-rot','light'] },
    'jade-plant':          { w:[16,30], light:'direct', temp:[15,28], tempMin:7,  hum:'low',    soil:'cactus',   fert:'none',    prop:'leaf',     toxic:'mild',    repotY:3, issues:['overwater','root-rot','leaf-drop'] },
    'golden-barrel':       { w:[18,40], light:'direct', temp:[15,35], tempMin:5,  hum:'low',    soil:'cactus',   fert:'none',    prop:'offset',   toxic:'safe',    repotY:4, issues:['overwater','root-rot'] },
    'san-pedro-cactus':    { w:[16,35], light:'direct', temp:[15,35], tempMin:5,  hum:'low',    soil:'cactus',   fert:'none',    prop:'stem',     toxic:'safe',    repotY:3, issues:['overwater','root-rot'] },
    'peace-lily':          { w:[6,10],  light:'low',    temp:[18,27], tempMin:13, hum:'medium', soil:'standard', fert:'monthly', prop:'division', toxic:'oxalate', repotY:2, issues:['drooping','brown-tips','bloom'] },
    'anthurium':           { w:[7,12],  light:'bright', temp:[18,28], tempMin:15, hum:'high',   soil:'aroid',    fert:'monthly', prop:'division', toxic:'oxalate', repotY:2, issues:['bloom','brown-tips','humidity'] },
    'african-violet':      { w:[7,10],  light:'medium', temp:[18,26], tempMin:13, hum:'medium', soil:'standard', fert:'light',   prop:'leaf',     toxic:'safe',    repotY:1, issues:['bloom','overwater','light'] },
    'hibiscus':            { w:[3,8],   light:'direct', temp:[18,32], tempMin:10, hum:'medium', soil:'standard', fert:'heavy',   prop:'stem',     toxic:'safe',    repotY:2, issues:['bloom','pests-mealy','underwater'] },
    'kentia-palm':         { w:[9,16],  light:'medium', temp:[16,27], tempMin:10, hum:'medium', soil:'standard', fert:'light',   prop:'seed',     toxic:'safe',    repotY:3, issues:['brown-tips','pests-mites'] },
    'areca-palm':          { w:[6,12],  light:'bright', temp:[18,28], tempMin:13, hum:'high',   soil:'standard', fert:'monthly', prop:'division', toxic:'safe',    repotY:2, issues:['brown-tips','pests-mites','humidity'] },
    'golden-pothos':       { w:[8,14],  light:'low',    temp:[16,29], tempMin:10, hum:'low',    soil:'standard', fert:'monthly', prop:'stem',     toxic:'oxalate', repotY:2, issues:['yellow-leaves','light','prune'] },
    'string-of-hearts':    { w:[14,25], light:'bright', temp:[16,28], tempMin:10, hum:'low',    soil:'cactus',   fert:'light',   prop:'stem',     toxic:'safe',    repotY:3, issues:['overwater','light'] },
    'snake-plant':         { w:[16,35], light:'low',    temp:[15,30], tempMin:10, hum:'low',    soil:'cactus',   fert:'none',    prop:'division', toxic:'mild',    repotY:3, issues:['overwater','root-rot','yellow-leaves'] },
    'zz-plant':            { w:[16,32], light:'low',    temp:[16,30], tempMin:12, hum:'low',    soil:'cactus',   fert:'none',    prop:'division', toxic:'oxalate', repotY:3, issues:['overwater','root-rot','yellow-leaves'] },
    'phalaenopsis-orchid': { w:[7,12],  light:'bright', temp:[18,28], tempMin:15, hum:'medium', soil:'orchid',   fert:'light',   prop:'offset',   toxic:'safe',    repotY:2, issues:['bloom','root-rot','overwater'] },
    'dendrobium-orchid':   { w:[7,14],  light:'bright', temp:[16,28], tempMin:12, hum:'medium', soil:'orchid',   fert:'light',   prop:'offset',   toxic:'safe',    repotY:2, issues:['bloom','root-rot'] },
    'ficus-bonsai':        { w:[4,9],   light:'bright', temp:[18,28], tempMin:13, hum:'medium', soil:'standard', fert:'light',   prop:'stem',     toxic:'latex',   repotY:2, issues:['leaf-drop','prune','light'] },
    'juniper-bonsai':      { w:[3,8],   light:'direct', temp:[5,28],  tempMin:-10,hum:'low',    soil:'cactus',   fert:'light',   prop:'stem',     toxic:'safe',    repotY:2, issues:['prune','winter','underwater'] },
    'english-lavender':    { w:[8,20],  light:'direct', temp:[10,30], tempMin:-12,hum:'low',    soil:'herb',     fert:'none',    prop:'stem',     toxic:'safe',    repotY:2, issues:['overwater','prune','winter'] },
    'rosemary':            { w:[7,16],  light:'direct', temp:[10,30], tempMin:-7, hum:'low',    soil:'herb',     fert:'light',   prop:'stem',     toxic:'safe',    repotY:2, issues:['overwater','prune','pests-mites'] },
    'sweet-basil':         { w:[2,4],   light:'direct', temp:[18,30], tempMin:10, hum:'medium', soil:'herb',     fert:'heavy',   prop:'stem',     toxic:'safe',    repotY:1, issues:['underwater','prune','pests-gnats'] },
    'aloe-vera':           { w:[16,30], light:'direct', temp:[15,30], tempMin:7,  hum:'low',    soil:'cactus',   fert:'none',    prop:'offset',   toxic:'mild',    repotY:3, issues:['overwater','root-rot','light'] },
    'calathea-orbifolia':  { w:[5,9],   light:'medium', temp:[18,27], tempMin:15, hum:'high',   soil:'standard', fert:'light',   prop:'division', toxic:'safe',    repotY:2, issues:['brown-tips','humidity','water-quality'] },
    'bird-of-paradise':    { w:[7,14],  light:'direct', temp:[18,30], tempMin:10, hum:'medium', soil:'standard', fert:'heavy',   prop:'division', toxic:'mild',    repotY:2, issues:['bloom','brown-tips','light'] }
  };

  /* Extra search aliases per species, merged with catalogue names at runtime */
  const ALIASES = {
    'monstera-deliciosa':  ['monstera','deliciosa','swiss cheese plant','монстера','龟背竹','蓬莱蕉','مونستيرا','teshikbarg'],
    'monstera-adansonii':  ['adansonii','monkey mask','窗孔','адансона'],
    'fiddle-leaf-fig':     ['fiddle','ficus lyrata','lyrata','лировидный','琴叶','كمان'],
    'rubber-plant':        ['ficus elastica','elastica','каучук','фикус','橡皮','مطاط','fikus'],
    'boston-fern':         ['nephrolepis','fern','папоротник','нефролепис','蕨','سرخس','paportnik'],
    'maidenhair-fern':     ['adiantum','адиантум','铁线蕨'],
    'echeveria-rosette':   ['echeveria','эхеверия','石莲','多肉','إتشيفيريا','sukkulent','succulent'],
    'jade-plant':          ['crassula','money tree','крассула','толстянка','денежное дерево','玉树','يشم'],
    'golden-barrel':       ['echinocactus','barrel cactus','эхинокактус','金琥','صبار','kaktus','cactus'],
    'san-pedro-cactus':    ['san pedro','trichocereus','сан-педро','圣佩德罗'],
    'peace-lily':          ['spathiphyllum','спатифиллум','白鹤芋','一帆风顺','زنبق','spatifillum'],
    'anthurium':           ['flamingo flower','антуриум','红掌','أنثوريوم'],
    'african-violet':      ['saintpaulia','сенполия','фиалка','非洲堇','بنفسج','binafsha'],
    'hibiscus':            ['rose of china','гибискус','朱槿','扶桑','كركديه','gibiskus'],
    'kentia-palm':         ['howea','кентия','荷威','كنتيا','palma','palm'],
    'areca-palm':          ['dypsis','арека','散尾葵','أريكا'],
    'golden-pothos':       ['pothos','epipremnum','devils ivy','эпипремнум','сциндапсус','绿萝','بوتس','stsindapsus'],
    'string-of-hearts':    ['ceropegia','церопегия','爱之蔓','قلوب'],
    'snake-plant':         ['sansevieria','dracaena trifasciata','mother in law tongue','сансевиерия','щучий хвост','тёщин язык','虎尾兰','سانسيفيريا','sansevieriya'],
    'zz-plant':            ['zamioculcas','замиокулькас','金钱树','زاميوكولكاس','zamiokulkas'],
    'phalaenopsis-orchid': ['phalaenopsis','moth orchid','orchid','фаленопсис','орхидея','蝴蝶兰','兰花','أوركيد','orxideya'],
    'dendrobium-orchid':   ['dendrobium','дендробиум','石斛'],
    'ficus-bonsai':        ['bonsai','ginseng ficus','бонсай','盆景','بونساي','bonsay'],
    'juniper-bonsai':      ['juniper','можжевельник','真柏','عرعر','archa'],
    'english-lavender':    ['lavender','lavandula','лаванда','薰衣草','خزامى','lavanda'],
    'rosemary':            ['salvia rosmarinus','розмарин','迷迭香','إكليل الجبل'],
    'sweet-basil':         ['basil','ocimum','базилик','罗勒','ريحان','rayhon'],
    'aloe-vera':           ['aloe','алоэ','芦荟','ألوفيرا','صبار'],
    'calathea-orbifolia':  ['calathea','prayer plant','калатея','竹芋','كالاثيا','kalateya'],
    'bird-of-paradise':    ['strelitzia','стрелиция','райская птица','天堂鸟','鹤望兰','ستريليتزيا','strelitsiya']
  };

  root.KB = { LABELS, SPECIES, ALIASES, TOPICS: [] };
})(window);
