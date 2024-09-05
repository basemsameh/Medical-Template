let removeBtns, numProducts, decreaseBtns, increaseBtns, subtotals;
let products;

if (sessionStorage.getItem("products") === null) {
  products = [];
  document.querySelector(".empty").classList.remove("d-none");
  document.querySelector(".notEmpty").classList.add("d-none");
} else {
  products = JSON.parse(sessionStorage.getItem("products"));
  if (products.length !== 0) {
    document.querySelector(".empty").classList.add("d-none");
    document.querySelector(".notEmpty").classList.remove("d-none");
    displayProducts();
    removeBtns = document.querySelectorAll(".removeBtn");
    decreaseBtns = document.querySelectorAll(".decreaseBtn");
    increaseBtns = document.querySelectorAll(".increaseBtn");
  }
}

function removeProduct(index) {
  products.splice(index, 1);
  sessionStorage.setItem("products", JSON.stringify(products));
  products = JSON.parse(sessionStorage.getItem("products"));
  if (products.length === 0) {
    document.querySelector(".empty").classList.remove("d-none");
    document.querySelector(".notEmpty").classList.add("d-none");
  }
  displayProducts();
}

function increaseNum(index) {
  numProducts[index].textContent = +numProducts[index].textContent + 1;
  sessionStorage.setItem(`numProduct${index}`, numProducts[index].textContent);
  calcSubtotals(index, numProducts[index].textContent);
  calcTotalsAndSub();
}

function decreaseNum(index) {
  if (numProducts[index].textContent != "0") {
    numProducts[index].textContent = +numProducts[index].textContent - 1;
  }
  sessionStorage.setItem(`numProduct${index}`, numProducts[index].textContent);
  calcSubtotals(index, numProducts[index].textContent);
  calcTotalsAndSub();
}

function calcSubtotals(index, value) {
  subtotals[index].textContent = +value * products[index].price;
  calcTotalsAndSub();
}

function calcTotalsAndSub() {
  let result = [];
  for (let i = 0; i < subtotals.length; i++) {
    result.push(+subtotals[i].textContent);
  }
  result = result.reduce((total, current) => {
    return total + current;
  })
  sessionStorage.setItem("result", result);
  document.querySelectorAll(".cartTotalSub").forEach(e => e.textContent = result);
}

function displayProducts() {
  let content = "";
  for (let i = 0; i < products.length; i++) {
    content += `
      <tr>
        <td class="text-danger align-middle">
          <i class="fa-solid fa-xmark removeBtn" onclick="removeProduct(${i})"></i>
        </td>
        <td class="align-middle"><img src="${products[i].srcImg}" alt="Product" style="width: 100px;"></td>
        <td class="weight align-middle">${products[i].name}</td>
        <td class="align-middle">$${products[i].price}</td>
        <td class="align-middle">
          <div class="border rounded-5 p-2 fit">
            <button onclick="decreaseNum(${i})" class="decreaseBtn btn p-0 h-auto 
            bg-color text-white p-1 px-2 rounded-circle">
              <i class="fa-solid fa-minus"></i>
            </button>
            <span class="numProduct mx-3 fs-5">1</span>
            <button onclick="increaseNum(${i})" class="increaseBtn btn p-0 h-auto 
            bg-color text-white p-1 px-2 rounded-circle">
              <i class="fa-solid fa-plus"></i>
            </button>
          </div>
        </td>
        <td class="align-middle">
          $<span class="subtotal">${products[i].price}</span>
        </td>
      </tr>
    `
  }
  document.querySelector(".notEmpty tbody").innerHTML = content;
  subtotals = document.querySelectorAll(".subtotal");
  calcTotalsAndSub();
  numProducts = document.querySelectorAll(".numProduct");
  for (let i = 0; i < numProducts.length; i++) {
    sessionStorage.setItem(`numProduct${i}`, numProducts[i].textContent);
  }
}
