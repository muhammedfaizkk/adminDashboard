import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import AppNavbar from './components/AppNavbar';
import ProductForm from './components/ProductForm';
import ProductTable from './components/ProductTable';
import OrdersTable from './components/OrdersTable';
import LoginForm from './components/LoginForm';
import Dashhome from './components/Dashhome';  // Import Dashhome component
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    const [currentPage, setCurrentPage] = useState('dashboard');
    const [sidebarVisible, setSidebarVisible] = useState(true);

    const handlePageChange = (page) => {
        setCurrentPage(page);
        if (window.innerWidth <= 768) {
            setSidebarVisible(false);
        }
    };

    const handleToggleSidebar = () => {
        setSidebarVisible(!sidebarVisible);
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768) {
                setSidebarVisible(true);
            } else {
                setSidebarVisible(false);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const getLocationText = () => {
        switch (currentPage) {
            case 'dashboard':
                return 'Dashboard';
            case 'productTable':
                return 'Product Table';
            case 'orders':
                return 'Orders';
            case 'login':
                return 'Login';
            default:
                return 'Home';
        }
    };

    return (
        <div className="app-container">
            <div className={`sidebar-container ${sidebarVisible ? 'd-block' : 'd-none'}`}>
                <Sidebar setCurrentPage={handlePageChange} visible={sidebarVisible} />
            </div>
            <div className="main-content">
                <AppNavbar 
                    setCurrentPage={handlePageChange} 
                    handleToggleSidebar={handleToggleSidebar}  
                    location={getLocationText()} // Pass dynamic location
                />
                <div className="content">
                    {currentPage === 'dashboard' && <Dashhome />} {/* Render Dashhome on the dashboard */}
                    {currentPage === 'productTable' && (
                        <>
                            <ProductForm />
                            <ProductTable />
                           
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
