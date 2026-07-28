/* 動畫風格句子填空頁面邏輯 */
document.addEventListener('DOMContentLoaded', () => {
  const listEl = document.getElementById('anime-fill-list');
  const summaryEl = document.getElementById('anime-fill-summary');
  let correctCount = 0;
  let answeredCount = 0;

  function updateSummary() {
    summaryEl.textContent = `已完成 ${answeredCount} / ${ANIME_CLOZE.length} 題，答對 ${correctCount} 題`;
    if (answeredCount === ANIME_CLOZE.length) {
      const prev = Storage.get('anime_cloze', { best: 0 });
      const best = Math.max(prev.best || 0, correctCount);
      Storage.set('anime_cloze', { best, last: correctCount, total: ANIME_CLOZE.length, completedAt: Date.now() });
      summaryEl.innerHTML += `　🏆 歷史最佳：${best} / ${ANIME_CLOZE.length}`;
    }
  }

  ANIME_CLOZE.forEach((item) => {
    const card = document.createElement('div');
    card.className = 'sentence-card';
    const optionsHtml = item.options
      .map((opt, i) => `<option value="${i}">${opt}</option>`)
      .join('');

    card.innerHTML = `
      <div class="sentence-jp">
        <span class="jp">${item.before}</span>
        <select class="blank-select">
          <option value="-1">－請選擇－</option>
          ${optionsHtml}
        </select>
        <span class="jp">${item.after}</span>
        <button type="button" class="speak-btn" title="播放完整句子">🔊</button>
      </div>
      <div class="feedback" style="margin-top:0.6rem; font-weight:700;"></div>
    `;

    const select = card.querySelector('.blank-select');
    const speakBtn = card.querySelector('.speak-btn');
    const feedback = card.querySelector('.feedback');
    let answered = false;

    speakBtn.addEventListener('click', () => {
      const chosenIdx = select.value !== '-1' ? Number(select.value) : item.answer;
      const fullSentence = item.before + item.options[chosenIdx] + item.after;
      TTS.speak(stripFurigana(fullSentence));
    });

    select.addEventListener('change', () => {
      if (answered || select.value === '-1') return;
      answered = true;
      answeredCount += 1;
      const chosen = Number(select.value);
      select.disabled = true;
      if (chosen === item.answer) {
        correctCount += 1;
        card.style.boxShadow = '6px 6px 0 var(--teal)';
        feedback.style.color = '#157a45';
        feedback.innerHTML = '✔ 正解！<span class="sfx-inline">ズバッ!!</span>';
      } else {
        card.style.boxShadow = '6px 6px 0 var(--danger)';
        feedback.style.color = '#b0202f';
        feedback.innerHTML = `✘ 正確答案是「${item.options[item.answer]}」<span class="sfx-inline">ガーン…</span>`;
      }
      const note = document.createElement('div');
      note.innerHTML = `
        <div class="sentence-translation">${item.zh}</div>
        <div class="sentence-note">💡 ${item.note}</div>
      `;
      card.appendChild(note);
      updateSummary();
    });

    listEl.appendChild(card);
  });

  updateSummary();
});
