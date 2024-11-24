import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const UserProfile = () => {
  const user = useSelector((state) => state.auth.user);

  if (!user) {
    return (
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">User Profile</h1>
        <div className="bg-white p-4 rounded shadow-md">
          <p>Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">User Profile</h1>
      <div className="bg-white p-4 rounded shadow-md user-info">
        <div className="mb-4">
          <label className="block font-semibold mb-1">Name:</label>
          <p className="user-name">{user.username}</p>
          <label className="block font-semibold mb-1">Email:</label>
          <div>
            <p className="user-email">{user.email}</p>
            <p className="user-role">Role: {user.roles}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
