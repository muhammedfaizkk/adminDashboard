import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import AppNavbar from './components/AppNavbar';
import ProductForm from './components/ProductForm';
import ProductTable from './components/ProductTable';
import OrdersTable from './components/OrdersTable';
import LoginForm from './components/LoginForm';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [currentPage, setCurrentPage] = useState('dashboard');
  const [sidebarVisible, setSidebarVisible] = useState(true);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleToggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setSidebarVisible(true); // Show sidebar on larger screens
      } else {
        setSidebarVisible(false); // Hide sidebar on smaller screens
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="app-container">
      <div className={`sidebar-container ${sidebarVisible ? 'd-block' : 'd-none'}`}>
        <Sidebar setCurrentPage={handlePageChange} visible={sidebarVisible} />
      </div>
      <div className="main-content">
        <AppNavbar onToggleSidebar={handleToggleSidebar} />
        
        <div className="content">
          {currentPage === 'productTable' && (
            <>
              <ProductTable />
              <ProductForm />
            </>
          )}
          {currentPage === 'orders' && <OrdersTable />}
          {currentPage === 'login' && <LoginForm />}
        </div>
      </div>
    </div>
  );
}

export default App;
