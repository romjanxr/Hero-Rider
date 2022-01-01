import './App.css';
import Home from './components/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import AuthProvider from './contexts/AuthProvider';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Rider from './components/Rider/Rider';
import Learner from './components/Learner/Learner';
import Login from './components/Login/Login';
import { Toaster } from 'react-hot-toast';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import RegisteredUser from './components/Dashboard/RegisteredUser/RegisteredUser';
import Packages from './components/Dashboard/Packages/Packages';
import Payment from './components/Dashboard/Payment/Payment';
import Profile from './components/Dashboard/Profile/Profile';
import PrivateRoute from './Routes/PrivateRoute';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Toaster
          position="top-right"
          reverseOrder={false}
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/join-rider" element={<Rider />} />
          <Route path="/join-learner" element={<Learner />} />
          <Route path="/login" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>}>
            <Route path="/dashboard" element={<Profile />} />
            <Route path="/dashboard/registered-users" element={<RegisteredUser />} />
            <Route path="/dashboard/packages" element={<Packages />} />
            <Route path="/dashboard/payment" element={<Payment />} />
          </Route>
        </Routes>
      </Router>
    </AuthProvider >
  );
}

export default App;
