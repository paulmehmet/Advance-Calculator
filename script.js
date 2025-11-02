const display = document.getElementById("display");
const themeSwitch = document.getElementById("themeSwitch");
let memory = 0;

// Append value to display
function appendValue(value) {
  display.value += value;
}

// Clear all
function clearDisplay() {
  display.value = "";
}

// Delete last character
function deleteLast() {
  display.value = display.value.slice(0, -1);
}

// Calculate result safely
function calculateResult() {
  try {
    const result = eval(display.value.replace("÷", "/").replace("×", "*"));
    display.value = result;
  } catch {
    display.value = "Error";
  }
}

// Scientific operations
function squareRoot() {
  display.value = Math.sqrt(parseFloat(display.value)) || "";
}

function square() {
  display.value = Math.pow(parseFloat(display.value), 2) || "";
}

function inverse() {
  display.value = 1 / parseFloat(display.value) || "";
}

function toggleSign() {
  if (display.value.startsWith("-")) {
    display.value = display.value.slice(1);
  } else {
    display.value = "-" + display.value;
  }
}

// Memory functions
function memoryAdd() {
  memory += parseFloat(display.value) || 0;
}

function memorySubtract() {
  memory -= parseFloat(display.value) || 0;
}

function memoryRecall() {
  display.value += memory;
}

function memoryClear() {
  memory = 0;
}

// Dark / Light mode
themeSwitch.addEventListener("change", () => {
  document.body.classList.toggle("dark");
});

// Keyboard input support
document.addEventListener("keydown", (e) => {
  const key = e.key;

  if (!isNaN(key) || "+-*/.%".includes(key)) appendValue(key);
  else if (key === "Enter") calculateResult();
  else if (key === "Backspace") deleteLast();
  else if (key === "Escape") clearDisplay();
});
