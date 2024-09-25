'use client'

import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { useAuth } from '../../context/AuthContext'; 
import Link from 'next/link';

const fetchUserProfile = async () => {
  const response = await fetch('/profile', {
    credentials: 'include',
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.error || 'Failed to fetch user profile');
  }

  return response.json();
};

const ProfilePage = () => {
  const { user } = useAuth();

  const { data: profile, isLoading, isError } = useQuery({
    queryKey: ['userProfile'],
    queryFn: fetchUserProfile,
    enabled: !!user,
  });

  if (!user) {
    return (
      <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-xl text-center">
        <p>Please log in to view your profile.</p>
        <Link href="/auth/login" className="text-indigo-600 hover:underline mt-4 inline-block">
          Go to Login
        </Link>
      </div>
    );
  }

  if (isLoading) {
    return <div className="text-center mt-10">Loading profile...</div>;
  }

  if (isError) {
    return <div className="text-center mt-10 text-red-600">Error loading profile. Please try again later.</div>;
  }

  if (!profile) {
    return <div className="text-center mt-10">No profile data available.</div>;
  }

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-xl">
      <h1 className="text-2xl font-semibold text-center mb-6">User Profile</h1>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Name</label>
          <p className="mt-1 block w-full px-3 py-2 bg-gray-100 rounded-md">{user.name}</p>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <p className="mt-1 block w-full px-3 py-2 bg-gray-100 rounded-md">{user.email}</p>
        </div>
      </div>
      <div className="mt-6">
        <Link href="/" className="text-indigo-600 hover:underline">
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default ProfilePage;