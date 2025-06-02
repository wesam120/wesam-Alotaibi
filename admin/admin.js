function getProducts() {
  return JSON.parse(localStorage.getItem("products")) || [];
}

function saveProducts(products) {
  localStorage.setItem("products", JSON.stringify(products));
}

function displayProducts() {
  const list = document.getElementById("productsList");
  const products = getProducts();
  list.innerHTML = "";
  products.forEach((p, i) => {
    const div = document.createElement("div");
    div.innerHTML = `${p.name} - ${p.price} ريال <button onclick="deleteProduct(${i})">🗑️ حذف</button>`;
    list.appendChild(div);
  });
}

function addProduct() {
  const name = document.getElementById("productName").value;
  const price = parseFloat(document.getElementById("productPrice").value);
  const image = document.getElementById("productImage").value;
  if (!name || !price || !image) return alert("الرجاء إدخال جميع البيانات");

  const products = getProducts();
  products.push({ name, price, image });
  saveProducts(products);
  displayProducts();

  document.getElementById("productName").value = "";
  document.getElementById("productPrice").value = "";
  document.getElementById("productImage").value = "";
}

function deleteProduct(index) {
  const products = getProducts();
  products.splice(index, 1);
  saveProducts(products);
  displayProducts();
}

window.onload = displayProducts;
