import React from "react";
import { Route} from "react-router-dom";
import Home from "./components/Home";
import WeekView from "./components/WeekView"
import { createRoutesFromElements,createBrowserRouter,RouterProvider } from "react-router-dom";

const App = () => {
   
  const router=createRoutesFromElements(<>
    <Route path="/" element={<Home/>}/>
    <Route path="/week-view" element={<WeekView/>}/>
   </>);
  const routes=createBrowserRouter(router);
  
  return (
    <RouterProvider router={routes}/>
  );
};

export default App;