import React from "react";

const Settings = () => {
  return (
    <div className="max-w-xl">
      <h1 className="text-2xl font-semibold mb-4">Settings</h1>

      <div className="bg-white p-4 rounded border space-y-4">
        <div className="flex justify-between items-center">
          <span>Dark Mode</span>
          <button className="px-3 py-1 bg-black text-white rounded">
            Toggle
          </button>
        </div>

        <div className="flex justify-between items-center">
          <span>Email Notifications</span>
          <button className="px-3 py-1 bg-gray-200 rounded">Toggle</button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
