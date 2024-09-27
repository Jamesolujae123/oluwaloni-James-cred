var typed = new Typed(".text", {
  strings: ["Frontend Developer", "UI/UX Developer", " Mobile App developer"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});

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

var sidemenu = document.getElementById("side-menu");

function openmenu() {
  sidemenu.style.right = "0";
}
function closemenu() {
  sidemenu.style.right = "-150px";
}

const Nname = document.getElementById("ninput");
const email = document.getElementById("emailinput");
const subject = document.getElementById("sinput");
const Message = document.getElementById("mesginput");

const scriptURL =
  "https://script.google.com/macros/s/AKfycbxm1CxBbkxiLwHUMbIuVKHHhjssP6_vy988Z2Jgb2Ds0ZPDFcKnwwo9RmEbevmWD-oo/exec";
const form = document.forms["submit-to-google-sheet"];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  // Nname.addEventListener("input", (e) => {
  //   const Namei = e.target.value;
  // });
  // email.addEventListener("input", (e) => {
  //   const emaili = e.target.value;
  // });
  // subject.addEventListener("input", (e) => {
  //   const subjecti = e.target.value;
  // });
  // Message.addEventListener("input", (e) => {
  //   const MessageI = e.target.value;
  // });

  // const name =

  // if (
  //   Nname.target.value.length > 0 &&
  //   email.target.value.length > 0 &&
  //   subject.target.value.length > 0 &&
  //   Message.target.value.length > 0
  // ) {
  //   fetch(scriptURL, { method: "POST", body: new FormData(form) })
  //     .then((response) => alert("Success!", response))
  //     .catch((error) => alert("Error!", error.message));
  // } else {
  //   alert("Please fill the in the boxes");
  // }

  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then(
      (response) => alert("Success!", response),
      (window.location.href = "#")
    )
    .catch((error) => alert("Error!", error.message));
});
