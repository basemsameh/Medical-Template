let counter = document.querySelector(".counter");
let counts = document.querySelectorAll(".count h3 span");
let started = false;

window.addEventListener("scroll", () => {
  if (window.scrollY >= counter.getBoundingClientRect().top + 200) {
    if (!started) {
      fillCounter();
    }
    started = true;
  }
})

function fillCounter() {
  counts.forEach(e => {
    let x = setInterval(() => {
      e.textContent = +e.textContent + 1;
      console.log(e.getAttribute("data-target"))
      if (+e.textContent === +e.getAttribute("data-target")) {
        clearInterval(x);
      }
    }, 2500 / +e.getAttribute("data-target"));
  })
}