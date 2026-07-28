/* 首頁進度總覽：讀取各單元存在 localStorage 的資料並顯示 */
document.addEventListener('DOMContentLoaded', () => {
  function setText(id, text) {
    const el = document.getElementById(id);
    if (el) el.textContent = text;
  }

  const gojuonQuiz = Storage.get('gojuon_quiz', null);
  const katakanaQuiz = Storage.get('katakana_quiz', null);
  const animeCloze = Storage.get('anime_cloze', null);
  const gojuonDone = gojuonQuiz ? gojuonQuiz.best === gojuonQuiz.total : false;
  const katakanaDone = katakanaQuiz ? katakanaQuiz.best === katakanaQuiz.total : false;
  const animeDone = animeCloze ? animeCloze.best === animeCloze.total : false;

  setText('status-gojuon', gojuonQuiz ? `最佳 ${gojuonQuiz.best} / ${gojuonQuiz.total}` : '尚未挑戰');
  setText('status-katakana', katakanaQuiz ? `最佳 ${katakanaQuiz.best} / ${katakanaQuiz.total}` : '尚未挑戰');
  setText('status-anime', animeCloze ? `最佳 ${animeCloze.best} / ${animeCloze.total}` : '尚未挑戰');

  let grammarCleared = 0;
  GRAMMAR_LESSONS.forEach((lesson) => {
    const r = Storage.get(`grammar_${lesson.slug}`, null);
    if (r && r.best === r.total) grammarCleared += 1;
  });
  setText('status-grammar', `${grammarCleared} / ${GRAMMAR_LESSONS.length} 課完成`);

  let vocabMastered = 0;
  let vocabTotal = 0;
  VOCAB_SETS.forEach((set) => {
    const ids = set.words.map((w) => w.id);
    const stats = SRS.stats(`vocab_${set.slug}`, ids);
    vocabMastered += stats.mastered;
    vocabTotal += stats.total;
  });
  setText('status-vocab', `已熟記 ${vocabMastered} / ${vocabTotal}`);

  let kanjiCleared = 0;
  KANJI_SETS.forEach((set) => {
    const r = Storage.get(`kanji_${set.slug}`, null);
    if (r && r.best === r.total) kanjiCleared += 1;
  });
  setText('status-kanji', `${kanjiCleared} / ${KANJI_SETS.length} 批完成`);

  /* 整體完成度：6 個分類各自的完成率取平均，讓文法/單字/漢字這種
     內容量會持續變大的分類，不會因為項目變多而讓進度條顯得不公平 */
  const categoryRates = [
    gojuonDone ? 1 : 0,
    katakanaDone ? 1 : 0,
    GRAMMAR_LESSONS.length ? grammarCleared / GRAMMAR_LESSONS.length : 0,
    vocabTotal ? vocabMastered / vocabTotal : 0,
    KANJI_SETS.length ? kanjiCleared / KANJI_SETS.length : 0,
    animeDone ? 1 : 0
  ];
  const percent = Math.round((categoryRates.reduce((a, b) => a + b, 0) / categoryRates.length) * 100);

  const bar = document.getElementById('overall-progress-bar');
  const label = document.getElementById('overall-progress-label');
  if (bar) bar.style.width = `${percent}%`;
  if (label) label.textContent = `整體完成度：${percent}%（六大分類完成率平均）`;
});
