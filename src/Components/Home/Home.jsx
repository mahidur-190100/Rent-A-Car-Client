import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { Outlet } from 'react-router-dom';
import GlobalRouteLoader from '../GlobalRouteLoader';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="w-11/12 mx-auto flex-1">
        <Outlet />
      </main>
      <Footer />
      <GlobalRouteLoader />
    </div>
  );
};

export default Home;
