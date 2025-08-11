import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './pages/Home';
import Signup  from './components/Signup';
import Root from './components/Root';

    const router = createBrowserRouter([
      {
        path: '/',
        element: <Root/>,
        children: [
          { index: true, element: <Home/>},
          { path: 'signup', element: <Home showSignupModal /> } 

    ]}
    ])

  export default function App() {
    return (
        <RouterProvider router={router} />
    )}