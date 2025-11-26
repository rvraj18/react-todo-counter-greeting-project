import React, { useContext } from "react";
import Greeting from "./components/Greetings";
import Counter from "./components/Counter";
import TodoList from "./components/TodoList";
import "./styles/app.css";

import { AppContext } from "./Providers/AppContext";

// Theme Wrapper Component
const ThemeWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { theme, setTheme } = useContext(AppContext);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className={`app-container ${theme}`}>
      <button onClick={toggleTheme}>
        Switch to {theme === "light" ? "Dark" : "Light"} Theme
      </button>

      {children}
    </div>
  );
};

const App: React.FC = () => {
  return (
    <ThemeWrapper>
      <h1>Hello from React + TypeScript + Webpack ⚛️</h1>
      <p>Everything works perfectly!</p>

      {/* Greeting Component */}
      <div className="card">
        <Greeting />
      </div>

      {/* Counter Component */}
      <Counter />

      {/* Todo List Component */}
      <TodoList />
    </ThemeWrapper>
  );
};

export default App;
