/* 平假名書寫／筆順練習資料：46 個清音的參考筆畫數 */
const HIRAGANA_STROKE_COUNTS = {
  'あ': 3, 'い': 2, 'う': 2, 'え': 2, 'お': 3,
  'か': 3, 'き': 4, 'く': 1, 'け': 3, 'こ': 2,
  'さ': 3, 'し': 1, 'す': 2, 'せ': 3, 'そ': 1,
  'た': 4, 'ち': 2, 'つ': 1, 'て': 1, 'と': 2,
  'な': 4, 'に': 3, 'ぬ': 2, 'ね': 2, 'の': 1,
  'は': 3, 'ひ': 1, 'ふ': 4, 'へ': 1, 'ほ': 4,
  'ま': 3, 'み': 2, 'む': 3, 'め': 2, 'も': 3,
  'や': 3, 'ゆ': 2, 'よ': 2,
  'ら': 2, 'り': 2, 'る': 1, 'れ': 2, 'ろ': 1,
  'わ': 2, 'を': 3,
  'ん': 1
};

/* 依 GOJUON_DATA.seion 表格順序整理出練習用清單（46 字） */
function buildHiraganaPracticeList() {
  const list = [];
  GOJUON_DATA.seion.forEach((row) => {
    row.forEach((cell) => {
      if (cell) {
        list.push({ char: cell.k, romaji: cell.r, strokes: HIRAGANA_STROKE_COUNTS[cell.k] || null });
      }
    });
  });
  return list;
}
