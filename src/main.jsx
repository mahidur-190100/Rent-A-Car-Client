// // src/main.jsx or index.jsx
// import { StrictMode } from 'react';
// import { createRoot } from 'react-dom/client';
// import './index.css';
// import { RouterProvider } from 'react-router-dom';
// import { router } from './Components/Route.jsx';
// import { ToastContainer } from 'react-toastify';
// import AuthProvider from './Components/Context/AuthProvider.jsx';

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <AuthProvider>
//       <RouterProvider router={router} />
//       <ToastContainer />
//     </AuthProvider>
//   </StrictMode>
// );



// src/main.jsx (or index.jsx)
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './Components/Route.jsx'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import CarLoader from './Components/Loader/CarLoader.jsx'
import AuthProvider from './Components/Context/AuthProvider.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider
        router={router}
        fallbackElement={
          <div className="fixed inset-0 grid place-items-center bg-base-100">
            <div className="flex flex-col items-center">
              <CarLoader />
              <p className="mt-3 text-base-content/70">Loading app...</p>
            </div>
          </div>
        }
      />
      <ToastContainer />
    </AuthProvider>
  </StrictMode>
)