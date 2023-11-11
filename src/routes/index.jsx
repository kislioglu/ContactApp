import {createBrowserRouter} from "react-router-dom";
import Home from "../components/routers/home";
import Messages from "../components/routers/messages";
import Calls from "../components/routers/calls";
import Devices from "../components/routers/devices";
import Contacts from "../components/routers/contacts/contacts";
import Settings from "../components/routers/settings/settings";
import MainLayout from "../components/layouts/main";

  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "messages",
          element: <Messages />,
        },
        {
            path: "calls",
            element: <Calls />,
        },
        {
            path: "devices",
            element: <Devices />,
        },
        {
            path: "contacts",
            element: <Contacts />
        },
        {
            path: "settings",
            element: <Settings />
        }
      ]
    } 
  ]);
  export default routes;