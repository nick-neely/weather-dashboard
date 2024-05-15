import { Outlet, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import WeatherDetail from "./pages/WeatherDetail";
import NavBar from "./components/NavBar";
import ErrorPage from "./pages/ErrorPage";
import About from "./pages/About";
import Footer from "./components/Footer";

function Layout() {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
}

export const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        errorElement: <ErrorPage />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "weather",
        element: <WeatherDetail />,
      },
    ],
  },
]);
