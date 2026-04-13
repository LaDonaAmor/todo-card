# Todo Item Card — HNGi14 Stage 0 Task

A clean, accessible, and responsive Todo Card component built with **HTML, CSS, and JavaScript**.

This project focuses on **testability, accessibility, and responsiveness**, as required for the Frontend Wizards Stage 0 Task.

---

## Live Demo

https://ladonaamor.github.io/todo-card

---

## GitHub Repository

https://github.com/LaDonaAmor/todo-card

---

## How to Run Locally

1. Clone the repository:

   ```
   git clone https://github.com/LaDonaAmor/todo-card.git
   ```

2. Navigate into the project folder:

   ```
   cd todo-card
   ```

3. Open `index.html` in your browser:

   * Double-click the file
     OR
   * Use Live Server (recommended in VS Code)

---

## Features

* ✅ Semantic HTML structure (`article`, `time`, `button`, `ul/li`)
* ✅ Accessible UI (aria labels, keyboard navigation, focus states)
* ✅ Responsive design (320px → 1200px)
* ✅ Dynamic time remaining calculation:

  * "Due in X days"
  * "Due tomorrow"
  * "Overdue by X hours"
  * "Due now!"
* ✅ Auto-updating time every 60 seconds
* ✅ Interactive checkbox:

  * Toggles completed state
  * Updates status dynamically
* ✅ Tag system with flexible wrapping
* ✅ Edit & Delete button interactions

---

## Decisions Made

* **Used semantic HTML elements** (`article`, `time`, `ul/li`) to improve accessibility and structure.
* **Used `aria-labelledby` for checkbox accessibility** instead of a visible label to maintain UI clarity.
* **Separated due date and time remaining** for better clarity and testability.
* **Used CSS class toggling (`.completed`)** for visual state changes instead of inline styles.
* **Implemented time calculation in JavaScript** to ensure dynamic and accurate updates.

---

## Trade-offs

* Chose **vanilla JavaScript** instead of a framework (e.g., React) to align with task requirements.
* Time updates every **60 seconds** instead of real-time seconds to reduce unnecessary re-renders.
* Did not persist state (e.g., checkbox state resets on refresh) to keep scope aligned with Stage 0.
* Minimal animations were used to prioritise clarity and performance.

---

## Accessibility

* Checkbox is keyboard accessible and screen-reader friendly
* Buttons have accessible labels
* Focus states are clearly visible
* Colour contrast adjusted to meet WCAG AA standards

---

## Responsiveness

* Mobile-first layout (stacked design)
* Max-width container for larger screens
* Flexible tags with `flex-wrap`
* No horizontal overflow across screen sizes

---

## Basic Testing (Manual)

Tested the following interactions manually:

Checkbox:
Toggles between "Pending" and "Done"
Applies completed styling correctly

Time Remaining:
Displays correct values based on due date
Updates every 60 seconds

Buttons:
Edit logs message to console
Delete triggers alert

Accessibility:
All interactive elements are keyboard accessible
Focus states visible
Screen reader labels verified

---

##  Author

Racheal I. Ogunmodede (TechNurse)

---
