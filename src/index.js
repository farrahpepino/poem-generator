document.onreadystatechange = function () {
    if (document.readyState === 'complete') {let joinElement = document.querySelector("#join-button");
joinElement.addEventListener("click", function () {
  window.location.href = "../pages/fire-poem-generator.html";
});

let logoElement = document.querySelector("#logo-button");
logoElement.addEventListener("click", function () {
  window.location.href = "../index.html";
});}};