import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import bubbleImage from '../assests/img/bubble.png';
import { FaUser, FaLock } from 'react-icons/fa';
import { ToastContainer} from 'react-toastify';
import { useDispatch } from 'react-redux';
import { setUser } from '../components/actions/authActions';
import '../assests/css/Login.css';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:8080/api/auth/signin', {
        username,
        password,
      });
      const userData = response. data;       
      dispatch(setUser (userData));
      const userRole = response.data.roles[0];

      switch (userRole) {
        case 'ROLE_ADMIN':
          navigate('/AdminDashboard');
          break;
        case 'ROLE_USER':
          navigate('/userpage');
          break;
        case 'ROLE_EMPLOYEE':
          navigate('/AdminDashboard');
          break;
        default:
          break;
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="login-container">

      <div className="bubble">
        <img src={bubbleImage} alt="Bubble 1" style={{ width: '3%', animationDelay: '2s' }} />
        <img src={bubbleImage} alt="Bubble 2" style={{ width: '3%', animationDelay: '1s' }} />
        <img src={bubbleImage} alt="Bubble 3" style={{ width: '3%', animationDelay: '3s' }} />
        <img src={bubbleImage} alt="Bubble 4" style={{ width: '3%', animationDelay: '4.5s' }} />
        <img src={bubbleImage} alt="Bubble 5" style={{ width: '3%', animationDelay: '3s' }} />
        <img src={bubbleImage} alt="Bubble 6" style={{ width: '3%', animationDelay: '6s' }} />
        <img src={bubbleImage} alt="Bubble 7" style={{ width: '3%', animationDelay: '7s' }} />
      </div>
      <div className="login-box">
        <center>
          <h1 className="login-title">Login</h1>
        </center>
        <form>
          <div className="logform-group">
            <label className="log-form-label">
              Username:<FaUser className="icon" />
              <input
                type="text"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="form-control"
                placeholder='Enter Username'
              />
            </label>
          </div>
          <div className="logform-group">
            <label className="log-form-label">
              Password:<FaLock className="icon" />
              <input
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="form-control"
                placeholder='Enter password'
              />
            </label>
          </div>
          <div className="button-container">
            <button type="button" onClick={handleLogin} className="button">
              Login
            </button>
            <br/>
          </div>
        </form>
        <div className="login-links">
          <p>
            <Link to="/Register" className="loglink">
              Sign Up
            </Link>
          </p>
          <p>
          <Link to="/" className="loglink">
              Home
            </Link>
          </p>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Login;
