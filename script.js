document.addEventListener('DOMContentLoaded', () => {
  const heart = document.getElementById('heart');
  const changeColorBtn = document.getElementById('changeColor');
  const changeSizeBtn = document.getElementById('changeSize');

  // 随机颜色生成
  function getRandomColor() {
    return `#${Math.floor(Math.random()*16777215).toString(16)}`;
  }

  // 改变心形颜色
  changeColorBtn.addEventListener('click', () => {
    const newColor = getRandomColor();
    document.documentElement.style.setProperty('--heart-color', newColor);
  });

  // 改变心形大小
  changeSizeBtn.addEventListener('click', () => {
    const currentSize = parseInt(getComputedStyle(document.documentElement)
      .getPropertyValue('--heart-size'));
    const newSize = currentSize === 100 ? 150 : 100;
    document.documentElement.style.setProperty('--heart-size', newSize + 'px');
  });

  // 点击心形时添加特效
  heart.addEventListener('click', () => {
    heart.style.animation = 'none';
    heart.offsetHeight; // 触发重排
    heart.style.animation = 'beat 1s infinite';
  });
}); 