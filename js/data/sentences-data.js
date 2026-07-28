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
