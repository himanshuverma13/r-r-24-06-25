// import React from 'react';
// // import component

// // import slider
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

// // import images
// import metero from '../../../assets/secondScreen/metero.svg';
// import tiltship from '../../../assets/secondScreen/tillship1.svg';
// import star from '../../../assets/secondScreen/star.svg';
// import moneypocket from '../../../assets/MyRewards/moneypkt.svg';
// import shootingmeteor from '../../../assets/MyRewards/shotmeteor.svg';
// import rewardRocket from '../../../assets/MyRewards/rewardRocket.svg';
// import longArrow from '../../../assets/MyRewards/longArrow.svg';
// import Navbar from '../../components/navbar';

// const MyRewardFirstScreen = () => {
//   const discount = {
//     dots: false,
//     arrows: false,
//     slidesToShow: 3,
//     centerMode: true,
//     centerPadding: '60px',
//   };

//   return (
//     <>
//       <section className="hero-section  position-relative">
//         <Navbar />
//         <div className="container">
//           <div className="row justify-content-between px-3">
//             <div className="col-lg-3"></div>
//             <div className="col-lg-4 d-flex justify-content-end px-0">
//               <div className="till-ship w-75 position-relative tilte-shadow rounded-3">
//                 <img
//                   className="position-absolute till-ship-img"
//                   src={tiltship}
//                   alt="tiltship"
//                 />
//                 <div className="py-2 offset-2 text-white d-flex justify-content-evenly align-items-center">
//                   <span className="montserrat-bold font-14 montserrat-bold till-ship-border-color pe-3 z-1 position-relative">
//                     300
//                     <img className="my-1 mx-2" src={metero} alt="metero" />
//                     <span className="font-14 montserrat-medium">Meteors</span>
//                   </span>
//                   <span className="font-14 montserrat-semibold">
//                     1
//                     <img className="mx-1" src={star} alt="star" />
//                     <span className="space-grotesk-medium">star</span>
//                   </span>
//                 </div>
//               </div>
//             </div>
//           </div>
//           {/* MY REWARDS FIRST SCREEN */}
//           <div className="d-flex my-reward-cards gap-4 mt-3 px-0">
//             <div className="w-50 myreward-card-1 px-4 pb-4 rounded-4">
//               <h2 className="font-24 montserrat-bold text-white mb-1 mt-3 pt-3">
//                 My Collections
//               </h2>
//               <p className="font-14 montserrat-medium text-white">
//                 Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
//               </p>
//               <div className="row justify-content-around">
//                 <div className="col-lg-4 rounded-4 background-light-white position-relative px-2 pb-1 pt-2 mt-4">
//                   <span className="font-46 montserrat-semibold text-blue ms-1">
//                     X
//                   </span>{' '}
//                   <span className="text-blue font-16 montserrat-semibold ms-1">
//                     Stars
//                   </span>{' '}
//                   <img
//                     className="position-absolute w-50 myreward-star"
//                     src={star}
//                     alt="star"
//                   />
//                 </div>
//                 <div className="col-lg-6 rounded-4 background-light-white position-relative px-2 pb-1 pt-2 mt-4">
//                   <span className="font-46 montserrat-semibold text-blue ms-1">
//                     X
//                   </span>{' '}
//                   <span className="text-blue font-16 montserrat-semibold ms-1">
//                     Cashbacks
//                   </span>{' '}
//                   <img
//                     className="position-absolute w-25 myreward-pocket"
//                     src={moneypocket}
//                     alt="moneypocket"
//                   />
//                 </div>
//                 <div className="col-lg-6 d-flex position-relative justify-content-between rounded-4 background-light-white  px-2 pb-1 pt-4 mt-4">
//                   <div className="d-inline">
//                     <span className="font-46 montserrat-semibold text-blue ms-1">
//                       X
//                     </span>{' '}
//                     <span className="text-blue font-16 montserrat-semibold ms-1">
//                       Meteors
//                     </span>{' '}
//                   </div>
//                   <img
//                     className="w-25 position-absolute myreward-shotingmeteor"
//                     src={shootingmeteor}
//                     alt="star"
//                   />
//                 </div>
//                 <div className="col-lg-4 rounded-4 background-light-white px-2 pb-1 pt-4 mt-4">
//                   <span className="font-46 montserrat-semibold text-blue ms-1">
//                     X
//                   </span>{' '}
//                   <span className="text-blue font-16 montserrat-semibold ms-1">
//                     Vouchers
//                   </span>{' '}
//                 </div>
//               </div>
//             </div>
//             <div className="w-50 myreward-card-2 px-4 pb-4 rounded-4">
//               <h2 className="font-24 montserrat-bold text-white mb-1 mt-3 pt-3">
//                 Earn More
//               </h2>
//               <p className="font-14 montserrat-medium text-white">
//                 Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
//               </p>
//               <label
//                 className="d-block font-14 montserrat-medium text-white mb-1"
//                 htmlFor="Invite Code"
//               >
//                 Invite Code
//               </label>
//               <input
//                 className="background-light-white border-0 rounded-3 w-100 py-2"
//                 type="text"
//                 name=""
//                 id=""
//               />
//               <label
//                 className="d-block font-14 montserrat-medium text-white mt-4 mb-1"
//                 htmlFor="Invite Link"
//               >
//                 Invite Link
//               </label>
//               <input
//                 className="background-light-white border-0 rounded-3 w-100 py-2"
//                 type="text"
//                 name=""
//                 id=""
//               />
//               <div className="d-flex justify-content-between mt-4">
//                 <button className="px-4 font-16 montserrat-semibold width-48 py-2 bg-white text-blue border-blue rounded-3">
//                   Play & Earn
//                 </button>
//                 <button className="px-4 font-16 montserrat-semibold width-48 py-2 text-white background-text-blue rounded-3">
//                   Invite a Friend
//                 </button>
//               </div>
//             </div>
//           </div>
//           <div className="myreward-bottom mt-5 text-center">
//             <h2 className="m-0 font-32 space-grotesk-bold text-blue">
//               Your Reward Journey So Far
//             </h2>
//             <img className="offset-3" src={longArrow} alt="longArrow" />
//           </div>
//           <div className="position-absolute bottom-0 start-0">
//             <img className="width-60" src={rewardRocket} alt="footerrocket" />
//           </div>
//           {/* MY REWARDS FIRST SCREEN END*/}

