import React from 'react';
// images
import Logo from '../../../assets/navbar/navCenterImg.svg';

const Registration = () => {
  return (
    <section className='registration-section'>
      <div className="nav-logo text-center">
        <img className='header-center-img width-13' src={Logo} alt="logo" />
      </div>
      <div className="container">
        <h3 className="text-center font-52 montserrat-bold text-blue">You have been Invited</h3>
        <p className="text-center font-24 montserrat-semibold text-blue w-75 mx-auto">
          Riya invited you! Sign up now to get your reward and start your
          journey to more exclusive perks
        </p>
        {/* FORM */}
        <div className="register-form background-light-white-2 w-75 mx-auto rounded-4 pb-4">
            <div className="row justify-content-center mt-3">
                <div className="col-lg-5 mx-3 text-end my-3">
                    <input className='border-0 px-2 py-2 background-register-input w-75 rounded-3' type="text" placeholder='Your Name' />
                </div>
                <div className="col-lg-5 mx-3 my-3">
                    <input className='border-0 px-2 py-2 background-register-input w-75 rounded-3' type="text" placeholder='Your Name' />
                </div>
                <div className="col-lg-5 mx-3 text-end my-3">
                    <input className='border-0 px-2 py-2 background-register-input w-75 rounded-3' type="text" placeholder='Your Name' />
                </div>
                <div className="col-lg-5 mx-3 my-3">
                    <input className='border-0 px-2 py-2 background-register-input w-75 rounded-3' type="text" placeholder='Your Name' />
                </div>
                <div className="col-lg-5 mx-3 text-end my-3">
                    <input className='border-0 px-2 py-2 background-register-input w-75 rounded-3' type="text" placeholder='Your Name' />
                </div>
                <div className="col-lg-5 mx-3 my-3">
                    <input className='border-0 px-2 py-2 background-register-input w-75 rounded-3' type="text" placeholder='Your Name' />
                </div>
                <div className='text-center w-75 px-5 mx-auto mt-3 mb-3'>
                <button className='text-white background-text-blue font-16 montserrat-semibold py-2 border-0 w-100 rounded-3'>Sign Up</button>
                </div>
                <p className='text-center text-light-gray font-14 montserrat-medium pb-5'>Powered by Red Vision Technologies</p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Registration;
