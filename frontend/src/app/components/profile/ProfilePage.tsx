'use client'

import React from 'react';
import { useAuth } from '../../context/AuthContext';
import { useRouter } from 'next/navigation';

const ProfilePage = () => {
  const { user, logout, isLoading } = useAuth();
  const router = useRouter();

  const handleLogout = async () => {
    await logout();
    router.push('/login'); // Redirect to login page after logout
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    router.push('/auth/login');
    return null;
  }

  return (
    <div className="container mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-6">User Profile</h1>
      <div className="mb-4">
        <p className="text-lg"><strong>Name:</strong> {user.name}</p>
      </div>
      <div className="mb-4">
        <p className="text-lg"><strong>Email:</strong> {user.email}</p>
      </div>
      <button
        onClick={handleLogout}
        className="bg-[#FF64AE] hover:bg-[#172176] text-white font-bold py-2 px-4 rounded"
      >
        Logout
      </button>
    </div>
  );
};

export default ProfilePage;