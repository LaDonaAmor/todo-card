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
   - Double-click the file
     OR
   - Use Live Server (recommended in VS Code)

---

## Features

- ✅ Semantic HTML structure (`article`, `time`, `button`, `ul/li`)
- ✅ Accessible UI (aria labels, keyboard navigation, focus states)
- ✅ Responsive design (320px → 1200px)
- ✅ Dynamic time remaining calculation:
  - "Due in X days"
  - "Due tomorrow"
  - "Overdue by X hours"
  - "Due now!"

- ✅ Auto-updating time every 60 seconds
- ✅ Interactive checkbox:
  - Toggles completed state
  - Updates status dynamically

- ✅ Tag system with flexible wrapping
- ✅ Edit & Delete button interactions

---

## Decisions Made

- **Used semantic HTML elements** (`article`, `time`, `ul/li`) to improve accessibility and structure.
- **Used `aria-labelledby` for checkbox accessibility** instead of a visible label to maintain UI clarity.
- **Separated due date and time remaining** for better clarity and testability.
- **Used CSS class toggling (`.completed`)** for visual state changes instead of inline styles.
- **Implemented time calculation in JavaScript** to ensure dynamic and accurate updates.

---

## Trade-offs

- Chose **vanilla JavaScript** instead of a framework (e.g., React) to align with task requirements.
- Time updates every **60 seconds** instead of real-time seconds to reduce unnecessary re-renders.
- Did not persist state (e.g., checkbox state resets on refresh) to keep scope aligned with Stage 0.
- Minimal animations were used to prioritise clarity and performance.

---

## Accessibility

- Checkbox is keyboard accessible and screen-reader friendly
- Buttons have accessible labels
- Focus states are clearly visible
- Colour contrast adjusted to meet WCAG AA standards

---

## Responsiveness

- Mobile-first layout (stacked design)
- Max-width container for larger screens
- Flexible tags with `flex-wrap`
- No horizontal overflow across screen sizes

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

# Todo Item Card — HNGi14 Stage 1a Task

This stage builds on Stage 0 by introducing **state management, edit functionality, status control, and richer UI behavior**.

---

## What Changed from Stage 0

Stage 1a introduces **stateful and interactive behavior**:

- Added **Edit Mode** with form inputs (title, description, priority, due date)
- Implemented **status control** (Pending, In Progress, Done)
- Synced **checkbox + status logic**
- Added **dynamic priority indicator**
- Implemented **expand/collapse description**
- Improved **time handling**:
- More granular (minutes, hours, days)
- Overdue detection
- Stops updating when task is completed
- Introduced **state management (JavaScript object)**
- Improved **visual state feedback** (completed, overdue, in-progress)

---

## Features

- ✅ Editable todo content (title, description, priority, due date)
- ✅ Status transitions (Pending ↔ In Progress ↔ Done)
- ✅ Expand/collapse long descriptions
- ✅ Dynamic time updates every 60 seconds
- ✅ Overdue detection with visual indicator
- ✅ Priority indicator (Low, Medium, High)
- ✅ Fully responsive layout
- ✅ Keyboard accessible interactions
- ✅ Clean state management (single source of truth)

---

## Design Decisions

- **Centralized state (`todoState`)**
  → Keeps UI consistent and predictable

- **Single component approach**
  → Matches task requirement (not a full app)

- **Class-based UI updates**
  → Easier to manage visual states (`.completed`, `.overdue`, etc.)

- **Conditional rendering logic**
  → Keeps DOM updates minimal and efficient

- **Transform-based animations**
  → Avoids performance issues from `max-height` transitions

- **Mobile-first layout**
  → Ensures usability across all screen sizes

---

## Known Limitations

- ❌ No data persistence (state resets on refresh)
- ❌ No backend or storage integration
- ❌ No drag-and-drop or multi-task support
- ❌ Focus trap in edit mode not fully implemented (optional enhancement)
- ❌ Animation for expand/collapse is simplified (not height-auto smooth)

---

## Accessibility Notes

- ✅ All form fields have associated `<label>`
- ✅ Status control has an accessible name
- ✅ Expand/collapse uses:
- `aria-expanded`
- `aria-controls`
- ✅ Live time updates use:
- `aria-live="polite"`
- `role="status"`
- ✅ Keyboard navigation flow maintained:
- Checkbox → Status → Expand → Edit → Delete → Form actions
- ✅ Focus states clearly visible
- ✅ Improved color contrast (WCAG-friendly)

---

## Responsiveness

- 📱 **320px (Mobile)**
- Fully stacked layout
- Edit form fields stacked vertically

- 📲 **768px (Tablet)**
- Improved spacing and readability
- Flexible wrapping maintained

- 💻 **1024px+ (Desktop)**
- Priority and status align horizontally
- Layout remains stable with long content

- ✅ Handles edge cases:
- Long titles wrap properly
- Tags wrap without breaking layout
- Long descriptions remain contained

---

## Basic Testing (Manual)

### Edit Mode

- Opens form correctly
- Save updates UI state
- Cancel restores previous values

### Status Logic

- Checkbox toggles Done state
- Status dropdown syncs with checkbox
- Done → unchecked returns to correct previous state

### Expand / Collapse

- Toggles long descriptions
- Accessible via keyboard

### Time Handling

- Updates every 60 seconds
- Displays correct:
- Minutes / Hours / Days
- Overdue states
- Stops updating when task is completed

### Accessibility

- All interactive elements keyboard accessible
- Screen reader attributes verified
- Focus states visible

---

## Author

Racheal I. Ogunmodede (TechNurse)

---
