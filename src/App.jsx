import React from 'react';
import './App.scss';
import './styles/_common.scss';
import './styles/_mixins.scss';
import './styles/_function.scss';
import './styles/_variables.scss';
import './styles/main.scss';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Home from './pages/home/index';
import Login from './pages/auth/loginOtp';
import AppRoutes from './routes/appRoutes';
import Index from './pages/home/index';

function App() {
  return (
    <>
      <AppRoutes />
     </>
  );
}

export default App;
