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
  },
  {
    slug: 'adjectives',
    level: 'N5',
    title: 'い形容詞・な形容詞｜描述事物的第一步',
    intro: '日文形容詞分成「い形容詞」跟「な形容詞」兩類，變化規則完全不同。這一課先分清楚兩者的差別，再學會現在、過去、否定的變化。',
    rules: [
      { group: 'い形容詞｜否定：去い＋くない', examples: ['<ruby>高<rt>たか</rt></ruby>い → <ruby>高<rt>たか</rt></ruby>くない', '<ruby>安<rt>やす</rt></ruby>い → <ruby>安<rt>やす</rt></ruby>くない', 'いい → よくない（特例）'] },
      { group: 'い形容詞｜過去：去い＋かった', examples: ['<ruby>楽<rt>たの</rt></ruby>しい → <ruby>楽<rt>たの</rt></ruby>しかった', '<ruby>暑<rt>あつ</rt></ruby>い → <ruby>暑<rt>あつ</rt></ruby>かった', 'いい → よかった（特例）'] },
      { group: 'な形容詞｜接名詞時加な', examples: ['<ruby>静<rt>しず</rt></ruby>かな<ruby>町<rt>まち</rt></ruby>', '<ruby>親切<rt>しんせつ</rt></ruby>な<ruby>人<rt>ひと</rt></ruby>', '<ruby>便利<rt>べんり</rt></ruby>な<ruby>店<rt>みせ</rt></ruby>'] },
      { group: 'な形容詞｜否定／過去用です變化', examples: ['<ruby>静<rt>しず</rt></ruby>かではない', '<ruby>静<rt>しず</rt></ruby>かでした', '<ruby>静<rt>しず</rt></ruby>かではなかった'] }
    ],
    usages: [
      { pattern: 'い形容詞 ＋ 名詞', meaning: 'い形容詞直接接名詞，不用加任何東西', example: { jp: 'これは<ruby>面白<rt>おもしろ</rt></ruby>い<ruby>本<rt>ほん</rt></ruby>です。', zh: '這是一本有趣的書。' } },
      { pattern: 'な形容詞 ＋ な ＋ 名詞', meaning: 'な形容詞接名詞時中間要加「な」', example: { jp: 'ここは<ruby>静<rt>しず</rt></ruby>かな<ruby>場所<rt>ばしょ</rt></ruby>です。', zh: '這裡是安靜的地方。' } },
      { pattern: '形容詞 ＋ くて／で（連接）', meaning: '要連接兩個形容詞時的用法', example: { jp: 'この<ruby>店<rt>みせ</rt></ruby>は<ruby>安<rt>やす</rt></ruby>くて<ruby>美味<rt>おい</rt></ruby>しいです。', zh: '這間店又便宜又好吃。' } }
    ],
    quiz: [
      { question: '「<ruby>高<rt>たか</rt></ruby>い」的否定形是？', options: ['<ruby>高<rt>たか</rt></ruby>くない', '<ruby>高<rt>たか</rt></ruby>いない', '<ruby>高<rt>たか</rt></ruby>じゃない', '<ruby>高<rt>たか</rt></ruby>ではない'], answer: 0, explanation: 'い形容詞否定：去掉「い」加上「くない」。' },
      { question: '「<ruby>楽<rt>たの</rt></ruby>しい」的過去式是？', options: ['<ruby>楽<rt>たの</rt></ruby>しいでした', '<ruby>楽<rt>たの</rt></ruby>しかった', '<ruby>楽<rt>たの</rt></ruby>しくた', '<ruby>楽<rt>たの</rt></ruby>しでした'], answer: 1, explanation: 'い形容詞過去：去掉「い」加上「かった」。' },
      { question: '「いい」的過去式是？（這是特例）', options: ['いかった', 'いいかった', 'よかった', 'いくた'], answer: 2, explanation: '「いい」是特例，變化時要用「よい」的形式：よかった。' },
      { question: 'ここは___<ruby>町<rt>まち</rt></ruby>です。（安靜的城鎮）', options: ['<ruby>静<rt>しず</rt></ruby>か', '<ruby>静<rt>しず</rt></ruby>かな', '<ruby>静<rt>しず</rt></ruby>かい', '<ruby>静<rt>しず</rt></ruby>かの'], answer: 1, explanation: 'な形容詞接名詞時要加「な」。' },
      { question: 'この<ruby>部屋<rt>へや</rt></ruby>は<ruby>広<rt>ひろ</rt></ruby>___<ruby>明<rt>あか</rt></ruby>るいです。（又寬敞又明亮）', options: ['くて', 'で', 'と', 'に'], answer: 0, explanation: 'い形容詞連接用「くて」，な形容詞才用「で」。' }
    ]
  },
  {
    slug: 'particles-basic',
    level: 'N5',
    title: '基本助詞｜は・が・を・に・で',
    intro: '助詞是日文的骨架，決定了每個詞在句子中扮演什麼角色。這一課整理五個最常用的助詞，搞懂它們就能組出大部分的基本句子。',
    rules: [],
    usages: [
      { pattern: '〜は（主題）', meaning: '標示句子的主題，「就…而言」', example: { jp: '<ruby>私<rt>わたし</rt></ruby>は<ruby>学生<rt>がくせい</rt></ruby>です。', zh: '我是學生。' } },
      { pattern: '〜が（主格）', meaning: '標示動作或狀態的主體，也用於強調', example: { jp: '<ruby>猫<rt>ねこ</rt></ruby>がいます。', zh: '有貓。' } },
      { pattern: '〜を（受詞）', meaning: '標示動作的對象（他動詞的受詞）', example: { jp: 'ご<ruby>飯<rt>はん</rt></ruby>を<ruby>食<rt>た</rt></ruby>べます。', zh: '吃飯。' } },
      { pattern: '〜に（時間・方向・對象）', meaning: '表示時間點、到達點、動作對象', example: { jp: '<ruby>七時<rt>しちじ</rt></ruby>に<ruby>学校<rt>がっこう</rt></ruby>に<ruby>行<rt>い</rt></ruby>きます。', zh: '七點去學校。' } },
      { pattern: '〜で（場所・手段）', meaning: '表示動作發生的場所，或使用的方法', example: { jp: '<ruby>図書館<rt>としょかん</rt></ruby>で<ruby>勉強<rt>べんきょう</rt></ruby>します。', zh: '在圖書館唸書。' } }
    ],
    quiz: [
      { question: 'パン___<ruby>食<rt>た</rt></ruby>べます。（吃麵包）', options: ['は', 'が', 'を', 'に'], answer: 2, explanation: '「を」標示動作的對象（受詞）。' },
      { question: '<ruby>公園<rt>こうえん</rt></ruby>___<ruby>遊<rt>あそ</rt></ruby>びます。（在公園玩）', options: ['で', 'に', 'を', 'と'], answer: 0, explanation: '動作發生的場所用「で」。' },
      { question: '<ruby>八時<rt>はちじ</rt></ruby>___<ruby>起<rt>お</rt></ruby>きます。（八點起床）', options: ['で', 'に', 'を', 'は'], answer: 1, explanation: '具體的時間點用「に」。' },
      { question: '<ruby>机<rt>つくえ</rt></ruby>の<ruby>上<rt>うえ</rt></ruby>に<ruby>本<rt>ほん</rt></ruby>___あります。（桌上有書）', options: ['は', 'が', 'を', 'で'], answer: 1, explanation: '存在句「〜があります」用「が」標示存在的主體。' },
      { question: 'バス___<ruby>行<rt>い</rt></ruby>きます。（搭公車去）', options: ['に', 'を', 'で', 'は'], answer: 2, explanation: '交通工具等「手段、方法」用「で」。' }
    ]
  },
  {
    slug: 'nai-form',
    level: 'N5',
    title: 'ない形｜否定的基礎變化',
    intro: 'ない形是動詞的「否定普通形」，也是「〜ないでください」「〜なければならない」等重要句型的基礎。學會它，表達能力立刻多一半。',
    rules: [
      { group: '第一類動詞｜語尾う段 → あ段＋ない（う → わない）', examples: ['<ruby>書<rt>か</rt></ruby>く → <ruby>書<rt>か</rt></ruby>かない', '<ruby>読<rt>よ</rt></ruby>む → <ruby>読<rt>よ</rt></ruby>まない', '<ruby>買<rt>か</rt></ruby>う → <ruby>買<rt>か</rt></ruby>わない（注意不是あない）'] },
      { group: '第二類動詞｜去る＋ない', examples: ['<ruby>食<rt>た</rt></ruby>べる → <ruby>食<rt>た</rt></ruby>べない', '<ruby>見<rt>み</rt></ruby>る → <ruby>見<rt>み</rt></ruby>ない'] },
      { group: '第三類動詞（不規則）', examples: ['する → しない', '<ruby>来<rt>く</rt></ruby>る → <ruby>来<rt>こ</rt></ruby>ない'] }
    ],
    usages: [
      { pattern: '動詞ない形 ＋ でください', meaning: '請不要做某事', example: { jp: 'ここで<ruby>写真<rt>しゃしん</rt></ruby>を<ruby>撮<rt>と</rt></ruby>らないでください。', zh: '請不要在這裡拍照。' } },
      { pattern: '動詞ない形（去ない）＋ なければなりません', meaning: '必須做某事', example: { jp: '<ruby>明日<rt>あした</rt></ruby>までに<ruby>出<rt>だ</rt></ruby>さなければなりません。', zh: '必須在明天之前交出去。' } },
      { pattern: '動詞ない形（去ない）＋ なくてもいいです', meaning: '不做也沒關係', example: { jp: '<ruby>今日<rt>きょう</rt></ruby>は<ruby>来<rt>こ</rt></ruby>なくてもいいです。', zh: '今天不來也沒關係。' } }
    ],
    quiz: [
      { question: '「<ruby>買<rt>か</rt></ruby>う」的ない形是？', options: ['<ruby>買<rt>か</rt></ruby>あない', '<ruby>買<rt>か</rt></ruby>わない', '<ruby>買<rt>か</rt></ruby>いない', '<ruby>買<rt>か</rt></ruby>らない'], answer: 1, explanation: 'う結尾的第一類動詞，ない形是「わない」，這是常見陷阱。' },
      { question: '「する」的ない形是？', options: ['さない', 'しない', 'すない', 'せない'], answer: 1, explanation: '第三類不規則動詞：する→しない。' },
      { question: '「<ruby>来<rt>く</rt></ruby>る」的ない形是？', options: ['<ruby>来<rt>こ</rt></ruby>ない', '<ruby>来<rt>き</rt></ruby>ない', '<ruby>来<rt>く</rt></ruby>ない', '<ruby>来<rt>か</rt></ruby>ない'], answer: 0, explanation: '来る的ない形讀作「こない」。' },
      { question: 'ここに<ruby>入<rt>はい</rt></ruby>___ください。（請不要進來這裡）', options: ['らないで', 'りないで', 'れないで', 'らなくて'], answer: 0, explanation: '「入る」ない形是「入らない」，加上「でください」表示請求不要做。' },
      { question: '<ruby>薬<rt>くすり</rt></ruby>を<ruby>飲<rt>の</rt></ruby>___なりません。（必須吃藥）', options: ['まなくては', 'まなければ', 'めなければ', 'みなければ'], answer: 1, explanation: '「飲む」ない形「飲まない」去掉ない加「なければなりません」。' }
    ]
  },
  {
    slug: 'ta-form',
    level: 'N5',
    title: 'た形｜過去與經驗的表達',
    intro: 'た形的變化規則跟て形完全一樣，只要把て換成た就好。學會之後可以表達過去、經驗、以及「做了A之後做B」等句型。',
    rules: [
      { group: '規則同て形｜う・つ・る → った', examples: ['<ruby>買<rt>か</rt></ruby>う → <ruby>買<rt>か</rt></ruby>った', '<ruby>待<rt>ま</rt></ruby>つ → <ruby>待<rt>ま</rt></ruby>った'] },
      { group: 'む・ぬ・ぶ → んだ', examples: ['<ruby>読<rt>よ</rt></ruby>む → <ruby>読<rt>よ</rt></ruby>んだ', '<ruby>遊<rt>あそ</rt></ruby>ぶ → <ruby>遊<rt>あそ</rt></ruby>んだ'] },
      { group: 'く → いた／ぐ → いだ／す → した', examples: ['<ruby>書<rt>か</rt></ruby>く → <ruby>書<rt>か</rt></ruby>いた', '<ruby>泳<rt>およ</rt></ruby>ぐ → <ruby>泳<rt>およ</rt></ruby>いだ', '<ruby>話<rt>はな</rt></ruby>す → <ruby>話<rt>はな</rt></ruby>した'] },
      { group: '第二類｜去る＋た／第三類不規則', examples: ['<ruby>食<rt>た</rt></ruby>べる → <ruby>食<rt>た</rt></ruby>べた', 'する → した', '<ruby>来<rt>く</rt></ruby>る → <ruby>来<rt>き</rt></ruby>た'] }
    ],
    usages: [
      { pattern: '動詞た形 ＋ ことがあります', meaning: '表示曾經有過某種經驗', example: { jp: '<ruby>日本<rt>にほん</rt></ruby>へ<ruby>行<rt>い</rt></ruby>ったことがあります。', zh: '我曾經去過日本。' } },
      { pattern: '動詞た形 ＋ ほうがいいです', meaning: '建議對方最好做某事', example: { jp: '<ruby>早<rt>はや</rt></ruby>く<ruby>寝<rt>ね</rt></ruby>たほうがいいですよ。', zh: '你最好早點睡喔。' } },
      { pattern: '動詞た形 ＋ り、動詞た形 ＋ りします', meaning: '列舉幾個代表性的動作', example: { jp: '<ruby>週末<rt>しゅうまつ</rt></ruby>は<ruby>本<rt>ほん</rt></ruby>を<ruby>読<rt>よ</rt></ruby>んだり、<ruby>映画<rt>えいが</rt></ruby>を<ruby>見<rt>み</rt></ruby>たりします。', zh: '週末會看看書、看看電影。' } }
    ],
    quiz: [
      { question: '「<ruby>読<rt>よ</rt></ruby>む」的た形是？', options: ['<ruby>読<rt>よ</rt></ruby>んだ', '<ruby>読<rt>よ</rt></ruby>った', '<ruby>読<rt>よ</rt></ruby>いた', '<ruby>読<rt>よ</rt></ruby>みた'], answer: 0, explanation: 'む結尾的第一類動詞，た形是「んだ」。' },
      { question: '「<ruby>行<rt>い</rt></ruby>く」的た形是？（特例）', options: ['<ruby>行<rt>い</rt></ruby>いた', '<ruby>行<rt>い</rt></ruby>った', '<ruby>行<rt>い</rt></ruby>きた', '<ruby>行<rt>い</rt></ruby>んだ'], answer: 1, explanation: '「行く」跟て形一樣是特例：行った。' },
      { question: '<ruby>富士山<rt>ふじさん</rt></ruby>に<ruby>登<rt>のぼ</rt></ruby>___ことがあります。（曾經爬過富士山）', options: ['って', 'った', 'り', 'る'], answer: 1, explanation: '經驗句型是「た形＋ことがあります」。' },
      { question: '<ruby>病院<rt>びょういん</rt></ruby>に<ruby>行<rt>い</rt></ruby>___ほうがいいです。（最好去醫院）', options: ['く', 'った', 'って', 'き'], answer: 1, explanation: '建議句型是「た形＋ほうがいいです」。' },
      { question: '「<ruby>泳<rt>およ</rt></ruby>ぐ」的た形是？', options: ['<ruby>泳<rt>およ</rt></ruby>いた', '<ruby>泳<rt>およ</rt></ruby>いだ', '<ruby>泳<rt>およ</rt></ruby>った', '<ruby>泳<rt>およ</rt></ruby>ぎた'], answer: 1, explanation: 'ぐ結尾的第一類動詞，た形是「いだ」（濁音）。' }
    ]
  },
  {
    slug: 'te-iru',
    level: 'N5',
    title: '〜ている｜正在進行與持續狀態',
    intro: '「〜ている」看起來只是「正在做」，但其實它有三種完全不同的意思：進行中、狀態的持續、以及習慣。這一課一次分清楚。',
    rules: [],
    usages: [
      { pattern: '動詞て形 ＋ いる（進行）', meaning: '動作正在進行中', example: { jp: '<ruby>今<rt>いま</rt></ruby>、ご<ruby>飯<rt>はん</rt></ruby>を<ruby>食<rt>た</rt></ruby>べています。', zh: '現在正在吃飯。' } },
      { pattern: '動詞て形 ＋ いる（狀態）', meaning: '動作結束後留下的狀態', example: { jp: '<ruby>彼<rt>かれ</rt></ruby>は<ruby>結婚<rt>けっこん</rt></ruby>しています。', zh: '他已婚（處於結婚的狀態）。' } },
      { pattern: '動詞て形 ＋ いる（習慣）', meaning: '反覆進行的習慣性動作', example: { jp: '<ruby>毎朝<rt>まいあさ</rt></ruby><ruby>走<rt>はし</rt></ruby>っています。', zh: '每天早上都在跑步。' } }
    ],
    quiz: [
      { question: '<ruby>今<rt>いま</rt></ruby><ruby>何<rt>なに</rt></ruby>を___か。（現在正在做什麼？）', options: ['していた', 'しています', 'します', 'した'], answer: 1, explanation: '正在進行的動作用「ています」。' },
      { question: '「<ruby>知<rt>し</rt></ruby>る」表示「知道」時通常用什麼形式？', options: ['<ruby>知<rt>し</rt></ruby>る', '<ruby>知<rt>し</rt></ruby>っている', '<ruby>知<rt>し</rt></ruby>った', '<ruby>知<rt>し</rt></ruby>ります'], answer: 1, explanation: '「知る」表示「知道這個狀態」時，一定要用「知っている」。' },
      { question: '<ruby>窓<rt>まど</rt></ruby>が<ruby>開<rt>あ</rt></ruby>___。（窗戶開著＝狀態）', options: ['いています', 'けています', 'きました', 'こうです'], answer: 0, explanation: '自動詞「開く」＋ている表示留下的狀態：開著。' },
      { question: '<ruby>父<rt>ちち</rt></ruby>は<ruby>銀行<rt>ぎんこう</rt></ruby>で<ruby>働<rt>はたら</rt></ruby>___。（爸爸在銀行工作＝長期習慣）', options: ['きます', 'いています', 'いた', 'こう'], answer: 1, explanation: '長期持續的職業、習慣用「ています」。' }
    ]
  },
  {
    slug: 'potential-form',
    level: 'N4',
    title: '可能形｜「我做得到」的說法',
    intro: '可能形表示「能夠做…」「會做…」。它是 N4 的核心文法，跟受身形的變化很像但不完全一樣，很容易混淆，這一課仔細分清楚。',
    rules: [
      { group: '第一類動詞｜語尾う段 → え段＋る', examples: ['<ruby>書<rt>か</rt></ruby>く → <ruby>書<rt>か</rt></ruby>ける', '<ruby>読<rt>よ</rt></ruby>む → <ruby>読<rt>よ</rt></ruby>める', '<ruby>話<rt>はな</rt></ruby>す → <ruby>話<rt>はな</rt></ruby>せる', '<ruby>買<rt>か</rt></ruby>う → <ruby>買<rt>か</rt></ruby>える'] },
      { group: '第二類動詞｜去る＋られる（口語常說れる）', examples: ['<ruby>食<rt>た</rt></ruby>べる → <ruby>食<rt>た</rt></ruby>べられる', '<ruby>見<rt>み</rt></ruby>る → <ruby>見<rt>み</rt></ruby>られる'] },
      { group: '第三類動詞（不規則）', examples: ['する → できる', '<ruby>来<rt>く</rt></ruby>る → <ruby>来<rt>こ</rt></ruby>られる'] }
    ],
    usages: [
      { pattern: '（人）は（物）が＋可能形', meaning: '注意：受詞的助詞從「を」變成「が」', example: { jp: '<ruby>私<rt>わたし</rt></ruby>は<ruby>日本語<rt>にほんご</rt></ruby>が<ruby>話<rt>はな</rt></ruby>せます。', zh: '我會說日文。' } },
      { pattern: '名詞 ＋ ができます', meaning: '「する動詞」的可能形用「できます」', example: { jp: '<ruby>彼<rt>かれ</rt></ruby>はピアノができます。', zh: '他會彈鋼琴。' } },
      { pattern: '可能形 ＋ ようになりました', meaning: '表示從不會變成會（能力的變化）', example: { jp: '<ruby>漢字<rt>かんじ</rt></ruby>が<ruby>読<rt>よ</rt></ruby>めるようになりました。', zh: '變得能夠讀漢字了。' } }
    ],
    quiz: [
      { question: '「<ruby>書<rt>か</rt></ruby>く」的可能形是？', options: ['<ruby>書<rt>か</rt></ruby>かれる', '<ruby>書<rt>か</rt></ruby>ける', '<ruby>書<rt>か</rt></ruby>かせる', '<ruby>書<rt>か</rt></ruby>こう'], answer: 1, explanation: '第一類動詞可能形：う段改成え段加「る」，く→け+る。' },
      { question: '「する」的可能形是？', options: ['される', 'させる', 'できる', 'しられる'], answer: 2, explanation: '「する」的可能形是特殊形式「できる」。' },
      { question: '<ruby>私<rt>わたし</rt></ruby>は<ruby>刺身<rt>さしみ</rt></ruby>___<ruby>食<rt>た</rt></ruby>べられます。（我敢吃生魚片）', options: ['を', 'が', 'に', 'で'], answer: 1, explanation: '可能形的受詞助詞通常從「を」改成「が」。' },
      { question: '「<ruby>読<rt>よ</rt></ruby>む」的可能形是？', options: ['<ruby>読<rt>よ</rt></ruby>まれる', '<ruby>読<rt>よ</rt></ruby>める', '<ruby>読<rt>よ</rt></ruby>ませる', '<ruby>読<rt>よ</rt></ruby>もう'], answer: 1, explanation: 'む→め+る。注意「読まれる」是受身形，不是可能形。' },
      { question: '<ruby>泳<rt>およ</rt></ruby>げる___なりました。（變得會游泳了）', options: ['ように', 'そうに', 'ことに', 'ために'], answer: 0, explanation: '能力的變化用「〜ようになりました」。' }
    ]
  },
  {
    slug: 'causative',
    level: 'N4',
    title: '使役形｜讓某人做某事',
    intro: '使役形表示「讓／叫某人做某事」，是上對下、或表達「允許」的常用文法。它跟受身形長得很像，一起學能幫助你分清楚。',
    rules: [
      { group: '第一類動詞｜語尾う段 → あ段＋せる', examples: ['<ruby>書<rt>か</rt></ruby>く → <ruby>書<rt>か</rt></ruby>かせる', '<ruby>読<rt>よ</rt></ruby>む → <ruby>読<rt>よ</rt></ruby>ませる', '<ruby>待<rt>ま</rt></ruby>つ → <ruby>待<rt>ま</rt></ruby>たせる'] },
      { group: '第二類動詞｜去る＋させる', examples: ['<ruby>食<rt>た</rt></ruby>べる → <ruby>食<rt>た</rt></ruby>べさせる', '<ruby>見<rt>み</rt></ruby>る → <ruby>見<rt>み</rt></ruby>させる'] },
      { group: '第三類動詞（不規則）', examples: ['する → させる', '<ruby>来<rt>く</rt></ruby>る → <ruby>来<rt>こ</rt></ruby>させる'] }
    ],
    usages: [
      { pattern: '（人）は（人）に＋使役形（強制／指示）', meaning: '讓／叫某人做某事', example: { jp: '<ruby>先生<rt>せんせい</rt></ruby>は<ruby>学生<rt>がくせい</rt></ruby>に<ruby>作文<rt>さくぶん</rt></ruby>を<ruby>書<rt>か</rt></ruby>かせました。', zh: '老師叫學生寫作文。' } },
      { pattern: '（人）は（人）を＋使役形（情感類動詞）', meaning: '使某人產生某種情緒', example: { jp: '<ruby>妹<rt>いもうと</rt></ruby>を<ruby>泣<rt>な</rt></ruby>かせてしまった。', zh: '把妹妹弄哭了。' } },
      { pattern: '使役形て形 ＋ ください', meaning: '請允許我做…（謙虛的請求）', example: { jp: 'ちょっと<ruby>考<rt>かんが</rt></ruby>えさせてください。', zh: '請讓我想一下。' } }
    ],
    quiz: [
      { question: '「<ruby>読<rt>よ</rt></ruby>む」的使役形是？', options: ['<ruby>読<rt>よ</rt></ruby>まれる', '<ruby>読<rt>よ</rt></ruby>ませる', '<ruby>読<rt>よ</rt></ruby>める', '<ruby>読<rt>よ</rt></ruby>もう'], answer: 1, explanation: '第一類動詞使役形：う段改あ段加「せる」。' },
      { question: '「<ruby>食<rt>た</rt></ruby>べる」的使役形是？', options: ['<ruby>食<rt>た</rt></ruby>べられる', '<ruby>食<rt>た</rt></ruby>べさせる', '<ruby>食<rt>た</rt></ruby>べる', '<ruby>食<rt>た</rt></ruby>べよう'], answer: 1, explanation: '第二類動詞：去掉「る」加「させる」。' },
      { question: '「する」的使役形是？', options: ['される', 'させる', 'できる', 'しさせる'], answer: 1, explanation: '第三類不規則：する→させる。' },
      { question: '<ruby>母<rt>はは</rt></ruby>は<ruby>私<rt>わたし</rt></ruby>___<ruby>野菜<rt>やさい</rt></ruby>を<ruby>食<rt>た</rt></ruby>べさせました。（媽媽叫我吃蔬菜）', options: ['が', 'に', 'で', 'は'], answer: 1, explanation: '使役對象（被要求做事的人）用「に」，因為句中已經有受詞「野菜を」。' },
      { question: 'ここで<ruby>休<rt>やす</rt></ruby>___ください。（請讓我在這裡休息）', options: ['ませて', 'まれて', 'めて', 'んで'], answer: 0, explanation: '「休む」使役形「休ませる」的て形＋ください，表示請求允許。' }
    ]
  },
  {
    slug: 'volitional',
    level: 'N4',
    title: '意向形｜「一起做吧！」的呼喚',
    intro: '意向形是「〜ましょう」的普通形版本，用來表達「做…吧」的意志或邀約。搭配「〜と思う」還能表達自己的打算。',
    rules: [
      { group: '第一類動詞｜語尾う段 → お段＋う', examples: ['<ruby>行<rt>い</rt></ruby>く → <ruby>行<rt>い</rt></ruby>こう', '<ruby>読<rt>よ</rt></ruby>む → <ruby>読<rt>よ</rt></ruby>もう', '<ruby>話<rt>はな</rt></ruby>す → <ruby>話<rt>はな</rt></ruby>そう'] },
      { group: '第二類動詞｜去る＋よう', examples: ['<ruby>食<rt>た</rt></ruby>べる → <ruby>食<rt>た</rt></ruby>べよう', '<ruby>見<rt>み</rt></ruby>る → <ruby>見<rt>み</rt></ruby>よう'] },
      { group: '第三類動詞（不規則）', examples: ['する → しよう', '<ruby>来<rt>く</rt></ruby>る → <ruby>来<rt>こ</rt></ruby>よう'] }
    ],
    usages: [
      { pattern: '意向形（單獨使用）', meaning: '「…吧」，向朋友提議一起做', example: { jp: '<ruby>一緒<rt>いっしょ</rt></ruby>に<ruby>帰<rt>かえ</rt></ruby>ろう。', zh: '一起回家吧。' } },
      { pattern: '意向形 ＋ と<ruby>思<rt>おも</rt></ruby>います', meaning: '表達自己的打算、意圖', example: { jp: '<ruby>来年<rt>らいねん</rt></ruby>、<ruby>日本<rt>にほん</rt></ruby>へ<ruby>行<rt>い</rt></ruby>こうと<ruby>思<rt>おも</rt></ruby>います。', zh: '我打算明年去日本。' } },
      { pattern: '意向形 ＋ としています', meaning: '正要做某事的那一刻', example: { jp: '<ruby>出<rt>で</rt></ruby>かけようとしたとき、<ruby>電話<rt>でんわ</rt></ruby>が<ruby>鳴<rt>な</rt></ruby>った。', zh: '正要出門時，電話響了。' } }
    ],
    quiz: [
      { question: '「<ruby>行<rt>い</rt></ruby>く」的意向形是？', options: ['<ruby>行<rt>い</rt></ruby>こう', '<ruby>行<rt>い</rt></ruby>かう', '<ruby>行<rt>い</rt></ruby>きよう', '<ruby>行<rt>い</rt></ruby>けう'], answer: 0, explanation: '第一類動詞：う段改成お段加「う」，く→こ+う。' },
      { question: '「<ruby>見<rt>み</rt></ruby>る」的意向形是？', options: ['<ruby>見<rt>み</rt></ruby>ろう', '<ruby>見<rt>み</rt></ruby>よう', '<ruby>見<rt>み</rt></ruby>まう', '<ruby>見<rt>み</rt></ruby>るう'], answer: 1, explanation: '第二類動詞：去掉「る」加「よう」。' },
      { question: '「する」的意向形是？', options: ['そう', 'しよう', 'すよう', 'さよう'], answer: 1, explanation: '第三類不規則：する→しよう。' },
      { question: '<ruby>大学<rt>だいがく</rt></ruby>で<ruby>日本語<rt>にほんご</rt></ruby>を<ruby>勉強<rt>べんきょう</rt></ruby>___<ruby>思<rt>おも</rt></ruby>っています。（打算學日文）', options: ['するようと', 'しようと', 'すると', 'しようが'], answer: 1, explanation: '表達打算用「意向形＋と思っています」。' }
    ]
  },
  {
    slug: 'conditional-tara',
    level: 'N4',
    title: '〜たら｜假設與條件的萬用句型',
    intro: '「〜たら」是日文最好用的假設句型，幾乎什麼情況都能用。這一課學會它的變化跟三種主要用法。',
    rules: [
      { group: '動詞｜た形＋ら', examples: ['<ruby>行<rt>い</rt></ruby>く → <ruby>行<rt>い</rt></ruby>ったら', '<ruby>食<rt>た</rt></ruby>べる → <ruby>食<rt>た</rt></ruby>べたら', 'する → したら'] },
      { group: 'い形容詞｜去い＋かったら', examples: ['<ruby>安<rt>やす</rt></ruby>い → <ruby>安<rt>やす</rt></ruby>かったら', '<ruby>暑<rt>あつ</rt></ruby>い → <ruby>暑<rt>あつ</rt></ruby>かったら'] },
      { group: 'な形容詞・名詞｜＋だったら', examples: ['<ruby>暇<rt>ひま</rt></ruby> → <ruby>暇<rt>ひま</rt></ruby>だったら', '<ruby>雨<rt>あめ</rt></ruby> → <ruby>雨<rt>あめ</rt></ruby>だったら'] }
    ],
    usages: [
      { pattern: '〜たら、〜（假設條件）', meaning: '如果…的話，就…', example: { jp: '<ruby>雨<rt>あめ</rt></ruby>が<ruby>降<rt>ふ</rt></ruby>ったら、<ruby>行<rt>い</rt></ruby>きません。', zh: '如果下雨的話就不去。' } },
      { pattern: '〜たら、〜（確定的未來）', meaning: '等…之後就…', example: { jp: '<ruby>家<rt>いえ</rt></ruby>に<ruby>着<rt>つ</rt></ruby>いたら、<ruby>電話<rt>でんわ</rt></ruby>してください。', zh: '到家之後請打電話給我。' } },
      { pattern: '〜たら、〜た（意外的發現）', meaning: '做了…之後，發現…', example: { jp: '<ruby>窓<rt>まど</rt></ruby>を<ruby>開<rt>あ</rt></ruby>けたら、<ruby>雪<rt>ゆき</rt></ruby>が<ruby>降<rt>ふ</rt></ruby>っていた。', zh: '打開窗戶一看，發現在下雪。' } }
    ],
    quiz: [
      { question: '「<ruby>行<rt>い</rt></ruby>く」的たら形是？', options: ['<ruby>行<rt>い</rt></ruby>くたら', '<ruby>行<rt>い</rt></ruby>ったら', '<ruby>行<rt>い</rt></ruby>いたら', '<ruby>行<rt>い</rt></ruby>きたら'], answer: 1, explanation: 'た形是「行った」，加上「ら」變成「行ったら」。' },
      { question: '「<ruby>安<rt>やす</rt></ruby>い」的たら形是？', options: ['<ruby>安<rt>やす</rt></ruby>いたら', '<ruby>安<rt>やす</rt></ruby>かったら', '<ruby>安<rt>やす</rt></ruby>だったら', '<ruby>安<rt>やす</rt></ruby>くたら'], answer: 1, explanation: 'い形容詞：去掉「い」加「かったら」。' },
      { question: '<ruby>時間<rt>じかん</rt></ruby>が___、<ruby>手伝<rt>てつだ</rt></ruby>ってください。（如果有時間的話）', options: ['あったら', 'あるたら', 'ありたら', 'あれたら'], answer: 0, explanation: '「ある」的た形是「あった」，加ら變成「あったら」。' },
      { question: '<ruby>雨<rt>あめ</rt></ruby>___、<ruby>試合<rt>しあい</rt></ruby>は<ruby>中止<rt>ちゅうし</rt></ruby>です。（如果下雨，比賽取消）', options: ['なら', 'だったら', 'いたら', 'くたら'], answer: 1, explanation: '名詞的たら形是「名詞＋だったら」。' }
    ]
  },
  {
    slug: 'giving-receiving',
    level: 'N4',
    title: 'あげる・くれる・もらう｜授受動詞',
    intro: '日文的「給」要看方向選不同的動詞，這是中文母語者最容易搞混的地方之一。這一課用「誰給誰」的角度一次講清楚。',
    rules: [],
    usages: [
      { pattern: '（我／別人）は（別人）に〜をあげる', meaning: '我給別人，或第三者給第三者（方向：往外）', example: { jp: '<ruby>私<rt>わたし</rt></ruby>は<ruby>友達<rt>ともだち</rt></ruby>にプレゼントをあげました。', zh: '我送了禮物給朋友。' } },
      { pattern: '（別人）は（我）に〜をくれる', meaning: '別人給我（方向：往內，收受者一定是我方）', example: { jp: '<ruby>友達<rt>ともだち</rt></ruby>が<ruby>私<rt>わたし</rt></ruby>に<ruby>本<rt>ほん</rt></ruby>をくれました。', zh: '朋友給了我一本書。' } },
      { pattern: '（我）は（別人）に〜をもらう', meaning: '我從別人那裡得到（主詞是接受的一方）', example: { jp: '<ruby>私<rt>わたし</rt></ruby>は<ruby>先生<rt>せんせい</rt></ruby>にアドバイスをもらいました。', zh: '我從老師那裡得到建議。' } },
      { pattern: '動詞て形 ＋ あげる／くれる／もらう', meaning: '表示為某人做某事的恩惠關係', example: { jp: '<ruby>友達<rt>ともだち</rt></ruby>が<ruby>宿題<rt>しゅくだい</rt></ruby>を<ruby>手伝<rt>てつだ</rt></ruby>ってくれました。', zh: '朋友幫我做了作業（我受惠）。' } }
    ],
    quiz: [
      { question: '<ruby>母<rt>はは</rt></ruby>が<ruby>私<rt>わたし</rt></ruby>にセーターを___。（媽媽給我毛衣）', options: ['あげました', 'くれました', 'もらいました', 'やりました'], answer: 1, explanation: '別人給「我」，一定要用「くれる」。' },
      { question: '<ruby>私<rt>わたし</rt></ruby>は<ruby>兄<rt>あに</rt></ruby>に<ruby>自転車<rt>じてんしゃ</rt></ruby>を___。（我從哥哥那得到腳踏車）', options: ['あげました', 'くれました', 'もらいました', 'いただけました'], answer: 2, explanation: '主詞是接受方「我」時用「もらう」。' },
      { question: '<ruby>私<rt>わたし</rt></ruby>は<ruby>妹<rt>いもうと</rt></ruby>に<ruby>本<rt>ほん</rt></ruby>を___。（我給妹妹書）', options: ['あげました', 'くれました', 'もらいました', 'ください'], answer: 0, explanation: '我給別人用「あげる」。' },
      { question: '<ruby>友達<rt>ともだち</rt></ruby>が<ruby>駅<rt>えき</rt></ruby>まで<ruby>送<rt>おく</rt></ruby>って___。（朋友送我到車站）', options: ['あげました', 'くれました', 'もらいました', 'しました'], answer: 1, explanation: '別人為「我」做某事的恩惠，用「て形＋くれる」。' }
    ]
  },
  {
    slug: 'keigo-basic',
    level: 'N4',
    title: '敬語入門｜尊敬語與謙讓語',
    intro: '敬語是日本社會的必修課。這一課先掌握最基本的分別：抬高對方的「尊敬語」，以及壓低自己的「謙讓語」。',
    rules: [
      { group: '常用尊敬語（抬高對方）', examples: ['<ruby>行<rt>い</rt></ruby>く／<ruby>来<rt>く</rt></ruby>る／いる → いらっしゃる', '<ruby>食<rt>た</rt></ruby>べる／<ruby>飲<rt>の</rt></ruby>む → <ruby>召<rt>め</rt></ruby>し<ruby>上<rt>あ</rt></ruby>がる', '<ruby>見<rt>み</rt></ruby>る → ご<ruby>覧<rt>らん</rt></ruby>になる', '<ruby>言<rt>い</rt></ruby>う → おっしゃる'] },
      { group: '常用謙讓語（壓低自己）', examples: ['<ruby>行<rt>い</rt></ruby>く／<ruby>来<rt>く</rt></ruby>る → <ruby>参<rt>まい</rt></ruby>る', '<ruby>食<rt>た</rt></ruby>べる／もらう → いただく', '<ruby>見<rt>み</rt></ruby>る → <ruby>拝見<rt>はいけん</rt></ruby>する', '<ruby>言<rt>い</rt></ruby>う → <ruby>申<rt>もう</rt></ruby>す'] },
      { group: '通用變化型', examples: ['尊敬：お＋ます形＋になる', '謙讓：お＋ます形＋する'] }
    ],
    usages: [
      { pattern: 'お ＋ 動詞ます形 ＋ になります（尊敬）', meaning: '抬高對方動作的通用尊敬形式', example: { jp: '<ruby>社長<rt>しゃちょう</rt></ruby>はもうお<ruby>帰<rt>かえ</rt></ruby>りになりました。', zh: '社長已經回去了。' } },
      { pattern: 'お ＋ 動詞ます形 ＋ します（謙讓）', meaning: '壓低自己動作的通用謙讓形式', example: { jp: '<ruby>荷物<rt>にもつ</rt></ruby>をお<ruby>持<rt>も</rt></ruby>ちします。', zh: '我來幫您拿行李。' } },
      { pattern: '〜ていただけませんか', meaning: '非常客氣的請求說法', example: { jp: 'もう<ruby>一度<rt>いちど</rt></ruby><ruby>説明<rt>せつめい</rt></ruby>していただけませんか。', zh: '可以請您再說明一次嗎？' } }
    ],
    quiz: [
      { question: '「<ruby>食<rt>た</rt></ruby>べる」的尊敬語是？', options: ['いただく', '<ruby>召<rt>め</rt></ruby>し<ruby>上<rt>あ</rt></ruby>がる', '<ruby>拝見<rt>はいけん</rt></ruby>する', '<ruby>参<rt>まい</rt></ruby>る'], answer: 1, explanation: '抬高對方的吃用「召し上がる」；「いただく」是謙讓語（自己吃）。' },
      { question: '「<ruby>見<rt>み</rt></ruby>る」的謙讓語是？', options: ['ご<ruby>覧<rt>らん</rt></ruby>になる', '<ruby>拝見<rt>はいけん</rt></ruby>する', '<ruby>召<rt>め</rt></ruby>し<ruby>上<rt>あ</rt></ruby>がる', 'おっしゃる'], answer: 1, explanation: '自己看（謙虛）用「拝見する」；「ご覧になる」是尊敬語。' },
      { question: '<ruby>先生<rt>せんせい</rt></ruby>が___。（老師說了＝尊敬）', options: ['<ruby>申<rt>もう</rt></ruby>しました', 'おっしゃいました', 'いただきました', '<ruby>参<rt>まい</rt></ruby>りました'], answer: 1, explanation: '對方（老師）說話用尊敬語「おっしゃる」。' },
      { question: '<ruby>私<rt>わたし</rt></ruby>は<ruby>田中<rt>たなか</rt></ruby>と___。（我叫田中＝謙讓）', options: ['おっしゃいます', '<ruby>申<rt>もう</rt></ruby>します', 'いらっしゃいます', 'ご<ruby>覧<rt>らん</rt></ruby>になります'], answer: 1, explanation: '自我介紹壓低自己，用謙讓語「申します」。' }
    ]
  },
  {
    slug: 'plain-form',
    level: 'N4',
    title: '普通形｜跟朋友說話的方式',
    intro: '普通形（常體）是跟家人朋友對話時用的形式，也是很多進階句型的接續基礎。學會它，日文才算真正活了起來。',
    rules: [
      { group: '動詞', examples: ['<ruby>行<rt>い</rt></ruby>きます → <ruby>行<rt>い</rt></ruby>く', '<ruby>行<rt>い</rt></ruby>きません → <ruby>行<rt>い</rt></ruby>かない', '<ruby>行<rt>い</rt></ruby>きました → <ruby>行<rt>い</rt></ruby>った'] },
      { group: 'い形容詞', examples: ['<ruby>暑<rt>あつ</rt></ruby>いです → <ruby>暑<rt>あつ</rt></ruby>い', '<ruby>暑<rt>あつ</rt></ruby>くないです → <ruby>暑<rt>あつ</rt></ruby>くない', '<ruby>暑<rt>あつ</rt></ruby>かったです → <ruby>暑<rt>あつ</rt></ruby>かった'] },
      { group: 'な形容詞・名詞', examples: ['<ruby>元気<rt>げんき</rt></ruby>です → <ruby>元気<rt>げんき</rt></ruby>だ', '<ruby>学生<rt>がくせい</rt></ruby>です → <ruby>学生<rt>がくせい</rt></ruby>だ', '<ruby>学生<rt>がくせい</rt></ruby>でした → <ruby>学生<rt>がくせい</rt></ruby>だった'] }
    ],
    usages: [
      { pattern: '普通形 ＋ と<ruby>思<rt>おも</rt></ruby>います', meaning: '我覺得…（意見的表達）', example: { jp: '<ruby>明日<rt>あした</rt></ruby>は<ruby>雨<rt>あめ</rt></ruby>が<ruby>降<rt>ふ</rt></ruby>ると<ruby>思<rt>おも</rt></ruby>います。', zh: '我覺得明天會下雨。' } },
      { pattern: '普通形 ＋ と<ruby>言<rt>い</rt></ruby>っていました', meaning: '某人說了…（轉述）', example: { jp: '<ruby>田中<rt>たなか</rt></ruby>さんは<ruby>来<rt>こ</rt></ruby>ないと<ruby>言<rt>い</rt></ruby>っていました。', zh: '田中先生說他不來。' } },
      { pattern: '普通形 ＋ でしょう', meaning: '推測：大概…吧', example: { jp: '<ruby>彼<rt>かれ</rt></ruby>はもう<ruby>着<rt>つ</rt></ruby>いたでしょう。', zh: '他大概已經到了吧。' } }
    ],
    quiz: [
      { question: '「<ruby>食<rt>た</rt></ruby>べません」的普通形是？', options: ['<ruby>食<rt>た</rt></ruby>べる', '<ruby>食<rt>た</rt></ruby>べない', '<ruby>食<rt>た</rt></ruby>べた', '<ruby>食<rt>た</rt></ruby>べて'], answer: 1, explanation: 'ます形否定「食べません」的普通形是ない形「食べない」。' },
      { question: '「<ruby>寒<rt>さむ</rt></ruby>かったです」的普通形是？', options: ['<ruby>寒<rt>さむ</rt></ruby>い', '<ruby>寒<rt>さむ</rt></ruby>くない', '<ruby>寒<rt>さむ</rt></ruby>かった', '<ruby>寒<rt>さむ</rt></ruby>だった'], answer: 2, explanation: 'い形容詞過去式的普通形直接去掉「です」。' },
      { question: '「<ruby>学生<rt>がくせい</rt></ruby>です」的普通形是？', options: ['<ruby>学生<rt>がくせい</rt></ruby>だ', '<ruby>学生<rt>がくせい</rt></ruby>い', '<ruby>学生<rt>がくせい</rt></ruby>な', '<ruby>学生<rt>がくせい</rt></ruby>ある'], answer: 0, explanation: '名詞句的普通形是「名詞＋だ」。' },
      { question: '<ruby>彼<rt>かれ</rt></ruby>は<ruby>来<rt>こ</rt></ruby>___<ruby>思<rt>おも</rt></ruby>います。（我覺得他不會來）', options: ['ませんと', 'ないと', 'なくと', 'ずと'], answer: 1, explanation: '「〜と思います」前面要接普通形，所以用ない形。' }
    ]
  },
  {
    slug: 'kosoado',
    level: 'N5',
    title: 'こそあど｜這個那個怎麼說',
    intro: 'こそあど系統是日文指示代名詞的規則：こ＝說話者附近、そ＝聽話者附近、あ＝雙方都遠、ど＝疑問。學會這組規則，「這個」「那個」「哪個」就都會用了。',
    rules: [
      { group: '指示代名詞（物）', examples: ['これ（這個）', 'それ（那個）', 'あれ（那個・更遠）', 'どれ（哪個）'] },
      { group: '指示連體詞＋名詞', examples: ['この＋名詞（這個…）', 'その＋名詞（那個…）', 'あの＋名詞（那個…・更遠）', 'どの＋名詞（哪個…）'] },
      { group: '場所', examples: ['ここ（這裡）', 'そこ（那裡）', 'あそこ（那裡・更遠）', 'どこ（哪裡）'] }
    ],
    usages: [
      { pattern: 'これ／それ／あれ ＋ は ＋ 名詞です', meaning: '指出東西是什麼', example: { jp: 'これは<ruby>私<rt>わたし</rt></ruby>のスマホです。', zh: '這是我的手機。' } },
      { pattern: 'この／その／あの ＋ 名詞', meaning: '修飾名詞，指定「這個/那個…」', example: { jp: 'あの<ruby>店<rt>みせ</rt></ruby>はとても<ruby>有名<rt>ゆうめい</rt></ruby>です。', zh: '那間店非常有名。' } },
      { pattern: 'ここ／そこ／あそこ', meaning: '指場所', example: { jp: '<ruby>駅<rt>えき</rt></ruby>はあそこです。', zh: '車站在那裡。' } }
    ],
    quiz: [
      { question: '說話者手上拿的東西該用？', options: ['これ', 'それ', 'あれ', 'どれ'], answer: 0, explanation: '「こ」系列指說話者身邊的東西。' },
      { question: '修飾名詞（這台電腦）該用？', options: ['これパソコン', 'このパソコン', 'こんなパソコン', 'こういうパソコン'], answer: 1, explanation: '修飾名詞要用指示連體詞「この」，不能直接用「これ」加名詞。' },
      { question: '「哪裡」怎麼說？', options: ['ここ', 'そこ', 'あそこ', 'どこ'], answer: 3, explanation: '「ど」系列表示疑問，どこ＝哪裡。' },
      { question: '對方手上拿的東西該用？', options: ['これ', 'それ', 'あれ', 'どれ'], answer: 1, explanation: '「そ」系列指聽話者身邊的東西。' },
      { question: '雙方都看得到但都有點遠的東西該用？', options: ['これ', 'それ', 'あれ', 'どれ'], answer: 2, explanation: '「あ」系列指雙方都有點距離的東西。' }
    ]
  },
  {
    slug: 'arimasu-imasu',
    level: 'N5',
    title: 'あります・います｜有生命跟沒生命的「有」',
    intro: '日文的「有」要看主詞是不是有生命的：植物、無生物用「あります」，人和動物用「います」。這是初學者最容易搞混的文法點之一。',
    rules: [],
    usages: [
      { pattern: '（無生物）が ＋ あります', meaning: '表示物品的存在', example: { jp: '<ruby>机<rt>つくえ</rt></ruby>の<ruby>上<rt>うえ</rt></ruby>に<ruby>本<rt>ほん</rt></ruby>があります。', zh: '桌上有書。' } },
      { pattern: '（人・動物）が ＋ います', meaning: '表示人或動物的存在', example: { jp: '<ruby>公園<rt>こうえん</rt></ruby>に<ruby>子<rt>こ</rt></ruby>どもがいます。', zh: '公園裡有小孩。' } },
      { pattern: '場所 ＋ に ＋ 名詞 ＋ があります／います', meaning: '描述某個地方有什麼', example: { jp: '<ruby>教室<rt>きょうしつ</rt></ruby>に<ruby>先生<rt>せんせい</rt></ruby>がいます。', zh: '教室裡有老師。' } }
    ],
    quiz: [
      { question: '「桌子」的存在該用？', options: ['あります', 'います'], answer: 0, explanation: '無生物用「あります」。' },
      { question: '「貓」的存在該用？', options: ['あります', 'います'], answer: 1, explanation: '有生命的動物用「います」。' },
      { question: '<ruby>部屋<rt>へや</rt></ruby>にテレビが___。（有電視）', options: ['あります', 'います', 'あった', 'いる'], answer: 0, explanation: '電視是無生物，用「あります」的禮貌現在形。' },
      { question: '<ruby>庭<rt>にわ</rt></ruby>に<ruby>犬<rt>いぬ</rt></ruby>が___。（有一隻狗）', options: ['あります', 'います'], answer: 1, explanation: '狗是動物，用「います」。' },
      { question: '<ruby>木<rt>き</rt></ruby>の<ruby>下<rt>した</rt></ruby>に<ruby>猫<rt>ねこ</rt></ruby>が___。（樹下有貓）', options: ['あります', 'います'], answer: 1, explanation: '貓是動物，用「います」。' }
    ]
  },
  {
    slug: 'mo-particle',
    level: 'N5',
    title: '〜も｜也是、都的說法',
    intro: '「も」用來表示「也」，取代原本的「は／が／を」等助詞出現在名詞後面，是初學者最先學到的基礎助詞之一。',
    rules: [],
    usages: [
      { pattern: '名詞 ＋ も', meaning: '表示「…也…」，跟前面提到的內容一樣', example: { jp: '<ruby>私<rt>わたし</rt></ruby>は<ruby>学生<rt>がくせい</rt></ruby>です。<ruby>彼<rt>かれ</rt></ruby>も<ruby>学生<rt>がくせい</rt></ruby>です。', zh: '我是學生。他也是學生。' } },
      { pattern: '疑問詞 ＋ も ＋ 否定', meaning: '表示「都不…／都沒…」的全部否定', example: { jp: '<ruby>今日<rt>きょう</rt></ruby>は<ruby>誰<rt>だれ</rt></ruby>も<ruby>来<rt>き</rt></ruby>ませんでした。', zh: '今天誰都沒來。' } },
      { pattern: '名詞A ＋ も ＋ 名詞B ＋ も', meaning: '表示「A跟B都…」', example: { jp: '<ruby>肉<rt>にく</rt></ruby>も<ruby>魚<rt>さかな</rt></ruby>も<ruby>好<rt>す</rt></ruby>きです。', zh: '肉跟魚都喜歡。' } }
    ],
    quiz: [
      { question: '「<ruby>私<rt>わたし</rt></ruby>は<ruby>日本人<rt>にほんじん</rt></ruby>です。<ruby>彼<rt>かれ</rt></ruby>___<ruby>日本人<rt>にほんじん</rt></ruby>です。」', options: ['は', 'が', 'も', 'を'], answer: 2, explanation: '表示「他也是」用「も」。' },
      { question: '表示「什麼都不吃」該怎麼說？', options: ['<ruby>何<rt>なに</rt></ruby>が<ruby>食<rt>た</rt></ruby>べません', '<ruby>何<rt>なに</rt></ruby>も<ruby>食<rt>た</rt></ruby>べません', '<ruby>何<rt>なに</rt></ruby>は<ruby>食<rt>た</rt></ruby>べません', '<ruby>何<rt>なに</rt></ruby>を<ruby>食<rt>た</rt></ruby>べません'], answer: 1, explanation: '「疑問詞＋も＋否定」表示全部否定。' },
      { question: '「<ruby>猫<rt>ねこ</rt></ruby>___<ruby>犬<rt>いぬ</rt></ruby>___<ruby>好<rt>す</rt></ruby>きです。」（貓跟狗都喜歡）', options: ['は…は', 'も…も', 'が…が', 'を…を'], answer: 1, explanation: '「AもBも」表示兩者都…' },
      { question: '<ruby>兄<rt>あに</rt></ruby>は<ruby>大学生<rt>だいがくせい</rt></ruby>です。<ruby>姉<rt>あね</rt></ruby>___<ruby>大学生<rt>だいがくせい</rt></ruby>です。', options: ['は', 'が', 'も', 'に'], answer: 2, explanation: '和前面提到的一樣，用「も」。' }
    ]
  },
  {
    slug: 'tai-form',
    level: 'N5',
    title: '〜たいです｜想要做…',
    intro: '想表達「想做某事」，把動詞ます形的「ます」去掉，加上「たい」，就完成了。「たい」本身會像い形容詞一樣變化。',
    rules: [
      { group: '動詞ます形（去ます）＋たい', examples: ['<ruby>飲<rt>の</rt></ruby>みます → <ruby>飲<rt>の</rt></ruby>みたい', '<ruby>食<rt>た</rt></ruby>べます → <ruby>食<rt>た</rt></ruby>べたい', '<ruby>行<rt>い</rt></ruby>きます → <ruby>行<rt>い</rt></ruby>きたい'] }
    ],
    usages: [
      { pattern: '動詞たい形 ＋ です', meaning: '表示說話者自己「想做…」', example: { jp: '<ruby>沖縄<rt>おきなわ</rt></ruby>へ<ruby>行<rt>い</rt></ruby>きたいです。', zh: '想去沖繩。' } },
      { pattern: '動詞たい形 ＋ くないです', meaning: '表示「不想做…」（たい是い形容詞變化）', example: { jp: '<ruby>今日<rt>きょう</rt></ruby>は<ruby>働<rt>はたら</rt></ruby>きたくないです。', zh: '今天不想工作。' } },
      { pattern: '〜が／を ＋ たいです', meaning: '對象可以用「が」也可以用「を」', example: { jp: '<ruby>冷<rt>つめ</rt></ruby>たい<ruby>水<rt>みず</rt></ruby>が<ruby>飲<rt>の</rt></ruby>みたいです。', zh: '想喝冰水。' } }
    ],
    quiz: [
      { question: '「<ruby>食<rt>た</rt></ruby>べます」的たい形是？', options: ['<ruby>食<rt>た</rt></ruby>べたい', '<ruby>食<rt>た</rt></ruby>べますたい', '<ruby>食<rt>た</rt></ruby>べたいます', '<ruby>食<rt>た</rt></ruby>べたく'], answer: 0, explanation: '去掉ます加上たい。' },
      { question: '「たい」的否定該像哪種詞一樣變化？', options: ['な形容詞', 'い形容詞', '動詞', '名詞'], answer: 1, explanation: '「たい」結尾是い，否定變化跟い形容詞一樣：たい→たくない。' },
      { question: '<ruby>寿司<rt>すし</rt></ruby>が___。（想吃壽司）', options: ['<ruby>食<rt>た</rt></ruby>べたい', '<ruby>食<rt>た</rt></ruby>べたいます', '<ruby>食<rt>た</rt></ruby>べますたい', '<ruby>食<rt>た</rt></ruby>べたく'], answer: 0, explanation: '「が＋たいです」表示想要的對象。' },
      { question: '<ruby>今日<rt>きょう</rt></ruby>は<ruby>誰<rt>だれ</rt></ruby>にも___。（不想見任何人）', options: ['<ruby>会<rt>あ</rt></ruby>いたい', '<ruby>会<rt>あ</rt></ruby>いたくない', '<ruby>会<rt>あ</rt></ruby>いませんたい', '<ruby>会<rt>あ</rt></ruby>うたくない'], answer: 1, explanation: 'たい形的否定是「たくない」。' },
      { question: '「<ruby>行<rt>い</rt></ruby>きます」的たい形是？', options: ['<ruby>行<rt>い</rt></ruby>たい', '<ruby>行<rt>い</rt></ruby>きたい', '<ruby>行<rt>い</rt></ruby>くたい', '<ruby>行<rt>い</rt></ruby>きますたい'], answer: 1, explanation: '去掉ます加たい：行き+たい。' }
    ]
  },
  {
    slug: 'kara-made',
    level: 'N5',
    title: '〜から〜まで｜從…到…',
    intro: '「から」表示起點（從…），「まで」表示終點（到…），可以用在時間也可以用在地點，是描述範圍最基本的說法。',
    rules: [],
    usages: [
      { pattern: '時間 ＋ から ＋ 時間 ＋ まで', meaning: '表示時間的範圍', example: { jp: '<ruby>九時<rt>くじ</rt></ruby>から<ruby>五時<rt>ごじ</rt></ruby>まで<ruby>働<rt>はたら</rt></ruby>きます。', zh: '從九點工作到五點。' } },
      { pattern: '場所 ＋ から ＋ 場所 ＋ まで', meaning: '表示地點的範圍', example: { jp: '<ruby>家<rt>いえ</rt></ruby>から<ruby>駅<rt>えき</rt></ruby>まで<ruby>十分<rt>じゅっぷん</rt></ruby>かかります。', zh: '從家裡到車站要花十分鐘。' } },
      { pattern: '〜から（原因）', meaning: '「から」也可以表示原因「因為…」', example: { jp: '<ruby>危<rt>あぶ</rt></ruby>ないから、<ruby>気<rt>き</rt></ruby>をつけてください。', zh: '因為很危險，請小心。' } }
    ],
    quiz: [
      { question: '<ruby>月曜日<rt>げつようび</rt></ruby>___<ruby>金曜日<rt>きんようび</rt></ruby>___<ruby>働<rt>はたら</rt></ruby>きます。（從星期一工作到星期五）', options: ['から…まで', 'まで…から', 'に…で', 'を…に'], answer: 0, explanation: '起點用「から」，終點用「まで」。' },
      { question: '「から」除了表示起點，還可以表示什麼？', options: ['目的', '原因', '方法', '場所'], answer: 1, explanation: '「から」句尾也常表示原因「因為…」。' },
      { question: '<ruby>台北<rt>たいぺい</rt></ruby>___<ruby>高雄<rt>たかお</rt></ruby>___、<ruby>新幹線<rt>しんかんせん</rt></ruby>で<ruby>行<rt>い</rt></ruby>きます。', options: ['から…まで', 'まで…から', 'へ…に', 'で…に'], answer: 0, explanation: '從台北到高雄：から…まで。' }
    ]
  },
  {
    slug: 'question-words',
    level: 'N5',
    title: '疑問詞｜何・誰・どこ・いつ・どう',
    intro: '疑問詞是問問題時的核心單字，這一課整理最常用的幾個疑問詞，讓你能問出各種問題。',
    rules: [],
    usages: [
      { pattern: '何（なに／なん）', meaning: '問「什麼」', example: { jp: 'これは<ruby>何<rt>なん</rt></ruby>ですか。', zh: '這是什麼？' } },
      { pattern: '誰（だれ）', meaning: '問「誰」', example: { jp: 'あの<ruby>人<rt>ひと</rt></ruby>は<ruby>誰<rt>だれ</rt></ruby>ですか。', zh: '那個人是誰？' } },
      { pattern: 'どこ／いつ／どう', meaning: '分別問「哪裡」「什麼時候」「怎麼樣」', example: { jp: '<ruby>旅行<rt>りょこう</rt></ruby>はどうでしたか。', zh: '旅行怎麼樣？' } }
    ],
    quiz: [
      { question: '問「這是什麼」該用哪個疑問詞？', options: ['誰', '何', 'どこ', 'いつ'], answer: 1, explanation: '問東西用「何」。' },
      { question: '問「生日是什麼時候」該用？', options: ['誰', 'どこ', 'いつ', 'どう'], answer: 2, explanation: '問時間點用「いつ」。' },
      { question: '「あなたはどこ___<ruby>来<rt>き</rt></ruby>ましたか。」（你從哪裡來的）', options: ['が', 'を', 'から', 'まで'], answer: 2, explanation: '「どこから」表示「從哪裡」。' },
      { question: '問對方感想「電影怎麼樣？」該用？', options: ['何', '誰', 'どう', 'いつ'], answer: 2, explanation: '問感想、狀態用「どう」。' }
    ]
  },
  {
    slug: 'toki',
    level: 'N5',
    title: '〜とき｜當…的時候',
    intro: '「とき」表示「…的時候」，前面可以接動詞、形容詞或名詞，是描述時間點很常用的句型。',
    rules: [],
    usages: [
      { pattern: '動詞辞書形／た形 ＋ とき', meaning: '做某動作、或做完某動作的時候', example: { jp: '<ruby>日本<rt>にほん</rt></ruby>へ<ruby>行<rt>い</rt></ruby>くとき、パスポートが<ruby>要<rt>い</rt></ruby>ります。', zh: '去日本的時候，需要護照。' } },
      { pattern: 'い形容詞 ＋ とき', meaning: '某種狀態的時候', example: { jp: '<ruby>忙<rt>いそが</rt></ruby>しいとき、あまり<ruby>寝<rt>ね</rt></ruby>られません。', zh: '忙的時候不太能睡。' } },
      { pattern: 'な形容詞・名詞 ＋ の ＋ とき', meaning: 'な形容詞或名詞接とき要加「の」', example: { jp: '<ruby>子<rt>こ</rt></ruby>どものとき、よく<ruby>川<rt>かわ</rt></ruby>で<ruby>遊<rt>あそ</rt></ruby>びました。', zh: '小時候常常在河邊玩。' } }
    ],
    quiz: [
      { question: '<ruby>暇<rt>ひま</rt></ruby>___とき、<ruby>映画<rt>えいが</rt></ruby>を<ruby>見<rt>み</rt></ruby>ます。（空閒的時候）', options: ['<ruby>暇<rt>ひま</rt></ruby>', '<ruby>暇<rt>ひま</rt></ruby>な', '<ruby>暇<rt>ひま</rt></ruby>の', '<ruby>暇<rt>ひま</rt></ruby>だ'], answer: 1, explanation: 'な形容詞接とき要加「な」。' },
      { question: '<ruby>学生<rt>がくせい</rt></ruby>___とき、よく<ruby>勉強<rt>べんきょう</rt></ruby>しました。（學生時期）', options: ['<ruby>学生<rt>がくせい</rt></ruby>', '<ruby>学生<rt>がくせい</rt></ruby>な', '<ruby>学生<rt>がくせい</rt></ruby>の', '<ruby>学生<rt>がくせい</rt></ruby>だ'], answer: 2, explanation: '名詞接とき要加「の」。' },
      { question: '<ruby>家<rt>いえ</rt></ruby>を<ruby>出<rt>で</rt></ruby>る___、<ruby>傘<rt>かさ</rt></ruby>を<ruby>持<rt>も</rt></ruby>って<ruby>行<rt>い</rt></ruby>きました。（出門的時候）', options: ['とき', 'たとき', 'ながら', 'のに'], answer: 0, explanation: '動作尚未發生時用辭書形＋とき。' }
    ]
  },
  {
    slug: 'nagara',
    level: 'N5',
    title: '〜ながら｜一邊…一邊…',
    intro: '「ながら」用來表示同時做兩件事，前面接動詞的ます形（去掉ます），是簡單又好用的句型。',
    rules: [
      { group: '動詞ます形（去ます）＋ながら', examples: ['<ruby>聞<rt>き</rt></ruby>きます → <ruby>聞<rt>き</rt></ruby>きながら', '<ruby>食<rt>た</rt></ruby>べます → <ruby>食<rt>た</rt></ruby>べながら'] }
    ],
    usages: [
      { pattern: '動詞ながら形 ＋ 動詞', meaning: '同時做兩個動作（主要動作放後面）', example: { jp: '<ruby>音楽<rt>おんがく</rt></ruby>を<ruby>聞<rt>き</rt></ruby>きながら、<ruby>勉強<rt>べんきょう</rt></ruby>します。', zh: '一邊聽音樂一邊唸書。' } }
    ],
    quiz: [
      { question: '「<ruby>食<rt>た</rt></ruby>べます」的ながら形是？', options: ['<ruby>食<rt>た</rt></ruby>べるながら', '<ruby>食<rt>た</rt></ruby>べながら', '<ruby>食<rt>た</rt></ruby>べますながら', '<ruby>食<rt>た</rt></ruby>べたながら'], answer: 1, explanation: '去掉ます加ながら。' },
      { question: 'テレビを___、ご<ruby>飯<rt>はん</rt></ruby>を<ruby>食<rt>た</rt></ruby>べます。（一邊看電視一邊吃飯）', options: ['<ruby>見<rt>み</rt></ruby>て', '<ruby>見<rt>み</rt></ruby>ながら', '<ruby>見<rt>み</rt></ruby>た', '<ruby>見<rt>み</rt></ruby>る'], answer: 1, explanation: '同時進行的動作用「ながら」。' },
      { question: 'ながら句型中，哪個動作是主要動作？', options: ['前面的', '後面的', '都一樣重要', '沒有分別'], answer: 1, explanation: 'ながら前面是附帶動作，後面才是主要動作。' }
    ]
  },
  {
    slug: 'te-kara',
    level: 'N5',
    title: '〜てから｜做了…之後',
    intro: '「てから」強調動作的先後順序，比單純的「て」更明確表達「先做完A，再做B」。',
    rules: [],
    usages: [
      { pattern: '動詞て形 ＋ から、〜', meaning: '先做完前面的動作之後才做後面的事', example: { jp: '<ruby>手<rt>て</rt></ruby>を<ruby>洗<rt>あら</rt></ruby>ってから、ご<ruby>飯<rt>はん</rt></ruby>を<ruby>食<rt>た</rt></ruby>べます。', zh: '洗手之後再吃飯。' } }
    ],
    quiz: [
      { question: '「てから」強調的是什麼？', options: ['原因', '動作的先後順序', '推測', '請求'], answer: 1, explanation: '「てから」強調先做A再做B的順序關係。' },
      { question: '<ruby>宿題<rt>しゅくだい</rt></ruby>を___から、テレビを<ruby>見<rt>み</rt></ruby>ます。（做完作業之後看電視）', options: ['する', 'して', 'した', 'します'], answer: 1, explanation: '前面要接動詞的て形。' }
    ]
  },
  {
    slug: 'comparison',
    level: 'N5',
    title: '比較｜〜より〜ほうが',
    intro: '比較兩件事物時，用「AよりBのほうが〜」表示「B比A更…」，這一課也順便學最高級「一番」的用法。',
    rules: [],
    usages: [
      { pattern: 'A ＋ より ＋ B ＋ のほうが ＋ 形容詞', meaning: '表示「B比A更…」', example: { jp: '<ruby>電車<rt>でんしゃ</rt></ruby>より<ruby>飛行機<rt>ひこうき</rt></ruby>のほうが<ruby>速<rt>はや</rt></ruby>いです。', zh: '飛機比電車快。' } },
      { pattern: '〜の中で、〜が一番〜', meaning: '表示最高級「在…之中，…最…」', example: { jp: '<ruby>果物<rt>くだもの</rt></ruby>の<ruby>中<rt>なか</rt></ruby>で、りんごが<ruby>一番<rt>いちばん</rt></ruby><ruby>好<rt>す</rt></ruby>きです。', zh: '在水果之中，我最喜歡蘋果。' } }
    ],
    quiz: [
      { question: '「AよりBのほうが〜」是什麼意思？', options: ['A比B更…', 'B比A更…', 'A跟B一樣', '都不是'], answer: 1, explanation: '比較的重點在「のほうが」前面的那一個，表示它更…' },
      { question: '<ruby>犬<rt>いぬ</rt></ruby>___<ruby>猫<rt>ねこ</rt></ruby>のほうが<ruby>好<rt>す</rt></ruby>きです。（比起狗，更喜歡貓）', options: ['より', 'から', 'まで', 'ほど'], answer: 0, explanation: '比較的基準用「より」。' },
      { question: 'クラスの<ruby>中<rt>なか</rt></ruby>で、<ruby>田中<rt>たなか</rt></ruby>さんが___<ruby>背<rt>せ</rt></ruby>が<ruby>高<rt>たか</rt></ruby>いです。（在班上最高）', options: ['とても', '一番', 'もっと', 'より'], answer: 1, explanation: '最高級用「一番」。' }
    ]
  },
  {
    slug: 'sou-desu',
    level: 'N4',
    title: '〜そうです｜聽說…／看起來…',
    intro: '「そうです」有兩種用法：接在普通形後面表示「聽說」（傳聞），接在動詞ます形／形容詞語幹後面表示「看起來」（樣態），這一課分清楚兩者。',
    rules: [
      { group: '傳聞｜普通形＋そうです', examples: ['<ruby>雨<rt>あめ</rt></ruby>が<ruby>降<rt>ふ</rt></ruby>る → <ruby>雨<rt>あめ</rt></ruby>が<ruby>降<rt>ふ</rt></ruby>るそうです', '<ruby>美味<rt>おい</rt></ruby>しい → <ruby>美味<rt>おい</rt></ruby>しいそうです'] },
      { group: '樣態｜動詞ます形／い形容詞語幹＋そうです', examples: ['<ruby>降<rt>ふ</rt></ruby>ります → <ruby>降<rt>ふ</rt></ruby>りそうです', '<ruby>美味<rt>おい</rt></ruby>しい → <ruby>美味<rt>おい</rt></ruby>しそうです（去い）'] }
    ],
    usages: [
      { pattern: '普通形 ＋ そうです（傳聞）', meaning: '聽說…（轉述別人告訴你的資訊）', example: { jp: '<ruby>天気予報<rt>てんきよほう</rt></ruby>によると、<ruby>明日<rt>あした</rt></ruby>は<ruby>雨<rt>あめ</rt></ruby>だそうです。', zh: '根據天氣預報，聽說明天會下雨。' } },
      { pattern: '動詞ます形／い形容詞語幹 ＋ そうです（樣態）', meaning: '看起來…（憑外觀判斷）', example: { jp: 'このケーキは<ruby>美味<rt>おい</rt></ruby>しそうです。', zh: '這個蛋糕看起來很好吃。' } }
    ],
    quiz: [
      { question: '「聽說」該用哪種そうです？', options: ['傳聞：普通形＋そうです', '樣態：ます形＋そうです'], answer: 0, explanation: '傳聞用普通形接續。' },
      { question: '「<ruby>美味<rt>おい</rt></ruby>しい」的樣態そうです是？', options: ['<ruby>美味<rt>おい</rt></ruby>しいそうです', '<ruby>美味<rt>おい</rt></ruby>しそうです', '<ruby>美味<rt>おい</rt></ruby>しくそうです', '<ruby>美味<rt>おい</rt></ruby>しさそうです'], answer: 1, explanation: '樣態用法要去掉語尾的「い」。' },
      { question: '<ruby>雨<rt>あめ</rt></ruby>が___そうです。（看起來要下雨了）', options: ['<ruby>降<rt>ふ</rt></ruby>る', '<ruby>降<rt>ふ</rt></ruby>り', '<ruby>降<rt>ふ</rt></ruby>って', '<ruby>降<rt>ふ</rt></ruby>った'], answer: 1, explanation: '樣態用法接ます形（去ます）。' }
    ]
  },
  {
    slug: 'you-desu',
    level: 'N4',
    title: '〜ようです｜看起來、好像…',
    intro: '「ようです」用來表達說話者根據觀察、感覺做出的推測，語感比「そうです」更委婉、更有根據。',
    rules: [],
    usages: [
      { pattern: '普通形 ＋ ようです', meaning: '根據觀察或跡象做出的推測', example: { jp: '<ruby>誰<rt>だれ</rt></ruby>もいないようです。', zh: '好像沒有人在的樣子。' } },
      { pattern: 'まるで〜ようです', meaning: '表示比喻「簡直就像…一樣」', example: { jp: 'まるで<ruby>夢<rt>ゆめ</rt></ruby>のようです。', zh: '簡直就像做夢一樣。' } }
    ],
    quiz: [
      { question: '「ようです」主要用來表達什麼？', options: ['命令', '根據觀察的推測', '邀請', '禁止'], answer: 1, explanation: '「ようです」是說話者根據所見所聞做出的推測。' },
      { question: '<ruby>彼<rt>かれ</rt></ruby>は<ruby>忙<rt>いそが</rt></ruby>しい___です。（他好像很忙的樣子）', options: ['よう', 'そう', 'はず', 'こと'], answer: 0, explanation: '根據觀察做出的推測用「ようです」。' }
    ]
  },
  {
    slug: 'noni',
    level: 'N4',
    title: '〜のに｜明明…卻…',
    intro: '「のに」表示「明明…卻…」，帶有意外、不滿或惋惜的語氣，是表達情緒轉折時很好用的句型。',
    rules: [],
    usages: [
      { pattern: '普通形 ＋ のに', meaning: '表示結果與預期相反，帶有不滿或驚訝', example: { jp: '<ruby>一生懸命<rt>いっしょうけんめい</rt></ruby><ruby>勉強<rt>べんきょう</rt></ruby>したのに、テストに<ruby>落<rt>お</rt></ruby>ちました。', zh: '明明很努力唸書了，卻沒通過考試。' } },
      { pattern: 'な形容詞・名詞 ＋ なのに', meaning: 'な形容詞或名詞接續時要加「な」', example: { jp: '<ruby>休<rt>やす</rt></ruby>みなのに、<ruby>仕事<rt>しごと</rt></ruby>があります。', zh: '明明是休假，卻有工作。' } }
    ],
    quiz: [
      { question: '「のに」帶有什麼語氣？', options: ['純粹敘述', '意外、不滿或惋惜', '命令', '邀請'], answer: 1, explanation: '「のに」帶有和預期相反的情緒轉折。' },
      { question: '<ruby>今日<rt>きょう</rt></ruby>は<ruby>休<rt>やす</rt></ruby>み___のに、<ruby>雨<rt>あめ</rt></ruby>が<ruby>降<rt>ふ</rt></ruby>っています。（明明是假日卻在下雨）', options: ['（不加任何字）', 'な', 'の', 'だ'], answer: 1, explanation: '名詞接のに要加「な」：休みなのに。' }
    ]
  },
  {
    slug: 'te-oku',
    level: 'N4',
    title: '〜ておく｜事先做好準備',
    intro: '「ておく」表示為了以後方便，事先做好某件事，口語常縮約成「〜とく」。',
    rules: [],
    usages: [
      { pattern: '動詞て形 ＋ おきます', meaning: '事先做好準備，為了以後方便', example: { jp: '<ruby>会議<rt>かいぎ</rt></ruby>の<ruby>前<rt>まえ</rt></ruby>に、<ruby>資料<rt>しりょう</rt></ruby>を<ruby>準備<rt>じゅんび</rt></ruby>しておきます。', zh: '開會前先把資料準備好。' } },
      { pattern: '動詞て形 ＋ おいてください', meaning: '請對方事先做好某件事', example: { jp: '<ruby>窓<rt>まど</rt></ruby>を<ruby>閉<rt>し</rt></ruby>めておいてください。', zh: '請先把窗戶關好。' } }
    ],
    quiz: [
      { question: '「ておく」表示什麼？', options: ['正在做', '事先做好準備', '後悔', '禁止'], answer: 1, explanation: '「ておく」表示為了以後方便，事先做好某件事。' },
      { question: '<ruby>飲<rt>の</rt></ruby>み<ruby>物<rt>もの</rt></ruby>を<ruby>買<rt>か</rt></ruby>って___。（先買好飲料）', options: ['おきます', 'います', 'いました', 'しまいます'], answer: 0, explanation: '「て形＋おきます」表示事先準備好。' }
    ]
  },
  {
    slug: 'te-shimau',
    level: 'N4',
    title: '〜てしまう｜做完了、不小心…',
    intro: '「てしまう」表示動作徹底完成，或帶有「不小心做了…」的懊悔語氣，口語常縮約成「〜ちゃう／〜じゃう」。',
    rules: [],
    usages: [
      { pattern: '動詞て形 ＋ しまいます（完成）', meaning: '表示徹底做完某件事', example: { jp: '<ruby>宿題<rt>しゅくだい</rt></ruby>をもう<ruby>全部<rt>ぜんぶ</rt></ruby>やってしまいました。', zh: '作業已經全部做完了。' } },
      { pattern: '動詞て形 ＋ しまいます（後悔）', meaning: '表示不小心做了不該做的事，帶有懊悔語氣', example: { jp: '<ruby>大切<rt>たいせつ</rt></ruby>な<ruby>本<rt>ほん</rt></ruby>をなくしてしまいました。', zh: '把重要的書弄丟了。' } }
    ],
    quiz: [
      { question: '「てしまう」的口語縮約形是？', options: ['〜ちゃう', '〜とく', '〜ながら', '〜のに'], answer: 0, explanation: '「てしまう」口語常說成「ちゃう」。' },
      { question: '<ruby>財布<rt>さいふ</rt></ruby>を<ruby>忘<rt>わす</rt></ruby>れて___。（不小心忘記帶錢包了）', options: ['おきます', 'しまいました', 'いました', 'あります'], answer: 1, explanation: '不小心做了懊悔的事用「てしまいました」。' }
    ]
  },
  {
    slug: 'sugiru',
    level: 'N4',
    title: '〜すぎる｜太過…了',
    intro: '「すぎる」接在動詞ます形或形容詞語幹後面，表示程度「太…了」，帶有負面、超出常理的語感。',
    rules: [
      { group: '動詞ます形（去ます）＋すぎる', examples: ['<ruby>食<rt>た</rt></ruby>べます → <ruby>食<rt>た</rt></ruby>べすぎる', '<ruby>飲<rt>の</rt></ruby>みます → <ruby>飲<rt>の</rt></ruby>みすぎる'] },
      { group: 'い形容詞（去い）・な形容詞＋すぎる', examples: ['<ruby>高<rt>たか</rt></ruby>い → <ruby>高<rt>たか</rt></ruby>すぎる', '<ruby>静<rt>しず</rt></ruby>か → <ruby>静<rt>しず</rt></ruby>かすぎる'] }
    ],
    usages: [
      { pattern: '動詞ます形 ＋ すぎる', meaning: '某個動作做得太過度', example: { jp: '<ruby>昨日<rt>きのう</rt></ruby>、お<ruby>酒<rt>さけ</rt></ruby>を<ruby>飲<rt>の</rt></ruby>みすぎました。', zh: '昨天酒喝太多了。' } },
      { pattern: '形容詞語幹 ＋ すぎる', meaning: '某種狀態太過度', example: { jp: 'この<ruby>服<rt>ふく</rt></ruby>は<ruby>高<rt>たか</rt></ruby>すぎます。', zh: '這件衣服太貴了。' } }
    ],
    quiz: [
      { question: '「<ruby>食<rt>た</rt></ruby>べます」加上すぎる是？', options: ['<ruby>食<rt>た</rt></ruby>べますすぎる', '<ruby>食<rt>た</rt></ruby>べすぎる', '<ruby>食<rt>た</rt></ruby>べるすぎる', '<ruby>食<rt>た</rt></ruby>べてすぎる'], answer: 1, explanation: '去掉ます直接加すぎる。' },
      { question: '「<ruby>高<rt>たか</rt></ruby>い」加上すぎる是？', options: ['<ruby>高<rt>たか</rt></ruby>いすぎる', '<ruby>高<rt>たか</rt></ruby>すぎる', '<ruby>高<rt>たか</rt></ruby>くすぎる', '<ruby>高<rt>たか</rt></ruby>さすぎる'], answer: 1, explanation: 'い形容詞去掉い加すぎる。' },
      { question: '<ruby>働<rt>はたら</rt></ruby>き___て、<ruby>疲<rt>つか</rt></ruby>れました。（工作太累了）', options: ['すぎ', 'すぎる', 'すぎた', 'すぎます'], answer: 0, explanation: '「すぎる」的て形是「すぎて」，前面接すぎ。' }
    ]
  },
  {
    slug: 'yasui-nikui',
    level: 'N4',
    title: '〜やすい・〜にくい｜容易・難以…',
    intro: '「やすい」表示「容易…」，「にくい」表示「難以…」，兩者都接在動詞ます形後面，用來評論一件事做起來的難易度。',
    rules: [
      { group: '動詞ます形（去ます）＋やすい／にくい', examples: ['<ruby>書<rt>か</rt></ruby>きます → <ruby>書<rt>か</rt></ruby>きやすい', '<ruby>読<rt>よ</rt></ruby>みます → <ruby>読<rt>よ</rt></ruby>みにくい'] }
    ],
    usages: [
      { pattern: '動詞ます形 ＋ やすいです', meaning: '表示「容易做…」，也可指東西好用', example: { jp: 'このペンは<ruby>書<rt>か</rt></ruby>きやすいです。', zh: '這支筆很好寫。' } },
      { pattern: '動詞ます形 ＋ にくいです', meaning: '表示「難以做…」，做起來有困難', example: { jp: 'この<ruby>字<rt>じ</rt></ruby>は<ruby>小<rt>ちい</rt></ruby>さくて<ruby>読<rt>よ</rt></ruby>みにくいです。', zh: '這個字太小很難讀。' } }
    ],
    quiz: [
      { question: '「<ruby>書<rt>か</rt></ruby>きます」加上やすい是？', options: ['<ruby>書<rt>か</rt></ruby>きますやすい', '<ruby>書<rt>か</rt></ruby>きやすい', '<ruby>書<rt>か</rt></ruby>くやすい', '<ruby>書<rt>か</rt></ruby>いてやすい'], answer: 1, explanation: '去掉ます加やすい。' },
      { question: '「やすい」與「にくい」哪一個表示「難以…」？', options: ['やすい', 'にくい'], answer: 1, explanation: '「にくい」表示困難、不容易。' },
      { question: 'この<ruby>靴<rt>くつ</rt></ruby>は<ruby>歩<rt>ある</rt></ruby>き___です。（這雙鞋很好走）', options: ['やすい', 'にくい'], answer: 0, explanation: '「容易走」用「やすい」。' }
    ]
  },
  {
    slug: 'ba-conditional',
    level: 'N4',
    title: '〜ば｜另一種「如果」',
    intro: '「ば形」是另一種表達假設的方式，常用在諺語、一般真理，或表達「越…越…」的句型。',
    rules: [
      { group: '第一類動詞｜語尾う段 → え段＋ば', examples: ['<ruby>行<rt>い</rt></ruby>く → <ruby>行<rt>い</rt></ruby>けば', '<ruby>読<rt>よ</rt></ruby>む → <ruby>読<rt>よ</rt></ruby>めば'] },
      { group: '第二類動詞｜去る＋れば', examples: ['<ruby>食<rt>た</rt></ruby>べる → <ruby>食<rt>た</rt></ruby>べれば', '<ruby>見<rt>み</rt></ruby>る → <ruby>見<rt>み</rt></ruby>れば'] },
      { group: 'い形容詞｜去い＋ければ', examples: ['<ruby>安<rt>やす</rt></ruby>い → <ruby>安<rt>やす</rt></ruby>ければ'] }
    ],
    usages: [
      { pattern: '〜ば、〜', meaning: '表示一般性的假設或真理', example: { jp: '<ruby>春<rt>はる</rt></ruby>になれば、<ruby>桜<rt>さくら</rt></ruby>が<ruby>咲<rt>さ</rt></ruby>きます。', zh: '一到春天，櫻花就會開。' } },
      { pattern: '〜ば〜ほど', meaning: '表示「越…越…」', example: { jp: '<ruby>練習<rt>れんしゅう</rt></ruby>すればするほど、<ruby>上手<rt>じょうず</rt></ruby>になります。', zh: '越練習就會越厲害。' } }
    ],
    quiz: [
      { question: '「<ruby>読<rt>よ</rt></ruby>む」的ば形是？', options: ['<ruby>読<rt>よ</rt></ruby>むば', '<ruby>読<rt>よ</rt></ruby>めば', '<ruby>読<rt>よ</rt></ruby>みば', '<ruby>読<rt>よ</rt></ruby>んば'], answer: 1, explanation: '第一類動詞：う段改成え段加「ば」。' },
      { question: '「<ruby>安<rt>やす</rt></ruby>い」的ば形是？', options: ['<ruby>安<rt>やす</rt></ruby>いば', '<ruby>安<rt>やす</rt></ruby>ければ', '<ruby>安<rt>やす</rt></ruby>くば', '<ruby>安<rt>やす</rt></ruby>えば'], answer: 1, explanation: 'い形容詞：去掉い加ければ。' },
      { question: '「〜ば〜ほど」是什麼意思？', options: ['只要…就…', '越…越…', '雖然…但是…', '因為…所以…'], answer: 1, explanation: '「〜ば〜ほど」表示程度隨之增加：越…越…' }
    ]
  },
  {
    slug: 'ni-tsuite',
    level: 'N4',
    title: '〜について｜關於…',
    intro: '「について」用來引出談論的主題，等於中文的「關於…」，是報告、討論時很常用的句型。',
    rules: [],
    usages: [
      { pattern: '名詞 ＋ について', meaning: '表示「關於…」，引出談論的主題', example: { jp: '<ruby>日本<rt>にほん</rt></ruby>の<ruby>文化<rt>ぶんか</rt></ruby>について<ruby>調<rt>しら</rt></ruby>べています。', zh: '正在調查關於日本文化的事。' } },
      { pattern: '名詞 ＋ についての ＋ 名詞', meaning: '修飾名詞時要加「の」', example: { jp: 'これは<ruby>環境<rt>かんきょう</rt></ruby>についての<ruby>本<rt>ほん</rt></ruby>です。', zh: '這是一本關於環境的書。' } }
    ],
    quiz: [
      { question: '「について」的意思是？', options: ['為了', '關於', '除了', '根據'], answer: 1, explanation: '「について」表示「關於…」。' },
      { question: '<ruby>将来<rt>しょうらい</rt></ruby>の<ruby>夢<rt>ゆめ</rt></ruby>___、<ruby>話<rt>はな</rt></ruby>しましょう。（來聊聊關於未來的夢想吧）', options: ['について', 'にとって', 'にたいして', 'によって'], answer: 0, explanation: '引出談論主題用「について」。' },
      { question: 'これは<ruby>歴史<rt>れきし</rt></ruby>___<ruby>映画<rt>えいが</rt></ruby>です。（這是一部關於歷史的電影）', options: ['について', 'についての', 'につく', 'による'], answer: 1, explanation: '修飾後面的名詞要用「についての」。' }
    ]
  },
  {
    slug: 'counters',
    level: 'N5',
    title: '數字與助数詞｜怎麼數東西',
    intro: '日文數東西時，量詞（助数詞）會依物品種類改變，這一課整理最常用的幾種助数詞跟基本數字唸法規則。',
    rules: [
      { group: '基本數字', examples: ['1 いち／2 に／3 さん／4 よん・し', '5 ご／6 ろく／7 なな・しち／8 はち', '9 きゅう・く／10 じゅう'] },
      { group: '常用助数詞', examples: ['〜人（にん）：數人，注意 1人＝ひとり、2人＝ふたり', '〜枚（まい）：數薄的東西（紙、票）', '〜本（ほん）：數細長的東西（筆、瓶）', '〜冊（さつ）：數書本'] }
    ],
    usages: [
      { pattern: '数字 ＋ 助数詞', meaning: '依照物品種類使用對應的量詞', example: { jp: '<ruby>切符<rt>きっぷ</rt></ruby>を<ruby>二枚<rt>にまい</rt></ruby><ruby>買<rt>か</rt></ruby>いました。', zh: '買了兩張票。' } },
      { pattern: '何 ＋ 助数詞', meaning: '詢問數量「幾…」', example: { jp: '<ruby>家族<rt>かぞく</rt></ruby>は<ruby>何人<rt>なんにん</rt></ruby>ですか。', zh: '你家有幾個人？' } }
    ],
    quiz: [
      { question: '「1人」怎麼唸？', options: ['いちにん', 'ひとり', 'いちじん', 'ひとにん'], answer: 1, explanation: '「1人」和「2人」是特殊唸法：ひとり、ふたり。' },
      { question: '數紙張、票券用哪個助数詞？', options: ['本', '枚', '冊', '匹'], answer: 1, explanation: '扁平薄的東西用「枚」。' },
      { question: '數書本用哪個助数詞？', options: ['本', '枚', '冊', '人'], answer: 2, explanation: '書本用「冊」。' },
      { question: '「2人」怎麼唸？', options: ['ににん', 'ふたり', 'にじん', 'ふたにん'], answer: 1, explanation: '特殊唸法：ふたり。' }
    ]
  },
  {
    slug: 'tari-tari',
    level: 'N5',
    title: '〜たり〜たりします｜做這個做那個',
    intro: '「たり」用來列舉幾個代表性的動作，暗示還做了其他沒說出來的事，句尾要用「します」收尾。',
    rules: [
      { group: '動詞た形＋り', examples: ['<ruby>読<rt>よ</rt></ruby>んだ → <ruby>読<rt>よ</rt></ruby>んだり', '<ruby>見<rt>み</rt></ruby>た → <ruby>見<rt>み</rt></ruby>たり', 'した → したり'] }
    ],
    usages: [
      { pattern: '動詞たり形、動詞たり形 ＋ します', meaning: '列舉幾個代表性的動作（不限於這些）', example: { jp: '<ruby>休<rt>やす</rt></ruby>みの<ruby>日<rt>ひ</rt></ruby>は、<ruby>本<rt>ほん</rt></ruby>を<ruby>読<rt>よ</rt></ruby>んだり、<ruby>音楽<rt>おんがく</rt></ruby>を<ruby>聞<rt>き</rt></ruby>いたりします。', zh: '放假的時候會看看書、聽聽音樂之類的。' } }
    ],
    quiz: [
      { question: '「たり」句型的動詞前面要用什麼形式？', options: ['辞書形', 'て形', 'た形', 'ます形'], answer: 2, explanation: '「たり」直接接在た形後面。' },
      { question: '「たり」句型的句尾通常怎麼收？', options: ['します', 'ください', 'ではない', 'でしょう'], answer: 0, explanation: '句型固定用「〜たり〜たりします」收尾。' },
      { question: '<ruby>週末<rt>しゅうまつ</rt></ruby>は<ruby>掃除<rt>そうじ</rt></ruby>を___、<ruby>洗濯<rt>せんたく</rt></ruby>を___します。（打掃、洗衣服等等）', options: ['したり…したり', 'して…して', 'した…した', 'するり…するり'], answer: 0, explanation: '兩個動作都要接「たり」。' }
    ]
  },
  {
    slug: 'deshou',
    level: 'N5',
    title: '〜でしょう｜大概…吧',
    intro: '「でしょう」用來表達推測，語氣比「と思います」更柔和，也常用在天氣預報。',
    rules: [],
    usages: [
      { pattern: '普通形 ＋ でしょう', meaning: '表示推測「大概…吧」', example: { jp: '<ruby>明日<rt>あした</rt></ruby>は<ruby>晴<rt>は</rt></ruby>れるでしょう。', zh: '明天大概會放晴吧。' } },
      { pattern: '〜でしょう？', meaning: '語尾上揚，尋求對方同意「…對吧？」', example: { jp: 'この<ruby>映画<rt>えいが</rt></ruby>、<ruby>面白<rt>おもしろ</rt></ruby>いでしょう？', zh: '這部電影很有趣對吧？' } }
    ],
    quiz: [
      { question: '「でしょう」主要表達什麼語氣？', options: ['命令', '推測', '邀請', '禁止'], answer: 1, explanation: '「でしょう」表示柔和的推測語氣。' },
      { question: '常在什麼場合聽到「でしょう」？', options: ['命令句', '天氣預報', '道歉', '自我介紹'], answer: 1, explanation: '天氣預報常用「でしょう」表示推測。' }
    ]
  },
  {
    slug: 'mashou-ka',
    level: 'N5',
    title: '〜ましょう／ましょうか｜一起做吧',
    intro: '「ましょう」用來邀請對方一起做某事，「ましょうか」則帶有「要不要我來做…」的體貼語氣。',
    rules: [],
    usages: [
      { pattern: '動詞ます形（去ます）＋ましょう', meaning: '邀請對方一起做', example: { jp: '<ruby>一緒<rt>いっしょ</rt></ruby>に<ruby>昼<rt>ひる</rt></ruby>ご<ruby>飯<rt>はん</rt></ruby>を<ruby>食<rt>た</rt></ruby>べましょう。', zh: '一起吃午餐吧。' } },
      { pattern: '動詞ます形（去ます）＋ましょうか', meaning: '詢問「要不要我來做…」，或提議一起做', example: { jp: '<ruby>荷物<rt>にもつ</rt></ruby>を<ruby>持<rt>も</rt></ruby>ちましょうか。', zh: '我來幫你拿行李吧？' } }
    ],
    quiz: [
      { question: '邀請朋友一起去看電影，該用？', options: ['<ruby>行<rt>い</rt></ruby>きます', '<ruby>行<rt>い</rt></ruby>きましょう', '<ruby>行<rt>い</rt></ruby>きたい', '<ruby>行<rt>い</rt></ruby>ってください'], answer: 1, explanation: '邀約用「ましょう」。' },
      { question: '「ましょうか」比「ましょう」多了什麼語感？', options: ['命令', '詢問對方意願、體貼', '否定', '過去'], answer: 1, explanation: '「ましょうか」帶有詢問對方是否需要幫忙的體貼語感。' },
      { question: '<ruby>窓<rt>まど</rt></ruby>を<ruby>開<rt>あ</rt></ruby>け___か。（我來幫你開窗戶吧？）', options: ['ます', 'ましょう', 'ました', 'ません'], answer: 1, explanation: '主動提議幫忙用「ましょうか」。' }
    ]
  },
  {
    slug: 'masenka',
    level: 'N5',
    title: '〜ませんか｜要不要…？',
    intro: '「ませんか」用否定疑問的形式來邀約，語氣比「ましょう」更委婉客氣，是很常用的邀請句型。',
    rules: [],
    usages: [
      { pattern: '動詞ます形 ＋ ませんか', meaning: '委婉地邀請對方做某事', example: { jp: '<ruby>今度<rt>こんど</rt></ruby>、<ruby>一緒<rt>いっしょ</rt></ruby>に<ruby>晩<rt>ばん</rt></ruby>ご<ruby>飯<rt>はん</rt></ruby>を<ruby>食<rt>た</rt></ruby>べませんか。', zh: '下次要不要一起吃晚餐？' } }
    ],
    quiz: [
      { question: '「ませんか」比「ましょう」語氣更…', options: ['直接', '委婉客氣', '命令', '生氣'], answer: 1, explanation: '否定疑問形式的邀約更委婉、給對方拒絕空間。' },
      { question: '<ruby>一緒<rt>いっしょ</rt></ruby>に<ruby>公園<rt>こうえん</rt></ruby>を<ruby>散歩<rt>さんぽ</rt></ruby>___か。（要不要一起去公園散步？）', options: ['します', 'しません', 'しました', 'して'], answer: 1, explanation: '委婉邀約用「〜ませんか」。' }
    ]
  },
  {
    slug: 'adverbial-i',
    level: 'N5',
    title: 'い形容詞的副詞形｜〜く',
    intro: 'い形容詞去掉「い」加上「く」，可以變成副詞修飾動詞，表達「…地做…」。',
    rules: [
      { group: 'い形容詞（去い）＋く', examples: ['<ruby>早<rt>はや</rt></ruby>い → <ruby>早<rt>はや</rt></ruby>く', '<ruby>大<rt>おお</rt></ruby>きい → <ruby>大<rt>おお</rt></ruby>きく', 'いい → よく（特例）'] }
    ],
    usages: [
      { pattern: 'い形容詞く形 ＋ 動詞', meaning: '修飾動詞，表達「…地做…」', example: { jp: '<ruby>明日<rt>あした</rt></ruby>は<ruby>早<rt>はや</rt></ruby>く<ruby>起<rt>お</rt></ruby>きます。', zh: '明天要早起。' } },
      { pattern: 'な形容詞語幹 ＋ に ＋ 動詞', meaning: 'な形容詞的副詞形是「語幹＋に」', example: { jp: '<ruby>部屋<rt>へや</rt></ruby>を<ruby>綺麗<rt>きれい</rt></ruby>に<ruby>掃除<rt>そうじ</rt></ruby>します。', zh: '把房間打掃乾淨。' } }
    ],
    quiz: [
      { question: '「<ruby>早<rt>はや</rt></ruby>い」的副詞形是？', options: ['<ruby>早<rt>はや</rt></ruby>いく', '<ruby>早<rt>はや</rt></ruby>く', '<ruby>早<rt>はや</rt></ruby>くて', '<ruby>早<rt>はや</rt></ruby>いに'], answer: 1, explanation: 'い形容詞去い加く。' },
      { question: '「いい」的副詞形是？（特例）', options: ['いく', 'よく', 'いいく', 'よいく'], answer: 1, explanation: '「いい」變化要用「よい」的形式：よく。' },
      { question: 'な形容詞變副詞時要加什麼？', options: ['く', 'に', 'て', 'な'], answer: 1, explanation: 'な形容詞的副詞形是「語幹＋に」。' },
      { question: '<ruby>字<rt>じ</rt></ruby>を___<ruby>書<rt>か</rt></ruby>いてください。（請把字寫大一點）', options: ['<ruby>大<rt>おお</rt></ruby>きいに', '<ruby>大<rt>おお</rt></ruby>きく', '<ruby>大<rt>おお</rt></ruby>きいて', '<ruby>大<rt>おお</rt></ruby>きな'], answer: 1, explanation: 'い形容詞副詞形：大きい→大きく。' }
    ]
  },
  {
    slug: 'koto-no-nominalization',
    level: 'N5',
    title: '〜こと／の｜把動詞變成名詞',
    intro: '在動詞辭書形後面加上「こと」或「の」，可以把整個動作變成名詞使用，是很多句型的接續基礎。',
    rules: [],
    usages: [
      { pattern: '動詞辞書形 ＋ ことが ＋ 好き／上手／苦手', meaning: '描述對某件事的喜好或能力', example: { jp: '<ruby>本<rt>ほん</rt></ruby>を<ruby>読<rt>よ</rt></ruby>むことが<ruby>好<rt>す</rt></ruby>きです。', zh: '喜歡看書。' } },
      { pattern: '動詞辞書形 ＋ のを ＋ 見る／聞く', meaning: '感官動詞前面習慣用「の」', example: { jp: '<ruby>子供<rt>こども</rt></ruby>が<ruby>歌<rt>うた</rt></ruby>うのを<ruby>聞<rt>き</rt></ruby>きました。', zh: '聽到小孩在唱歌。' } }
    ],
    quiz: [
      { question: '「<ruby>泳<rt>およ</rt></ruby>ぐ___が<ruby>好<rt>す</rt></ruby>きです。」（喜歡游泳）', options: ['こと', 'の', 'もの', 'とき'], answer: 0, explanation: '「好き」前面習慣用「こと」把動詞名詞化。' },
      { question: '感官動詞（見る／聞く）前面習慣用哪個？', options: ['こと', 'の'], answer: 1, explanation: '感官動詞前面習慣用「の」。' }
    ]
  },
  {
    slug: 'nda-explanatory',
    level: 'N4',
    title: '〜んです｜說明理由、強調語氣',
    intro: '「んです」（普通形是「のです」的口語縮約）用來說明理由、背景，或加強語氣，是日常會話中出現頻率極高的句型。',
    rules: [
      { group: '普通形＋んです', examples: ['<ruby>行<rt>い</rt></ruby>く → <ruby>行<rt>い</rt></ruby>くんです', '<ruby>忙<rt>いそが</rt></ruby>しい → <ruby>忙<rt>いそが</rt></ruby>しいんです', '<ruby>元気<rt>げんき</rt></ruby> → <ruby>元気<rt>げんき</rt></ruby>なんです'] }
    ],
    usages: [
      { pattern: '〜んです（說明理由）', meaning: '針對前面的狀況說明原因、背景', example: { jp: '<ruby>顔色<rt>かおいろ</rt></ruby>が<ruby>悪<rt>わる</rt></ruby>いですね。<ruby>実<rt>じつ</rt></ruby>は、<ruby>昨日<rt>きのう</rt></ruby><ruby>寝<rt>ね</rt></ruby>ていないんです。', zh: '你臉色不太好耶。其實我昨天沒睡。' } },
      { pattern: 'どうして／なぜ ＋ 〜んですか', meaning: '詢問理由時常搭配使用', example: { jp: 'どうして<ruby>学校<rt>がっこう</rt></ruby>を<ruby>休<rt>やす</rt></ruby>んだんですか。', zh: '你為什麼向學校請假了？' } }
    ],
    quiz: [
      { question: '「<ruby>元気<rt>げんき</rt></ruby>」加上んです是？', options: ['<ruby>元気<rt>げんき</rt></ruby>んです', '<ruby>元気<rt>げんき</rt></ruby>なんです', '<ruby>元気<rt>げんき</rt></ruby>だんです', '<ruby>元気<rt>げんき</rt></ruby>んですです'], answer: 1, explanation: 'な形容詞・名詞接んです要加「な」。' },
      { question: '「んです」主要用來做什麼？', options: ['命令', '說明理由或強調', '禁止', '邀請'], answer: 1, explanation: '「んです」用來說明背景理由，或加強語氣。' },
      { question: 'どうして<ruby>遅<rt>おく</rt></ruby>れた___か。（為什麼遲到了）', options: ['です', 'んです', 'ました', 'ください'], answer: 1, explanation: '詢問理由常搭配「んですか」。' }
    ]
  },
  {
    slug: 'imperative-prohibitive',
    level: 'N4',
    title: '命令形・禁止形｜強烈的命令與禁止',
    intro: '命令形跟禁止形語氣非常強烈，通常用在標語、緊急狀況，或漫畫、體育場合，日常會話很少直接對人使用。',
    rules: [
      { group: '命令形｜第一類：え段', examples: ['<ruby>行<rt>い</rt></ruby>く → <ruby>行<rt>い</rt></ruby>け', '<ruby>読<rt>よ</rt></ruby>む → <ruby>読<rt>よ</rt></ruby>め'] },
      { group: '命令形｜第二類：去る＋ろ', examples: ['<ruby>食<rt>た</rt></ruby>べる → <ruby>食<rt>た</rt></ruby>べろ', '<ruby>見<rt>み</rt></ruby>る → <ruby>見<rt>み</rt></ruby>ろ'] },
      { group: '禁止形｜辞書形＋な', examples: ['<ruby>行<rt>い</rt></ruby>く → <ruby>行<rt>い</rt></ruby>くな', '<ruby>食<rt>た</rt></ruby>べる → <ruby>食<rt>た</rt></ruby>べるな'] }
    ],
    usages: [
      { pattern: '命令形', meaning: '強烈的命令語氣，常見於標語或緊急狀況', example: { jp: '<ruby>危<rt>あぶ</rt></ruby>ない、<ruby>逃<rt>に</rt></ruby>げろ！', zh: '危險，快逃！' } },
      { pattern: '辞書形 ＋ な', meaning: '強烈的禁止語氣，「不准…」', example: { jp: 'ここに<ruby>入<rt>はい</rt></ruby>るな。', zh: '禁止進入。' } }
    ],
    quiz: [
      { question: '「<ruby>行<rt>い</rt></ruby>く」的命令形是？', options: ['<ruby>行<rt>い</rt></ruby>け', '<ruby>行<rt>い</rt></ruby>こう', '<ruby>行<rt>い</rt></ruby>くな', '<ruby>行<rt>い</rt></ruby>きろ'], answer: 0, explanation: '第一類動詞命令形：う段改え段。' },
      { question: '「<ruby>食<rt>た</rt></ruby>べる」的命令形是？', options: ['<ruby>食<rt>た</rt></ruby>べれ', '<ruby>食<rt>た</rt></ruby>べろ', '<ruby>食<rt>た</rt></ruby>べな', '<ruby>食<rt>た</rt></ruby>べよ'], answer: 1, explanation: '第二類動詞命令形：去る加ろ。' },
      { question: '「辞書形＋な」是什麼意思？', options: ['命令', '禁止', '邀請', '推測'], answer: 1, explanation: '辞書形加な表示強烈的禁止。' }
    ]
  },
  {
    slug: 'te-iku-kuru',
    level: 'N4',
    title: '〜ていく・〜てくる｜狀態的變化方向',
    intro: '「ていく」表示狀態朝未來、遠離說話者的方向變化，「てくる」表示狀態朝現在、靠近說話者的方向變化。',
    rules: [],
    usages: [
      { pattern: '動詞て形 ＋ いきます', meaning: '表示狀態從現在持續到未來，或動作漸漸遠離', example: { jp: 'これから<ruby>寒<rt>さむ</rt></ruby>くなっていきます。', zh: '接下來會漸漸變冷。' } },
      { pattern: '動詞て形 ＋ きます', meaning: '表示狀態從過去持續到現在，或動作漸漸靠近', example: { jp: '<ruby>日本語<rt>にほんご</rt></ruby>が<ruby>少<rt>すこ</rt></ruby>しずつ<ruby>上手<rt>じょうず</rt></ruby>になってきました。', zh: '日文漸漸變得比較好了。' } }
    ],
    quiz: [
      { question: '「〜ていく」表示變化朝哪個方向？', options: ['朝過去', '朝未來、遠離現在', '沒有方向', '朝說話者靠近'], answer: 1, explanation: '「ていく」表示朝未來發展的變化。' },
      { question: '<ruby>子供<rt>こども</rt></ruby>がだんだん<ruby>大<rt>おお</rt></ruby>きくなって___。（小孩漸漸長大了，到目前為止）', options: ['いきました', 'きました', 'おきました', 'しまいました'], answer: 1, explanation: '從過去到現在的變化用「てきました」。' }
    ]
  },
  {
    slug: 'toiu',
    level: 'N4',
    title: '〜という｜叫做…、所謂的…',
    intro: '「という」用來介紹或引用一個名稱、說法，等於中文的「叫做…」「所謂的…」。',
    rules: [],
    usages: [
      { pattern: '名詞 ＋ という ＋ 名詞', meaning: '介紹一個具體的名稱', example: { jp: '「<ruby>桜<rt>さくら</rt></ruby>」という<ruby>花<rt>はな</rt></ruby>を<ruby>知<rt>し</rt></ruby>っていますか。', zh: '你知道叫做「櫻花」的花嗎？' } },
      { pattern: '〜という<ruby>話<rt>はなし</rt></ruby>／こと', meaning: '轉述聽來的消息或說法', example: { jp: '<ruby>彼<rt>かれ</rt></ruby>は<ruby>来月<rt>らいげつ</rt></ruby><ruby>結婚<rt>けっこん</rt></ruby>するという<ruby>話<rt>はなし</rt></ruby>です。', zh: '聽說他下個月要結婚。' } }
    ],
    quiz: [
      { question: '「という」的意思是？', options: ['因為', '叫做、所謂的', '雖然', '如果'], answer: 1, explanation: '「という」用來介紹或轉述一個名稱、說法。' },
      { question: '<ruby>田中<rt>たなか</rt></ruby>___<ruby>人<rt>ひと</rt></ruby>を<ruby>知<rt>し</rt></ruby>っていますか。（你認識一個叫田中的人嗎）', options: ['という', 'とした', 'となる', 'とみる'], answer: 0, explanation: '介紹名字用「という」。' }
    ]
  },
  {
    slug: 'hazu',
    level: 'N4',
    title: '〜はず｜應該是…',
    intro: '「はず」表示說話者根據已知的資訊，有相當把握地做出推測，語感是「按理說應該…」。',
    rules: [],
    usages: [
      { pattern: '普通形 ＋ はずです', meaning: '表示有根據的推測「應該是…」', example: { jp: '<ruby>会議<rt>かいぎ</rt></ruby>は<ruby>三時<rt>さんじ</rt></ruby>に<ruby>始<rt>はじ</rt></ruby>まるはずです。', zh: '會議應該三點開始。' } },
      { pattern: '普通形 ＋ はずがありません', meaning: '表示「不可能…」，強烈否定', example: { jp: '<ruby>彼<rt>かれ</rt></ruby>が<ruby>嘘<rt>うそ</rt></ruby>をつくはずがありません。', zh: '他不可能說謊。' } }
    ],
    quiz: [
      { question: '「はず」表示什麼？', options: ['命令', '有根據的推測', '邀請', '禁止'], answer: 1, explanation: '「はず」表示有把握的推測。' },
      { question: '「はずがありません」表示？', options: ['應該是', '不可能', '也許', '請求'], answer: 1, explanation: '「はずがありません」表示強烈否定「不可能」。' },
      { question: '<ruby>今頃<rt>いまごろ</rt></ruby>、<ruby>彼<rt>かれ</rt></ruby>はもう<ruby>家<rt>いえ</rt></ruby>に___はずです。（他現在應該已經到家了）', options: ['<ruby>着<rt>つ</rt></ruby>いた', '<ruby>着<rt>つ</rt></ruby>く', '<ruby>着<rt>つ</rt></ruby>いて', '<ruby>着<rt>つ</rt></ruby>き'], answer: 0, explanation: '「はず」前面接普通形，這裡是過去式「着いた」。' }
    ]
  },
  {
    slug: 'kamoshirenai',
    level: 'N4',
    title: '〜かもしれません｜也許…',
    intro: '「かもしれません」表示不太確定的推測，語氣比「はず」「でしょう」更弱、更保留。',
    rules: [],
    usages: [
      { pattern: '普通形 ＋ かもしれません', meaning: '表示「也許…、可能…」，不太確定的推測', example: { jp: '<ruby>明日<rt>あした</rt></ruby>は<ruby>雪<rt>ゆき</rt></ruby>が<ruby>降<rt>ふ</rt></ruby>るかもしれません。', zh: '明天也許會下雪。' } }
    ],
    quiz: [
      { question: '「かもしれません」跟「はずです」比起來，語氣哪個更不確定？', options: ['かもしれません', 'はずです'], answer: 0, explanation: '「かもしれません」是比較保留、不確定的推測。' },
      { question: '<ruby>彼<rt>かれ</rt></ruby>は<ruby>今日<rt>きょう</rt></ruby><ruby>来<rt>こ</rt></ruby>ない___。（他今天也許不會來）', options: ['かもしれません', 'はずです', 'でしょうか', 'という'], answer: 0, explanation: '不確定的推測用「かもしれません」。' }
    ]
  },
  {
    slug: 'ta-bakari',
    level: 'N4',
    title: '〜たばかり｜剛剛做完…',
    intro: '「たばかり」表示某個動作才剛剛結束不久，帶有「時間還很短」的語感。',
    rules: [
      { group: '動詞た形＋ばかり', examples: ['<ruby>着<rt>つ</rt></ruby>いた → <ruby>着<rt>つ</rt></ruby>いたばかり', '<ruby>始<rt>はじ</rt></ruby>めた → <ruby>始<rt>はじ</rt></ruby>めたばかり'] }
    ],
    usages: [
      { pattern: '動詞た形 ＋ ばかりです', meaning: '表示動作剛結束不久', example: { jp: '<ruby>今<rt>いま</rt></ruby>、<ruby>駅<rt>えき</rt></ruby>に<ruby>着<rt>つ</rt></ruby>いたばかりです。', zh: '我剛到車站不久。' } }
    ],
    quiz: [
      { question: '「たばかり」表示什麼？', options: ['即將要做', '剛剛做完不久', '正在做', '一直在做'], answer: 1, explanation: '「たばかり」強調動作剛結束、時間很短。' },
      { question: '<ruby>日本語<rt>にほんご</rt></ruby>を<ruby>勉強<rt>べんきょう</rt></ruby>し___です。（剛開始學日文不久）', options: ['<ruby>始<rt>はじ</rt></ruby>めたばかり', '<ruby>始<rt>はじ</rt></ruby>めるばかり', '<ruby>始<rt>はじ</rt></ruby>めているばかり', '<ruby>始<rt>はじ</rt></ruby>めばかり'], answer: 0, explanation: '接続た形＋ばかり。' }
    ]
  },
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
