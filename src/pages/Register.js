// import React, { useState } from 'react';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { Link } from 'react-router-dom';
// import 'react-phone-number-input/style.css';
// import '../assests/css/Register.css';
// import { useDispatch } from 'react-redux';
// import { signupSuccess } from '../components/actions/authActions';

// const Register = () => {
//   const [formData, setFormData] = useState({
//     email: '',
//     username: '',
//     password: '',
//     confirmPassword: '',
//   });

//   const dispatch = useDispatch();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     for (const key in formData) {
//       if (!formData[key]) {
//         toast.error('All fields are required.');
//         return;
//       }
//     }

//     const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
//     if (!emailRegex.test(formData.email)) {
//       toast.error('Invalid email address.');
//       return;
//     }

//     if (formData.password !== formData.confirmPassword) {
//       toast.error('Passwords do not match.');
//       return;
//     }

//     const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[0-9]).{8,}$/;
//     if (!passwordRegex.test(formData.password)) {
//       toast.error(
//         'Password must contain a capital letter, symbol, and numbers (at least 8 characters).'
//       );
//       return;
//     }

//     dispatch(signupSuccess({ email: formData.email, username: formData.username }));

//     toast.success('Sign up successful!');
//   };

//   return (
//     <div className="signup-container">
//       <div className="background-register"></div>
//       <div className="registration-form">
//         <h1>Sign Up</h1>
//         <form onSubmit={handleSubmit}>
//           <div className="form-group">
//             <label>Email:</label>
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label>Username:</label>
//             <input
//               type="text"
//               name="username"
//               value={formData.username}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label>Password:</label>
//             <input
//               type="password"
//               name="password"
//               value={formData.password}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label>Confirm Password:</label>
//             <input
//               type="password"
//               name="confirmPassword"
//               value={formData.confirmPassword}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <button type="submit">Sign Up</button>
//         </form>
//         <div className="login-link">
//           <Link to="/">Login</Link>
//         </div>
//         <ToastContainer />
//       </div>
//     </div>
//   );
// };

// export default Register;


import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { FaUser, FaEnvelope, FaLock } from 'react-icons/fa'; // Import Font Awesome icons
import '../assests/css/Register.css';
import { ToastContainer,toast } from 'react-toastify';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSignup = (e) => {
    e.preventDefault();

    const user = {
      username: username,
      email: email,
      password: password,
      role: ['user'],
    };

    axios
      .post('http://localhost:8080/api/auth/signup', user)
      .then((response) => {
        setMessage(response.data.message);
      })
      .catch((error) => {
        setMessage(error.response.data.message);
      });
  };

  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSignup}>
        <h2 className="signup-title">Signup</h2>
        <div>
          <label>
            <FaUser className="sicon" />
            Username:
          </label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your username"
          />
        </div>
        <div>
          <label>
            <FaEnvelope className="sicon" />
            Email:
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
        </div>
        <div>
          <label>
            <FaLock className="sicon" />
            Password:
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
          />
        </div>
        <button type="submit">Signup</button>
        <p className="signup-message">{message}</p>
        <div className="login-links">
          <p className="signup-link">
            Already have an account?
            <Link to="/login" className="link">
              Login
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Signup;



