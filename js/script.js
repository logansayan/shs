const headerExpand = document.querySelector(".header__expand")
const nav = document.querySelector(".header__nav")


const addRemoveHeader = function (){
  headerExpand.classList.replace("fa-xmark", "fa-bars")

  if (window.innerWidth <= 950) {
    nav.classList.add("hidden")
    headerExpand.classList.remove("hidden")

    
  } else {
    nav.classList.remove("hidden")
    headerExpand.classList.add("hidden")
  }
}

headerExpand.addEventListener("click", function () {
  if (nav.classList.contains("hidden")) {
    nav.classList.remove("hidden")
    headerExpand.classList.replace("fa-bars", "fa-xmark")
  } else {
    nav.classList.add("hidden")
    headerExpand.classList.replace("fa-xmark", "fa-bars")
  }
  // headerExpand.classList.add("hidden")
})

window.onload = addRemoveHeader

window.addEventListener("resize", addRemoveHeader)