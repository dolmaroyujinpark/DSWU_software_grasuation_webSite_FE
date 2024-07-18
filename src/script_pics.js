let currentIndex = 0;

function moveSlides(n) {
  const slides = document.querySelectorAll('.slide');
  const totalSlides = slides.length;
  const container = document.querySelector('.slider-container');

  currentIndex += n;
  if (currentIndex >= totalSlides) {
    currentIndex = 0;
  } else if (currentIndex < 0) {
    currentIndex = totalSlides - 1;
  }

  const newTransform = -currentIndex * 100 / 4; // 4개의 이미지가 한 화면에 보이도록 설정
  container.style.transform = `translateX(${newTransform}%)`;
}
