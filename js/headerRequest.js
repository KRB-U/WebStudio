const headerContainer = document.getElementById("headerContainer");

fetch("../partials/header.html")
  .then((response) => response.text())
  .then((data) => headerContainer.insertAdjacentHTML("afterbegin", data))
  .catch((error) => {
    console.log(error);
  });
