import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Navbar1 from './components/navbars/Navbar1.tsx';
import Navbar2 from './components/navbars/Navbar2.tsx';
import HeroSection1 from './components/heroSections/v1/HeroSection1.tsx';
import HeroSection2 from './components/heroSections/v1/HeroSection2.tsx';
import HeroSection3 from './components/heroSections/v1/HeroSection3.tsx';
import HeroSection4 from './components/heroSections/v1/HeroSection4.tsx';
import HeroSection5 from './components/heroSections/v2/HeroSection1.tsx';
import HeroSection6 from './components/heroSections/v2/HeroSection2.tsx';
import HeroSection7 from './components/heroSections/v2/HeroSection3.tsx';
import HeroSection8 from './components/heroSections/v2/HeroSection4.tsx';
import CTA1 from './components/CTAs/CTA1.tsx';
import CTA2 from './components/CTAs/CTA2.tsx';
import CTA3 from './components/CTAs/CTA3.tsx';
import CTA4 from './components/CTAs/CTA4.tsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      // Navigation Bars
      {
        path: "/navigation-bar-1",
        element: <Navbar1 />
      },
      {
        path: "/navigation-bar-2",
        element: <Navbar2 />
      },

      // Hero Sections
      {
        path: "/hero-section-1",
        element: <HeroSection1 />
      },
      {
        path: "/hero-section-2",
        element: <HeroSection2 />
      },
      {
        path: "/hero-section-3",
        element: <HeroSection3 />
      },
      {
        path: "/hero-section-4",
        element: <HeroSection4 />
      },
      {
        path: "/hero-section-5",
        element: <HeroSection5 />
      },
      {
        path: "/hero-section-6",
        element: <HeroSection6 />
      },
      {
        path: "/hero-section-7",
        element: <HeroSection7 />
      },
      {
        path: "/hero-section-8",
        element: <HeroSection8 />
      },

      // CTAs
      {
        path: "/cta-1",
        element: <CTA1 />
      },
      {
        path: "/cta-2",
        element: <CTA2 />
      },
      {
        path: "/cta-3",
        element: <CTA3 />
      },
      {
        path: "/cta-4",
        element: <CTA4 />
      },
    ]
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
