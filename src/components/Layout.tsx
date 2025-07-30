
import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import WelcomeMessage from './WelcomeMessage';

const Layout: React.FC = () => {
  return (
    <div className="flex h-screen bg-background">
      <Sidebar />
      <div className="flex-1 overflow-auto">
        <main className="p-6">
          <Outlet />
        </main>
      </div>
      <WelcomeMessage />
    </div>
  );
};

export default Layout;
