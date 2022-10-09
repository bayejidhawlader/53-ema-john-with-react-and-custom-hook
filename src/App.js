import "./App.css";
import Main from "./layout/Main";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Shop from "./components/Shop/Shop";
import Inventory from "./components/Inventory/Inventory";
import About from "./components/About/About";
import Orders from "./components/Orders/Orders";
import { productsAndCartLoader } from "./layout/ProductsAndCartLoader";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          loader: () => fetch("products.json"),
          element: <Shop></Shop>,
        },
        {
          path: "/orders",
          loader: productsAndCartLoader,
          element: <Orders></Orders>,
        },
        {
          path: "/inventory",
          element: <Inventory></Inventory>,
        },
        {
          path: "/about",
          element: <About></About>,
        },
      ],
    },
  ]);

  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
