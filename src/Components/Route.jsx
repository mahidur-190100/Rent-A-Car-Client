import { createBrowserRouter } from 'react-router-dom';
import Home from './Home/Home';
import Add_vehicle from './Pages/Add_vehicle';
import My_vehicles from './Pages/My_vehicles';
import My_bookings from './Pages/My_bookings';
import All_vehicle from './Pages/All_vehicle';
import Login from './Login/Login';
import Register from './Register/Register';
import VehicleDetails from './Pages/VehicleDetails';
import UpdateModel from './Pages/UpdateModel';
import HomePage from './Pages/HomePage';
import PrivateRoute from './PrivateRoute';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,

    children: [
      {
        index: true, Component: HomePage,
        loader: () => fetch('https://rent-a-car-server-livid.vercel.app/latest-models'),
      },
      {
        path: '/All-vehicle',
        element: (
          
            <All_vehicle />
         
        ),
        loader: () => fetch('https://rent-a-car-server-livid.vercel.app/models'),
      },
      {
        path: '/VehicleDetails/:id',

        loader: ({ params }) =>
          fetch(`https://rent-a-car-server-livid.vercel.app/models/${params.id}`),
        element:
          <PrivateRoute>
            <VehicleDetails />
          </PrivateRoute>
      },
      {
        path: '/UpdateModel/:id',
        element:
        <PrivateRoute>
          <UpdateModel />
        </PrivateRoute>,
        loader: ({ params }) =>
          fetch(`https://rent-a-car-server-livid.vercel.app/models/${params.id}`),
      },

      { path: '/Add-vehicle',
         element: 
         <PrivateRoute>
         <Add_vehicle />
         </PrivateRoute> },

      { path: '/My-vehicles',
        
        element: 
        <PrivateRoute>
        
        <My_vehicles />
        </PrivateRoute> },
      { path: '/My-bookings', 
        element: 
        <PrivateRoute>
        <My_bookings /> 
        </PrivateRoute> },
      { path: '/Login', element: <Login /> },
      { path: '/Register', Component: Register },
    ],
  },
]);