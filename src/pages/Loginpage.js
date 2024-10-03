import React, { useState } from 'react';


function Apping() {
  const [isRegistered, setIsRegistered] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({ username: '', password: '' });
  const [loginInfo, setLoginInfo] = useState({ username: '', password: '' });

 
  const handleRegister = (e) => {
    e.preventDefault();
    if (user.username && user.password) {
      localStorage.setItem('user', JSON.stringify(user));
      setIsRegistered(true);
      alert('Registration Successful!');
    }
  };

  
  const handleLogin = (e) => {
    e.preventDefault();
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (
      storedUser &&
      storedUser.username === loginInfo.username &&
      storedUser.password === loginInfo.password
    ) {
      setIsLoggedIn(true);
      alert('Login Successful!');
    } else {
      alert('Invalid Credentials');
    }
  };
  return (
    <div className="App">
      {!isRegistered ? (
        <div className="register">
          <h2>Register For Millionaire Quiz App</h2>
          <form onSubmit={handleRegister}>
            <input
              type="text"
              placeholder="Username"
              value={user.username}
              onChange={(e) => setUser({ ...user, username: e.target.value })}
              required
            />
            
            <input
              type="password"
              placeholder="Password"
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              required
            />
            <button type="submit">Register</button>
          </form>
        </div>
      ) : !isLoggedIn ? (
        <div className="register">
          <h2>Login</h2>
          <form onSubmit={handleLogin}>
            <input
              type="text"
              placeholder="Username"
              value={loginInfo.username}
              onChange={(e) =>
                setLoginInfo({ ...loginInfo, username: e.target.value })
              }
              required
            />
 <input
              type="password"
              placeholder="Password"
              value={loginInfo.password}
              onChange={(e) =>
                setLoginInfo({ ...loginInfo, password: e.target.value })
              }
              required
            />
            <button type="submit">Login</button>
          </form>
        </div>
      ) : (
        <div>
          <h5>Welcome, {loginInfo.username}!</h5>
          <button
            onClick={() => {
              setIsLoggedIn(false);
              setIsRegistered(false);
              setUser({ username: '', password: '' });
              setLoginInfo({ username: '', password: '' });
              localStorage.removeItem('user');
            }}
          >
            Logout
          </button>      
        </div>
      )}
    </div>
  );
}

export default Apping;