/* 文法課程資料庫：GRAMMAR_LESSONS 是所有文法課的清單（N5+N4），
   grammar.html 會依網址 ?slug= 參數從這裡找出對應課程並渲染。
   所有例句與變化範例都已用 <ruby> 標好平假名注音。
   rules 為選填（沒有動詞變化規則的文法點可以留空陣列）。 */

const GRAMMAR_LESSONS = [
  {
    slug: 'te-form',
    level: 'N5',
    title: 'て形｜行動的起手式',
    intro: 'て形是日文動詞變化的樞紐，會て形之後，「請求」「許可」「禁止」「持續」等各種句型都能一次打開。這一課先搞懂三種變化規則，再學三個超實用的て形句型。',
    rules: [
      { group: '第一類動詞（Godan）｜う・つ・る → って', examples: ['<ruby>買<rt>か</rt></ruby>う → <ruby>買<rt>か</rt></ruby>って', '<ruby>待<rt>ま</rt></ruby>つ → <ruby>待<rt>ま</rt></ruby>って', '<ruby>乗<rt>の</rt></ruby>る → <ruby>乗<rt>の</rt></ruby>って'] },
      { group: '第一類動詞｜む・ぬ・ぶ → んで', examples: ['<ruby>読<rt>よ</rt></ruby>む → <ruby>読<rt>よ</rt></ruby>んで', '<ruby>死<rt>し</rt></ruby>ぬ → <ruby>死<rt>し</rt></ruby>んで', '<ruby>遊<rt>あそ</rt></ruby>ぶ → <ruby>遊<rt>あそ</rt></ruby>んで'] },
      { group: '第一類動詞｜く → いて（例外：行く → 行って）', examples: ['<ruby>書<rt>か</rt></ruby>く → <ruby>書<rt>か</rt></ruby>いて', '<ruby>聞<rt>き</rt></ruby>く → <ruby>聞<rt>き</rt></ruby>いて', '<ruby>行<rt>い</rt></ruby>く → <ruby>行<rt>い</rt></ruby>って（特例）'] },
      { group: '第一類動詞｜ぐ → いで', examples: ['<ruby>泳<rt>およ</rt></ruby>ぐ → <ruby>泳<rt>およ</rt></ruby>いで', '<ruby>急<rt>いそ</rt></ruby>ぐ → <ruby>急<rt>いそ</rt></ruby>いで'] },
      { group: '第一類動詞｜す → して', examples: ['<ruby>話<rt>はな</rt></ruby>す → <ruby>話<rt>はな</rt></ruby>して', '<ruby>出<rt>だ</rt></ruby>す → <ruby>出<rt>だ</rt></ruby>して'] },
      { group: '第二類動詞（Ichidan）｜去る＋て', examples: ['<ruby>食<rt>た</rt></ruby>べる → <ruby>食<rt>た</rt></ruby>べて', '<ruby>見<rt>み</rt></ruby>る → <ruby>見<rt>み</rt></ruby>て', '<ruby>起<rt>お</rt></ruby>きる → <ruby>起<rt>お</rt></ruby>きて'] },
      { group: '第三類動詞（不規則）', examples: ['する → して', '<ruby>来<rt>く</rt></ruby>る → <ruby>来<rt>き</rt></ruby>て'] }
    ],
    usages: [
      { pattern: '動詞て形 ＋ もいいです', meaning: '表示「許可」：可以做…', example: { jp: 'ここで<ruby>写真<rt>しゃしん</rt></ruby>を<ruby>撮<rt>と</rt></ruby>ってもいいですか。', zh: '可以在這裡拍照嗎？' } },
      { pattern: '動詞て形 ＋ はいけません', meaning: '表示「禁止」：不可以做…', example: { jp: 'ここでタバコを<ruby>吸<rt>す</rt></ruby>ってはいけません。', zh: '這裡不可以抽菸。' } },
      { pattern: '動詞て形 ＋ ください', meaning: '表示「請求」：請做…', example: { jp: 'ちょっと<ruby>待<rt>ま</rt></ruby>ってください。', zh: '請等一下。' } }
    ],
    quiz: [
      { question: '「<ruby>買<rt>か</rt></ruby>う」的て形是？', options: ['<ruby>買<rt>か</rt></ruby>って', '<ruby>買<rt>か</rt></ruby>いて', '<ruby>買<rt>か</rt></ruby>んで', '<ruby>買<rt>か</rt></ruby>て'], answer: 0, explanation: 'う・つ・る結尾的第一類動詞，て形變化為「って」。' },
      { question: '「<ruby>読<rt>よ</rt></ruby>む」的て形是？', options: ['<ruby>読<rt>よ</rt></ruby>いて', '<ruby>読<rt>よ</rt></ruby>りて', '<ruby>読<rt>よ</rt></ruby>んで', '<ruby>読<rt>よ</rt></ruby>って'], answer: 2, explanation: 'む・ぬ・ぶ結尾的第一類動詞，て形變化為「んで」。' },
      { question: '「<ruby>書<rt>か</rt></ruby>く」的て形是？（注意：行く是特例）', options: ['<ruby>書<rt>か</rt></ruby>いて', '<ruby>書<rt>か</rt></ruby>きて', '<ruby>書<rt>か</rt></ruby>って', '<ruby>書<rt>か</rt></ruby>んで'], answer: 0, explanation: 'く結尾的第一類動詞，て形變化為「いて」；但「行く」是特例，變成「行って」。' },
      { question: '「<ruby>話<rt>はな</rt></ruby>す」的て形是？', options: ['<ruby>話<rt>はな</rt></ruby>いて', '<ruby>話<rt>はな</rt></ruby>して', '<ruby>話<rt>はな</rt></ruby>んで', '<ruby>話<rt>はな</rt></ruby>みて'], answer: 1, explanation: 'す結尾的第一類動詞，て形變化為「して」。' },
      { question: '「<ruby>食<rt>た</rt></ruby>べる」的て形是？', options: ['<ruby>食<rt>た</rt></ruby>べって', '<ruby>食<rt>た</rt></ruby>べんで', '<ruby>食<rt>た</rt></ruby>べいて', '<ruby>食<rt>た</rt></ruby>べて'], answer: 3, explanation: '第二類動詞（去る加て）直接把「る」拿掉加上「て」。' },
      { question: 'この<ruby>部屋<rt>へや</rt></ruby>でタバコを<ruby>吸<rt>す</rt></ruby>___ません。（禁止：不可以抽菸）', options: ['ってもいけ', 'ってはいけ', 'ってでもいい', 'ってはいい'], answer: 1, explanation: '禁止句型是「て形＋はいけません」，表示不可以做某事。' }
    ]
  },
  {
    slug: 'masu-form',
    level: 'N5',
    title: 'ます形｜最基本的禮貌說法',
    intro: 'ます形是日文最基本的「禮貌體」動詞變化，跟長輩、陌生人、正式場合說話都用這個形式。這一課學會怎麼把動詞變成ます形，以及現在式、過去式、否定式怎麼變。',
    rules: [
      { group: '第一類動詞｜語尾う段 → い段＋ます', examples: ['<ruby>書<rt>か</rt></ruby>く → <ruby>書<rt>か</rt></ruby>きます', '<ruby>読<rt>よ</rt></ruby>む → <ruby>読<rt>よ</rt></ruby>みます', '<ruby>話<rt>はな</rt></ruby>す → <ruby>話<rt>はな</rt></ruby>します'] },
      { group: '第二類動詞｜去る＋ます', examples: ['<ruby>食<rt>た</rt></ruby>べる → <ruby>食<rt>た</rt></ruby>べます', '<ruby>見<rt>み</rt></ruby>る → <ruby>見<rt>み</rt></ruby>ます'] },
      { group: '第三類動詞（不規則）', examples: ['する → します', '<ruby>来<rt>く</rt></ruby>る → <ruby>来<rt>き</rt></ruby>ます'] }
    ],
    usages: [
      { pattern: '動詞ます（現在／未來肯定）', meaning: '表示現在的習慣或未來將發生的事', example: { jp: '<ruby>毎日<rt>まいにち</rt></ruby><ruby>学校<rt>がっこう</rt></ruby>へ<ruby>行<rt>い</rt></ruby>きます。', zh: '每天去學校。' } },
      { pattern: '動詞ません（現在／未來否定）', meaning: '表示不做某事', example: { jp: '<ruby>今日<rt>きょう</rt></ruby>は<ruby>働<rt>はたら</rt></ruby>きません。', zh: '今天不工作。' } },
      { pattern: '動詞ました／ませんでした（過去）', meaning: '表示過去做了／沒做某事', example: { jp: '<ruby>昨日<rt>きのう</rt></ruby>、<ruby>友達<rt>ともだち</rt></ruby>に<ruby>会<rt>あ</rt></ruby>いました。', zh: '昨天見了朋友。' } }
    ],
    quiz: [
      { question: '「<ruby>書<rt>か</rt></ruby>く」的ます形是？', options: ['<ruby>書<rt>か</rt></ruby>きます', '<ruby>書<rt>か</rt></ruby>けます', '<ruby>書<rt>か</rt></ruby>います', '<ruby>書<rt>か</rt></ruby>んます'], answer: 0, explanation: 'う段改成い段再加「ます」，く→き+ます。' },
      { question: '「<ruby>見<rt>み</rt></ruby>る」的ます形是？', options: ['<ruby>見<rt>み</rt></ruby>ります', '<ruby>見<rt>み</rt></ruby>ます', '<ruby>見<rt>み</rt></ruby>きます', '<ruby>見<rt>み</rt></ruby>えます'], answer: 1, explanation: '第二類動詞去掉「る」直接加「ます」。' },
      { question: '「する」的ます形是？', options: ['すます', 'します', 'しります', 'すきます'], answer: 1, explanation: '第三類不規則動詞：する→します。' },
      { question: '<ruby>今日<rt>きょう</rt></ruby>は<ruby>雨<rt>あめ</rt></ruby>が___。（否定：不下雨）', options: ['ふります', 'ふません', 'ふりません', 'ふらません'], answer: 2, explanation: '「降る」ます形是「降ります」，否定式為「降りません」。' },
      { question: '<ruby>昨日<rt>きのう</rt></ruby>、テレビを___。（過去式：看了）', options: ['見ます', '見ました', '見ません', '見て'], answer: 1, explanation: '過去肯定式是「ます→ました」。' }
    ]
  },
  {
    slug: 'passive',
    level: 'N4',
    title: '受身形｜當你被命運選中的那一刻',
    intro: '受身形（被動式）是 N4 的重要文法之一，能表達「被…做了…」。它不只用在客觀事實，也常用來表達「遭受」某件不愉快的事（迷惑の受身），這在故事、對話中非常常見。',
    rules: [
      { group: '第一類動詞｜語尾う段 → あ段＋れる（う → われる）', examples: ['<ruby>書<rt>か</rt></ruby>く → <ruby>書<rt>か</rt></ruby>かれる', '<ruby>読<rt>よ</rt></ruby>む → <ruby>読<rt>よ</rt></ruby>まれる', '<ruby>話<rt>はな</rt></ruby>す → <ruby>話<rt>はな</rt></ruby>される', '<ruby>買<rt>か</rt></ruby>う → <ruby>買<rt>か</rt></ruby>われる'] },
      { group: '第二類動詞｜去る＋られる', examples: ['<ruby>食<rt>た</rt></ruby>べる → <ruby>食<rt>た</rt></ruby>べられる', '<ruby>見<rt>み</rt></ruby>る → <ruby>見<rt>み</rt></ruby>られる', '<ruby>褒<rt>ほ</rt></ruby>める → <ruby>褒<rt>ほ</rt></ruby>められる'] },
      { group: '第三類動詞（不規則）', examples: ['する → される', '<ruby>来<rt>く</rt></ruby>る → <ruby>来<rt>こ</rt></ruby>られる'] }
    ],
    usages: [
      { pattern: '（人）は（人）に＋動詞られる／れる', meaning: '直接受身：客觀描述「被…」', example: { jp: '<ruby>私<rt>わたし</rt></ruby>は<ruby>先生<rt>せんせい</rt></ruby>に<ruby>褒<rt>ほ</rt></ruby>められた。', zh: '我被老師稱讚了。' } },
      { pattern: '（人）は（人）に＋動詞られる／れる（迷惑の受身）', meaning: '迷惑受身：表達「遭受」不愉快的事，日文特有的用法', example: { jp: '<ruby>友達<rt>ともだち</rt></ruby>に<ruby>急<rt>きゅう</rt></ruby>に<ruby>来<rt>こ</rt></ruby>られて、<ruby>勉強<rt>べんきょう</rt></ruby>できなかった。', zh: '朋友突然跑來，害我沒辦法唸書。' } },
      { pattern: '主語（物）は＋動詞られる／れる', meaning: '無施動者的受身：描述事實／規則，不強調是誰做的', example: { jp: 'この<ruby>本<rt>ほん</rt></ruby>は<ruby>多<rt>おお</rt></ruby>くの<ruby>人<rt>ひと</rt></ruby>に<ruby>読<rt>よ</rt></ruby>まれている。', zh: '這本書被很多人閱讀著。' } }
    ],
    quiz: [
      { question: '「<ruby>書<rt>か</rt></ruby>く」的受身形是？', options: ['<ruby>書<rt>か</rt></ruby>かれる', '<ruby>書<rt>か</rt></ruby>きられる', '<ruby>書<rt>か</rt></ruby>くれる', '<ruby>書<rt>か</rt></ruby>いれる'], answer: 0, explanation: '第一類動詞：語尾う段改成あ段再加「れる」，く→か+れる。' },
      { question: '「<ruby>褒<rt>ほ</rt></ruby>める」（稱讚）的受身形是？', options: ['<ruby>褒<rt>ほ</rt></ruby>めれる', '<ruby>褒<rt>ほ</rt></ruby>めさせる', '<ruby>褒<rt>ほ</rt></ruby>められる', '<ruby>褒<rt>ほ</rt></ruby>まれる'], answer: 2, explanation: '第二類動詞：去掉「る」加上「られる」。' },
      { question: '「<ruby>来<rt>く</rt></ruby>る」的受身形是？', options: ['<ruby>来<rt>こ</rt></ruby>られる', '<ruby>来<rt>こ</rt></ruby>れる', '<ruby>来<rt>こ</rt></ruby>される', '<ruby>来<rt>か</rt></ruby>れる'], answer: 0, explanation: '第三類不規則動詞：来る → 来られる（こられる）。' },
      { question: '<ruby>私<rt>わたし</rt></ruby>は<ruby>弟<rt>おとうと</rt></ruby>にケーキを___。（弟弟吃掉了我的蛋糕，令人困擾）', options: ['<ruby>食<rt>た</rt></ruby>べた', '<ruby>食<rt>た</rt></ruby>べられた', '<ruby>食<rt>た</rt></ruby>べさせた', '<ruby>食<rt>た</rt></ruby>べている'], answer: 1, explanation: '這是「迷惑の受身」，表達自己因為對方的動作而感到困擾，用受身形。' },
      { question: 'この<ruby>歌<rt>うた</rt></ruby>は<ruby>世界中<rt>せかいじゅう</rt></ruby>の<ruby>人<rt>ひと</rt></ruby>に___いる。（這首歌被世界上的人喜愛著）', options: ['<ruby>愛<rt>あい</rt></ruby>して', '<ruby>愛<rt>あい</rt></ruby>されて', '<ruby>愛<rt>あい</rt></ruby>させて', '<ruby>愛<rt>あい</rt></ruby>える'], answer: 1, explanation: '無施動者的受身，用來描述一個廣泛的事實，「愛す→愛される」再加ている表示持續狀態。' },
      { question: '「<ruby>話<rt>はな</rt></ruby>す」的受身形是？', options: ['<ruby>話<rt>はな</rt></ruby>される', '<ruby>話<rt>はな</rt></ruby>させる', '<ruby>話<rt>はな</rt></ruby>せられる', '<ruby>話<rt>はな</rt></ruby>わられる'], answer: 0, explanation: '第一類動詞：す結尾 → さ+れる。' }
    ]
  }
];

