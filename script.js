// Создаем контейнер для калькулятора
const calcContainer = document.createElement("div");
calcContainer.classList.add("calc-container");

// Создаем элементы для вывода значения
const outputValue = document.createElement("div");
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
  button.addEventListener("click", function (event) {
    event.preventDefault();
  });
  button.addEventListener("click", () => {
    handleButtonClick(btn.text);
  });
  button.addEventListener("mousedown", () => {
    button.style.backgroundColor = "red";
  });
  button.addEventListener("mouseup", () => {
    button.style.removeProperty("background-color");
  });
  button.addEventListener("touchstart", () => {
    button.style.backgroundColor = "red";
  });
  button.addEventListener("touchend", () => {
    button.style.removeProperty("background-color");
  });

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
