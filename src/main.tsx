import React from 'react'
import ReactDOM from 'react-dom/client'
import { Outlet, RouterProvider } from 'react-router-dom';
import { Footer } from './components/footer';
import { Header } from './components/Header/Header';
import { GlobalStyle } from './Pages/globalStyle'
import { Home } from "./Pages/Home/Index";
import { router } from './router/Router';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyle/>
    <RouterProvider router={router} />
  </React.StrictMode>
)
