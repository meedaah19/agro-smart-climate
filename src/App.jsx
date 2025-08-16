import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './pages/Home';
import Root from './pages/Root';
import AccCreated from "./pages/AccCreated";
import About from "./pages/About";
import Climate from "./pages/Climate";

    const router = createBrowserRouter([
      {
        path: '/',
        element: <Root/>,
        children: [
          { index: true, element: <Home/>},
          { path: 'signup', element: <Home/> },
          {path: 'accountCreated', element: <AccCreated/>},
          {path: 'about', element: <About/>},
          {path: '/climate-tools', element: <Climate/>}

    ]}
    ])

  export default function App() {
    return (
        <RouterProvider router={router} />
    )}