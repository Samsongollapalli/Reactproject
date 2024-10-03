

// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import Logo from '../assets/img/logo.svg';
// import LoginSignupAlert from './LoginSignupAlert'; // Updated name

// const Header = () => {
//   const [username, setUsername] = useState('');
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [showAlert, setShowAlert] = useState(false); // Control alert visibility
//   const [isSignUp, setIsSignUp] = useState(false); // Toggle between login and signup

//   // Show alert after 10 seconds
//   // useEffect(() => {
//   //   const timer = setTimeout(() => {
//   //     setShowAlert(true); // Show login/signup alert after 10 seconds
//   //   }, 10000);

//   //   return () => clearTimeout(timer); // Clean up the timeout
//   // }, []);

//   // Check if user is already logged in
//   useEffect(() => {
//     const storedUser = localStorage.getItem('username');
//     if (storedUser) {
//       setUsername(storedUser);
//       setIsLoggedIn(true);
//     }
//   }, []);

//   // Handle Sign-Up
//   const handleSignUp = (newUsername, newPassword) => {
//     if (newUsername && newPassword) {
//       localStorage.setItem('username', newUsername);
//       localStorage.setItem('password', newPassword);
//       alert('Sign-up successful! Please log in.');
//       setShowAlert(true);
//       setIsSignUp(false); // Switch to login after signup
//     } else {
//       alert('Please enter valid sign-up details.');
//     }
//   };

//   // Handle Login
//   const handleLogin = (loginUsername, loginPassword) => {
//     const storedUsername = localStorage.getItem('username');
//     const storedPassword = localStorage.getItem('password');

//     if (loginUsername === storedUsername && loginPassword === storedPassword) {
//       alert('Login successful!');
//       setUsername(storedUsername);
//       setIsLoggedIn(true);
//       setShowAlert(false); // Close the alert after login
//     } else {
//       alert('Invalid login credentials.');
//     }
//   };

//   // Handle Logout
//   const handleLogout = () => {
//     localStorage.removeItem('username');
//     localStorage.removeItem('password');
//     setIsLoggedIn(false);
//     setUsername('');
//     alert('You have been logged out.');
//   };

//   return (
//     <header className='py-6 mb-12 border-b'>
//       <div className='container mx-auto flex justify-between items-center'>
//         <Link to={'/'}>
//           <img src={Logo} alt='Logo' />
//         </Link>
//         <div>
//           {isLoggedIn ? (
//             <>
//               <span className='mr-4'>Welcome, {username}!</span>
//               <button onClick={handleLogout} className='text-red-600'>
//                 Logout
//               </button>
//             </>
//           ) : (
//             <>
//               <Link className='hover:text-violet-900 transition' to='' onClick={() => setShowAlert(true)}>
//                 Log in
//               </Link>
//               <Link
//                 className='bg-violet-700 hover:bg-violet-800 text-white px-4 py-2 rounded-lg transition'
//                 to=''
//                 onClick={() => { setShowAlert(true); setIsSignUp(true); }}
//               >
//                 Sign Up
//               </Link>
//             </>
//           )}
//         </div>
//       </div>
//       {showAlert && (
//         <LoginSignupAlert
//           isSignUp={isSignUp}
//           handleSignUp={handleSignUp}
//           handleLogin={handleLogin}
//           closeAlert={() => setShowAlert(false)} // Update the method name
//         />
//       )}
//     </header>
//   );
// };

// export default Header;


import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/img/logo.svg';
import LoginSignupAlert from './LoginSignupAlert'; // Alert component for login/signup

const Header = () => {
  const [username, setUsername] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showAlert, setShowAlert] = useState(false); // Control alert visibility
  const [isSignUp, setIsSignUp] = useState(false); // Toggle between login and signup

  // Check if user is already logged in
  useEffect(() => {
    const storedUser = localStorage.getItem('username');
    if (storedUser) {
      setUsername(storedUser);
      setIsLoggedIn(true);
    }
  }, []);

  // Handle Sign-Up
  const handleSignUp = (newUsername, newPassword) => {
    if (newUsername && newPassword) {
      localStorage.setItem('username', newUsername);
      localStorage.setItem('password', newPassword);
      alert('Sign-up successful! Now please log in.');
      setShowAlert(false); // Close sign-up form after successful sign-up
    } else {
      alert('Please enter valid sign-up details.');
    }
  };

  // Handle Login
  const handleLogin = (loginUsername, loginPassword) => {
    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    if (loginUsername === storedUsername && loginPassword === storedPassword) {
      alert('Login successful!');
      setUsername(storedUsername);
      setIsLoggedIn(true);
      setShowAlert(false); // Close the alert after login
    } else {
      alert('Invalid login credentials.');
    }
  };

  // Handle Logout
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
              <span className='mr-4'>Welcome, {username}!</span>
              <button onClick={handleLogout} className='text-red-600'>
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                className='hover:text-violet-900 transition'
                to=''
                onClick={() => { setShowAlert(true); setIsSignUp(false); }} // Show login on click
              >
                Log in
              </Link>
              <Link
                className='bg-violet-700 hover:bg-violet-800 text-white px-4 py-2 rounded-lg transition'
                to=''
                onClick={() => { setShowAlert(true); setIsSignUp(true); }} // Show sign-up on click
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
          closeAlert={() => setShowAlert(false)} // Close alert after login/signup
        />
      )}
    </header>
  );
};

export default Header;

