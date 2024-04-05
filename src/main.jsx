import ReactDOM from "react-dom/client";
import store from "./redux/store.js";
import "./index.css";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home.jsx";
import { Provider } from "react-redux";
import CountryList from "./components/CountryList.jsx";
import StateList from "./components/StateList.jsx";
import CityList from "./components/CityList.jsx";
import PlaceList from "./components/PlaceList.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/country",
    element: <CountryList />,
  },
  {
    path: "/country/:id",
    element: <StateList />,
  },
  {
    path: "/country/state/:id",
    element: <CityList />,
  },
  {
    path: "/state/place",
    element: <PlaceList />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </>
);
