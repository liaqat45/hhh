
import React from 'react';
import { useAuth } from '../context/AuthContext';
import { Role } from '../types';
import { Users as UsersIcon, Shield, Mail, Calendar, MoreVertical } from 'lucide-react';

const Users: React.FC = () => {
  const { user: currentUser } = useAuth();

  const mockUsers = [
    { id: '1', name: 'Sarah Jenkins', email: 'sarah@nexus.com', role: Role.ADMIN, joinDate: '2023-01-12', status: 'Active' },
    { id: '2', name: 'Michael Scott', email: 'michael@nexus.com', role: Role.USER, joinDate: '2023-03-05', status: 'Active' },
    { id: '3', name: 'Dwight Schrute', email: 'dwight@nexus.com', role: Role.USER, joinDate: '2023-04-18', status: 'Inactive' },
    { id: '4', name: 'Pam Beesly', email: 'pam@nexus.com', role: Role.USER, joinDate: '2023-06-22', status: 'Active' },
    { id: '5', name: 'Jim Halpert', email: 'jim@nexus.com', role: Role.ADMIN, joinDate: '2023-08-11', status: 'Active' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">User Management</h1>
          <p className="text-gray-500 mt-1">Manage system administrators and staff permissions.</p>
        </div>
        <button className="px-4 py-2 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all shadow-md">
          Invite New User
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockUsers.map((user) => (
          <div key={user.id} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col">
            <div className="flex items-start justify-between mb-4">
              <div className="h-12 w-12 bg-indigo-100 rounded-full flex items-center justify-center">
                <UsersIcon className="h-6 w-6 text-indigo-600" />
              </div>
              <button className="p-1 hover:bg-gray-100 rounded-lg">
                <MoreVertical className="h-5 w-5 text-gray-400" />
              </button>
            </div>
            
            <h3 className="text-lg font-bold text-gray-900">{user.name}</h3>
            <div className="flex items-center mt-1 space-x-2">
              <Shield className={`h-3 w-3 ${user.role === Role.ADMIN ? 'text-indigo-600' : 'text-gray-400'}`} />
              <span className={`text-xs font-bold uppercase tracking-wider ${user.role === Role.ADMIN ? 'text-indigo-600' : 'text-gray-500'}`}>
                {user.role}
              </span>
            </div>

            <div className="mt-6 space-y-3">
              <div className="flex items-center text-sm text-gray-500">
                <Mail className="h-4 w-4 mr-2" />
                {user.email}
              </div>
              <div className="flex items-center text-sm text-gray-500">
                <Calendar className="h-4 w-4 mr-2" />
                Joined {user.joinDate}
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-gray-50 flex items-center justify-between">
              <span className={`text-xs font-semibold px-2 py-1 rounded-full ${user.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-500'}`}>
                {user.status}
              </span>
              <button className="text-sm font-semibold text-indigo-600 hover:text-indigo-700">
                Edit Permissions
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;
