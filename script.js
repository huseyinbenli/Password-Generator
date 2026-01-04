const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];

const firstPassword = document.querySelector(".first-password");
const secondPassword = document.querySelector(".second-password");
const button = document.querySelector("button");
const value = document.getElementById("value");
const input = document.getElementById("lenght");
const container = document.querySelector(".container");

value.textContent = input.value;
input.addEventListener("input", (e) => {
  value.textContent = e.target.value;
});

function generatePassword() {
  let n = input.value;
  value.textContent = n;
  firstPassword.textContent = "";
  secondPassword.textContent = "";
  for (let i = 0; i < n; i++) {
    let randomIndex1 = Math.floor(Math.random() * characters.length);
    let randomIndex2 = Math.floor(Math.random() * characters.length);

    firstPassword.textContent += characters[randomIndex1];
    secondPassword.textContent += characters[randomIndex2];
  }
}

button.addEventListener("click", generatePassword);

const passwords = document.querySelectorAll(".password");

passwords.forEach((e) => {
  e.addEventListener("click", () => {
    navigator.clipboard.writeText(e.textContent);

    const para = document.createElement("p");
    para.textContent = "Copied to Clipboard";
    container.appendChild(para);
    setTimeout(() => {
      para.remove();
    }, 2000);
  });
});
