// 获取轮播相关元素
const slides = document.querySelectorAll('.carousel-slide');
const indicators = document.querySelectorAll('.indicator');
const prevBtn = document.querySelector('.carousel-prev');
const nextBtn = document.querySelector('.carousel-next');
let currentIndex = 0;

// 切换轮播图函数
function showSlide(index) {
  // 隐藏所有轮播图
  slides.forEach(slide => slide.classList.remove('active'));
  // 取消所有指示器激活状态
  indicators.forEach(indicator => indicator.classList.remove('active'));
  // 处理边界
  if (index >= slides.length) currentIndex = 0;
  if (index < 0) currentIndex = slides.length - 1;
  // 显示当前轮播图
  slides[currentIndex].classList.add('active');
  // 激活当前指示器
  indicators[currentIndex].classList.add('active');
}

// 下一张
function nextSlide() {
  currentIndex++;
  showSlide(currentIndex);
}

// 上一张
function prevSlide() {
  currentIndex--;
  showSlide(currentIndex);
}

// 点击指示器切换
indicators.forEach((indicator, index) => {
  indicator.addEventListener('click', () => {
    currentIndex = index;
    showSlide(currentIndex);
  });
});

// 绑定按钮事件
prevBtn.addEventListener('click', prevSlide);
nextBtn.addEventListener('click', nextSlide);

// 自动轮播
setInterval(nextSlide, 3000);

// 初始化显示第一张
showSlide(currentIndex);