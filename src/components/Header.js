import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/img/logo.svg';
import LoginSignupAlert from './LoginSignupAlert';

const Header = () => {
  const [username, setUsername] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);

  // Check if user is already logged in
  useEffect(() => {
    const storedUser = localStorage.getItem('username');
    if (storedUser) {
      setUsername(storedUser);
      setIsLoggedIn(true);
    }
  }, []);

  // Handle sign-up process
  const handleSignUp = (newUsername, newPassword) => {
    if (newUsername && newPassword) {
      localStorage.setItem('username', newUsername);
      localStorage.setItem('password', newPassword);
      setUsername(newUsername); // Auto-login
      setIsLoggedIn(true); // Auto-login
      alert('Sign-up successful! You are now logged in.');
      setShowAlert(false);
    } else {
      alert('Please enter valid sign-up details.');
    }
  };

  // Handle login process
  const handleLogin = (loginUsername, loginPassword) => {
    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    if (loginUsername === storedUsername && loginPassword === storedPassword) {
      alert('Login successful!');
      setUsername(storedUsername);
      setIsLoggedIn(true);
      setShowAlert(false);
    } else {
      alert('Invalid login credentials.');
    }
  };

  // Handle logout process
  const handleLogout = () => {
    localStorage.removeItem('username');
    localStorage.removeItem('password');
    setIsLoggedIn(false);
    setUsername('');
    alert('You have been logged out.');
  };

  return (
    <header className='py-6 mb-12 border-b'>
      <div className='container mx-auto flex justify-between items-center'>
        <Link to={'/'}>
          <img src={Logo} alt='Logo' />
        </Link>
        <div>
          {isLoggedIn ? (
            <>
              <span className='mr-4'>Welcome, <span className='text-violet-950 font-semibold'> {username}! </span> </span>
              <button onClick={handleLogout} className='text-red-600'>
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                className='hover:text-violet-900 transition'
                to=''
                onClick={() => {
                  setShowAlert(true);
                  setIsSignUp(false);
                }}
              >
                Log in
              </Link>
              <Link
                className='bg-violet-700 hover:bg-violet-800 text-white px-4 py-2 rounded-lg transition'
                to=''
                onClick={() => {
                  setShowAlert(true);
                  setIsSignUp(true);
                }}
              >
                Sign Up
              </Link>
            </>
          )}
        </div>
      </div>

      {showAlert && (
        <LoginSignupAlert
          isSignUp={isSignUp}
          handleSignUp={handleSignUp}
          handleLogin={handleLogin}
          closeAlert={() => setShowAlert(false)}
        />
      )}
    </header>
  );
};

export default Header;
