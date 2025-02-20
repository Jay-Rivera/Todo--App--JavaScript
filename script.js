const inputValue = document.querySelector(".input__section--input");
const addBtn = document.querySelector(".add__button");
const taskSection = document.querySelector(".task__section");
const taskList = document.querySelector(".task__list");
const deleteTaskBtn = document.querySelector(".delete__task-btn");

addBtn.addEventListener("click", () => {
  const task = inputValue.value;

  if (task) {
    const li = document.createElement("li");
    li.innerHTML = `
            <input type="checkbox" class="checkbox" />
            <span>${task}</span>
            <button class="delete__task-btn">Delete</button>
        `;
    taskList.appendChild(li);
    inputValue.value = "";
  }
});

const deleteTask = (e) => {
  if (e.target.classList.contains("delete__task-btn")) {
    e.target.parentElement.remove();
  }
};

taskList.addEventListener("click", deleteTask);
