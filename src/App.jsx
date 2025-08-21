import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './pages/Home';
import Root from './pages/Root';
import AccCreated from "./pages/AccCreated";
import About from "./pages/About";
import Climate from "./pages/Climate";
import ExportHub from "./pages/ExportHub";
import SmartFarmimg from "./pages/SmartFarming";
import Dashboard from "./pages/Dashboard";
import MiniDashboard from "./pages/MiniDashboard";

    const router = createBrowserRouter([
      {
        path: '/',
        element: <Root/>,
        children: [
          { index: true, element: <Home/>},
          { path: 'signup', element: <Home/> },
          {path: 'accountCreated', element: <AccCreated/>},
          {path: 'about', element: <About/>},
          {path: 'climate-tools', element: <Climate/>},
          {path: 'export-hub', element: <ExportHub/>},
          {path: 'smart-farming', element: <SmartFarmimg/>},
          {path: 'dashboard', element: <Dashboard/>},
          {path: 'miniDashboard', element: <MiniDashboard/>},

    ]}
    ])

  export default function App() {
    return (
        <RouterProvider router={router} />
    )}