const headerExpand = document.querySelector(".header__expand")
const nav = document.querySelector(".header__nav")


const addRemoveHeader = function (){
  if (window.innerWidth < 950) {
    nav.classList.add("hidden")
    headerExpand.classList.remove("hidden")

    headerExpand.addEventListener("click", function () {
      nav.classList.remove("hidden")
      headerExpand.classList.add("hidden")
    })
  } else {
    nav.classList.remove("hidden")
    headerExpand.classList.add("hidden")
  }
}

window.onload = addRemoveHeader

window.addEventListener("resize", addRemoveHeader)