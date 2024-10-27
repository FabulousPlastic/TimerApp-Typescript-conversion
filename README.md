Here’s an updated README with the correct installation instructions for dependencies:

---

# Timer App ⏲️

A customizable timer application with multiple interactive views, built using React and Framer Motion. This app allows users to set work and pause intervals, cycle counts, and switch between Analog, Digital, and Text views, all while maintaining the timer state. The app includes animated transitions and engaging loading and alarm screens.

## Features

- **Loading and Alarm Screens**: Animated loading and alarm screens using dynamic PNG animations.
- **Customizable Timer Settings**: Set work duration, pause duration, and repeat cycles.
- **Multiple Timer Views**:
  - **Analog View**: Displays a classic clock with animated hands.
  - **Digital View**: Shows the countdown in digital format.
  - **Text View**: A unique countdown with animated text.
- **State Persistence**: Timer continues from where it left off even when switching views.
- **Stylized Buttons**: 1950s comic-inspired button designs with hover and click animations.

## Tech Stack

- **React**: Component-based structure and state management.
- **Framer Motion**: For seamless animations and transitions.
- **CSS**: Custom styling with support for animations and responsive design.

## Getting Started

### Prerequisites

- Node.js and npm installed.

### Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/yourusername/timer-app.git
   cd timer-app
   ```
2. Install dependencies:
   ```bash
   npm install react framer-motion easytimer-react-hook
   ```

### Running the App

To start the app locally:
```bash
npm start
```

Visit `http://localhost:3000` in your browser to view the app.

### File Structure

- **src/Components**: Individual components for different views and screens.
- **src/Context**: Context API for managing global timer state.
- **src/Styles**: CSS files for styling components.
- **src/Assets**: Images and logos used in animations.

## License

This project is licensed under the MIT License. See `LICENSE` for more details.

---