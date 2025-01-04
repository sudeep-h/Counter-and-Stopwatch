# Counter and Stopwatch Timer Project

## Overview
This is a small project that implements a **Counter Machine** and a **Stopwatch Timer** using JavaScript, HTML, and CSS. The primary focus of this project is to demonstrate the practical application of **JavaScript closures**.

## Features
1. **Counter Machine**:
   - Increments a counter every second when the **Counter** button is clicked.
   - Stops the counter when the **Stop** button is clicked and displays a message.

2. **Stopwatch Timer**:
   - Takes user input for a duration in seconds.
   - Displays a counter that increments every second.
   - Automatically stops and displays a timeout message when the duration is reached.

### Closures in Action
- The project uses closures to create an internal counter function. This ensures that the counter variable remains encapsulated and private, providing a clean and functional approach to state management.

Example of the closure:
```javascript
let counter = function() {
    let count = 0;
    return function inside() {
        count++;
        return count;
    }
}
```

### Event Handling
- Button clicks and form submissions are handled using `addEventListener`, ensuring dynamic and responsive interactions.

### Timing Functions
- `setInterval` and `setTimeout` are used to implement the core functionality of the counter and stopwatch timer.

## Demo
- Start the **Counter Machine** by clicking the **Counter** button. Stop it using the **Stop** button.
- Use the input field in the **Stopwatch Timer** to specify a duration and click the **Start** button to begin.

## Styling
- The layout and styling of the project use Flexbox for responsive design.
- Buttons are styled with hover effects for better interactivity.

## Learning Outcome
This project demonstrates:
- Practical use of **closures** to manage state effectively.
- Utilizing JavaScript timing functions like `setInterval` and `setTimeout`.
- Building interactive features using DOM manipulation and event listeners.
- Structuring a small project for better readability and maintainability.

## Author
This project was created to apply and showcase my understanding of **JavaScript closures**.


