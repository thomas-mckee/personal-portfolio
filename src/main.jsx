import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Analytics } from '@vercel/analytics/react'

import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { TailwindKOMPage } from './pages/TailwindkomPage';
import { RubiksCubeSolverPage } from './pages/RubiksCubeSolverPage';

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
    element: <TailwindKOMPage />,
  },
  {
    path: '/projects/rubikscubesolver',
    element: <RubiksCubeSolverPage />
  },
]);

createRoot(document.getElementById('root')).render(
  <>
    <RouterProvider router={router} />
    <Analytics />
  </>
)