//           {/* MY REWARDS SECOND SCREEN */}
//           {/* <div className="d-flex justify-content-between background-text-blue rounded-4 overflow-hidden position-relative py-3 mt-2">
//             <div className="width-12">
//               <h3 className="font-20 montserrat-semibold text-white ms-3 w-50">
//                 Your Reward Journey So Far
//               </h3>
//               <img
//                 className="position-absolute reward-moving-rkt"
//                 src={moverocket}
//                 alt="moverocket"
//               />
//               <img
//                 className="width-10 position-absolute bottom-0 "
//                 src={clouds}
//                 alt="clouds"
//               />
//             </div>
//             <div className="slider-container width-87 pe-2">
//               <Slider className="reward-slider" {...rewardSliderSetting}>
//                 {RewardSliderJson?.map((slide) => (
//                   <div className="background-light-white-2 reward-slides border-radius-12 text-center pt-2 pb-3 ">
//                     <h4 className="font-14 montserrat-semibold text-blue">
//                       Level {slide?.num}
//                     </h4>
//                     <div className="position-relative d-flex justify-content-center">
//                       <img
//                         className="width-30 mx-auto position-absolute"
//                         src={slide?.img}
//                         alt="reward image"
//                       />
//                       <img
//                         className="width-40 mx-auto mt-5"
//                         src={plntbase}
//                         alt="reward image"
//                       />
//                     </div>

//                     <h4 className="font-14 montserrat-regular">1000 Meteors</h4>
//                     {slide?.lock ? (
//                       <button className="background-text-blue w-75 border-0 border-radius-8 font-12  py-2 mx-3 opacity-25 montserrat-semibold text-white">
//                         <img className="mx-auto" src={lock} alt="" />
//                       </button>
//                     ) : (
//                       <button className="background-text-blue w-75 border-0 border-radius-8 font-12  py-2 mx-3 montserrat-semibold text-white">
//                         <span className="">Claim</span>
//                       </button>
//                     )}
//                   </div>
//                 ))}
//               </Slider>
//             </div>
//           </div> */}

//           {/* MY REWARDS SECOND SCREEN END */}

//           {/* MY REWARDS THIRD SCREEN */}
//           {/* MY REWARDS THIRD SCREEN END */}

