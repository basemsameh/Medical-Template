let products;

if (sessionStorage.getItem("products") === null) {
  products = [];
} else {
  products = JSON.parse(sessionStorage.getItem("products"));
  displayProducts();
}

document.querySelectorAll(".checkSubtotal").forEach(e => {
  e.textContent = sessionStorage.getItem("result");
})

function displayProducts() {
  let content = "";
  for (let i = 0; i < products.length; i++) {
    content += `
      <tr>
        <td>${products[i].name} × <span class="weight">${sessionStorage.getItem(`numProduct${i}`)}</span></td>
        <td>$${products[i].price}</td>
      </tr>
    `
  }
  document.querySelector("tbody").innerHTML = content;
}