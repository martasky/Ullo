fetch("https://keaprojects21-50cf.restdb.io/rest/ullo-products", {
  method: "GET",
  headers: {
    "x-apikey": "602e38155ad3610fb5bb62bd",
  },
})
  .then((res) => res.json())
  .then((response) => {
    console.log(response);
    showProducts(response);
  })
  .catch((err) => {
    console.error(err);
  });

function showProducts(data) {
  data.forEach((product) => {
    console.log(product);
    showProduct(product);
  });
}
function showProduct(product) {
  const tempProd = document.querySelector("template").content;
  const clone = tempProd.cloneNode(true);

  clone.querySelector(".product-name").textContent = product.name;
  clone.querySelector(".product-image").src = product.image;
  clone.querySelector(".product-card a").href = product.link;
  clone.querySelector(".product-image").alt = product.name;

  clone.querySelector(".product-price").textContent = `${product.price} kr`;

  if (product.discounted === true) {
    clone.querySelector(".product-price").classList.add("discounted-price");

    clone.querySelector(
      ".product-price:last-of-type"
    ).textContent = `${Math.round(
      (100 / (100 - product.discount)) * product.price
    )} kr`;
  }
  const prod = document.querySelector("#products");
  prod.appendChild(clone);
}
