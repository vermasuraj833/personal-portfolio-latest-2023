// --------------------------------tab functionality------------------------------

var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
  for (tablink of tablinks) {
    tablink.classList.remove("active-link");
  }
  for (tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}

// ---------------------------------------sidemenu-for mobile---------------------------------

var sidemenu = document.getElementById("sidemenu");

function openmenu() {
  sidemenu.style.right = "0";
}

function closemenu() {
  sidemenu.style.right = "-200px";
}

// -------------------------------------user send fill form details ---------------------

const scriptURL =
  "https://script.google.com/macros/s/AKfycbyZsXOazJQHtlWShHNvUSisTbwnj54j0cJzRZh4AfkdfBUGp5bUmKDFoDARGvfcynOe/exec";
const form = document.forms["submit-to-google-sheet"];
const msg = document.getElementById("msg");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      msg.innerHTML = "Message sent successfully";
      setTimeout(function () {
        msg.innerHTML = "";
      }, 5000);
      form.reset();
    })
    .catch((error) => console.error("Error!", error.message));
});

// -------------------------------------------theme -----------------------

const setTheme = (theme) => (document.documentElement.className = theme);

// -------------------------------------------menubar ------------------------------

var navbar = document.getElementById("navbar");
var scrollUpBtn = document.getElementById("scrollUpBtn");

window.addEventListener("scroll", function () {

  if (this.scrollY > 20) {
    navbar.classList.add('sticky');
  } else {
    navbar.classList.remove("sticky");
  }

  // scroll-up button show/hide script
  if (this.scrollY > 500) {
    scrollUpBtn.classList.add("show");
  } else {
    scrollUpBtn.classList.remove("show");
  }
});
