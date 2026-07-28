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
  }
];
