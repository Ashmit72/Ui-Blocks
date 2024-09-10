import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Test from './test.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [

    ]
  },
  {
    path: "/test",
    element: <Test />,
    children: [

    ]
  }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
