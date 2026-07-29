/* 漢字特訓資料庫：KANJI_SETS 是所有漢字批次的清單，
   kanji.html 會依網址 ?batch= 參數從這裡找出對應批次並渲染 */
const KANJI_SETS = [
  {
    slug: 'n4-batch1',
    level: 'N4',
    title: 'N4 漢字第 1 批',
    desc: '力、心、決、明、続、変、始、終、集、別 — 10 個常用 N4 漢字',
    kanji: [
      {
        id: 'k01', char: '力', meaning: '力量、力氣', radical: '力（ちから）', strokes: 2,
        onyomi: ['リョク', 'リキ'], kunyomi: ['ちから'],
        examples: [
          { word: '力', reading: 'ちから', meaning: '力量' },
          { word: '努力', reading: 'どりょく', meaning: '努力' },
          { word: '実力', reading: 'じつりょく', meaning: '實力' }
        ]
      },
      {
        id: 'k02', char: '心', meaning: '心、心思', radical: '心（こころ）', strokes: 4,
        onyomi: ['シン'], kunyomi: ['こころ'],
        examples: [
          { word: '心配', reading: 'しんぱい', meaning: '擔心' },
          { word: '中心', reading: 'ちゅうしん', meaning: '中心' },
          { word: '安心', reading: 'あんしん', meaning: '安心' }
        ]
      },
      {
        id: 'k03', char: '決', meaning: '決定', radical: '氵（さんずい）', strokes: 7,
        onyomi: ['ケツ'], kunyomi: ['き.める', 'き.まる'],
        examples: [
          { word: '決める', reading: 'きめる', meaning: '決定（動詞）' },
          { word: '決定', reading: 'けってい', meaning: '決定（名詞）' },
          { word: '解決', reading: 'かいけつ', meaning: '解決' }
        ]
      },
      {
        id: 'k04', char: '明', meaning: '明亮、清楚', radical: '日', strokes: 8,
        onyomi: ['メイ', 'ミョウ'], kunyomi: ['あか.るい', 'あき.らか'],
        examples: [
          { word: '説明', reading: 'せつめい', meaning: '說明' },
          { word: '明日', reading: 'あした', meaning: '明天' },
          { word: '明るい', reading: 'あかるい', meaning: '明亮的' }
        ]
      },
      {
        id: 'k05', char: '続', meaning: '繼續', radical: '糸', strokes: 13,
        onyomi: ['ゾク'], kunyomi: ['つづ.く', 'つづ.ける'],
        examples: [
          { word: '続く', reading: 'つづく', meaning: '持續' },
          { word: '継続', reading: 'けいぞく', meaning: '繼續' },
          { word: '連続', reading: 'れんぞく', meaning: '連續' }
        ]
      },
      {
        id: 'k06', char: '変', meaning: '改變', radical: '夂', strokes: 9,
        onyomi: ['ヘン'], kunyomi: ['か.わる', 'か.える'],
        examples: [
          { word: '変える', reading: 'かえる', meaning: '改變（他動詞）' },
          { word: '変化', reading: 'へんか', meaning: '變化' },
          { word: '大変', reading: 'たいへん', meaning: '嚴重、辛苦' }
        ]
      },
      {
        id: 'k07', char: '始', meaning: '開始', radical: '女', strokes: 8,
        onyomi: ['シ'], kunyomi: ['はじ.める', 'はじ.まる'],
        examples: [
          { word: '始める', reading: 'はじめる', meaning: '開始（他動詞）' },
          { word: '開始', reading: 'かいし', meaning: '開始' },
          { word: '始まる', reading: 'はじまる', meaning: '開始（自動詞）' }
        ]
      },
      {
        id: 'k08', char: '終', meaning: '結束', radical: '糸', strokes: 11,
        onyomi: ['シュウ'], kunyomi: ['お.わる', 'お.える'],
        examples: [
          { word: '終わる', reading: 'おわる', meaning: '結束' },
          { word: '最終', reading: 'さいしゅう', meaning: '最終' },
          { word: '終了', reading: 'しゅうりょう', meaning: '結束、完了' }
        ]
      },
      {
        id: 'k09', char: '集', meaning: '聚集', radical: '隹', strokes: 12,
        onyomi: ['シュウ'], kunyomi: ['あつ.まる', 'あつ.める'],
        examples: [
          { word: '集める', reading: 'あつめる', meaning: '收集' },
          { word: '集中', reading: 'しゅうちゅう', meaning: '集中' },
          { word: '集合', reading: 'しゅうごう', meaning: '集合' }
        ]
      },
      {
        id: 'k10', char: '別', meaning: '分開、另外', radical: '刂', strokes: 7,
        onyomi: ['ベツ'], kunyomi: ['わか.れる'],
        examples: [
          { word: '別れる', reading: 'わかれる', meaning: '分別、告別' },
          { word: '特別', reading: 'とくべつ', meaning: '特別' },
          { word: '別に', reading: 'べつに', meaning: '沒特別（怎樣）' }
        ]
      }
    ]
  },
  {
    slug: 'n5-batch1',
    level: 'N5',
    title: 'N5 漢字第 1 批',
    desc: '日、月、火、水、木、金、土、人、今、時 — 10 個最基礎的 N5 漢字',
    kanji: [
      {
        id: 'n01', char: '日', meaning: '太陽、日子', radical: '日', strokes: 4,
        onyomi: ['ニチ', 'ジツ'], kunyomi: ['ひ', 'か'],
        examples: [
          { word: '日曜日', reading: 'にちようび', meaning: '星期日' },
          { word: '毎日', reading: 'まいにち', meaning: '每天' },
          { word: '今日', reading: 'きょう', meaning: '今天' }
        ]
      },
      {
        id: 'n02', char: '月', meaning: '月亮、月份', radical: '月', strokes: 4,
        onyomi: ['ゲツ', 'ガツ'], kunyomi: ['つき'],
        examples: [
          { word: '月曜日', reading: 'げつようび', meaning: '星期一' },
          { word: '一月', reading: 'いちがつ', meaning: '一月' },
          { word: '今月', reading: 'こんげつ', meaning: '這個月' }
        ]
      },
      {
        id: 'n03', char: '火', meaning: '火', radical: '火', strokes: 4,
        onyomi: ['カ'], kunyomi: ['ひ'],
        examples: [
          { word: '火曜日', reading: 'かようび', meaning: '星期二' },
          { word: '花火', reading: 'はなび', meaning: '煙火' },
          { word: '火事', reading: 'かじ', meaning: '火災' }
        ]
      },
      {
        id: 'n04', char: '水', meaning: '水', radical: '水', strokes: 4,
        onyomi: ['スイ'], kunyomi: ['みず'],
        examples: [
          { word: '水曜日', reading: 'すいようび', meaning: '星期三' },
          { word: '水泳', reading: 'すいえい', meaning: '游泳' },
          { word: '水', reading: 'みず', meaning: '水' }
        ]
      },
      {
        id: 'n05', char: '木', meaning: '樹木、木材', radical: '木', strokes: 4,
        onyomi: ['モク', 'ボク'], kunyomi: ['き'],
        examples: [
          { word: '木曜日', reading: 'もくようび', meaning: '星期四' },
          { word: '木', reading: 'き', meaning: '樹' },
          { word: '木材', reading: 'もくざい', meaning: '木材' }
        ]
      },
      {
        id: 'n06', char: '金', meaning: '金、金錢', radical: '金', strokes: 8,
        onyomi: ['キン'], kunyomi: ['かね'],
        examples: [
          { word: '金曜日', reading: 'きんようび', meaning: '星期五' },
          { word: 'お金', reading: 'おかね', meaning: '錢' },
          { word: '料金', reading: 'りょうきん', meaning: '費用' }
        ]
      },
      {
        id: 'n07', char: '土', meaning: '泥土、土地', radical: '土', strokes: 3,
        onyomi: ['ド', 'ト'], kunyomi: ['つち'],
        examples: [
          { word: '土曜日', reading: 'どようび', meaning: '星期六' },
          { word: '土地', reading: 'とち', meaning: '土地' },
          { word: '土', reading: 'つち', meaning: '泥土' }
        ]
      },
      {
        id: 'n08', char: '人', meaning: '人', radical: '人', strokes: 2,
        onyomi: ['ジン', 'ニン'], kunyomi: ['ひと'],
        examples: [
          { word: '日本人', reading: 'にほんじん', meaning: '日本人' },
          { word: '人', reading: 'ひと', meaning: '人' },
          { word: '一人', reading: 'ひとり', meaning: '一個人' }
        ]
      },
      {
        id: 'n09', char: '今', meaning: '現在', radical: '人', strokes: 4,
        onyomi: ['コン'], kunyomi: ['いま'],
        examples: [
          { word: '今日', reading: 'きょう', meaning: '今天' },
          { word: '今', reading: 'いま', meaning: '現在' },
          { word: '今年', reading: 'ことし', meaning: '今年' }
        ]
      },
      {
        id: 'n10', char: '時', meaning: '時間、時候', radical: '日', strokes: 10,
        onyomi: ['ジ'], kunyomi: ['とき'],
        examples: [
          { word: '時間', reading: 'じかん', meaning: '時間' },
          { word: '何時', reading: 'なんじ', meaning: '幾點' },
          { word: '時々', reading: 'ときどき', meaning: '有時候' }
        ]
      }
    ]
  },
  {
    slug: 'n4-batch2',
    level: 'N4',
    title: 'N4 漢字第 2 批',
    desc: '動、員、例、便、利、不、同、理、場、通 — 10 個常用 N4 漢字',
    kanji: [
      {
        id: 'm01', char: '動', meaning: '移動、動作', radical: '力', strokes: 11,
        onyomi: ['ドウ'], kunyomi: ['うご.く'],
        examples: [
          { word: '運動', reading: 'うんどう', meaning: '運動' },
          { word: '動く', reading: 'うごく', meaning: '移動' },
          { word: '自動', reading: 'じどう', meaning: '自動' }
        ]
      },
      {
        id: 'm02', char: '員', meaning: '成員、人員', radical: '口', strokes: 10,
        onyomi: ['イン'], kunyomi: [],
        examples: [
          { word: '会社員', reading: 'かいしゃいん', meaning: '上班族' },
          { word: '店員', reading: 'てんいん', meaning: '店員' },
          { word: '全員', reading: 'ぜんいん', meaning: '全體人員' }
        ]
      },
      {
        id: 'm03', char: '例', meaning: '例子', radical: '亻', strokes: 8,
        onyomi: ['レイ'], kunyomi: [],
        examples: [
          { word: '例えば', reading: 'たとえば', meaning: '例如' },
          { word: '例文', reading: 'れいぶん', meaning: '例句' },
          { word: '実例', reading: 'じつれい', meaning: '實例' }
        ]
      },
      {
        id: 'm04', char: '便', meaning: '方便、書信', radical: '亻', strokes: 9,
        onyomi: ['ベン', 'ビン'], kunyomi: ['たよ.り'],
        examples: [
          { word: '便利', reading: 'べんり', meaning: '方便' },
          { word: '郵便', reading: 'ゆうびん', meaning: '郵政' },
          { word: '不便', reading: 'ふべん', meaning: '不方便' }
        ]
      },
      {
        id: 'm05', char: '利', meaning: '利益、鋒利', radical: '刂', strokes: 7,
        onyomi: ['リ'], kunyomi: [],
        examples: [
          { word: '便利', reading: 'べんり', meaning: '方便' },
          { word: '利用', reading: 'りよう', meaning: '利用' },
          { word: '権利', reading: 'けんり', meaning: '權利' }
        ]
      },
      {
        id: 'm06', char: '不', meaning: '不、非', radical: '一', strokes: 4,
        onyomi: ['フ', 'ブ'], kunyomi: [],
        examples: [
          { word: '不便', reading: 'ふべん', meaning: '不方便' },
          { word: '不安', reading: 'ふあん', meaning: '不安' },
          { word: '不足', reading: 'ふそく', meaning: '不足' }
        ]
      },
      {
        id: 'm07', char: '同', meaning: '相同', radical: '口', strokes: 6,
        onyomi: ['ドウ'], kunyomi: ['おな.じ'],
        examples: [
          { word: '同じ', reading: 'おなじ', meaning: '一樣' },
          { word: '同時', reading: 'どうじ', meaning: '同時' },
          { word: '同僚', reading: 'どうりょう', meaning: '同事' }
        ]
      },
      {
        id: 'm08', char: '理', meaning: '道理、整理', radical: '王', strokes: 11,
        onyomi: ['リ'], kunyomi: [],
        examples: [
          { word: '料理', reading: 'りょうり', meaning: '料理' },
          { word: '理由', reading: 'りゆう', meaning: '理由' },
          { word: '理解', reading: 'りかい', meaning: '理解' }
        ]
      },
      {
        id: 'm09', char: '場', meaning: '場所', radical: '土', strokes: 12,
        onyomi: ['ジョウ'], kunyomi: ['ば'],
        examples: [
          { word: '場所', reading: 'ばしょ', meaning: '場所' },
          { word: '会場', reading: 'かいじょう', meaning: '會場' },
          { word: '工場', reading: 'こうじょう', meaning: '工廠' }
        ]
      },
      {
        id: 'm10', char: '通', meaning: '通過、交通', radical: '辶', strokes: 10,
        onyomi: ['ツウ'], kunyomi: ['とお.る', 'かよ.う'],
        examples: [
          { word: '交通', reading: 'こうつう', meaning: '交通' },
          { word: '通学', reading: 'つうがく', meaning: '通學' },
          { word: '通う', reading: 'かよう', meaning: '固定往來' }
        ]
      }
    ]
  },
  {
    slug: 'n5-batch2',
    level: 'N5',
    title: 'N5 漢字第 2 批',
    desc: '上、下、中、大、小、山、川、田、天、空 — 10 個基礎方位與自然漢字',
    kanji: [
      {
        id: 'p01', char: '上', meaning: '上面', radical: '一', strokes: 3,
        onyomi: ['ジョウ'], kunyomi: ['うえ', 'あ.げる', 'のぼ.る'],
        examples: [
          { word: '上', reading: 'うえ', meaning: '上面' },
          { word: '上手', reading: 'じょうず', meaning: '擅長' },
          { word: '以上', reading: 'いじょう', meaning: '以上' }
        ]
      },
      {
        id: 'p02', char: '下', meaning: '下面', radical: '一', strokes: 3,
        onyomi: ['カ', 'ゲ'], kunyomi: ['した', 'くだ.る', 'お.りる'],
        examples: [
          { word: '下', reading: 'した', meaning: '下面' },
          { word: '地下', reading: 'ちか', meaning: '地下' },
          { word: '下手', reading: 'へた', meaning: '笨拙' }
        ]
      },
      {
        id: 'p03', char: '中', meaning: '中間、裡面', radical: '丨', strokes: 4,
        onyomi: ['チュウ'], kunyomi: ['なか'],
        examples: [
          { word: '中', reading: 'なか', meaning: '裡面' },
          { word: '中学校', reading: 'ちゅうがっこう', meaning: '國中' },
          { word: '一日中', reading: 'いちにちじゅう', meaning: '一整天' }
        ]
      },
      {
        id: 'p04', char: '大', meaning: '大', radical: '大', strokes: 3,
        onyomi: ['ダイ', 'タイ'], kunyomi: ['おお.きい'],
        examples: [
          { word: '大きい', reading: 'おおきい', meaning: '大的' },
          { word: '大学', reading: 'だいがく', meaning: '大學' },
          { word: '大丈夫', reading: 'だいじょうぶ', meaning: '沒問題' }
        ]
      },
      {
        id: 'p05', char: '小', meaning: '小', radical: '小', strokes: 3,
        onyomi: ['ショウ'], kunyomi: ['ちい.さい', 'こ'],
        examples: [
          { word: '小さい', reading: 'ちいさい', meaning: '小的' },
          { word: '小学校', reading: 'しょうがっこう', meaning: '國小' },
          { word: '小説', reading: 'しょうせつ', meaning: '小說' }
        ]
      },
      {
        id: 'p06', char: '山', meaning: '山', radical: '山', strokes: 3,
        onyomi: ['サン'], kunyomi: ['やま'],
        examples: [
          { word: '山', reading: 'やま', meaning: '山' },
          { word: '富士山', reading: 'ふじさん', meaning: '富士山' },
          { word: '火山', reading: 'かざん', meaning: '火山' }
        ]
      },
      {
        id: 'p07', char: '川', meaning: '河川', radical: '川', strokes: 3,
        onyomi: ['セン'], kunyomi: ['かわ'],
        examples: [
          { word: '川', reading: 'かわ', meaning: '河川' },
          { word: '河川', reading: 'かせん', meaning: '河川' },
          { word: '小川', reading: 'おがわ', meaning: '小溪' }
        ]
      },
      {
        id: 'p08', char: '田', meaning: '田地', radical: '田', strokes: 5,
        onyomi: ['デン'], kunyomi: ['た'],
        examples: [
          { word: '田んぼ', reading: 'たんぼ', meaning: '稻田' },
          { word: '水田', reading: 'すいでん', meaning: '水田' },
          { word: '田舎', reading: 'いなか', meaning: '鄉下' }
        ]
      },
      {
        id: 'p09', char: '天', meaning: '天空、天氣', radical: '大', strokes: 4,
        onyomi: ['テン'], kunyomi: ['あめ', 'あま'],
        examples: [
          { word: '天気', reading: 'てんき', meaning: '天氣' },
          { word: '晴天', reading: 'せいてん', meaning: '晴天' },
          { word: '天国', reading: 'てんごく', meaning: '天國' }
        ]
      },
      {
        id: 'p10', char: '空', meaning: '天空、空的', radical: '穴', strokes: 8,
        onyomi: ['クウ'], kunyomi: ['そら', 'あ.く', 'から'],
        examples: [
          { word: '空', reading: 'そら', meaning: '天空' },
          { word: '空気', reading: 'くうき', meaning: '空氣' },
          { word: '空港', reading: 'くうこう', meaning: '機場' }
        ]
      }
    ]
  },
  {
    slug: 'n4-batch3',
    level: 'N4',
    title: 'N4 漢字第 3 批',
    desc: '教、育、病、者、院、建、物、計、画、由 — 10 個常用 N4 漢字',
    kanji: [
      {
        id: 'q01', char: '教', meaning: '教導', radical: '攵', strokes: 11,
        onyomi: ['キョウ'], kunyomi: ['おし.える', 'おそ.わる'],
        examples: [
          { word: '教える', reading: 'おしえる', meaning: '教導' },
          { word: '教室', reading: 'きょうしつ', meaning: '教室' },
          { word: '宗教', reading: 'しゅうきょう', meaning: '宗教' }
        ]
      },
      {
        id: 'q02', char: '育', meaning: '養育、成長', radical: '月', strokes: 8,
        onyomi: ['イク'], kunyomi: ['そだ.てる', 'そだ.つ'],
        examples: [
          { word: '育てる', reading: 'そだてる', meaning: '養育' },
          { word: '教育', reading: 'きょういく', meaning: '教育' },
          { word: '体育', reading: 'たいいく', meaning: '體育' }
        ]
      },
      {
        id: 'q03', char: '病', meaning: '生病', radical: '疒', strokes: 10,
        onyomi: ['ビョウ'], kunyomi: ['や.む'],
        examples: [
          { word: '病気', reading: 'びょうき', meaning: '生病' },
          { word: '病院', reading: 'びょういん', meaning: '醫院' },
          { word: '病人', reading: 'びょうにん', meaning: '病人' }
        ]
      },
      {
        id: 'q04', char: '者', meaning: '…的人', radical: '耂', strokes: 8,
        onyomi: ['シャ'], kunyomi: ['もの'],
        examples: [
          { word: '医者', reading: 'いしゃ', meaning: '醫生' },
          { word: '若者', reading: 'わかもの', meaning: '年輕人' },
          { word: '記者', reading: 'きしゃ', meaning: '記者' }
        ]
      },
      {
        id: 'q05', char: '院', meaning: '機構、院', radical: '阝', strokes: 10,
        onyomi: ['イン'], kunyomi: [],
        examples: [
          { word: '病院', reading: 'びょういん', meaning: '醫院' },
          { word: '美容院', reading: 'びよういん', meaning: '美容院' },
          { word: '大学院', reading: 'だいがくいん', meaning: '研究所' }
        ]
      },
      {
        id: 'q06', char: '建', meaning: '建造', radical: '廴', strokes: 9,
        onyomi: ['ケン'], kunyomi: ['た.てる', 'た.つ'],
        examples: [
          { word: '建てる', reading: 'たてる', meaning: '建造' },
          { word: '建物', reading: 'たてもの', meaning: '建築物' },
          { word: '建築', reading: 'けんちく', meaning: '建築' }
        ]
      },
      {
        id: 'q07', char: '物', meaning: '物品', radical: '牛', strokes: 8,
        onyomi: ['ブツ', 'モツ'], kunyomi: ['もの'],
        examples: [
          { word: '建物', reading: 'たてもの', meaning: '建築物' },
          { word: '動物', reading: 'どうぶつ', meaning: '動物' },
          { word: '食べ物', reading: 'たべもの', meaning: '食物' }
        ]
      },
      {
        id: 'q08', char: '計', meaning: '測量、計畫', radical: '言', strokes: 9,
        onyomi: ['ケイ'], kunyomi: ['はか.る'],
        examples: [
          { word: '時計', reading: 'とけい', meaning: '時鐘' },
          { word: '計画', reading: 'けいかく', meaning: '計畫' },
          { word: '合計', reading: 'ごうけい', meaning: '合計' }
        ]
      },
      {
        id: 'q09', char: '画', meaning: '圖畫、劃分', radical: '田', strokes: 8,
        onyomi: ['ガ', 'カク'], kunyomi: [],
        examples: [
          { word: '映画', reading: 'えいが', meaning: '電影' },
          { word: '計画', reading: 'けいかく', meaning: '計畫' },
          { word: '画家', reading: 'がか', meaning: '畫家' }
        ]
      },
      {
        id: 'q10', char: '由', meaning: '緣由', radical: '田', strokes: 5,
        onyomi: ['ユ', 'ユウ'], kunyomi: ['よし'],
        examples: [
          { word: '自由', reading: 'じゆう', meaning: '自由' },
          { word: '理由', reading: 'りゆう', meaning: '理由' },
          { word: '由来', reading: 'ゆらい', meaning: '由來' }
        ]
      }
    ]
  },
  {
    slug: 'n5-batch3',
    level: 'N5',
    title: 'N5 漢字第 3 批',
    desc: '出、入、見、聞、言、行、来、食、飲、話 — 10 個基礎動作動詞漢字',
    kanji: [
      {
        id: 'r01', char: '出', meaning: '出去、拿出', radical: '凵', strokes: 5,
        onyomi: ['シュツ', 'スイ'], kunyomi: ['で.る', 'だ.す'],
        examples: [
          { word: '出る', reading: 'でる', meaning: '出去' },
          { word: '出発', reading: 'しゅっぱつ', meaning: '出發' },
          { word: '提出', reading: 'ていしゅつ', meaning: '提交' }
        ]
      },
      {
        id: 'r02', char: '入', meaning: '進入', radical: '入', strokes: 2,
        onyomi: ['ニュウ'], kunyomi: ['はい.る', 'い.れる'],
        examples: [
          { word: '入る', reading: 'はいる', meaning: '進入' },
          { word: '入学', reading: 'にゅうがく', meaning: '入學' },
          { word: '入口', reading: 'いりぐち', meaning: '入口' }
        ]
      },
      {
        id: 'r03', char: '見', meaning: '看', radical: '見', strokes: 7,
        onyomi: ['ケン'], kunyomi: ['み.る'],
        examples: [
          { word: '見る', reading: 'みる', meaning: '看' },
          { word: '見学', reading: 'けんがく', meaning: '參觀學習' },
          { word: '意見', reading: 'いけん', meaning: '意見' }
        ]
      },
      {
        id: 'r04', char: '聞', meaning: '聽、問', radical: '耳', strokes: 14,
        onyomi: ['ブン', 'モン'], kunyomi: ['き.く'],
        examples: [
          { word: '聞く', reading: 'きく', meaning: '聽、問' },
          { word: '新聞', reading: 'しんぶん', meaning: '報紙' },
          { word: '聞こえる', reading: 'きこえる', meaning: '聽得見' }
        ]
      },
      {
        id: 'r05', char: '言', meaning: '說', radical: '言', strokes: 7,
        onyomi: ['ゲン', 'ゴン'], kunyomi: ['い.う'],
        examples: [
          { word: '言う', reading: 'いう', meaning: '說' },
          { word: '言葉', reading: 'ことば', meaning: '語言、詞彙' },
          { word: '方言', reading: 'ほうげん', meaning: '方言' }
        ]
      },
      {
        id: 'r06', char: '行', meaning: '去、進行', radical: '行', strokes: 6,
        onyomi: ['コウ', 'ギョウ'], kunyomi: ['い.く', 'おこな.う'],
        examples: [
          { word: '行く', reading: 'いく', meaning: '去' },
          { word: '旅行', reading: 'りょこう', meaning: '旅行' },
          { word: '銀行', reading: 'ぎんこう', meaning: '銀行' }
        ]
      },
      {
        id: 'r07', char: '来', meaning: '來', radical: '木', strokes: 7,
        onyomi: ['ライ'], kunyomi: ['く.る'],
        examples: [
          { word: '来る', reading: 'くる', meaning: '來' },
          { word: '来年', reading: 'らいねん', meaning: '明年' },
          { word: '将来', reading: 'しょうらい', meaning: '將來' }
        ]
      },
      {
        id: 'r08', char: '食', meaning: '吃、食物', radical: '食', strokes: 9,
        onyomi: ['ショク'], kunyomi: ['た.べる', 'く.う'],
        examples: [
          { word: '食べる', reading: 'たべる', meaning: '吃' },
          { word: '食事', reading: 'しょくじ', meaning: '用餐' },
          { word: '食堂', reading: 'しょくどう', meaning: '食堂' }
        ]
      },
      {
        id: 'r09', char: '飲', meaning: '喝', radical: '食', strokes: 12,
        onyomi: ['イン'], kunyomi: ['の.む'],
        examples: [
          { word: '飲む', reading: 'のむ', meaning: '喝' },
          { word: '飲み物', reading: 'のみもの', meaning: '飲料' },
          { word: '飲食', reading: 'いんしょく', meaning: '飲食' }
        ]
      },
      {
        id: 'r10', char: '話', meaning: '說話、故事', radical: '言', strokes: 13,
        onyomi: ['ワ'], kunyomi: ['はな.す', 'はなし'],
        examples: [
          { word: '話す', reading: 'はなす', meaning: '說話' },
          { word: '電話', reading: 'でんわ', meaning: '電話' },
          { word: '会話', reading: 'かいわ', meaning: '對話' }
        ]
      }
    ]
  },
  {
    slug: 'n4-batch4',
    level: 'N4',
    title: 'N4 漢字第 4 批',
    desc: '使、用、思、考、知、覚、忘、信、感、情 — 10 個內心活動相關 N4 漢字',
    kanji: [
      {
        id: 's01', char: '使', meaning: '使用', radical: '亻', strokes: 8,
        onyomi: ['シ'], kunyomi: ['つか.う'],
        examples: [
          { word: '使う', reading: 'つかう', meaning: '使用' },
          { word: '使用', reading: 'しよう', meaning: '使用' },
          { word: '大使', reading: 'たいし', meaning: '大使' }
        ]
      },
      {
        id: 's02', char: '用', meaning: '用途、事情', radical: '用', strokes: 5,
        onyomi: ['ヨウ'], kunyomi: [],
        examples: [
          { word: '使用', reading: 'しよう', meaning: '使用' },
          { word: '用事', reading: 'ようじ', meaning: '事情' },
          { word: '費用', reading: 'ひよう', meaning: '費用' }
        ]
      },
      {
        id: 's03', char: '思', meaning: '想、覺得', radical: '心', strokes: 9,
        onyomi: ['シ'], kunyomi: ['おも.う'],
        examples: [
          { word: '思う', reading: 'おもう', meaning: '覺得、想' },
          { word: '思い出', reading: 'おもいで', meaning: '回憶' },
          { word: '意思', reading: 'いし', meaning: '意思' }
        ]
      },
      {
        id: 's04', char: '考', meaning: '思考', radical: '耂', strokes: 6,
        onyomi: ['コウ'], kunyomi: ['かんが.える'],
        examples: [
          { word: '考える', reading: 'かんがえる', meaning: '思考' },
          { word: '参考', reading: 'さんこう', meaning: '參考' },
          { word: '考え', reading: 'かんがえ', meaning: '想法' }
        ]
      },
      {
        id: 's05', char: '知', meaning: '知道', radical: '矢', strokes: 8,
        onyomi: ['チ'], kunyomi: ['し.る'],
        examples: [
          { word: '知る', reading: 'しる', meaning: '知道' },
          { word: '知識', reading: 'ちしき', meaning: '知識' },
          { word: '通知', reading: 'つうち', meaning: '通知' }
        ]
      },
      {
        id: 's06', char: '覚', meaning: '記住、感覺', radical: '見', strokes: 12,
        onyomi: ['カク'], kunyomi: ['おぼ.える', 'さ.める'],
        examples: [
          { word: '覚える', reading: 'おぼえる', meaning: '記住' },
          { word: '覚悟', reading: 'かくご', meaning: '覺悟' },
          { word: '感覚', reading: 'かんかく', meaning: '感覺' }
        ]
      },
      {
        id: 's07', char: '忘', meaning: '忘記', radical: '心', strokes: 7,
        onyomi: ['ボウ'], kunyomi: ['わす.れる'],
        examples: [
          { word: '忘れる', reading: 'わすれる', meaning: '忘記' },
          { word: '忘れ物', reading: 'わすれもの', meaning: '遺失物' },
          { word: '物忘れ', reading: 'ものわすれ', meaning: '健忘' }
        ]
      },
      {
        id: 's08', char: '信', meaning: '相信、信件', radical: '亻', strokes: 9,
        onyomi: ['シン'], kunyomi: [],
        examples: [
          { word: '信じる', reading: 'しんじる', meaning: '相信' },
          { word: '自信', reading: 'じしん', meaning: '自信' },
          { word: '信号', reading: 'しんごう', meaning: '號誌燈' }
        ]
      },
      {
        id: 's09', char: '感', meaning: '感覺', radical: '心', strokes: 13,
        onyomi: ['カン'], kunyomi: [],
        examples: [
          { word: '感じる', reading: 'かんじる', meaning: '感覺' },
          { word: '感動', reading: 'かんどう', meaning: '感動' },
          { word: '感謝', reading: 'かんしゃ', meaning: '感謝' }
        ]
      },
      {
        id: 's10', char: '情', meaning: '情感、情況', radical: '忄', strokes: 11,
        onyomi: ['ジョウ'], kunyomi: [],
        examples: [
          { word: '感情', reading: 'かんじょう', meaning: '情感' },
          { word: '事情', reading: 'じじょう', meaning: '情況' },
          { word: '情報', reading: 'じょうほう', meaning: '資訊' }
        ]
      }
    ]
  },
  {
    slug: 'n5-batch4',
    level: 'N5',
    title: 'N5 漢字第 4 批',
    desc: '買、売、作、休、立、歩、走、泳、働、待 — 10 個日常動作 N5 漢字',
    kanji: [
      {
        id: 'u01', char: '買', meaning: '買', radical: '貝', strokes: 12,
        onyomi: ['バイ'], kunyomi: ['か.う'],
        examples: [
          { word: '買う', reading: 'かう', meaning: '買' },
          { word: '買い物', reading: 'かいもの', meaning: '購物' },
          { word: '売買', reading: 'ばいばい', meaning: '買賣' }
        ]
      },
      {
        id: 'u02', char: '売', meaning: '賣', radical: '士', strokes: 7,
        onyomi: ['バイ'], kunyomi: ['う.る'],
        examples: [
          { word: '売る', reading: 'うる', meaning: '賣' },
          { word: '販売', reading: 'はんばい', meaning: '販賣' },
          { word: '商売', reading: 'しょうばい', meaning: '生意' }
        ]
      },
      {
        id: 'u03', char: '作', meaning: '製作', radical: '亻', strokes: 7,
        onyomi: ['サク', 'サ'], kunyomi: ['つく.る'],
        examples: [
          { word: '作る', reading: 'つくる', meaning: '製作' },
          { word: '作文', reading: 'さくぶん', meaning: '作文' },
          { word: '作品', reading: 'さくひん', meaning: '作品' }
        ]
      },
      {
        id: 'u04', char: '休', meaning: '休息', radical: '亻', strokes: 6,
        onyomi: ['キュウ'], kunyomi: ['やす.む'],
        examples: [
          { word: '休む', reading: 'やすむ', meaning: '休息' },
          { word: '休憩', reading: 'きゅうけい', meaning: '休息片刻' },
          { word: '休日', reading: 'きゅうじつ', meaning: '假日' }
        ]
      },
      {
        id: 'u05', char: '立', meaning: '站立', radical: '立', strokes: 5,
        onyomi: ['リツ'], kunyomi: ['た.つ'],
        examples: [
          { word: '立つ', reading: 'たつ', meaning: '站立' },
          { word: '立場', reading: 'たちば', meaning: '立場' },
          { word: '独立', reading: 'どくりつ', meaning: '獨立' }
        ]
      },
      {
        id: 'u06', char: '歩', meaning: '走路', radical: '止', strokes: 8,
        onyomi: ['ホ'], kunyomi: ['ある.く'],
        examples: [
          { word: '歩く', reading: 'あるく', meaning: '走路' },
          { word: '散歩', reading: 'さんぽ', meaning: '散步' },
          { word: '歩道', reading: 'ほどう', meaning: '人行道' }
        ]
      },
      {
        id: 'u07', char: '走', meaning: '跑步', radical: '走', strokes: 7,
        onyomi: ['ソウ'], kunyomi: ['はし.る'],
        examples: [
          { word: '走る', reading: 'はしる', meaning: '跑步' },
          { word: '競走', reading: 'きょうそう', meaning: '賽跑' },
          { word: '脱走', reading: 'だっそう', meaning: '逃跑' }
        ]
      },
      {
        id: 'u08', char: '泳', meaning: '游泳', radical: '氵', strokes: 8,
        onyomi: ['エイ'], kunyomi: ['およ.ぐ'],
        examples: [
          { word: '泳ぐ', reading: 'およぐ', meaning: '游泳' },
          { word: '水泳', reading: 'すいえい', meaning: '游泳運動' },
          { word: '泳げる', reading: 'およげる', meaning: '會游泳' }
        ]
      },
      {
        id: 'u09', char: '働', meaning: '工作', radical: '亻', strokes: 13,
        onyomi: ['ドウ'], kunyomi: ['はたら.く'],
        examples: [
          { word: '働く', reading: 'はたらく', meaning: '工作' },
          { word: '労働', reading: 'ろうどう', meaning: '勞動' },
          { word: '働き者', reading: 'はたらきもの', meaning: '勤奮的人' }
        ]
      },
      {
        id: 'u10', char: '待', meaning: '等待', radical: '彳', strokes: 9,
        onyomi: ['タイ'], kunyomi: ['ま.つ'],
        examples: [
          { word: '待つ', reading: 'まつ', meaning: '等待' },
          { word: '期待', reading: 'きたい', meaning: '期待' },
          { word: '招待', reading: 'しょうたい', meaning: '邀請' }
        ]
      }
    ]
  },
  {
    slug: 'n4-batch5',
    level: 'N4',
    title: 'N4 漢字第 5 批',
    desc: '有、無、多、少、高、低、長、短、強、弱 — 10 個程度與比較 N4 漢字',
    kanji: [
      {
        id: 'v01', char: '有', meaning: '擁有、存在', radical: '月', strokes: 6,
        onyomi: ['ユウ', 'ウ'], kunyomi: ['あ.る'],
        examples: [
          { word: '有名', reading: 'ゆうめい', meaning: '有名' },
          { word: '有効', reading: 'ゆうこう', meaning: '有效' },
          { word: '所有', reading: 'しょゆう', meaning: '擁有' }
        ]
      },
      {
        id: 'v02', char: '無', meaning: '沒有', radical: '灬', strokes: 12,
        onyomi: ['ム', 'ブ'], kunyomi: ['な.い'],
        examples: [
          { word: '無料', reading: 'むりょう', meaning: '免費' },
          { word: '無理', reading: 'むり', meaning: '不可能、勉強' },
          { word: '無事', reading: 'ぶじ', meaning: '平安無事' }
        ]
      },
      {
        id: 'v03', char: '多', meaning: '多', radical: '夕', strokes: 6,
        onyomi: ['タ'], kunyomi: ['おお.い'],
        examples: [
          { word: '多い', reading: 'おおい', meaning: '多的' },
          { word: '多分', reading: 'たぶん', meaning: '大概' },
          { word: '多数', reading: 'たすう', meaning: '多數' }
        ]
      },
      {
        id: 'v04', char: '少', meaning: '少', radical: '小', strokes: 4,
        onyomi: ['ショウ'], kunyomi: ['すく.ない', 'すこ.し'],
        examples: [
          { word: '少ない', reading: 'すくない', meaning: '少的' },
          { word: '少し', reading: 'すこし', meaning: '一點點' },
          { word: '少年', reading: 'しょうねん', meaning: '少年' }
        ]
      },
      {
        id: 'v05', char: '高', meaning: '高、貴', radical: '高', strokes: 10,
        onyomi: ['コウ'], kunyomi: ['たか.い'],
        examples: [
          { word: '高い', reading: 'たかい', meaning: '高的、貴的' },
          { word: '高校', reading: 'こうこう', meaning: '高中' },
          { word: '最高', reading: 'さいこう', meaning: '最好、最高' }
        ]
      },
      {
        id: 'v06', char: '低', meaning: '低', radical: '亻', strokes: 7,
        onyomi: ['テイ'], kunyomi: ['ひく.い'],
        examples: [
          { word: '低い', reading: 'ひくい', meaning: '低的' },
          { word: '最低', reading: 'さいてい', meaning: '最低、最差' },
          { word: '低下', reading: 'ていか', meaning: '下降' }
        ]
      },
      {
        id: 'v07', char: '長', meaning: '長、首長', radical: '長', strokes: 8,
        onyomi: ['チョウ'], kunyomi: ['なが.い'],
        examples: [
          { word: '長い', reading: 'ながい', meaning: '長的' },
          { word: '社長', reading: 'しゃちょう', meaning: '社長' },
          { word: '校長', reading: 'こうちょう', meaning: '校長' }
        ]
      },
      {
        id: 'v08', char: '短', meaning: '短', radical: '矢', strokes: 12,
        onyomi: ['タン'], kunyomi: ['みじか.い'],
        examples: [
          { word: '短い', reading: 'みじかい', meaning: '短的' },
          { word: '短期', reading: 'たんき', meaning: '短期' },
          { word: '短所', reading: 'たんしょ', meaning: '缺點' }
        ]
      },
      {
        id: 'v09', char: '強', meaning: '強', radical: '弓', strokes: 11,
        onyomi: ['キョウ', 'ゴウ'], kunyomi: ['つよ.い', 'し.いる'],
        examples: [
          { word: '強い', reading: 'つよい', meaning: '強壯的' },
          { word: '勉強', reading: 'べんきょう', meaning: '學習' },
          { word: '強調', reading: 'きょうちょう', meaning: '強調' }
        ]
      },
      {
        id: 'v10', char: '弱', meaning: '弱', radical: '弓', strokes: 10,
        onyomi: ['ジャク'], kunyomi: ['よわ.い'],
        examples: [
          { word: '弱い', reading: 'よわい', meaning: '虛弱的' },
          { word: '弱点', reading: 'じゃくてん', meaning: '弱點' },
          { word: '弱者', reading: 'じゃくしゃ', meaning: '弱者' }
        ]
      }
    ]
  },
  {
    slug: 'n5-batch5',
    level: 'N5',
    title: 'N5 漢字第 5 批',
    desc: '白、黒、赤、青、色、音、楽、絵、歌、声 — 10 個顏色與藝術相關 N5 漢字',
    kanji: [
      {
        id: 'w01', char: '白', meaning: '白色', radical: '白', strokes: 5,
        onyomi: ['ハク', 'ビャク'], kunyomi: ['しろ', 'しろ.い'],
        examples: [
          { word: '白い', reading: 'しろい', meaning: '白的' },
          { word: '白色', reading: 'はくしょく', meaning: '白色' },
          { word: '空白', reading: 'くうはく', meaning: '空白' }
        ]
      },
      {
        id: 'w02', char: '黒', meaning: '黑色', radical: '黒', strokes: 11,
        onyomi: ['コク'], kunyomi: ['くろ', 'くろ.い'],
        examples: [
          { word: '黒い', reading: 'くろい', meaning: '黑的' },
          { word: '黒板', reading: 'こくばん', meaning: '黑板' },
          { word: '暗黒', reading: 'あんこく', meaning: '黑暗' }
        ]
      },
      {
        id: 'w03', char: '赤', meaning: '紅色', radical: '赤', strokes: 7,
        onyomi: ['セキ'], kunyomi: ['あか', 'あか.い'],
        examples: [
          { word: '赤い', reading: 'あかい', meaning: '紅的' },
          { word: '赤字', reading: 'あかじ', meaning: '赤字、虧損' },
          { word: '赤ちゃん', reading: 'あかちゃん', meaning: '嬰兒' }
        ]
      },
      {
        id: 'w04', char: '青', meaning: '藍色', radical: '青', strokes: 8,
        onyomi: ['セイ'], kunyomi: ['あお', 'あお.い'],
        examples: [
          { word: '青い', reading: 'あおい', meaning: '藍的' },
          { word: '青年', reading: 'せいねん', meaning: '青年' },
          { word: '青空', reading: 'あおぞら', meaning: '藍天' }
        ]
      },
      {
        id: 'w05', char: '色', meaning: '顏色', radical: '色', strokes: 6,
        onyomi: ['ショク', 'シキ'], kunyomi: ['いろ'],
        examples: [
          { word: '色', reading: 'いろ', meaning: '顏色' },
          { word: '景色', reading: 'けしき', meaning: '風景' },
          { word: '特色', reading: 'とくしょく', meaning: '特色' }
        ]
      },
      {
        id: 'w06', char: '音', meaning: '聲音', radical: '音', strokes: 9,
        onyomi: ['オン', 'イン'], kunyomi: ['おと'],
        examples: [
          { word: '音', reading: 'おと', meaning: '聲音' },
          { word: '音楽', reading: 'おんがく', meaning: '音樂' },
          { word: '発音', reading: 'はつおん', meaning: '發音' }
        ]
      },
      {
        id: 'w07', char: '楽', meaning: '快樂、音樂', radical: '木', strokes: 13,
        onyomi: ['ガク', 'ラク'], kunyomi: ['たの.しい'],
        examples: [
          { word: '楽しい', reading: 'たのしい', meaning: '快樂的' },
          { word: '音楽', reading: 'おんがく', meaning: '音樂' },
          { word: '楽', reading: 'らく', meaning: '輕鬆' }
        ]
      },
      {
        id: 'w08', char: '絵', meaning: '畫', radical: '糸', strokes: 12,
        onyomi: ['カイ', 'エ'], kunyomi: [],
        examples: [
          { word: '絵', reading: 'え', meaning: '畫' },
          { word: '絵本', reading: 'えほん', meaning: '繪本' },
          { word: '絵画', reading: 'かいが', meaning: '繪畫' }
        ]
      },
      {
        id: 'w09', char: '歌', meaning: '歌', radical: '欠', strokes: 14,
        onyomi: ['カ'], kunyomi: ['うた', 'うた.う'],
        examples: [
          { word: '歌う', reading: 'うたう', meaning: '唱歌' },
          { word: '歌', reading: 'うた', meaning: '歌' },
          { word: '歌手', reading: 'かしゅ', meaning: '歌手' }
        ]
      },
      {
        id: 'w10', char: '声', meaning: '聲音', radical: '士', strokes: 7,
        onyomi: ['セイ'], kunyomi: ['こえ'],
        examples: [
          { word: '声', reading: 'こえ', meaning: '聲音' },
          { word: '音声', reading: 'おんせい', meaning: '聲音、語音' },
          { word: '大声', reading: 'おおごえ', meaning: '大聲' }
        ]
      }
    ]
  },
  {
    slug: 'n4-batch6',
    level: 'N4',
    title: 'N4 漢字第 6 批',
    desc: '政、治、経、済、会、議、率、状、況、態 — 10 個社會與商業相關 N4 漢字',
    kanji: [
      {
        id: 'x01', char: '政', meaning: '政治', radical: '攵', strokes: 9,
        onyomi: ['セイ', 'ショウ'], kunyomi: [],
        examples: [
          { word: '政治', reading: 'せいじ', meaning: '政治' },
          { word: '政府', reading: 'せいふ', meaning: '政府' },
          { word: '行政', reading: 'ぎょうせい', meaning: '行政' }
        ]
      },
      {
        id: 'x02', char: '治', meaning: '治理、治療', radical: '氵', strokes: 8,
        onyomi: ['ジ', 'チ'], kunyomi: ['おさ.める', 'なお.る'],
        examples: [
          { word: '政治', reading: 'せいじ', meaning: '政治' },
          { word: '治る', reading: 'なおる', meaning: '痊癒' },
          { word: '治療', reading: 'ちりょう', meaning: '治療' }
        ]
      },
      {
        id: 'x03', char: '経', meaning: '經過、經營', radical: '糸', strokes: 11,
        onyomi: ['ケイ', 'キョウ'], kunyomi: [],
        examples: [
          { word: '経済', reading: 'けいざい', meaning: '經濟' },
          { word: '経験', reading: 'けいけん', meaning: '經驗' },
          { word: '経営', reading: 'けいえい', meaning: '經營' }
        ]
      },
      {
        id: 'x04', char: '済', meaning: '完成、救助', radical: '氵', strokes: 11,
        onyomi: ['サイ'], kunyomi: ['す.む'],
        examples: [
          { word: '経済', reading: 'けいざい', meaning: '經濟' },
          { word: '済む', reading: 'すむ', meaning: '結束、完成' },
          { word: '返済', reading: 'へんさい', meaning: '還款' }
        ]
      },
      {
        id: 'x05', char: '会', meaning: '見面、聚會', radical: '人', strokes: 6,
        onyomi: ['カイ', 'エ'], kunyomi: ['あ.う'],
        examples: [
          { word: '会う', reading: 'あう', meaning: '見面' },
          { word: '会社', reading: 'かいしゃ', meaning: '公司' },
          { word: '会議', reading: 'かいぎ', meaning: '會議' }
        ]
      },
      {
        id: 'x06', char: '議', meaning: '討論、議論', radical: '言', strokes: 20,
        onyomi: ['ギ'], kunyomi: [],
        examples: [
          { word: '会議', reading: 'かいぎ', meaning: '會議' },
          { word: '議論', reading: 'ぎろん', meaning: '議論、討論' },
          { word: '議員', reading: 'ぎいん', meaning: '議員' }
        ]
      },
      {
        id: 'x07', char: '率', meaning: '比率、帶領', radical: '玄', strokes: 11,
        onyomi: ['リツ', 'ソツ'], kunyomi: [],
        examples: [
          { word: '効率', reading: 'こうりつ', meaning: '效率' },
          { word: '確率', reading: 'かくりつ', meaning: '機率' },
          { word: '比率', reading: 'ひりつ', meaning: '比率' }
        ]
      },
      {
        id: 'x08', char: '状', meaning: '狀態、情形', radical: '爿', strokes: 7,
        onyomi: ['ジョウ'], kunyomi: [],
        examples: [
          { word: '状況', reading: 'じょうきょう', meaning: '狀況' },
          { word: '状態', reading: 'じょうたい', meaning: '狀態' },
          { word: '招待状', reading: 'しょうたいじょう', meaning: '邀請函' }
        ]
      },
      {
        id: 'x09', char: '況', meaning: '狀況', radical: '氵', strokes: 8,
        onyomi: ['キョウ'], kunyomi: [],
        examples: [
          { word: '状況', reading: 'じょうきょう', meaning: '狀況' },
          { word: '近況', reading: 'きんきょう', meaning: '近況' },
          { word: '不況', reading: 'ふきょう', meaning: '不景氣' }
        ]
      },
      {
        id: 'x10', char: '態', meaning: '樣態、狀態', radical: '心', strokes: 14,
        onyomi: ['タイ'], kunyomi: [],
        examples: [
          { word: '状態', reading: 'じょうたい', meaning: '狀態' },
          { word: '態度', reading: 'たいど', meaning: '態度' },
          { word: '事態', reading: 'じたい', meaning: '事態' }
        ]
      }
    ]
  },
  {
    slug: 'n5-batch6',
    level: 'N5',
    title: 'N5 漢字第 6 批',
    desc: '東、西、南、北、右、左、前、後、内、外 — 10 個方位 N5 漢字',
    kanji: [
      {
        id: 'y01', char: '東', meaning: '東邊', radical: '木', strokes: 8,
        onyomi: ['トウ'], kunyomi: ['ひがし'],
        examples: [
          { word: '東', reading: 'ひがし', meaning: '東邊' },
          { word: '東京', reading: 'とうきょう', meaning: '東京' },
          { word: '東洋', reading: 'とうよう', meaning: '東洋' }
        ]
      },
      {
        id: 'y02', char: '西', meaning: '西邊', radical: '西', strokes: 6,
        onyomi: ['セイ', 'サイ'], kunyomi: ['にし'],
        examples: [
          { word: '西', reading: 'にし', meaning: '西邊' },
          { word: '西洋', reading: 'せいよう', meaning: '西洋' },
          { word: '関西', reading: 'かんさい', meaning: '關西' }
        ]
      },
      {
        id: 'y03', char: '南', meaning: '南邊', radical: '十', strokes: 9,
        onyomi: ['ナン'], kunyomi: ['みなみ'],
        examples: [
          { word: '南', reading: 'みなみ', meaning: '南邊' },
          { word: '南極', reading: 'なんきょく', meaning: '南極' },
          { word: '東南', reading: 'とうなん', meaning: '東南' }
        ]
      },
      {
        id: 'y04', char: '北', meaning: '北邊', radical: '匕', strokes: 5,
        onyomi: ['ホク'], kunyomi: ['きた'],
        examples: [
          { word: '北', reading: 'きた', meaning: '北邊' },
          { word: '北海道', reading: 'ほっかいどう', meaning: '北海道' },
          { word: '北極', reading: 'ほっきょく', meaning: '北極' }
        ]
      },
      {
        id: 'y05', char: '右', meaning: '右邊', radical: '口', strokes: 5,
        onyomi: ['ウ', 'ユウ'], kunyomi: ['みぎ'],
        examples: [
          { word: '右', reading: 'みぎ', meaning: '右邊' },
          { word: '右手', reading: 'みぎて', meaning: '右手' },
          { word: '左右', reading: 'さゆう', meaning: '左右' }
        ]
      },
      {
        id: 'y06', char: '左', meaning: '左邊', radical: '工', strokes: 5,
        onyomi: ['サ'], kunyomi: ['ひだり'],
        examples: [
          { word: '左', reading: 'ひだり', meaning: '左邊' },
          { word: '左手', reading: 'ひだりて', meaning: '左手' },
          { word: '左折', reading: 'させつ', meaning: '左轉' }
        ]
      },
      {
        id: 'y07', char: '前', meaning: '前面、之前', radical: '刂', strokes: 9,
        onyomi: ['ゼン'], kunyomi: ['まえ'],
        examples: [
          { word: '名前', reading: 'なまえ', meaning: '名字' },
          { word: '午前', reading: 'ごぜん', meaning: '上午' },
          { word: '前', reading: 'まえ', meaning: '前面' }
        ]
      },
      {
        id: 'y08', char: '後', meaning: '後面、之後', radical: '彳', strokes: 9,
        onyomi: ['ゴ', 'コウ'], kunyomi: ['あと', 'うし.ろ'],
        examples: [
          { word: '後', reading: 'あと', meaning: '之後' },
          { word: '後ろ', reading: 'うしろ', meaning: '後面' },
          { word: '午後', reading: 'ごご', meaning: '下午' }
        ]
      },
      {
        id: 'y09', char: '内', meaning: '裡面', radical: '冂', strokes: 4,
        onyomi: ['ナイ'], kunyomi: ['うち'],
        examples: [
          { word: '内', reading: 'うち', meaning: '裡面、家裡' },
          { word: '案内', reading: 'あんない', meaning: '導覽' },
          { word: '国内', reading: 'こくない', meaning: '國內' }
        ]
      },
      {
        id: 'y10', char: '外', meaning: '外面', radical: '夕', strokes: 5,
        onyomi: ['ガイ', 'ゲ'], kunyomi: ['そと'],
        examples: [
          { word: '外', reading: 'そと', meaning: '外面' },
          { word: '外国', reading: 'がいこく', meaning: '外國' },
          { word: '外出', reading: 'がいしゅつ', meaning: '外出' }
        ]
      }
    ]
  },
];
