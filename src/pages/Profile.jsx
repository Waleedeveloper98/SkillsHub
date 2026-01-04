import React from "react";

const Profile = () => {
  return (
    <div className="max-w-xl">
      <h1 className="text-2xl font-semibold mb-4">Profile</h1>

      <div className="bg-white p-4 rounded border space-y-3">
        <div>
          <p className="text-sm text-gray-500">Name</p>
          <p className="font-medium">Muhammad Waleed</p>
        </div>

        <div>
          <p className="text-sm text-gray-500">Role</p>
          <p className="font-medium">Frontend Developer</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
