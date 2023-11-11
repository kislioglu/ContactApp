import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from "react-router-dom";
import routes from './routes';
import Sidebar from './components/layouts/main/sidebar';
import './assets/css/tailwind.css';
document.body.style.overflow = "hidden";

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <>
  <RouterProvider router={routes}> 
    <Sidebar />
  </RouterProvider>
  </>
);

