//ボタンの呼び出し
const guBtn = document.getElementById('gu');
const chokiBtn = document.getElementById('choki');
const paBtn = document.getElementById('pa');

//チートボタンの呼び出し
const cheat = document.getElementById('cheatMode');

//結果表示呼び出し
let result = document.getElementById('result');
// 結果表示用クラスをリセット
function resetResultClass() {
  result.classList.remove('win', 'lose', 'draw');
}

//じゃんけん処理
function playJanken(playerHand) {
  resetResultClass();
  //相手のじゃんけんの手
  const hands = ['グー', 'チョキ', 'パー'];
  const cpuHand = hands[Math.floor(Math.random() * 3)];

  //通常じゃんけん結果
  if (playerHand === cpuHand) {
    result.textContent = `あなた：${playerHand}  　 相手：${cpuHand} 　→ あいこ！`;
    result.classList.add('draw');
  } else if (
    (playerHand === 'グー' && cpuHand === 'チョキ') ||
    (playerHand === 'チョキ' && cpuHand === 'パー') ||
    (playerHand === 'パー' && cpuHand === 'グー')
  ) {
    result.textContent = `あなた：${playerHand}　相手：${cpuHand} 　→ あなたの勝ち！`;
    result.classList.add('win');
  } else {
    result.textContent = `あなた：${playerHand}　相手：${cpuHand}　 → あなたの負け...`;
    result.classList.add('lose');
  }
}

//チートモード時発動時のじゃんけん結果
function cheatplay(playerHand) {
  resetResultClass();
  if (playerHand === 'グー') {
    result.textContent = `あなた：${playerHand}　相手：チョキ 　→ あなたの勝ち！`;
  } else if (playerHand === 'チョキ') {
    result.textContent = `あなた：${playerHand}　相手：パー 　→ あなたの勝ち！`;
  } else {
    result.textContent = `あなた：${playerHand}　相手：グー 　→ あなたの勝ち！`;
  }
  result.classList.add('win');
}

// クリックイベントは最初に1回だけ
guBtn.addEventListener('click', () => handleClick('グー'));
chokiBtn.addEventListener('click', () => handleClick('チョキ'));
paBtn.addEventListener('click', () => handleClick('パー'));

// 共通ハンドラ
function handleClick(playerHand) {
  if (cheat.checked) {
    cheatplay(playerHand);
  } else {
    playJanken(playerHand);
  }
}

// チートON / OFF で背景アニメーションを切り替える
cheat.addEventListener('change', () => {
  document.body.classList.toggle('cheat-active', cheat.checked);
});
