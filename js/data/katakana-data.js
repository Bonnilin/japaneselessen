/* 片假名常用外來語單字（精選 18 字，貼近日常生活場景） */
const KATAKANA_DATA = [
  { id: 'k01', word: 'コーヒー', romaji: 'koohii', meaning: '咖啡', pos: '名詞', example: { jp: '<ruby>毎朝<rt>まいあさ</rt></ruby>コーヒーを<ruby>飲<rt>の</rt></ruby>みます。', zh: '每天早上都喝咖啡。' } },
  { id: 'k02', word: 'テレビ', romaji: 'terebi', meaning: '電視', pos: '名詞', example: { jp: '<ruby>夜<rt>よる</rt></ruby>、テレビを<ruby>見<rt>み</rt></ruby>ます。', zh: '晚上看電視。' } },
  { id: 'k03', word: 'パソコン', romaji: 'pasokon', meaning: '個人電腦', pos: '名詞', example: { jp: 'パソコンで<ruby>仕事<rt>しごと</rt></ruby>をします。', zh: '用電腦工作。' } },
  { id: 'k04', word: 'アイスクリーム', romaji: 'aisukuriimu', meaning: '冰淇淋', pos: '名詞', example: { jp: '<ruby>夏<rt>なつ</rt></ruby>はアイスクリームが<ruby>食<rt>た</rt></ruby>べたいです。', zh: '夏天想吃冰淇淋。' } },
  { id: 'k05', word: 'レストラン', romaji: 'resutoran', meaning: '餐廳', pos: '名詞', example: { jp: 'あのレストランはとても<ruby>美味<rt>おい</rt></ruby>しいです。', zh: '那間餐廳非常好吃。' } },
  { id: 'k06', word: 'ホテル', romaji: 'hoteru', meaning: '飯店', pos: '名詞', example: { jp: '<ruby>駅<rt>えき</rt></ruby>の<ruby>近<rt>ちか</rt></ruby>くのホテルに<ruby>泊<rt>と</rt></ruby>まります。', zh: '住在車站附近的飯店。' } },
  { id: 'k07', word: 'タクシー', romaji: 'takushii', meaning: '計程車', pos: '名詞', example: { jp: '<ruby>雨<rt>あめ</rt></ruby>の<ruby>日<rt>ひ</rt></ruby>はタクシーに<ruby>乗<rt>の</rt></ruby>ります。', zh: '下雨天搭計程車。' } },
  { id: 'k08', word: 'カメラ', romaji: 'kamera', meaning: '相機', pos: '名詞', example: { jp: 'このカメラで<ruby>写真<rt>しゃしん</rt></ruby>を<ruby>撮<rt>と</rt></ruby>ります。', zh: '用這台相機拍照。' } },
  { id: 'k09', word: 'ケーキ', romaji: 'keeki', meaning: '蛋糕', pos: '名詞', example: { jp: '<ruby>誕生日<rt>たんじょうび</rt></ruby>にケーキを<ruby>作<rt>つく</rt></ruby>ります。', zh: '生日做蛋糕。' } },
  { id: 'k10', word: 'スポーツ', romaji: 'supootsu', meaning: '運動', pos: '名詞', example: { jp: '<ruby>私<rt>わたし</rt></ruby>はスポーツが<ruby>好<rt>す</rt></ruby>きです。', zh: '我喜歡運動。' } },
  { id: 'k11', word: 'ニュース', romaji: 'nyuusu', meaning: '新聞、消息', pos: '名詞', example: { jp: '<ruby>今朝<rt>けさ</rt></ruby>のニュースを<ruby>見<rt>み</rt></ruby>ましたか。', zh: '你看了今天早上的新聞了嗎？' } },
  { id: 'k12', word: 'コンビニ', romaji: 'konbini', meaning: '便利商店', pos: '名詞', example: { jp: 'コンビニで<ruby>飲<rt>の</rt></ruby>み<ruby>物<rt>もの</rt></ruby>を<ruby>買<rt>か</rt></ruby>います。', zh: '在便利商店買飲料。' } },
  { id: 'k13', word: 'エレベーター', romaji: 'erebeetaa', meaning: '電梯', pos: '名詞', example: { jp: 'エレベーターで<ruby>三階<rt>さんがい</rt></ruby>に<ruby>行<rt>い</rt></ruby>きます。', zh: '搭電梯到三樓。' } },
  { id: 'k14', word: 'アルバイト', romaji: 'arubaito', meaning: '打工', pos: '名詞・する動詞', example: { jp: '<ruby>週末<rt>しゅうまつ</rt></ruby>、アルバイトをしています。', zh: '週末在打工。' } },
  { id: 'k15', word: 'スマホ', romaji: 'sumaho', meaning: '智慧型手機', pos: '名詞', example: { jp: 'スマホで<ruby>写真<rt>しゃしん</rt></ruby>を<ruby>見<rt>み</rt></ruby>ます。', zh: '用手機看照片。' } },
  { id: 'k16', word: 'パン', romaji: 'pan', meaning: '麵包', pos: '名詞', example: { jp: '<ruby>朝<rt>あさ</rt></ruby>ご<ruby>飯<rt>はん</rt></ruby>はパンを<ruby>食<rt>た</rt></ruby>べます。', zh: '早餐吃麵包。' } },
  { id: 'k17', word: 'ジュース', romaji: 'juusu', meaning: '果汁', pos: '名詞', example: { jp: 'オレンジジュースをください。', zh: '請給我柳橙汁。' } },
  { id: 'k18', word: 'バス', romaji: 'basu', meaning: '公車', pos: '名詞', example: { jp: '<ruby>学校<rt>がっこう</rt></ruby>までバスで<ruby>行<rt>い</rt></ruby>きます。', zh: '搭公車去學校。' } }
];
