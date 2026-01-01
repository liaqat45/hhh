
import React from 'react';
import { LayoutDashboard, ShoppingBag, Users, ShieldAlert, LogOut, Settings, Package, TrendingUp, AlertTriangle } from 'lucide-react';

export const APP_NAME = "Nexus Admin";

export const MOCK_ADMIN: any = {
  id: '1',
  name: 'Admin User',
  email: 'admin@nexus.com',
  role: 'ADMIN',
  avatar: 'https://picsum.photos/seed/admin/200'
};

export const MOCK_USER: any = {
  id: '2',
  name: 'Standard User',
  email: 'user@nexus.com',
  role: 'USER',
  avatar: 'https://picsum.photos/seed/user/200'
};

export const NAVIGATION = [
  { name: 'Dashboard', href: '/', icon: LayoutDashboard, roles: ['ADMIN', 'USER'] },
  { name: 'Inventory', href: '/products', icon: ShoppingBag, roles: ['ADMIN', 'USER'] },
  { name: 'User Management', href: '/users', icon: Users, roles: ['ADMIN'] },
  { name: 'Analytics', href: '/analytics', icon: TrendingUp, roles: ['ADMIN'] },
  { name: 'Settings', href: '/settings', icon: Settings, roles: ['ADMIN', 'USER'] },
];

export const CATEGORIES = ['Electronics', 'Home & Living', 'Apparel', 'Books', 'Sports'];

export const INITIAL_PRODUCTS: any[] = [
  { id: '1', name: 'Premium Wireless Headphones', sku: 'WH-1000XM4', category: 'Electronics', price: 349.99, stock: 45, status: 'In Stock', lastUpdated: '2023-10-24' },
  { id: '2', name: 'Smart Home Hub', sku: 'SH-HUB-V2', category: 'Electronics', price: 129.00, stock: 8, status: 'Low Stock', lastUpdated: '2023-10-25' },
  { id: '3', name: 'Ergonomic Desk Chair', sku: 'CHR-ERG-01', category: 'Home & Living', price: 299.50, stock: 12, status: 'In Stock', lastUpdated: '2023-10-20' },
  { id: '4', name: 'Running Shoes Pro', sku: 'RUN-PRO-42', category: 'Apparel', price: 159.99, stock: 0, status: 'Out of Stock', lastUpdated: '2023-10-26' },
  { id: '5', name: 'Mechanical Keyboard', sku: 'KB-MECH-RGB', category: 'Electronics', price: 89.99, stock: 25, status: 'In Stock', lastUpdated: '2023-10-27' },
  { id: '6', name: 'Instant Coffee Maker', sku: 'CM-INST-B', category: 'Home & Living', price: 49.99, stock: 3, status: 'Low Stock', lastUpdated: '2023-10-28' },
];
