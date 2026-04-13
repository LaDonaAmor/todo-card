const checkbox = document.querySelector(".task-complete");
const card = document.querySelector(".card-container");
const title = document.querySelector(".title");
const taskStatus = document.querySelector(".status");
const timeRemaining = document.querySelector(".time-remaining");
const editBtn = document.querySelector('[data-testid="test-todo-edit-button"]');
const deleteBtn = document.querySelector(
  '[data-testid="test-todo-delete-button"]',
);

checkbox.addEventListener("change", (e) => {
  card.classList.toggle("completed");

  if (e.target.checked) {
    taskStatus.classList.replace("pending", "done");
    taskStatus.textContent = "Done";
  } else {
    taskStatus.classList.replace("done", "pending");
    taskStatus.textContent = "Pending";
  }
});

const dueDate = new Date("2026-04-15T18:00:00");

function calculateTimeRemaining() {
  const now = new Date();
  const difference = dueDate - now;

  const absDiff = Math.abs(difference);

  const days = Math.floor(absDiff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((absDiff / (1000 * 60 * 60)) % 24);
  const totalHours = Math.floor(absDiff / (1000 * 60 * 60));

  if (difference < 0) {
    if (totalHours < 1) {
      timeRemaining.textContent = "Due now!";
    } else {
      timeRemaining.textContent = `Overdue by ${totalHours} hour${totalHours > 1 ? "s" : ""}`;
    }
  } else if (difference < 1000 * 60 * 60) {
    timeRemaining.textContent = "Due now!";
  } else if (difference < 1000 * 60 * 60 * 24) {
    timeRemaining.textContent = `Due in ${totalHours} hour${totalHours > 1 ? "s" : ""}`;
  } else if (days === 1) {
    timeRemaining.textContent = "Due tomorrow";
  } else {
    timeRemaining.textContent = `Due in ${days} days`;
  }
}

calculateTimeRemaining();
setInterval(calculateTimeRemaining, 60000);

editBtn.addEventListener("click", (e) => {
  console.log("Edit Clicked");
});

deleteBtn.addEventListener("click", (e) => {
  alert("Delete Clicked");
});
