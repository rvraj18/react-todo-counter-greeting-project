import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Todos from "../pages/Todos";
import TodoDetails from "../pages/TodoDetails";
import Users from "../pages/Users";
import Posts from "../pages/Posts";
import CounterPage from "../pages/CounterPage"; // if exists

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "todos", element: <Todos /> },
      { path: "todos/:id", element: <TodoDetails /> },
      { path: "users", element: <Users /> },    // NEW
      { path: "posts", element: <Posts /> },    // NEW
      { path: "counter", element: <CounterPage /> } // optional
    ]
  }
]);

export const AppRouter = () => <RouterProvider router={router} />;
