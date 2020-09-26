const form = document.querySelector("#form");
const task = document.querySelectorAll(".task");
const input = document.querySelector("#inputfield");
const container = document.querySelector(".output_container");
const errorMessage = document.querySelector(".error-message");

const containerLength = container.children.length;
// Get random Background Color (HexaDecimal)

const randomBackgroundColor = () => {
  const chars = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "A", "B", "C", "D", "E", "F"];
  let result = "#";
  const charactersLength = chars.length;

  for (let i = 0; i < 6; i++) {
    result += chars[Math.floor(Math.random() * charactersLength)];
  }
  return result;
};

// Add Task

const create = () => {
  if (input.value === "") {
    errorMessage.innerText = "Task must have a Value";
    return;
  }
  const containerLength = container.children.length;
  if (containerLength > 10) {
    errorMessage.innerText = "Too Many Tasks!";
    return;
  }

  errorMessage.innerText = "";

  const icon = document.createElement("i");
  icon.classList.add("fas");
  icon.classList.add("fa-times");

  const task = document.createElement("div");
  task.classList.add("task");
  task.innerText = input.value;
  container.appendChild(task);
  task.appendChild(icon);

  task.addEventListener("click", () => {
    task.classList.toggle("checked");
  });
  icon.addEventListener("click", () => {
    task.remove();
  });
};

// Post task to the HTML with the submit button

form.addEventListener("submit", (e) => {
  e.preventDefault();

  create();
  const containerLength = container.children.length;
  console.log(containerLength);
  input.value = "";
});