//           {/* Discount and exclusive cards */}
//           {/* <div className="reward-discount border-blue shadow-lg rounded-4 px-3 pt-2 pb-3 mt-3">
//             <h2 className="font-18 space-grotesk-bold text-blue mb-0">
//               Discount Codes
//             </h2>
//             <p className="font-14 montserrat-medium text-blue mb-2">
//               Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
//             </p>
//               <div className="slider-container">
//                 <Slider className="exclusive-discount-sect" {...discount}>
//                   {[1, 2, 3, 4, 5, 6].map((item, index) => (
//                     <div className="d-flex excl-discount-card p-2 border-radius-8 background-text-blue position-relative overflow-hidden">
//                       <span className="p-4 border-radius-8 bg-white"></span>
//                       <div className="text-white ms-3">
//                         <h2 className="font-14 mb-0 montserrat-medium">
//                           Flat{' '}
//                           <span className="font-16 montserrat-bold">
//                             10% Off
//                           </span>{' '}
//                           on
//                         </h2>
//                         <h2 className="font-14 mb-0 montserrat-medium">
//                           Sales Ninja
//                         </h2>
//                       </div>
//                       <div
//                         className={`position-absolute top-0 end-0 text-blue font-12 montserrat-semibold ${index == 1 ? 'background-light-pink' : 'background-light-cream'} px-3 py-0 discount-border`}
//                       >
//                         {index !== 1 ? '7 d' : 'Expire soon'}
//                       </div>
//                     </div>
//                   ))}
//                 </Slider>
//               </div>
//           </div>
//           <div className="reward-discount border-blue shadow-lg rounded-4 px-3 pt-2 pb-3 mt-3">
//             <h2 className="font-18 space-grotesk-bold text-blue mb-0">
//               Exclusive Perks
//             </h2>
//             <p className="font-14 montserrat-medium text-blue mb-2">
//               Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
//             </p>
//             <div className="slider-container">
//               <div className="slider-container">
//                 <Slider className="exclusive-discount-sect" {...discount}>
//                   {[1, 2, 3, 4, 5, 6].map((item, index) => (
//                     <div className="d-flex excl-discount-card p-2 border-radius-8 background-text-blue position-relative overflow-hidden">
//                       <span className="p-4 border-radius-8 bg-white"></span>
//                       <div className="text-white ms-3">
//                         <h2 className="font-14 mb-0 montserrat-medium">
//                           Flat{' '}
//                           <span className="font-16 montserrat-bold">
//                             10% Off
//                           </span>{' '}
//                           on
//                         </h2>
//                         <h2 className="font-14 mb-0 montserrat-medium">
//                           Sales Ninja
//                         </h2>
//                       </div>
//                       <div
//                         className={`position-absolute top-0 end-0 text-blue font-12 montserrat-semibold ${index == 1 ? 'background-light-pink' : 'background-light-cream'} px-3 py-0 discount-border`}
//                       >
//                         {index !== 1 ? '7 d' : 'Expire soon'}
//                       </div>
//                     </div>
//                   ))}
//                 </Slider>
//               </div>
//             </div>
//           </div> */}
//         </div>
//       </section>
//     </>
//   );
// };

// export default MyRewardFirstScreen;

import React, { useEffect, useState } from 'react';
// import component
import Navbar from '../../components/navbar';

// import slider
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// import images
import metero from '../../assets/icons/home/secondScreen/metero.svg';
import tiltship from '../../assets/icons/home/secondScreen/tillship1.svg';
import star from '../../assets/icons/home/secondScreen/star.svg';
// import moneypocket from '../../assets/icons/home/MyRewards/moneypkt.svg';
import shootingmeteor from '../../assets/icons/home/MyRewards/shotmeteor.svg';
import rewardRocket from '../../assets/icons/home/MyRewards/rewardRocket.svg';
import longArrow from '../../assets/icons/home/MyRewards/longArrow.svg';
import Label from '../../assets/icons/home/MyRewards/Label.svg';

//
import moverocket from '../../assets/icons/home/MyRewards/moverocket.svg';
import clouds from '../../assets/icons/home/MyRewards/clouds.svg';
import lock from '../../assets/icons/home/MyRewards/lock.svg';
import plntbase from '../../assets/icons/home/MyRewards/plntbase.svg';
import gifplnt1 from '../../assets/icons/home/HomePlanets/purple.svg';
import gifplnt2 from '../../assets/icons/home/HomePlanets/yellow.svg';
import gifplnt3 from '../../assets/icons/home/HomePlanets/green.svg';
import gifplnt4 from '../../assets/icons/home/HomePlanets/blue.svg';
// import MyRewardSecondScreen from './myRewardScreen2';
// import MyRewardThirdScreen from './myRewardScreen3';
import Voucher from '../../assets/icons/home/MyRewards/Label.svg';
import ProductDemo from '../../assets/icons/home/MyRewards/product-demo.svg';
import Stratergy from '../../assets/icons/home/MyRewards/strategry-consultant.svg';
import Report from '../../assets/icons/home/MyRewards/report.svg';
import refalien from '../../assets/icons/home/MyRewards/refalien.svg';
import StartFour from '../../assets/icons/home/MyRewards/StarFour.svg';
import FAQ from '../../components/faq';
import PlayAndEarnCard from '../../components/playAndEarnCard';

