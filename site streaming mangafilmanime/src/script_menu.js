var menuBtn = document.querySelector(".menu-btn");
      var menu = document.querySelector(".menu");
      var menuClose = document.querySelector(".close");

      menuBtn.addEventListener("click", function (event) {
        event.preventDefault();
        menu.classList.add("is-open");
      });

      menuClose.addEventListener("click", function (event) {
        event.preventDefault();
        menu.classList.remove("is-open");
      });