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
];
