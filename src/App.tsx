import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import "./index.css";

function App() {
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
