let collapseBtn = document.querySelectorAll(".collapseBtn");

collapseBtn.forEach((e, index) => {
  e.onclick = () => {
    e.classList.toggle("active");
    e.classList.toggle("fs-5");
    document.querySelectorAll(".question")[index].classList.toggle("shadow");
    document.querySelectorAll(".arrow")[index].classList.toggle("fa-angle-up");
    document.querySelectorAll(".arrow")[index].classList.toggle("fa-angle-down");
    // document.querySelectorAll(".collapse")[index].classList.toggle("show");
  }
})