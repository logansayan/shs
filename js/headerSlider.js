const headerSlider = function () {
  const header = document.querySelector(".header");
  const slides = document.querySelectorAll(".slide-item");

  // const leftBtn = document.querySelector("#left");
  // const rightBtn = document.querySelector("#right");

  let activeSlide = 0;

  const nextSlide = function () {
    activeSlide++;

    if (activeSlide > slides.length - 1) {
      activeSlide = 0;
    }

    setBgToBody();
    setActiveSlide();
  };

  const prevSlide = function () {
    activeSlide--;

    if (activeSlide < 0) {
      activeSlide = slides.length - 1;
    }

    setBgToBody();
    setActiveSlide();
  };

  // rightBtn.addEventListener("click", () => {
  //   nextSlide();
  // });

  // leftBtn.addEventListener("click", () => {
  //   prevSlide();
  // });

  setBgToBody();

  function setBgToBody() {
    header.style.backgroundImage = slides[activeSlide].style.backgroundImage;
  }

  function setActiveSlide() {
    slides.forEach((slide) => slide.classList.remove("active"));

    slides[activeSlide].classList.add("active");
  }

  // Next slide every 5 seconds
  setInterval(nextSlide, 5000);
};

headerSlider();
