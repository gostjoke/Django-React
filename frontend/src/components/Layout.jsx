// src/components/Layout.js
import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/register">Register</Link></li>
            <li><Link to="/logout">Logout</Link></li>
          </ul>
        </nav>
      </header>
      <main>
        <Outlet/>
      </main>
      <footer>
        <p>© 2024 My App</p>
      </footer>
    </div>
  );
};

export default Layout;
