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

const div1 = document.querySelector(".pswrd1");
const div2 = document.querySelector(".pswrd2");
const button = document.querySelector("button");
const value = document.getElementById("value");
const input = document.getElementById("lenght");
value.textContent = input.value;
input.addEventListener("input", (e) => {
  value.textContent = e.target.value;
});

function generatePassword() {
  let n = input.value;
  value.textContent = n;
  div1.textContent = "";
  div2.textContent = "";
  for (let i = 0; i < n; i++) {
    let randomIndex1 = Math.floor(Math.random() * characters.length);
    let randomIndex2 = Math.floor(Math.random() * characters.length);

    div1.textContent += characters[randomIndex1];
    div2.textContent += characters[randomIndex2];
  }
}

button.addEventListener("click", generatePassword);

div1.addEventListener("click", () => {
  let content = div1.textContent;

  navigator.clipboard.writeText(content);
});
