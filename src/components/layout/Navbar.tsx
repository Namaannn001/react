import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/Button';

// For now, we'll simulate the auth state with a prop
interface NavbarProps {
  isAuthenticated?: boolean;
}

export function Navbar({ isAuthenticated = false }: NavbarProps) {
  return (
    <nav className="bg-gray-900/50 backdrop-blur-sm border-b border-gray-700 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-white">
              Echo<span className="text-purple-400">Scribe</span>
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            {isAuthenticated ? (
              <>
                <Link to="/dashboard">
                  <Button variant="secondary">Dashboard</Button>
                </Link>
                {/* This would be a user avatar with a dropdown */}
                <Button variant='destructive'>Logout</Button>
              </>
            ) : (
              <Link to="/login">
                <Button variant="primary">Login</Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}