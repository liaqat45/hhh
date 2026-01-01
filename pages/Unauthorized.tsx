
import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldAlert, ArrowLeft } from 'lucide-react';

const Unauthorized: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6 text-center">
      <div className="bg-white p-12 rounded-3xl shadow-2xl shadow-red-100 border border-red-50 max-w-lg">
        <div className="h-20 w-20 bg-red-100 rounded-2xl flex items-center justify-center mx-auto mb-8">
          <ShieldAlert className="h-10 w-10 text-red-600" />
        </div>
        <h1 className="text-3xl font-black text-gray-900 mb-4">Access Denied</h1>
        <p className="text-gray-600 mb-10 leading-relaxed">
          It looks like you don't have the necessary permissions to view this page. This section is restricted to administrators only.
        </p>
        <Link 
          to="/" 
          className="inline-flex items-center justify-center px-8 py-4 bg-indigo-600 text-white font-bold rounded-2xl hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-100"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back to Safety
        </Link>
      </div>
    </div>
  );
};

export default Unauthorized;
