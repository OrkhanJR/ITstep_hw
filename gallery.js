const mainPhoto = document.querySelector("#main-photo");
const previewsContainer = document.querySelector(".preview");
const previewItems = document.querySelectorAll(".preview ul li");

previewsContainer.addEventListener("click", function (event) {
  const target = event.target;

  if (!target.matches("img")) return;

  mainPhoto.src = target.src;
});

previewItems.forEach((item) => {
  item.addEventListener("mouseover", function (event) {
    const target = event.target;

    target.parentElement.style.outline = "2px solid black";
  });

  item.addEventListener("mouseout", function (event) {
    const target = event.target;

    target.parentElement.style.outline = "none";
  });
});
