const links = document.querySelectorAll("a");

links.forEach((link) => {
  link.addEventListener("mouseover", function () {
    //Код для цветов я скопировал, но полностью понимаю как он работает
    let randColor = function () {
      let letters = "0123456789ABCDEF";
      let color = "#";
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    };
    link.style.color = randColor();
  });
  link.addEventListener("click", function (event) {
    event.preventDefault();
  });
});

links.forEach((link) => {
  link.addEventListener("mouseout", function () {
    link.style.color = "black";
  });
});
