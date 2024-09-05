let addBtns = document.querySelectorAll(".addBtn");

let products;

if (sessionStorage.getItem("products") === null) {
  products = [];
} else {
  products = JSON.parse(sessionStorage.getItem("products"));
}

addBtns.forEach(btn => {
  btn.onclick = () => {
    let box = {
      srcImg: btn.parentElement.children[0].src,
      price: btn.parentElement.children[1].children[0].textContent,
      name: btn.parentElement.children[2].textContent
    }
    products.push(box);
    sessionStorage.setItem("products", JSON.stringify(products));
    // 
    btn.innerHTML = `<i class="fa-solid fa-spinner"></i>`;
    btn.classList.remove("opacity-0");
    setTimeout(() => {
      btn.innerHTML = `<i class="fa-solid fa-cart-shopping me-2"></i> View Cart`;
      btn.classList.add("opacity-0");
    }, 2000);
    btn.onclick = () => {
      window.location.href = "../pages/cart.html";
    }
  }
})
