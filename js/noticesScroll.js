const notices = document.querySelector(".notices__container");
const noticeItem = document.querySelector(".notices__item");
const up = document.querySelector(".scroll-up");
const down = document.querySelector(".scroll-down");

const itemHeight = noticeItem.offsetHeight + 24;

down.addEventListener("click", () => {
  notices.scrollBy(0, itemHeight);
});

up.addEventListener("click", () => {
  notices.scrollBy(0, -itemHeight);
});
