// Создаем контейнер для калькулятора
const calcContainer = document.createElement("div");
calcContainer.classList.add("calc-container");

// Создаем элементы для вывода значения
const outputValue = document.createElement("button");
outputValue.classList.add("output-value");
outputValue.textContent = "0";

// Создаем кнопки
const btns = [
  { text: "1", className: "btn-number" },
  { text: "2", className: "btn-number" },
  { text: "3", className: "btn-number" },
  { text: "C", className: "btn-clear" },
  { text: "4", className: "btn-number" },
  { text: "5", className: "btn-number" },
  { text: "6", className: "btn-number" },
  { text: "*", className: "btn-operation" },
  { text: "7", className: "btn-number" },
  { text: "8", className: "btn-number" },
  { text: "9", className: "btn-number" },
  { text: "/", className: "btn-operation" },
  { text: ".", className: "btn-number" },
  { text: "0", className: "btn-number" },
  { text: "+", className: "btn-operation" },
  { text: "-", className: "btn-operation" },
  { text: "=", className: "btn-equal" },
];

// Добавляем элементы на страницу
document.body.appendChild(calcContainer);
calcContainer.appendChild(outputValue);

btns.forEach((btn) => {
  const button = document.createElement("button");
  button.classList.add("btn", btn.className);
  button.textContent = btn.text;
  // const isTouchDevice = "ontouchstart" in document.documentElement;
  button.addEventListener("touchstart", () => handleButtonClick(btn.text));
  button.addEventListener("mousedown", () => handleButtonClick(btn.text));
  calcContainer.appendChild(button);
});

// Обработчик нажатия на кнопку
function handleButtonClick(value) {
  switch (value) {
    case "C":
      outputValue.textContent = "0";
      break;
    case "=":
      outputValue.textContent = eval(outputValue.textContent);
      break;
    default:
      if (outputValue.textContent === "0") {
        outputValue.textContent = value;
      } else {
        outputValue.textContent += value;
      }
  }
}
document.addEventListener("keydown", function (event) {
  var allowedKeys = [
    "+",
    "-",
    "*",
    "/",
    ".",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
  ];
  var enter = "Enter";
  var backspace = "Backspace";
  var deleteAll = "Delete";
  var key = event.key;
  if (key === enter) {
    outputValue.textContent = eval(outputValue.textContent);
  }
  if (key === deleteAll) {
    outputValue.textContent = "0";
  }
  if (key === backspace) {
    outputValue.textContent = outputValue.textContent.slice(0, -1);
    if (outputValue.textContent === "") {
      outputValue.textContent = "0";
    }
  }
  if (!allowedKeys.includes(key)) {
    event.preventDefault();
  } else {
    if (outputValue.textContent === "0") {
      outputValue.textContent = key;
    } else {
      outputValue.textContent += key;
    }
  }
});
// document.addEventListener("keydown", function (event) {
//   const key = event.key;
//   outputValue.textContent += key;
// });