const RewardSliderJson = [
  { num: 'A', img: gifplnt1, lock: false },
  { num: 'B', img: gifplnt2, lock: false },
  { num: 'C', img: gifplnt3, lock: true },
  { num: 'D', img: gifplnt4, lock: true },
  // { num: "E", img: gifplnt5, lock: true },
];
// Discont card Json
const discountData = [
  {
    mainText: 'Flat ',
    highlight: '10% Off',
    subText: 'on Sales Ninja',
    badgeText: '7 d',
    badgeClass: 'background-light-cream',
  },
  {
    mainText: '',
    highlight: '₹ 2000 Off',
    subText: 'on Business Booster',
    badgeText: 'Expire Soon',
    badgeClass: 'background-light-pink',
  },
  {
    mainText: '',
    highlight: '₹ 2000 Off',
    subText: 'on Robo Advisory',
    badgeText: '7 d',
    badgeClass: 'background-light-cream',
  },
  {
    mainText: 'Flat ',
    highlight: '10% Off',
    subText: 'on Sales Ninja',
    badgeText: '7 d',
    badgeClass: 'background-light-cream',
  },
];

// Exclusive card JSon
const ExclusiveCardData = [
  {
    title: 'One -on- one Product demo',
    subtitle: 'with a product specialist',
    image: ProductDemo,
    imgClass: 'product-img',
    pointsText: 'Unlock with 200 points',
  },
  {
    title: 'Strategy consultation',
    subtitle: '30 - min Sales Strategy Call',
    image: Stratergy,
    imgClass: 'stratergy-img',
    pointsText: 'Worth ₹5000 - unlockable ',
  },
  {
    title: 'Premium report',
    subtitle: 'Top MFD Trends 2025',
    image: Report,
    imgClass: 'report-img',
    pointsText: 'Downloadable Exclusive',
  },
  {
    title: 'One -on- one Product demo',
    subtitle: 'with a product specialist',
    image: ProductDemo,
    imgClass: 'product-img',
    pointsText: 'Unlock with 200 points',
  },
  {
    title: 'Strategy consultation',
    subtitle: '30 - min Sales Strategy Call',
    image: Stratergy,
    imgClass: 'stratergy-img',
    pointsText: 'Worth ₹5000 - unlockable ',
  },
  {
    title: 'Premium report',
    subtitle: 'Top MFD Trends 2025',
    image: Report,
    imgClass: 'report-img',
    pointsText: 'Downloadable Exclusive',
  },
];
const FaqData = [
  {
    title: '1. Collapsible Group Item',
    content:
      'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.',
  },
  {
    title: '2. Collapsible Group Item',
    content:
      'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.',
  },
  {
    title: '3. Collapsible Group Item',
    content:
      'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.',
  },
];

