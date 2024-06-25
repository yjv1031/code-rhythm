// 햄버거메뉴 토글
document.addEventListener("DOMContentLoaded", function() {
  const hamburgerMenu = document.querySelector(".hamburger-menu");
  const headerMenuContainer = document.querySelector(".header-menu-container");

  hamburgerMenu.addEventListener("click", function() {
    headerMenuContainer.classList.toggle("open");
  });
});
