/* N4 單字閃卡資料（精選 20 字，含日常＋熱血題材詞彙） */
const VOCAB_DATA = [
  { id: 'v01', kanji: '運命', kana: 'うんめい', romaji: 'unmei', meaning: '命運', pos: '名詞', example: { jp: 'これは運命の出会いだ。', zh: '這是命中注定的相遇。' } },
  { id: 'v02', kanji: '覚悟', kana: 'かくご', romaji: 'kakugo', meaning: '覺悟、心理準備', pos: '名詞', example: { jp: '戦う覚悟はできている。', zh: '我已經做好戰鬥的覺悟了。' } },
  { id: 'v03', kanji: '敵', kana: 'てき', romaji: 'teki', meaning: '敵人', pos: '名詞', example: { jp: '敵はまだ近くにいるはずだ。', zh: '敵人應該還在附近。' } },
  { id: 'v04', kanji: '味方', kana: 'みかた', romaji: 'mikata', meaning: '同伴、我方', pos: '名詞', example: { jp: '味方はいつも私を助けてくれる。', zh: '同伴總是會幫助我。' } },
  { id: 'v05', kanji: '仲間', kana: 'なかま', romaji: 'nakama', meaning: '夥伴', pos: '名詞', example: { jp: '仲間との約束は絶対に守る。', zh: '和夥伴的約定我一定會遵守。' } },
  { id: 'v06', kanji: '勇気', kana: 'ゆうき', romaji: 'yuuki', meaning: '勇氣', pos: '名詞', example: { jp: '一歩前に出る勇気が必要だ。', zh: '需要有向前踏出一步的勇氣。' } },
  { id: 'v07', kanji: '力', kana: 'ちから', romaji: 'chikara', meaning: '力量', pos: '名詞', example: { jp: '本当の力はまだ隠されている。', zh: '真正的力量還隱藏著。' } },
  { id: 'v08', kanji: '危険', kana: 'きけん', romaji: 'kiken', meaning: '危險', pos: '形容動詞', example: { jp: 'この先は危険だから気をつけて。', zh: '前方很危險，要小心。' } },
  { id: 'v09', kanji: '突然', kana: 'とつぜん', romaji: 'totsuzen', meaning: '突然', pos: '副詞', example: { jp: '突然、空が暗くなった。', zh: '天空突然暗了下來。' } },
  { id: 'v10', kanji: '決める', kana: 'きめる', romaji: 'kimeru', meaning: '決定', pos: '動詞（他動）', example: { jp: '自分の道は自分で決める。', zh: '自己的路要自己決定。' } },
  { id: 'v11', kanji: '信じる', kana: 'しんじる', romaji: 'shinjiru', meaning: '相信', pos: '動詞（他動）', example: { jp: '君の力を信じている。', zh: '我相信你的力量。' } },
  { id: 'v12', kanji: '諦める', kana: 'あきらめる', romaji: 'akirameru', meaning: '放棄', pos: '動詞（他動）', example: { jp: 'まだ諦めるには早い。', zh: '現在放棄還太早。' } },
  { id: 'v13', kanji: '挑戦', kana: 'ちょうせん', romaji: 'chousen', meaning: '挑戰', pos: '名詞・する動詞', example: { jp: '新しい挑戦を始めよう。', zh: '開始新的挑戰吧。' } },
  { id: 'v14', kanji: '成長', kana: 'せいちょう', romaji: 'seichou', meaning: '成長', pos: '名詞・する動詞', example: { jp: '彼はこの一年で大きく成長した。', zh: '他這一年成長了很多。' } },
  { id: 'v15', kanji: '未来', kana: 'みらい', romaji: 'mirai', meaning: '未來', pos: '名詞', example: { jp: '未来は自分の手で変えられる。', zh: '未來可以靠自己的雙手改變。' } },
  { id: 'v16', kanji: '経験', kana: 'けいけん', romaji: 'keiken', meaning: '經驗', pos: '名詞・する動詞', example: { jp: 'この経験はきっと役に立つ。', zh: '這個經驗一定會派上用場。' } },
  { id: 'v17', kanji: '説明', kana: 'せつめい', romaji: 'setsumei', meaning: '說明', pos: '名詞・する動詞', example: { jp: 'ルールを説明してください。', zh: '請說明一下規則。' } },
  { id: 'v18', kanji: '準備', kana: 'じゅんび', romaji: 'junbi', meaning: '準備', pos: '名詞・する動詞', example: { jp: '出発の準備はもうできた。', zh: '出發的準備已經完成了。' } },
  { id: 'v19', kanji: '心配', kana: 'しんぱい', romaji: 'shinpai', meaning: '擔心', pos: '名詞・形容動詞', example: { jp: '心配しないで、大丈夫だ。', zh: '別擔心，沒問題的。' } },
  { id: 'v20', kanji: '約束', kana: 'やくそく', romaji: 'yakusoku', meaning: '約定', pos: '名詞・する動詞', example: { jp: 'この約束は絶対に破らない。', zh: '這個約定我絕對不會違背。' } }
];
