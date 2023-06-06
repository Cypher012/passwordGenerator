const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const btn = document.querySelector("#submit");
const range = document.getElementById("range");
const passwrdLength = document.querySelector("#length");
const password = document.querySelector("#password");
const frame = document.querySelector("#input-container span");

const btnCopy = document.querySelector("#input-container #copied");
const btnChecked = document.querySelector("#input-container #checked");

let value;

document.addEventListener("DOMContentLoaded", () => {
  const form = document.forms["password-menu"].reset();
  password.value = "";
});

range.addEventListener("change", () => {
  passwrdLength.value = range.value;
  value = passwrdLength.value;
});

passwrdLength.addEventListener("keyup", () => {
  value = passwrdLength.value;
});

passwrdLength.addEventListener("input", () => {
  value = passwrdLength.value;
});

const charSets = [
  "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  "abcdefghijklmnopqrstuvwxyz",
  "0123456789",
  "!@#$%^&*()_-+=<>?/",
];

let arr = [];

const [uppercase, lowercase, numeric, symbols] = charSets;

checkboxes.forEach((checkbox) => {
  checkbox.addEventListener("change", (e) => {
    if (e.target.checked) {
      if (e.target.id === "uppercase") {
        arr.push(uppercase);
      }
      if (e.target.id === "lowercase") {
        arr.push(lowercase);
      }
      if (e.target.id === "numeric") {
        arr.push(numeric);
      }
      if (e.target.id === "symbols") {
        arr.push(symbols);
      }
    } else {
      if (e.target.id === "uppercase") {
        arr = arr.filter((e) => e !== uppercase);
      }
      if (e.target.id === "lowercase") {
        arr = arr.filter((e) => e !== lowercase);
      }
      if (e.target.id === "numeric") {
        arr = arr.filter((e) => e !== numeric);
      }
      if (e.target.id === "symbols") {
        arr = arr.filter((e) => e !== symbols);
      }
    }
  });
});

btn.addEventListener("click", function (e) {
  e.preventDefault();
  const newArr = arr.join("");

  const generatePassword = (length) => {
    let randomText = "";

    if (length <= 20 && /\d+/.test(length)) {
      for (let i = 0; i < length; i++) {
        const randomChar = newArr[Math.floor(Math.random() * newArr.length)];
        randomText += randomChar;
      }

      return randomText;
    } else {
      return randomText;
    }
  };
  password.value = generatePassword(value);
  // const form = document.forms["password-menu"].reset();

  btnCopy.style.display = "block";
  btnChecked.style.display = "none";
});

frame.addEventListener("click", (e) => {
  password.select();
  document.execCommand("copy");
  console.log(e.target.id);

  if (e.target.id === "copied") {
    btnCopy.style.display = "none";
    btnChecked.style.display = "block";
  } else {
    btnChecked.style.display = "none";
    btnCopy.style.display = "block";
  }
});
