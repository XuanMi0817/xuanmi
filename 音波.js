const audioWave = document.querySelector('.audio-wave');
const numBars = 80; // 調整條形數量

// 動態生成條形
for (let i = 0; i < numBars; i++) {
    const bar = document.createElement('div');
    bar.style.height = `${Math.random() * 60 + 20}px`; // 隨機高度
    bar.style.animationDelay = `${Math.random()}s`; // 隨機動畫延遲
    audioWave.appendChild(bar);
}
