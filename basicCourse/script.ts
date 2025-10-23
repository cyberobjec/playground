const navLinks = document.querySelectorAll(".nav a");

// 默认激活第一个
navLinks[0].classList.add("active");

// 点击切换
navLinks.forEach((link) => {
  link.addEventListener("click", function (e) {
    navLinks.forEach((item) => item.classList.remove("active"));
    this.classList.add("active");
  });
});
