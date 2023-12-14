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

// -------------------------------------------menubar desktop and top button------------------------------

var navbar = document.querySelector(".navbar");
var button = document.querySelector('#button');

const displayButton = () => {
  window.addEventListener('scroll', () => {  
    if (window.scrollY > 100) {
      navbar.classList.add('sticky');
      button.classList.add('show');
    } else {
      navbar.classList.remove("sticky");
      button.classList.remove('show');
    }
  });
};

const scrollToTop = () => {
  button.addEventListener("click", () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    }); 
  });
};

displayButton();
scrollToTop();