/* 動畫風格句子填空（原創例句，模仿熱血少年漫畫常見台詞語感，非引用特定作品） */
const ANIME_CLOZE = [
  {
    id: 'ac1',
    before: 'その<ruby>力<rt>ちから</rt></ruby>は、<ruby>古代<rt>こだい</rt></ruby>の<ruby>戦士<rt>せんし</rt></ruby>に',
    after: 'ものだ。',
    options: ['<ruby>与<rt>あた</rt></ruby>える', '<ruby>与<rt>あた</rt></ruby>えます', '<ruby>与<rt>あた</rt></ruby>えられた', '<ruby>与<rt>あた</rt></ruby>えて'],
    answer: 2,
    zh: '那股力量，是由古代戰士所賦予的東西。',
    note: '受身形：〜に＋動詞られる／れる，表示「被…」。'
  },
  {
    id: 'ac2',
    before: '<ruby>彼<rt>かれ</rt></ruby>は<ruby>仲間<rt>なかま</rt></ruby>に',
    after: '。もう<ruby>後<rt>あと</rt></ruby>には<ruby>引<rt>ひ</rt></ruby>けない。',
    options: ['<ruby>裏切<rt>うらぎ</rt></ruby>った', '<ruby>裏切<rt>うらぎ</rt></ruby>られた', '<ruby>裏切<rt>うらぎ</rt></ruby>る', '<ruby>裏切<rt>うらぎ</rt></ruby>って'],
    answer: 1,
    zh: '他被同伴背叛了。已經無法回頭了。',
    note: '迷惑の受身：表達遭受不愉快的事情。'
  },
  {
    id: 'ac3',
    before: 'その<ruby>伝説<rt>でんせつ</rt></ruby>の<ruby>剣<rt>けん</rt></ruby>は、<ruby>選<rt>えら</rt></ruby>ばれし<ruby>者<rt>もの</rt></ruby>にのみ',
    after: '。',
    options: ['<ruby>与<rt>あた</rt></ruby>える', '<ruby>与<rt>あた</rt></ruby>えられる', '<ruby>与<rt>あた</rt></ruby>えて', '<ruby>与<rt>あた</rt></ruby>えた'],
    answer: 1,
    zh: '那把傳說之劍，只會被賜予被選中之人。',
    note: '受身形表示一般性的事實或規則。'
  },
  {
    id: 'ac4',
    before: '<ruby>強<rt>つよ</rt></ruby>い<ruby>相手<rt>あいて</rt></ruby>に',
    after: '、<ruby>彼<rt>かれ</rt></ruby>はさらに<ruby>強<rt>つよ</rt></ruby>くなった。',
    options: ['<ruby>倒<rt>たお</rt></ruby>されて', '<ruby>倒<rt>たお</rt></ruby>して', '<ruby>倒<rt>たお</rt></ruby>される', '<ruby>倒<rt>たお</rt></ruby>した'],
    answer: 0,
    zh: '被強敵打倒之後，他變得更強了。',
    note: '受身形＋て形，用來連接前後兩個句子。'
  },
  {
    id: 'ac5',
    before: '<ruby>危<rt>あぶ</rt></ruby>ないから、そこで',
    after: 'ください。',
    options: ['<ruby>待<rt>ま</rt></ruby>って', '<ruby>待<rt>ま</rt></ruby>んで', '<ruby>待<rt>ま</rt></ruby>たて', '<ruby>待<rt>ま</rt></ruby>ちて'],
    answer: 0,
    zh: '很危險，所以請在那裡等一下。',
    note: 'て形＋ください：請求對方做某事。'
  },
  {
    id: 'ac6',
    before: 'この<ruby>力<rt>ちから</rt></ruby>を',
    after: 'か。',
    options: ['<ruby>使<rt>つか</rt></ruby>ってもいい', '<ruby>使<rt>つか</rt></ruby>っていけない', '<ruby>使<rt>つか</rt></ruby>っている', '<ruby>使<rt>つか</rt></ruby>いても'],
    answer: 0,
    zh: '可以使用這股力量嗎？',
    note: 'て形＋もいいです：表示許可。'
  },
  {
    id: 'ac7',
    before: '<ruby>本当<rt>ほんとう</rt></ruby>の<ruby>名前<rt>なまえ</rt></ruby>を<ruby>口<rt>くち</rt></ruby>に',
    after: '。それが<ruby>掟<rt>おきて</rt></ruby>だ。',
    options: ['してはいけない', 'してもいい', 'していた', 'してある'],
    answer: 0,
    zh: '不能說出真正的名字。這是規矩。',
    note: 'て形＋はいけません：表示禁止。'
  },
  {
    id: 'ac8',
    before: 'その<ruby>噂<rt>うわさ</rt></ruby>は、<ruby>街中<rt>まちじゅう</rt></ruby>の<ruby>人<rt>ひと</rt></ruby>に',
    after: 'いる。',
    options: ['<ruby>知<rt>し</rt></ruby>られて', '<ruby>知<rt>し</rt></ruby>って', '<ruby>知<rt>し</rt></ruby>られる', '<ruby>知<rt>し</rt></ruby>る'],
    answer: 0,
    zh: '那個傳聞已經被全城的人知道了。',
    note: '受身形＋ている：表示持續的被動狀態。'
  }
];
