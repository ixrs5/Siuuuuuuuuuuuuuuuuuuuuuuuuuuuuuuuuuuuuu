
import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Home, PlayCircle, Clock, FileText, BookOpen, Mail, Info } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import ThemeSelector from './ThemeSelector';

const Sidebar: React.FC = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const { logout } = useAuth();
  const location = useLocation();

  const menuItems = [
    { name: 'Dashboard', path: '/dashboard', icon: Home },
    { name: 'Live', path: '/live', icon: PlayCircle },
    { name: 'Recorded', path: '/recorded', icon: Clock },
    { name: 'Exams', path: '/exams', icon: FileText },
    { name: 'All Courses', path: '/courses', icon: BookOpen },
    { name: 'Contact', path: '/contact', icon: Mail },
    { name: 'About Us', path: '/about', icon: Info },
  ];

  return (
    <div className={`bg-sidebar border-r border-sidebar-border h-screen transition-all duration-300 ${
      isCollapsed ? 'w-16' : 'w-64'
    } flex flex-col`}>
      {/* Header */}
      <div className="p-4 border-b border-sidebar-border">
        <div className="flex items-center justify-between">
          {!isCollapsed && (
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-electric rounded-full flex items-center justify-center">
                <span className="text-lg font-bold text-white">RST</span>
              </div>
              <span className="text-xl font-bold text-sidebar-foreground">RST Learning</span>
            </div>
          )}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="text-sidebar-foreground hover:bg-sidebar-accent"
          >
            {isCollapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
          </Button>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            
            return (
              <li key={item.name}>
                <NavLink
                  to={item.path}
                  className={`flex items-center gap-3 px-3 py-3 rounded-lg transition-all duration-200 group ${
                    isActive
                      ? 'bg-sidebar-primary text-sidebar-primary-foreground shadow-lg'
                      : 'text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground'
                  }`}
                >
                  <Icon size={20} className={`${isActive ? 'text-sidebar-primary-foreground' : ''} ${
                    !isActive ? 'group-hover:scale-110' : ''
                  } transition-transform duration-200`} />
                  {!isCollapsed && (
                    <span className="font-medium">{item.name}</span>
                  )}
                  {isActive && !isCollapsed && (
                    <div className="ml-auto w-2 h-2 bg-sidebar-primary-foreground rounded-full"></div>
                  )}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-sidebar-border space-y-4">
        {!isCollapsed && (
          <div className="flex justify-center">
            <ThemeSelector />
          </div>
        )}
        <Button
          onClick={logout}
          variant="outline"
          className={`${isCollapsed ? 'w-full p-0' : 'w-full'} border-sidebar-border hover:bg-destructive hover:text-destructive-foreground`}
        >
          {isCollapsed ? '→' : 'Logout'}
        </Button>
      </div>
    </div>
  );
};

export default Sidebar;
