'use client'

import React from 'react';
import { useAuth } from '@/app/context/AuthContext';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { getProfile } from '@/app/system/api';

const ProfilePage = () => {
  const { user, logout, isLoading, login } = useAuth();
  const router = useRouter();
  const [isProfileLoading, setIsProfileLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const userData = await getProfile();
        login(userData);
      } catch (error) {
        console.error('Failed to fetch profile:', error);
        router.push('/auth/login');
      } finally {
        setIsProfileLoading(false);
      }
    };

    if (!user) {
      fetchProfile();
    } else {
      setIsProfileLoading(false);
    }
  }, []);

  const handleLogout = async () => {
    await logout();
    router.push('/login'); // Redirect to login page after logout
  };

  if (isProfileLoading) {
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