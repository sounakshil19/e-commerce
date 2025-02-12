import './App.css'
import List from './Components/List';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Cart from './Components/Cart';
import { Root } from './layouts/root/Root';
import { Login } from './auth/Login';
import PrivateRouter from './utils/PrivateRouter';
import Theme from './theme/theme';



function App() {
  const router = createBrowserRouter([
    {
      
  path: "/",
  element: <Root />,
  children: [
    {
      path: "/login",
      element: <Login/>
    },
    {
      element: <PrivateRouter/> ,
      children: [
        {
          path:'/',
          element:<List/>,
        },
        {
          path:'/home',
          element:<List/>,
        },
        {
          path:'/cart',
          element:<Cart/>
        }
      ]
    },
  ],
},
]);

  return (
    <>
    <Theme>
      <RouterProvider router={router} />
      </Theme>
    </>
  )
}

export default App