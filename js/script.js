// NAVBAR

"use strict";

const navbar = function () {
  const headerExpand = document.querySelector(".header__expand");
  const nav = document.querySelector(".header__nav");

  const addRemoveHeader = function () {
    headerExpand.classList.replace("fa-xmark", "fa-bars");

    if (window.innerWidth <= 950) {
      nav.classList.add("hidden");
      headerExpand.classList.remove("hidden");
    } else {
      nav.classList.remove("hidden");
      headerExpand.classList.add("hidden");
    }
  };

  headerExpand.addEventListener("click", function () {
    if (nav.classList.contains("hidden")) {
      nav.classList.remove("hidden");
      headerExpand.classList.replace("fa-bars", "fa-xmark");
      nav.style.zIndex = "999";
    } else {
      nav.classList.add("hidden");
      headerExpand.classList.replace("fa-xmark", "fa-bars");
    }
    // headerExpand.classList.add("hidden")
  });

  addRemoveHeader();

  window.addEventListener("resize", addRemoveHeader);
};

navbar();

// SLIDER

const slider = function () {
  const slides = document.querySelectorAll(".slide");
  const btnLeft = document.querySelector(".slider__btn--left");
  const btnRight = document.querySelector(".slider__btn--right");
  const dotContainer = document.querySelector(".dots");

  let curSlide = 0;
  const maxSlide = slides.length;

  // Functions
  const createDots = function () {
    slides.forEach(function (_, i) {
      dotContainer.insertAdjacentHTML(
        "beforeend",
        `<button class="dots__dot" data-slide="${i}"></button>`
      );
    });
  };

  const activateDot = function (slide) {
    document
      .querySelectorAll(".dots__dot")
      .forEach((dot) => dot.classList.remove("dots__dot--active"));

    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add("dots__dot--active");
  };

  const goToSlide = function (slide) {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
  };

  // Next slide
  const nextSlide = function () {
    if (curSlide === maxSlide - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }

    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const prevSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlide - 1;
    } else {
      curSlide--;
    }
    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const init = function () {
    goToSlide(0);
    createDots();

    activateDot(0);
  };
  init();

  // Event handlers on buttons
  btnRight.addEventListener("click", nextSlide);
  btnLeft.addEventListener("click", prevSlide);

  // Event on arrow keys
  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") prevSlide();
    e.key === "ArrowRight" && nextSlide();
  });

  dotContainer.addEventListener("click", function (e) {
    if (e.target.classList.contains("dots__dot")) {
      const { slide } = e.target.dataset;
      goToSlide(slide);
      activateDot(slide);
    }
  });

  const sliderContainer = document.querySelector(".slider");

  sliderContainer.addEventListener("swiped-left", nextSlide);
  sliderContainer.addEventListener("swiped-right", prevSlide);

  // Go to next slide every 7 seconds automatically
  setInterval(nextSlide, 7000);
};
slider();
