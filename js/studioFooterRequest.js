const portfolioFooterContainer = document.getElementById("headerContainer");

fetch("../partials/studioFooter.html")
  .then((response) => response.text())
  .then((data) => headerContainer.insertAdjacentHTML("beforeend", data))
  .catch((error) => {
    console.log(error);
  });
