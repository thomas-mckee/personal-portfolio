import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Analytics } from '@vercel/analytics/react'

import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { TailwindKOMProjectPage } from './pages/TailwindKOMProjectPage';

import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/about',
    element: <AboutPage />,
  },
  {
    path: '/projects',
    element: <ProjectsPage />,
  },
  {
    path: '/projects/tailwindkom',
    element: <TailwindKOMProjectPage />,
  },
]);

createRoot(document.getElementById('root')).render(
  <>
    <RouterProvider router={router} />
    <Analytics />
  </>
)
