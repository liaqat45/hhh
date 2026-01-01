
import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Role } from '../types';
import { APP_NAME } from '../constants';
import { ShieldCheck, UserCheck, Lock } from 'lucide-react';

const Login: React.FC = () => {
  const { login, isLoading } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [error, setError] = useState('');

  const from = location.state?.from?.pathname || "/";

  const handleLogin = async (role: Role) => {
    try {
      await login(role);
      navigate(from, { replace: true });
    } catch (err) {
      setError('Authentication failed. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="flex justify-center">
          <div className="h-14 w-14 bg-indigo-600 rounded-2xl flex items-center justify-center shadow-lg shadow-indigo-200">
            <span className="text-white font-black text-3xl italic">N</span>
          </div>
        </div>
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900 tracking-tight">
          Welcome to {APP_NAME}
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          The all-in-one role-based inventory & analytics platform.
        </p>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-10 px-6 shadow-2xl shadow-indigo-100/50 rounded-3xl border border-white space-y-8">
          <div>
            <div className="relative">
              <div className="absolute inset-0 flex items-center" aria-hidden="true">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-3 bg-white text-gray-500 font-medium">Select your role to continue</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <button
              onClick={() => handleLogin(Role.ADMIN)}
              disabled={isLoading}
              className="group relative w-full flex items-center justify-between p-4 bg-white border-2 border-indigo-50 hover:border-indigo-600 rounded-2xl transition-all hover:shadow-xl hover:-translate-y-1"
            >
              <div className="flex items-center">
                <div className="h-12 w-12 bg-indigo-100 rounded-xl flex items-center justify-center group-hover:bg-indigo-600 transition-colors">
                  <ShieldCheck className="h-6 w-6 text-indigo-600 group-hover:text-white" />
                </div>
                <div className="ml-4 text-left">
                  <p className="text-lg font-bold text-gray-900 leading-tight">Administrator</p>
                  <p className="text-sm text-gray-500">Full access to all modules and CRUD</p>
                </div>
              </div>
              <Lock className="h-5 w-5 text-gray-300 group-hover:text-indigo-600" />
            </button>

            <button
              onClick={() => handleLogin(Role.USER)}
              disabled={isLoading}
              className="group relative w-full flex items-center justify-between p-4 bg-white border-2 border-gray-50 hover:border-gray-600 rounded-2xl transition-all hover:shadow-xl hover:-translate-y-1"
            >
              <div className="flex items-center">
                <div className="h-12 w-12 bg-gray-100 rounded-xl flex items-center justify-center group-hover:bg-gray-800 transition-colors">
                  <UserCheck className="h-6 w-6 text-gray-600 group-hover:text-white" />
                </div>
                <div className="ml-4 text-left">
                  <p className="text-lg font-bold text-gray-900 leading-tight">Standard User</p>
                  <p className="text-sm text-gray-500">Read-only access to dashboard modules</p>
                </div>
              </div>
              <Lock className="h-5 w-5 text-gray-300 group-hover:text-gray-800" />
            </button>
          </div>

          {error && <p className="text-center text-sm font-medium text-red-600">{error}</p>}
          
          {isLoading && (
            <div className="flex justify-center pt-4">
              <div className="h-6 w-6 animate-spin rounded-full border-2 border-indigo-600 border-t-transparent"></div>
            </div>
          )}
        </div>

        <p className="mt-8 text-center text-xs text-gray-400">
          Nexus Cloud v4.2.0 • Powered by Modern Enterprise Stack
        </p>
      </div>
    </div>
  );
};

export default Login;
