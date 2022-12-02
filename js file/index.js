// Menubar
let menus = document.querySelector(".men_barlist");
let disp = document.querySelector(".bar_button");

disp.addEventListener("click", function () {
  menus.classList.toggle("show_menu");
});

// Theme

let icon = document.querySelector(".fa-moon");
let pagebody = document.querySelector("body");

icon.addEventListener("click", function () {
  pagebody.classList.toggle("dark_mode");

  if (pagebody.classList.contains("dark_mode") == true) {
    icon.innerHTML = "<span class='fa-solid fa-sun'></span>";
    icon.classList.remove("fa-moon");
  } else {
    icon.innerHTML = "<span class='fa-solid fa-moon'></span>";
  }
});

// fix menubar

function menubar_fix() {
  let nav = document.querySelector(".container");
  let trns = document.querySelector(".trans");

  window.onscroll = function () {
    if (window.scrollY > 150) {
      nav.classList.add("nav-color");
      trns.style.color = "white";
    } else {
      nav.classList.remove("nav-color");
      trns.style.color = "orangered";
    }
  };
}

// email Validation

function emailvalidation() {
  let emailid = document.getElementById("email");
  if (emailid.value == "" || emailid.value == null) {
    document.getElementById("note").innerHTML = "*Enter Mail Id*";
    return false;
  } else if (
    /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailid.value)
  ) {
    return true;
  } else {
    document.getElementById("note").innerHTML = "*Invalid Email ID*";
    return false;
  }
}
