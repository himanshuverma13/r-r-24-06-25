import React from 'react';
import { useForm } from 'react-hook-form';

// Assets icons
import Logo from '../../assets/icons/logo/logo.svg';

const Registration = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const password = watch('password');

  const onSubmit = (data) => {
    console.log('Form Submitted:', data);
  };

  return (
    <>
      <div className="login-bg-img vh-100">
        <div className="nav-logo text-center mt-0">
          <img className="header-center-img width-13" src={Logo} alt="logo" />
        </div>
        <div className="row p-lg-3 p-2 d-flex justify-content-center">
          <div className="col-lg-7">
            <div className="text-center mt-2">
              <p className="font-size-44 text-blue montserrat-bold mb-2">
                You have been Invited
              </p>
              <p className="text-blue montserrat-semibold font-size-20 pb-2">
                Riya invited you! Sign up now to get your reward and start your
                 journey <br /> to more exclusive perks
              </p>
            </div>
            <div className="login-form-section register-form">
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="row p-lg-4 p-4 justify-content-center mb-5"
              >
                <div className="col-lg-5 col-md-6 col-12 mt-2">
                  <div class="mb-3">
                    <input
                      type="text"
                      class="form-control py-2"
                      id="exampleFormControlInput1"
                      placeholder="Your Name"
                      {...register('name', { required: 'Name is required' })}
                    />
                    {errors.name && (
                      <div className="text-danger">{errors.name.message}</div>
                    )}
                  </div>
                </div>
                <div className="col-lg-5 col-md-6 col-12 mt-2">
                  <div class="mb-4">
                    <input
                      type="email"
                      class="form-control py-2"
                      id="exampleFormControlInput1"
                      placeholder="Your E-mail"
                      {...register('email', {
                        required: 'Email is required',
                      })}
                    />
                    {errors.email && (
                      <div className="text-danger">{errors.email.message}</div>
                    )}
                  </div>
                </div>
                <div className="col-lg-5 col-md-6 col-12">
                  <div class="mb-4">
                    <input
                      type="mobile"
                      class="form-control py-2"
                      id="exampleFormControlInput1"
                      placeholder="Your Mobile No."
                      {...register('mobile', {
                        required: 'Mobile No. is required',
                      })}
                    />
                    {errors.mobile && (
                      <div className="text-danger">{errors.mobile.message}</div>
                    )}
                  </div>
                </div>

                <div className="col-lg-5 col-md-6 col-12">
                  <div class="mb-4">
                    <input
                      type="referralCode"
                      class="form-control py-2"
                      id="exampleFormControlInput1"
                      placeholder="Your Referral Code"
                      {...register('referralCode', {
                        required: 'Referral Code No. is required',
                      })}
                    />
                    {errors.referralCode && (
                      <div className="text-danger">
                        {errors.referralCode.message}
                      </div>
                    )}
                  </div>
                </div>

                <div className="col-lg-5 col-md-6 col-12">
                  <div class="mb-4">
                    <input
                      type="password"
                      class="form-control py-2"
                      id="exampleFormControlInput1"
                      placeholder="Enter New Password"
                      {...register('password', {
                        required: 'Password is required',
                      })}
                    />
                    {errors.password && (
                      <div className="text-danger">
                        {errors.password.message}
                      </div>
                    )}
                  </div>
                </div>

                <div className="col-lg-5 col-md-6 col-12">
                  <div class="mb-4">
                    <input
                      type="password"
                      class="form-control py-2"
                      id="exampleFormControlInput1"
                      placeholder="Re-Enter Password"
                      {...register('confirmPassword', {
                        required: 'confirm Password is required',
                        validate: (value) =>
                          value === password || 'Passwords do not match',
                      })}
                    />
                    {errors.confirmPassword && (
                      <div className="text-danger">
                        {errors.confirmPassword.message}
                      </div>
                    )}
                  </div>
                </div>
                <div className="col-lg-10 mb-3">
                  <button
                    type="submit"
                    className="montserrat-bold w-100 font-size-16 py-2 rounded-3 background-text-blue text-white"
                  >
                    Sign Up
                  </button>
                  <p className="font-size-16 montserrat-medium text-center mt-3 text-light-gray">
                    Powered by Red Vision Technologies
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Registration;
