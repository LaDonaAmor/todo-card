const cardContainer = document.querySelector(".card-container");

const taskCompleteCheckbox = cardContainer.querySelector(".task-complete");
const taskTitle = cardContainer.querySelector("#task-title");
const taskDescription = cardContainer.querySelector(".description");

const priorityIndicator = cardContainer.querySelector(".priority-indicator");
const priorityText = cardContainer.querySelector(".priority");
const statusText = cardContainer.querySelector(".status");

const statusSelect = cardContainer.querySelector(".status-select");

const dueDateElement = cardContainer.querySelector("time");
const timeRemaining = cardContainer.querySelector(".time-remaining");
const overdueIndicator = cardContainer.querySelector(".overdue-indicator");

const expandToggle = cardContainer.querySelector(".expand-toggle");
const collapsibleSection = cardContainer.querySelector(".collapsible-section");

const editButton = cardContainer.querySelector(
  '[data-testid="test-todo-edit-button"]',
);
const deleteButton = cardContainer.querySelector(
  '[data-testid="test-todo-delete-button"]',
);

const editForm = cardContainer.querySelector(
  '[data-testid="test-todo-edit-form"]',
);
const editTitleInput = cardContainer.querySelector(
  '[data-testid="test-todo-edit-title-input"]',
);
const editDescriptionInput = cardContainer.querySelector(
  '[data-testid="test-todo-edit-description-input"]',
);
const editPrioritySelect = cardContainer.querySelector(
  '[data-testid="test-todo-edit-priority-select"]',
);
const editDueDateInput = cardContainer.querySelector(
  '[data-testid="test-todo-edit-due-date-input"]',
);

const saveButton = cardContainer.querySelector(
  '[data-testid="test-todo-save-button"]',
);
const cancelButton = cardContainer.querySelector(
  '[data-testid="test-todo-cancel-button"]',
);

const todoState = {
  title: "",
  description: "",
  priority: "high",
  status: "pending",
  previousStatus: "pending",
  dueDate: null,
  completed: false,
  isEditing: false,
  isExpanded: false,
};

let timer;

function initializeState() {
  todoState.title = taskTitle.textContent.trim();
  todoState.description = taskDescription.textContent.trim();

  todoState.priority = priorityText.classList.contains("high")
    ? "high"
    : priorityText.classList.contains("medium")
      ? "medium"
      : "low";

  todoState.status = statusText.classList.contains("pending")
    ? "pending"
    : statusText.classList.contains("in-progress")
      ? "in-progress"
      : "done";

  todoState.completed = taskCompleteCheckbox.checked;

  const dueDateStr = dueDateElement.getAttribute("datetime");
  if (dueDateStr) todoState.dueDate = new Date(dueDateStr);

  render();
  startTimer();
}

function calculateTimeRemaining() {
  if (todoState.status === "done") {
    return { text: "Completed", isOverdue: false };
  }

  if (!todoState.dueDate) {
    return { text: "No due date", isOverdue: false };
  }

  const now = new Date();
  const diff = todoState.dueDate - now;

  const absMinutes = Math.floor(Math.abs(diff) / (1000 * 60));
  const absHours = Math.floor(Math.abs(diff) / (1000 * 60 * 60));
  const absDays = Math.floor(Math.abs(diff) / (1000 * 60 * 60 * 24));

  if (diff < 0) {
    if (absHours < 1) return { text: "Overdue by < 1 hour", isOverdue: true };
    if (absDays >= 1)
      return {
        text: `Overdue by ${absDays} day${absDays > 1 ? "s" : ""}`,
        isOverdue: true,
      };

    return {
      text: `Overdue by ${absHours} hour${absHours > 1 ? "s" : ""}`,
      isOverdue: true,
    };
  }

  if (absMinutes < 60) {
    return {
      text: `Due in ${absMinutes} minute${absMinutes > 1 ? "s" : ""}`,
      isOverdue: false,
    };
  }

  if (absHours < 24) {
    return {
      text: `Due in ${absHours} hour${absHours > 1 ? "s" : ""}`,
      isOverdue: false,
    };
  }

  return {
    text: `Due in ${absDays} day${absDays > 1 ? "s" : ""}`,
    isOverdue: false,
  };
}

