import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router";
import App from './App.jsx'
import Home from './components/Pages/Home.jsx';
import Mylinktree from './components/MyLinktree/Mylinktree.jsx';
import Userprofile from './components/UserProfile/Userprofile.jsx';
import Profile from './components/Pages/Profile.jsx';
import Analytics from './components/Dashboard/Analytics.jsx';
import Dashboard from './Dashboard.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="profile" element={<Profile />} />
      <Route path="admin" element={<Dashboard />}>
        <Route index element={<Mylinktree />} />
        <Route path="analytics" element={<Analytics />} />
        <Route path="profile" element={<Userprofile />} />
      </Route>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
