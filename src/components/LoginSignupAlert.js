

import React, { useState } from 'react';

const LoginSignupAlert = ({ isSignUp, handleSignUp, handleLogin, closeAlert }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignUp) {
      handleSignUp(username, password); 
    } else {
      handleLogin(username, password);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg w-full max-w-md">
        <h2 className="text-2xl mb-4">{isSignUp ? 'Sign Up' : 'Log In'}</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-violet-700 text-white py-2 rounded-lg hover:bg-violet-800 transition"
          >
            {isSignUp ? 'Sign Up' : 'Log In'}
          </button>
        </form>
        <button onClick={closeAlert} className="mt-4 text-gray-500 hover:text-gray-700">
          Cancel
        </button>
      </div>
    </div>
  );
};

export default LoginSignupAlert;

