
import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import Products from './pages/Products';
import Users from './pages/Users';
import Login from './pages/Login';
import Unauthorized from './pages/Unauthorized';
import { Role } from './types';

const App: React.FC = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Public Routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/unauthorized" element={<Unauthorized />} />

          {/* Protected Main Dashboard Routes */}
          <Route element={
            <ProtectedRoute>
              <Layout />
            </ProtectedRoute>
          }>
            <Route path="/" element={<Dashboard />} />
            <Route path="/products" element={<Products />} />
            
            {/* Admin Only Routes */}
            <Route path="/users" element={
              <ProtectedRoute allowedRoles={[Role.ADMIN]}>
                <Users />
              </ProtectedRoute>
            } />
            <Route path="/analytics" element={
              <ProtectedRoute allowedRoles={[Role.ADMIN]}>
                <div className="p-8 text-center bg-white rounded-2xl border border-gray-100">
                  <h2 className="text-xl font-bold mb-4">Advanced Analytics Module</h2>
                  <p className="text-gray-500">Premium visualization tools coming soon.</p>
                </div>
              </ProtectedRoute>
            } />
            
            {/* Catch-all for protected sub-routes */}
            <Route path="/settings" element={
              <div className="p-8 text-center bg-white rounded-2xl border border-gray-100">
                <h2 className="text-xl font-bold mb-4">Account Settings</h2>
                <p className="text-gray-500">Feature toggle and profile management.</p>
              </div>
            } />
          </Route>

          {/* Fallback */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
