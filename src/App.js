// import React from 'react';
// import ReactDOM from 'react-dom';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { Provider } from 'react-redux';
// import store from './components/store/store';
// import Login from './pages/Login';
// // import Register from './pages/Register';
// import Dashboard from './pages/Admin/Dashboard';
// import Navbar from './components/admincomp/Navbar';
// import Kanban from './components/admincomp/Kanban';
// import Report from './components/admincomp/Report';
// import './assests/css/index.css';
// import Employee from './components/admincomp/Employee';
// import CustomerPage from './components/admincomp/CustomerList';
// import OrderPage from './components/admincomp/OrdersTable';
// import InventoryPage from './components/admincomp/Inventory';
// import UserProfile from './components/admincomp/UserProfile';
// // import Footer from './components/admincomp/Footer';
// import TermsAndConditions from './components/admincomp/termsAndConditons';
// import PrivacyPolicy from './components/admincomp/privacy';
// import FAQ from './components/admincomp/Faq';
// import Signup from './pages/Register';
// import LandingPage from './pages/customer/Landingpage';
// import LogisticsCustomerPage from './pages/customer/LogisticCustomerPage';
// import AboutUsPage from './pages/customer/AboutUsPage';
// import ContactUsPage from './pages/customer/contact';
// import ServicesLandingPage from './pages/customer/Services';

// function App() {
//   return (
//     <Provider store={store}>
//       <Router>
//         <Routes>
//          <Route path="/" element={<LandingPage/>} /> 
//           <Route path="/login" element={<Login />} />
//           <Route path="/register" element={<Signup />} />
//           <Route path="/terms" element={<TermsAndConditions/>}/>
//           <Route path="/privacy" element={<PrivacyPolicy/>}/>
//           <Route path="/faq" element={<FAQ/>}/>
//           <Route path="/userpage" element={<LogisticsCustomerPage/>}/>
//           <Route path="/aboutus" element={<AboutUsPage/>}/> 
//           <Route path="/contact" element={<ContactUsPage/>} />
//           <Route path='/service' element={<ServicesLandingPage/>} />
//         </Routes>
        
//         <Navbar />
//         <Routes>
//           <Route path="/AdminDashboard" exact element={<Dashboard />} />
//           <Route path="/kanban" element={<Kanban />} />
//           <Route path="/Report" element={<Report />} />
//           <Route path="/Employee" element={<Employee />} />
//           <Route path="/Customer" element={<CustomerPage />} />
//           <Route path="/order" element={<OrderPage />} />
//           <Route path="/inventory" element={<InventoryPage />} />
//           <Route path="/userprofile" element={<UserProfile/>}/>
//         </Routes>
//       </Router>
//     </Provider>
//   );
// }

// ReactDOM.render(<App />, document.getElementById('root'));

// export default App;

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './components/store/store';
import Login from './pages/Login';
// import Register from './pages/Register';
import Dashboard from './pages/Admin/Dashboard';
import Navbar from './components/admincomp/Navbar'; // Import the Navbar component
import Kanban from './components/admincomp/Kanban';
import Report from './components/admincomp/Report';
import './assests/css/index.css';
import Employee from './components/admincomp/Employee';
import CustomerPage from './components/admincomp/CustomerList';
import OrderPage from './components/admincomp/OrdersTable';
import InventoryPage from './components/admincomp/Inventory';
import UserProfile from './components/admincomp/UserProfile';
// import Footer from './components/admincomp/Footer';
import TermsAndConditions from './components/admincomp/termsAndConditons';
import PrivacyPolicy from './components/admincomp/privacy';
import FAQ from './components/admincomp/Faq';
import Signup from './pages/Register';
import LandingPage from './pages/customer/Landingpage';
import LogisticsCustomerPage from './pages/customer/LogisticCustomerPage';
import AboutUsPage from './pages/customer/AboutUsPage';
import ContactUsPage from './pages/customer/contact';
import ServicesLandingPage from './pages/customer/Services';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Signup />} />
          <Route path="/terms" element={<TermsAndConditions />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/userpage" element={<LogisticsCustomerPage />} />
          <Route path="/aboutus" element={<AboutUsPage />} />
          <Route path="/contact" element={<ContactUsPage />} />
          <Route path="/service" element={<ServicesLandingPage />} />

          {/* Wrap the Navbar component in a Route component */}
          <Route path="/AdminDashboard" exact element={
            <div>
              <Navbar />
              <Dashboard />
            </div>
          } />

          <Route path="/kanban" element={
            <div>
              <Navbar />
              <Kanban />
            </div>
          } />

          <Route path="/Report" element={
            <div>
              <Navbar />
              <Report />
            </div>
          } />

          <Route path="/Employee" element={
            <div>
              <Navbar />
              <Employee />
            </div>
          } />

          <Route path="/Customer" element={
            <div>
              <Navbar />
              <CustomerPage />
            </div>
          } />

          <Route path="/order" element={
            <div>
              <Navbar />
              <OrderPage />
            </div>
          } />

          <Route path="/inventory" element={
            <div>
              <Navbar />
              <InventoryPage />
            </div>
          } />

          <Route path="/userprofile" element={
            <div>
              <Navbar />
              <UserProfile />
            </div>
          } />
        </Routes>
      </Router>
    </Provider>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));

export default App;

