import React, { useContext, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from '../../pages/auth/login';
// import NotFound from "../pages/NotFound";
import LoginOtp from '../../pages/auth/loginOtp';
import Registration from '../../pages/auth/registration';
import Product from '../../pages/auth/product';
import Home from '../../pages/home/home';
import MyRewardFirstScreen from '../../pages/myReward/myRewardSection';
import MyReferralScreen from '../../pages/MyReferral/MyReferralScreen';
import SendOtpForgotPassword from '../../pages/auth/forgotPassword';
import ConfirmForgotPasswordOtp from '../../pages/auth/confirmForgotPWOtp';
import ResetPassword from '../../pages/auth/resetPassword';
import Profile from '../../pages/auth/profile';
import { UserContext } from '../../utils/UseContext/useContext';
import { postData } from '../../services/api';
import { DecryptFunction } from '../../utils/decryptFunction';
import UserFaqs from '../../pages/auth/userFaqs';
import Error from '../../pages/Errror/error';
// import ProtectedRoute from '../protectedRoute';

const AppRoutes = () => {
  const {
    setContextHomeDataAPI,
    AuthLocal,
    setContextFaqsDataAPI,
    setAuthLocal,
  } = useContext(UserContext);
  const Auth = JSON?.parse(localStorage.getItem('Auth') ?? '{}');
  const HandleAPI = async () => {
    try {
      const enyptData = await postData('/home', {
        user_id: Auth?.user_id,
        log_alt: Auth?.log_alt,
        mode: Auth?.mode,
      });
      const Decrpty = await DecryptFunction(enyptData);
      setContextHomeDataAPI(Decrpty);

      // fetch-custom-data API for ALL FAQs
      const FaqsData = await postData('/admin/fetch-custom-data', {
        user_id: Auth?.user_id,
        log_alt: Auth?.log_alt,
        mode: Auth?.mode,
      });
      setContextFaqsDataAPI(FaqsData);
    } catch (error) {
      console.log('error: ', error);
    }
  };

  useEffect(() => {
    HandleAPI();
  }, []);

  // check if login or not functionality
  useEffect(() => {
    let getvalue = JSON.parse(localStorage.getItem('Auth') ?? '[]');
    setAuthLocal(getvalue?.mode);
  }, [AuthLocal]);

  return (
    <Router>
      <Routes>
        {!AuthLocal ? (
          <>
            <Route path="/login" element={<Login />} />
            <Route path="/forgotpassword" element={<SendOtpForgotPassword />} />
            <Route
              path="/confirmforgotPasswordotp"
              element={<ConfirmForgotPasswordOtp />}
            />
            <Route path="/resetpassword" element={<ResetPassword />} />
            <Route path="/loginOtp" element={<LoginOtp />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/subscription" element={<Product />} />
          </>
        ) : (
          <>
            <Route path="/" element={<Home />} />
            {/* <Route path="/subscription" element={<Product />} /> */}
            <Route path="/reward" element={<MyRewardFirstScreen />} />
            <Route path="/referral" element={<MyReferralScreen />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/profile-faqs" element={<UserFaqs />} />
          </>
        )}
        <Route path="*" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
