import React from 'react';
import { useForm } from 'react-hook-form';

// Assets icons
import Loginimg from '../../assets/icons/auth/login-side.svg';
import Logo from '../../assets/icons/logo/logo.svg';

// Reusable Button
import Button from '../../components/button';

// React Router
import { NavLink } from 'react-router-dom';

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log('Form Submitted:', data);
  };

  return (
    // <div className="login-bg-img vh-100">
    //   <div className="nav-logo text-center">
    //     <img className="header-center-img width-13" src={Logo} alt="logo" />
    //   </div>

    //   <div className="row p-4 d-flex justify-content-center">
    //     <div className="col-lg-7">
    //       <div className="text-center mt-3">
    //         <p className="font-size-46 text-blue montserrat-bold mb-3">Login</p>
    //         <p className="text-blue montserrat-semibold font-size-20 pb-3">
    //           Log in to continue enjoying the perks and stay engaged with our
    //           exciting <br /> reward and referral program!
    //         </p>
    //       </div>

    //       <div className="login-form-section row py-2 px-3 d-flex align-items-center justify-content-center">
    //         <div className="col-lg-6 col-md-6 col-12">
    //           <div className="login-img">
    //             <img src={Loginimg} alt="Login Visual" />
    //           </div>
    //         </div>

    //         <div className="col-lg-6 col-md-6 col-12">
    //           <form onSubmit={handleSubmit(onSubmit)}>
    //             <div className="mb-3 ">
    //               <input
    //                 type="text"
    //                 className="form-control py-2"
    //                 placeholder="Your Email / Mobile No"
    //                 {...register('name', {
    //                   required: 'Name is required',
    //                   pattern: {
    //                     value: /^[A-Za-z\s]+$/i,
    //                     message: 'Name must contain only letters',
    //                   },

    //                   minLength: {
    //                     value: 2,
    //                     message: 'Name must be at least 2 characters long',
    //                   },
    //                   maxLength: {
    //                     value: 50,
    //                     message: 'Name must not exceed 50 characters',
    //                   },
    //                 })}
    //               />
    //               {errors.name && (
    //                 <div className="text-danger">{errors.name.message}</div>
    //               )}
    //             </div>

    //             <div className="mb-4">
    //               <input
    //                 type="password"
    //                 className="form-control py-2"
    //                 placeholder="Password"
    //                 {...register('password', {
    //                   required: 'Password is required',
    //                   minLength: {
    //                     value: 8,
    //                     message: 'Password must be at least 8 characters',
    //                   },
    //                   pattern: {
    //                     value:
    //                       /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
    //                     message:
    //                       'Password must include uppercase, lowercase, number, and special character',
    //                   },
    //                 })}
    //               />
    //               {errors.password && (
    //                 <div className="text-danger">{errors.password.message}</div>
    //               )}
    //             </div>

    //             <div className="d-flex justify-content-between align-items-center">
    //               <div className="w-100 pe-2">
    //                 <NavLink
    //                   to="/loginOtp"
    //                   className="text-blue montserrat-semibold font-size-16"
    //                 >
    //                   <Button
    //                     type="button"
    //                     label="Login with OTP"
    //                     className="montserrat-semibold font-size-16 text-blue background-light-white border-blue border-2 hover-background-text-blue hover-text-light w-100"
    //                   />
    //                 </NavLink>
    //               </div>

    //               <div className="w-100">
    //                 <Button
    //                   type="submit"
    //                   label="Login"
    //                   className="montserrat-bold font-size-16 background-text-blue text-light border-0 w-100"
    //                 />
    //               </div>
    //             </div>

    //             <p className="font-size-14 montserrat-medium text-center mt-3 text-light-gray">
    //               Powered by Red Vision Technologies
    //             </p>
    //           </form>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className='login-bg-img'>
                <div className="nav-logo text-center">
                    <img className='header-center-img width-13' src={Logo} alt="logo" />
                </div>
                <div className='row p-4 d-flex justify-content-center align-items-center'>
                    <div className='col-lg-7'>
                        <div className='text-center mt-5'>
                            <p className='font-size-46 text-blue montserrat-bold mb-3'>Login</p>
                            <p className='text-blue montserrat-semibold font-size-20 pb-3'>Log in to continue enjoying the perks and stay engaged with our exciting reward and referral program!</p>
                        </div>
                        <div className='login-form-section row py-2 px-3 d-flex align-items-center justify-content-center'>
                            <div className='col-lg-6 col-md-6 col-12 d-flex justify-content-center'>
                                <div className='login-img'>
                                    <img src={Loginimg} alt="Laoding" className='img-fluid' />
                                </div>
                            </div>
                            <div className='col-lg-6 col-md-6 col-12'>
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div class="mb-3 mt-5">
                                        <input type="text" class="form-control py-2" id="exampleFormControlInput1" placeholder="Your Name"
                                            {...register('name', { required: 'Name is required' })}
                                        />
                                        {errors.name && <div className="text-danger">{errors.name.message}</div>}
                                    </div>
                                    <div class="mb-4">
                                        <input type="email" class="form-control py-2" id="exampleFormControlInput1" placeholder="Your E-mail"
                                            {...register('email', {
                                                required: 'Email is required',
                                                // pattern: {
                                                //     value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                                //     message: 'Invalid email address',
                                                // },
                                            })}
                                        />
                                        {errors.email && <div className="text-danger">{errors.email.message}</div>}
                                    </div>
                                    <button type='submit' className='montserrat-bold w-100 font-size-16 py-2 rounded-3 background-text-blue text-white'>Login</button>
                                    <p className='font-size-16 montserrat-medium text-center mt-3 text-light-gray'>Powered by Red Vision Technologies</p>
                                </form>
                            </div>
                        </div>
                    </div>
 
                </div>
 
            </div>
  );
};

export default Login;
