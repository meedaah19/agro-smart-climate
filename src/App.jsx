import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './pages/Home';
import Root from './components/Root';
import AccCreated from "./components/AccCreated";

    const router = createBrowserRouter([
      {
        path: '/',
        element: <Root/>,
        children: [
          { index: true, element: <Home/>},
          { path: 'signup', element: <Home/> },
          {path: 'accountCreated', element: <AccCreated/>}

    ]}
    ])

  export default function App() {
    return (
        <RouterProvider router={router} />
    )}