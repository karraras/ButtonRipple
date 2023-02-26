let button = document.querySelectorAll("button");
button.forEach((ele) => {
  ele.addEventListener("click", function (e) {
    document.querySelector(`.${e.target.dataset.btn}`).classList.add("ripple");
  });
  setInterval(() => {
    ele.classList.remove("ripple");
  }, 1500);
});
