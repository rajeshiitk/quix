import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage, LoginPage,SignUpPage } from "./routes/Routes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/sign-up",
    element: <SignUpPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
