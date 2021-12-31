import './App.css';
import Home from './components/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import AuthProvider from './contexts/AuthProvider';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Rider from './components/Rider/Rider';
import Learner from './components/Learner/Learner';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Toaster
          position="top-right"
          reverseOrder={false}
        />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/join-rider" element={<Rider />} />
          <Route path="/join-learner" element={<Learner />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