function startTimer() {
  timer = setInterval(() => {
    if (todoState.status === "done") {
      clearInterval(timer);
      return;
    }
    render();
  }, 60000);
}

function render() {
  taskTitle.textContent = todoState.title;

  const isLong = todoState.description.length > 120;

  if (!isLong) {
    taskDescription.textContent = todoState.description;
    expandToggle.style.display = "none";
    collapsibleSection.classList.add("expanded");
  } else {
    expandToggle.style.display = "inline-block";

    if (todoState.isExpanded) {
      taskDescription.textContent = todoState.description;
      collapsibleSection.classList.add("expanded");
      expandToggle.textContent = "Collapse";
    } else {
      taskDescription.textContent = todoState.description.slice(0, 120) + "...";
      collapsibleSection.classList.remove("expanded");
      expandToggle.textContent = "Expand";
    }

    expandToggle.setAttribute("aria-expanded", todoState.isExpanded);
    expandToggle.setAttribute(
      "aria-label",
      todoState.isExpanded ? "Collapse description" : "Expand description",
    );
  }

  taskCompleteCheckbox.checked = todoState.completed;
  cardContainer.classList.toggle("completed", todoState.completed);

  statusText.className = `status ${todoState.status}`;
  statusText.textContent =
    todoState.status === "in-progress"
      ? "In Progress"
      : todoState.status.charAt(0).toUpperCase() + todoState.status.slice(1);

  statusSelect.value = todoState.status;

  priorityIndicator.className = `priority-indicator ${todoState.priority}`;
  priorityText.className = `priority ${todoState.priority}`;
  priorityText.textContent =
    todoState.priority.charAt(0).toUpperCase() + todoState.priority.slice(1);

  if (todoState.dueDate) {
    const formatted = todoState.dueDate.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });

    dueDateElement.textContent = formatted;
    dueDateElement.setAttribute("datetime", todoState.dueDate.toISOString());
  }

  const time = calculateTimeRemaining();
  timeRemaining.textContent = time.text;
  overdueIndicator.hidden = !time.isOverdue;
  cardContainer.classList.toggle("overdue", time.isOverdue);

  if (todoState.isEditing) {
    cardContainer.classList.add("editing");

    editTitleInput.value = todoState.title;
    editDescriptionInput.value = todoState.description;
    editPrioritySelect.value = todoState.priority;

    if (todoState.dueDate) {
      editDueDateInput.value = todoState.dueDate.toISOString().slice(0, 16);
    }

    editTitleInput.focus();
  } else {
    cardContainer.classList.remove("editing");
  }
}

function setupEventListeners() {
  editButton.addEventListener("click", () => {
    todoState.isEditing = true;
    render();
  });

  cancelButton.addEventListener("click", () => {
    todoState.isEditing = false;
    render();
    editButton.focus();
  });

  editForm.addEventListener("submit", (e) => {
    e.preventDefault();

    todoState.title = editTitleInput.value.trim();
    todoState.description = editDescriptionInput.value.trim();
    todoState.priority = editPrioritySelect.value;

    if (editDueDateInput.value) {
      todoState.dueDate = new Date(editDueDateInput.value);
    }

    todoState.isEditing = false;
    render();
    editButton.focus();
  });

  deleteButton.addEventListener("click", () => {
    if (confirm("Delete this task?")) {
      alert("Deleted (demo)");
    }
  });

  taskCompleteCheckbox.addEventListener("change", (e) => {
    todoState.completed = e.target.checked;

    if (todoState.completed) {
      if (todoState.status !== "done") {
        todoState.previousStatus = todoState.status;
      }
      todoState.status = "done";
    } else {
      todoState.status = todoState.previousStatus || "pending";
    }

    render();
  });

  statusSelect.addEventListener("change", (e) => {
    const newStatus = e.target.value;

    if (newStatus !== "done") {
      todoState.previousStatus = newStatus;
    }

    todoState.status = newStatus;
    todoState.completed = newStatus === "done";
    render();
  });

  expandToggle.addEventListener("click", () => {
    todoState.isExpanded = !todoState.isExpanded;
    render();
  });
}

function init() {
  initializeState();
  setupEventListeners();
}

init();