const MyRewardFirstScreen = () => {
  const rewardSliderSetting = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    centerMode: false,
    initialSlide: 0,
    centerPadding: '0px',
    responsive: [
      {
        breakpoint: 1200, // screens ≤ 1200px
        settings: {
          slidesToShow: 3,
          centerPadding: '30px',
        },
      },
      {
        breakpoint: 992, // screens ≤ 992px
        settings: {
          slidesToShow: 2.2,
          centerPadding: '25px',
        },
      },
      {
        breakpoint: 768, // screens ≤ 768px (tablet)
        settings: {
          slidesToShow: 2,
          centerPadding: '20px',
        },
      },
      {
        breakpoint: 576, // screens ≤ 576px (mobile)
        settings: {
          slidesToShow: 1,
          centerPadding: '15px',
        },
      },
    ],
  };
  const settings = {
    arrow: false,
    className: 'center',
    infinite: true,
    centerPadding: '40px',
    slidesToShow: 3.5,
    swipeToSlide: true,
    afterChange: function (index) {
      console.log(
        `Slider Changed to: ${index + 1}, background: #222; color: #bada55`,
      );
    },
    responsive: [
      {
        breakpoint: 1200, // screens ≤ 1200px
        settings: {
          slidesToShow: 3,
          centerPadding: '30px',
        },
      },
      {
        breakpoint: 992, // screens ≤ 992px
        settings: {
          slidesToShow: 2.2,
          centerPadding: '25px',
        },
      },
      {
        breakpoint: 768, // screens ≤ 768px (tablet)
        settings: {
          slidesToShow: 2,
          centerPadding: '20px',
        },
      },
      {
        breakpoint: 576, // screens ≤ 576px (mobile)
        settings: {
          slidesToShow: 1,
          centerPadding: '15px',
        },
      },
    ],
  };
  // =============
  // States
  // ==============
  const [RwdAnimate, setRwdAnimate] = useState(false);
  const [ShowSecScr, setShowSecScr] = useState(true);
  const [leftScrolAnimt, setleftScrolAnimt] = useState(true);
  const [UfoBg, setUfoBg] = useState(false);

  // =============
  // Functions
  // ==============
  const handleRewardAnimate = () => {
    setRwdAnimate(true);
  };
  const handleNextScrAnimt = () => {
    setShowSecScr(false);
    setleftScrolAnimt(false);
  };

  //============
  // UseEffect
  //============

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setUfoBg(true); // Dark color when scrolled
      } else {
        setUfoBg(false); // Transparent at top
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <section
        className={` reward-section position-relative ${RwdAnimate ? '' : 'height-100vh'}`}
      >
        <div
          className={`reward-nav-animt ${RwdAnimate ? 'reward-nav-animt-move-up' : ''}`}
        >
          <Navbar />
        </div>

        {/* UFO SHIP SIDE NAV */}
        <div className="container-fluid ">
          <div
            className={`px-0 position-fixed z-1 w-100 left-0 ${UfoBg ? 'redeem-claim' : ''}`}
            style={{
              height: '95px',
            }}
          ></div>
          <div
            className={`row justify-content-between ${RwdAnimate ? 'ufo-fixed-active' : 'ufo-fixed'} w-100 z-3 px-3 mt-lg-3`}
          >
            <div className="col-lg-3"></div>
            <div className="col-lg-4 d-flex justify-content-end px-0">
              <div className="till-ship w-75 position-relative tilte-shadow rounded-3">
                <img
                  className="position-absolute till-ship-img"
                  src={tiltship}
                  alt="tiltship"
                />
                <div className="py-2 offset-2 text-white d-flex justify-content-evenly align-items-center">
                  <span className="montserrat-bold font-14 montserrat-bold till-ship-border-color pe-3 z-1 position-relative">
                    300
                    <img className="my-1 mx-2" src={metero} alt="metero" />
                    <span className="font-14 montserrat-medium">Meteors</span>
                  </span>
                  <span className="font-14 montserrat-semibold">
                    1
                    <img className="mx-1" src={star} alt="star" />
                    <span className="space-grotesk-medium">star</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* MY REWARDS FIRST SCREEN */}
        {ShowSecScr ? (
          <>
            <div className="container sdfsdfd">
              <div className="d-flex my-reward-cards gap-4 mt-5 px-0">
                <div className="w-50 myreward-card-1 px-4 pb-4 rounded-4">
                  <h2 className="font-24 montserrat-bold text-white mb-1 mt-3 pt-3">
                    My Collections
                  </h2>
                  <p className="font-14 montserrat-medium text-white">
                    Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                  </p>
                  <div className="row justify-content-around">
                    <div className="col-lg-7">
                      <div className="rounded-4 background-light-white-1 position-relative px-2 pb-1 pt-2 mt-4">
                        <span className="font-46 montserrat-semibold text-blue ms-1">
                          X
                        </span>{' '}
                        <span className="text-blue font-16 montserrat-semibold ms-1">
                          Stars
                        </span>{' '}
                        <img
                          className="position-absolute w-50 myreward-star"
                          src={star}
                          alt="star"
                        />
                      </div>

                      <div className="d-flex position-relative justify-content-between rounded-4 background-light-white-1 px-2 pb-1 pt-5 mt-4">
                        <div className="d-inline">
                          <span className="font-46 montserrat-semibold text-blue ms-1">
                            X
                          </span>{' '}
                          <span className="text-blue font-16 montserrat-semibold ms-1">
                            Meteors
                          </span>{' '}
                        </div>
                        <img
                          className="w-25 position-absolute myreward-shotingmeteor"
                          src={shootingmeteor}
                          alt="star"
                        />
                      </div>
                    </div>
                    {/* <div className="rounded-4 background-light-white position-relative px-2 pb-1 pt-2 mt-4">
                    <span className="font-46 montserrat-semibold text-blue ms-1">
                      X
                    </span>{' '}
                    <span className="text-blue font-16 montserrat-semibold ms-1">
                      Cashbacks
                    </span>{' '}
                    <img
                      className="position-absolute w-25 myreward-pocket"
                      src={moneypocket}
                      alt="moneypocket"
                    />
                  </div> */}

                    <div className="col-lg-4 rounded-4 background-light-white-1 px-2 pb-1 pt-4 mt-4 position-relative">
                      <img
                        src={Label}
                        className="position-absolute myreward-voucher"
                        alt="Laoding"
                      />

                      <div className="position-absolute bottom-0">
                        <span className="font-46 montserrat-semibold text-blue ms-1">
                          X
                        </span>{' '}
                        <span className="text-blue font-16 montserrat-semibold ms-1">
                          Vouchers
                        </span>{' '}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-50 myreward-card-2 px-4 pb-4 rounded-4">
                  <h2 className="font-24 montserrat-bold text-white mb-1 mt-3 pt-3">
                    Earn More
                  </h2>
                  <p className="font-14 montserrat-medium text-white">
                    Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                  </p>
                  <label
                    className="d-block font-14 montserrat-medium text-white mb-1"
                    htmlFor="Invite Code"
                  >
                    Invite Code
                  </label>
                  <input
                    className="background-light-white-2 border-0 rounded-3 w-100 py-2"
                    type="text"
                    name=""
                    id=""
                  />
                  <label
                    className="d-block font-14 montserrat-medium text-white mt-4 mb-1"
                    htmlFor="Invite Link"
                  >
                    Invite Link
                  </label>
                  <input
                    className="background-light-white-2 border-0 rounded-3 w-100 py-2"
                    type="text"
                    name=""
                    id=""
                  />
                  <div className="d-flex justify-content-between mt-4">
                    <button className="px-4 font-16 montserrat-semibold width-48 py-2 bg-white text-blue border-blue rounded-3">
                      Play & Earn
                    </button>
                    <button className="px-4 font-16 montserrat-semibold width-48 py-2 text-white background-text-blue rounded-3">
                      Invite a Friend
                    </button>
                  </div>
                </div>
              </div>
              <div
                className={`myreward-bottom mt-5 text-center ${RwdAnimate ? 'rwd-jrny-hide' : ''}`}
              >
                <h2 className="m-0 font-32 space-grotesk-bold text-blue">
                  Your Reward Journey So Far
                </h2>
                <img
                  onClick={handleRewardAnimate}
                  className="offset-3 cursor-pointer"
                  src={longArrow}
                  alt="longArrow"
                />
              </div>
              <div
                className={`position-absolute bottom-0 start-0 ${RwdAnimate ? 'footer-rkt-down' : ''}`}
              >
                <img
                  className="width-60"
                  src={rewardRocket}
                  alt="footerrocket"
                />
              </div>
            </div>
          </>
        ) : (
          <>
            {/* ============  MY REWARDS SECOND SCREEN  =============== */}
            <div className="container mt-3 pt-5">
              {/* REWARD JOURNEY SLIDER */}
              <div
                className={`d-flex justify-content-between background-text-blue rounded-4 overflow-hidden position-relative py-3 mt-5`}
              >
                <div className="width-16">
                  <h3 className="font-20 montserrat-semibold text-white ms-3 w-75">
                    Your Reward Journey <br /> So Far
                  </h3>
                  <img
                    className="position-absolute reward-moving-rkt"
                    src={moverocket}
                    alt="moverocket"
                  />
                  <img
                    className="width-10 position-absolute bottom-0 "
                    src={clouds}
                    alt="clouds"
                  />
                </div>
                <div className="slider-container width-82 pe-2">
                  <Slider className="reward-slider" {...rewardSliderSetting}>
                    {RewardSliderJson?.map((slide) => (
                      <div className="background-light-white-2 reward-slides border-radius-12 text-center pt-2 pb-3 ">
                        <h4 className="font-14 montserrat-semibold text-blue">
                          Planet {slide?.num}
                        </h4>
                        <div className="position-relative d-flex justify-content-center">
                          <img
                            className="width-24 mx-auto position-absolute"
                            src={slide?.img}
                            alt="reward image"
                          />
                          <img
                            className="width-34 mx-auto mt-5"
                            src={plntbase}
                            alt="reward image"
                          />
                        </div>

                        {/* <h4 className="font-14 montserrat-regular">1000 Meteors</h4> */}
                        {slide?.lock ? (
                          <button className="background-text-blue w-75 mt-4 mx-auto border-0 border-radius-8 font-size-12 d-flex justify-content-center align-items-center py-2 mx-3 opacity-25 montserrat-semibold text-white">
                            1000 Meteors{' '}
                            <img className=" ms-3" src={lock} alt="Loading" />
                          </button>
                        ) : (
                          <button className="background-text-blue w-75 mt-4 mx-auto border-0 border-radius-8 font-size-12  py-2 mx-3 montserrat-semibold text-white">
                            <span className="">1000 Meteors</span>
                          </button>
                        )}
                      </div>
                    ))}
                  </Slider>
                </div>
              </div>
              {/* Discount Cards start here */}
              <div className="discount-code-section my-5 px-4">
                <div className="discount-bg-img pt-4">
                  <p className="font-size-18 montserrat-bold text-blue">
                    Discount Codes
                  </p>
                </div>
                <p className="text-blue font-size-14 montserrat-medium mb-1">
                  Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                </p>
                <div className="slider-container discount-slider pb-4 px-2">
                  <Slider className="" {...settings}>
                    {discountData.map((item, index) => (
                      <div key={index} className="px-2">
                        <div className="discount-card background-text-blue row ps-2 gx-0 position-relative">
                          <div className="col-8 text-white d-flex align-items-center my-2 justify-content-center">
                            <div className="discount-white-box"></div>
                            <p className="font-size-14 montserrat-medium ps-2 mt-2 lh-sm">
                              {item.mainText}
                              <span className="montserrat-bold">
                                {item.highlight}
                              </span>{' '}
                              {item.subText}
                            </p>
                          </div>
                          <div className="col-4">
                            <div
                              className={`discount-deals montserrat-semibold font-size-12 ${item.badgeClass} px-3 py-1 text-blue me-0 position-absolute top-0 end-0`}
                            >
                              {item.badgeText}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </Slider>
                </div>
              </div>

              {/* Exclusive Perks */}
              <div className="discount-code-section my-5 px-4">
                <div className="discount-bg-img pt-4">
                  <p className="font-size-18 montserrat-bold text-blue">
                    Exclusive Perks
                  </p>
                </div>
                <p className="text-blue font-size-14 montserrat-medium mb-2">
                  Exclusive perks just for you
                </p>

                <div className="slider-container exclusive-slider pb-4">
                  <Slider {...settings}>
                    {ExclusiveCardData.map((item, index) => (
                      <div key={index}>
                        <div className="discount-card background-text-blue row gx-0 p-3 mx-2">
                          <div className="col-8 text-white">
                            <p className="font-size-16 mb-0 text-uppercase montserrat-medium">
                              {item.title}
                            </p>
                            <p className="font-size-14 montserrat-semibold exclusive-card-yellow-text">
                              {item.subtitle}
                            </p>
                          </div>
                          <div className="col-4 d-flex justify-content-end">
                            <img
                              src={item.image}
                              className={`${item.imgClass}`}
                              alt="Loading"
                            />
                          </div>
                          <div className="col-12 d-flex justify-content-between align-items-center mt-3">
                            <p className="font-size-14 space-grotesk-medium text-white mb-0">
                              {item.pointsText}
                            </p>
                            <p className="exclusive-card-blue-text font-size-12 montserrat-medium mb-0">
                              T&C Applied
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </Slider>
                </div>
              </div>
            </div>
            {/* ============  MY REWARDS THIRD SCREEN  =============== */}
            {/* REFERRED TO SECTION */}
            <div className="referred-banner position-relative">
              <div className="container">
                <div className="row py-5 my-4">
                  <div className="col-lg-5">
                    <h2 className="text-white font-32 montserrat-semibold">
                      You Have Referred To 5 Friends
                    </h2>
                    <p className="text-white font-24 space-grotesk-medium">
                      Keep Referring To Earn Even More !!
                    </p>
                    <div className="d-flex justify-content-between">
                      <button className="py-2 px-5 rounded-3 font-16 montserrat-semibold border border-0 background-text-blue text-white">
                        See my Referrals
                      </button>
                      <button className="py-2 px-5 rounded-3 font-16 montserrat-semibold border-blue text-blue">
                        Refer more & Earn
                      </button>
                    </div>
                  </div>
                  <div className="col-lg-7">
                    <img
                      className="position-absolute bottom-0"
                      src={refalien}
                      alt="refalien"
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* PLAY AND EARN CARDS */}
            <div className="container">
              <h2 className="text-dark-blue mt-120 mb-4 pb-4 ">Play & Earn</h2>
              <PlayAndEarnCard />
            </div>

            {/* REDEEM CLAIM SECTION */}
            <div className="container">
              <h2 className="text-dark-blue mt-120 mb-4 pb-4 ">
                Here's How You Unlock Every Reward
              </h2>

              <div className="redeem-claim text-center rounded-4 py-4">
                <h2 className="font-24 montserrat-semibold text-white mb-3 ls-4">
                  Redeem, Claim Or Level Up
                </h2>
                <p className="font-18 montserrat-medium text-white ls-4">
                  You’ve earned it, Now it’s time to claim your perks and level
                  up
                </p>

                <div className="text-light-yellow font-32 space-grotesk-bold d-flex justify-content-center my-4 ls-4">
                  Collect meteors
                  <img className="mx-4" src={StartFour} alt="" />
                  Unlock Planets
                  <img className="mx-4" src={StartFour} alt="" />
                  Redeem Stars
                </div>
                <div className="pt-3 ">
                  <button className="py-2 mx-3 width-18 rounded-3 text-white bg-transparent border border-white font-16 montserrat-semibold">
                    Invite a Friend
                  </button>
                  <button className="py-2 mx-3 width-18 rounded-3 border-0 bg-white text-blue font-16 montserrat-semibold">
                    Redeem
                  </button>
                </div>
              </div>
            </div>
            {/* FAQ SECTION */}
            <FAQ items={FaqData} />

            {/* FOOTER SECTION */}
            <div className="offer-footer position-relative overflow-hidden mt-5">
              <div className="offer-footer-section position-relative d-flex justify-content-center text-center">
                <p className="width-36 font-32 space-grotesk-medium mb-5 text-white align-self-end">
                  The more you refer, the brighter your rewards shine!
                </p>
              </div>
              <div
                className="position-absolute footer-semi-planet"
                // data-aos="fade-up"
                // data-aos-delay="200"
              ></div>
            </div>
          </>
        )}

        {leftScrolAnimt ? (
          <>
            {/* REWARD JOURNEY SLIDER */}
            <div className="container sdfffsssdfsdf">
              <div
                className={`d-flex justify-content-between background-text-blue rounded-4 overflow-hidden position-relative py-3 mt-5 ${RwdAnimate ? 'rwd-jrny-sld-active' : 'rwd-jrny-sld'}`}
              >
                <div className="width-16">
                  <h3 className="font-20 montserrat-semibold text-white ms-3 w-75">
                    Your Reward Journey <br /> So Far
                  </h3>
                  <img
                    className="position-absolute reward-moving-rkt"
                    src={moverocket}
                    alt="moverocket"
                  />
                  <img
                    className="width-10 position-absolute bottom-0 "
                    src={clouds}
                    alt="clouds"
                  />
                </div>
                <div className="slider-container width-82 pe-2">
                  <Slider className="reward-slider" {...rewardSliderSetting}>
                    {RewardSliderJson?.map((slide) => (
                      <div className="background-light-white-2 reward-slides border-radius-12 text-center pt-2 pb-3 ">
                        <h4 className="font-14 montserrat-semibold text-blue">
                          Planet {slide?.num}
                        </h4>
                        <div className="position-relative d-flex justify-content-center">
                          <img
                            className="width-24 mx-auto position-absolute"
                            src={slide?.img}
                            alt="reward image"
                          />
                          <img
                            className="width-34 mx-auto mt-5"
                            src={plntbase}
                            alt="reward image"
                          />
                        </div>

                        {/* <h4 className="font-14 montserrat-regular">1000 Meteors</h4> */}
                        {slide?.lock ? (
                          <button className="background-text-blue w-75 mt-4 mx-auto border-0 border-radius-8 font-size-12 d-flex justify-content-center align-items-center py-2 mx-3 opacity-25 montserrat-semibold text-white">
                            1000 Meteors{' '}
                            <img className=" ms-3" src={lock} alt="Loading" />
                          </button>
                        ) : (
                          <button
                            onClick={handleNextScrAnimt}
                            className="background-text-blue w-75 mt-4 mx-auto border-0 border-radius-8 font-size-12  py-2 mx-3 montserrat-semibold text-white"
                          >
                            <span className="">1000 Meteors</span>
                          </button>
                        )}
                      </div>
                    ))}
                  </Slider>
                </div>
              </div>
            </div>
          </>
        ) : null}
      </section>
    </>
  );
};

export default MyRewardFirstScreen;
