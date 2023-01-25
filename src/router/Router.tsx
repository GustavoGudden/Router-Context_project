import { createBrowserRouter } from "react-router-dom";
import { App } from "../app";
import { PageCarrinho } from "../Pages/favorite";
import { Home } from "../Pages/Home/Index";
import ErrorPage from "./error";

 export const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      errorElement: <ErrorPage />,
      children:[
        {
          path:"/",
          element:<Home/>,
          errorElement: <ErrorPage />,
          },
          {
           path:"/favorites",
           element:<PageCarrinho/>,
           errorElement:<ErrorPage/>

          }
      ]
    },
   
  ]);