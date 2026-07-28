/* 平假名書寫／筆順練習頁面邏輯：canvas 描紅練習 */
document.addEventListener('DOMContentLoaded', () => {
  const list = buildHiraganaPracticeList();
  let index = 0;

  const canvas = document.getElementById('stroke-canvas');
  const ctx = canvas.getContext('2d');
  const currentCharEl = document.getElementById('current-char');
  const currentRomajiEl = document.getElementById('current-romaji');
  const strokeCountEl = document.getElementById('stroke-count');
  const prevBtn = document.getElementById('stroke-prev-btn');
  const nextBtn = document.getElementById('stroke-next-btn');
  const clearBtn = document.getElementById('stroke-clear-btn');
  const speakBtn = document.getElementById('stroke-speak-btn');
  const pickerGrid = document.getElementById('hiragana-picker-grid');

  function setupCanvasSize() {
    const rect = canvas.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  function drawGuide() {
    const rect = canvas.getBoundingClientRect();
    const w = rect.width;
    const h = rect.height;
    ctx.clearRect(0, 0, w, h);

    ctx.strokeStyle = 'rgba(123,47,247,0.25)';
    ctx.lineWidth = 1;
    ctx.setLineDash([6, 6]);
    ctx.beginPath();
    ctx.moveTo(w / 2, 0); ctx.lineTo(w / 2, h);
    ctx.moveTo(0, h / 2); ctx.lineTo(w, h / 2);
    ctx.moveTo(0, 0); ctx.lineTo(w, h);
    ctx.moveTo(w, 0); ctx.lineTo(0, h);
    ctx.stroke();
    ctx.setLineDash([]);

    ctx.fillStyle = 'rgba(20,16,28,0.18)';
    ctx.font = `${Math.floor(h * 0.7)}px "Noto Sans JP", sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(list[index].char, w / 2, h / 2 + h * 0.03);
  }

  let drawing = false;
  let lastX = 0;
  let lastY = 0;

  function getPos(e) {
    const rect = canvas.getBoundingClientRect();
    return { x: e.clientX - rect.left, y: e.clientY - rect.top };
  }

  canvas.addEventListener('pointerdown', (e) => {
    drawing = true;
    const p = getPos(e);
    lastX = p.x;
    lastY = p.y;
    canvas.setPointerCapture(e.pointerId);
  });

  canvas.addEventListener('pointermove', (e) => {
    if (!drawing) return;
    const p = getPos(e);
    ctx.strokeStyle = '#7b2ff7';
    ctx.lineWidth = 10;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(p.x, p.y);
    ctx.stroke();
    lastX = p.x;
    lastY = p.y;
  });

  function stopDrawing() {
    drawing = false;
  }
  canvas.addEventListener('pointerup', stopDrawing);
  canvas.addEventListener('pointercancel', stopDrawing);
  canvas.addEventListener('pointerleave', stopDrawing);

  function renderMeta() {
    const item = list[index];
    currentCharEl.textContent = item.char;
    currentRomajiEl.textContent = item.romaji;
    strokeCountEl.textContent = item.strokes ? `參考筆畫數：${item.strokes} 畫` : '';
    pickerGrid.querySelectorAll('button').forEach((btn, i) => {
      btn.classList.toggle('active', i === index);
    });
  }

  function loadChar(newIndex) {
    index = (newIndex + list.length) % list.length;
    setupCanvasSize();
    drawGuide();
    renderMeta();
  }

  prevBtn.addEventListener('click', () => loadChar(index - 1));
  nextBtn.addEventListener('click', () => loadChar(index + 1));
  clearBtn.addEventListener('click', () => {
    setupCanvasSize();
    drawGuide();
  });
  speakBtn.addEventListener('click', () => TTS.speak(list[index].char));

  list.forEach((item, i) => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'jp';
    btn.textContent = item.char;
    btn.title = item.romaji;
    btn.addEventListener('click', () => loadChar(i));
    pickerGrid.appendChild(btn);
  });

  window.addEventListener('resize', () => {
    setupCanvasSize();
    drawGuide();
  });

  loadChar(0);
});
