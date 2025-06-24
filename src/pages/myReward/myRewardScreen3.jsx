import React, { useRef, useState } from 'react';

// import slider
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// import images
import moverocket from '../../../assets/MyRewards/moverocket.svg';
import clouds from '../../../assets/MyRewards/clouds.svg';
import lock from '../../../assets/MyRewards/lock.svg';
import plntbase from '../../../assets/MyRewards/plntbase.svg';
import gifplnt1 from '../../../assets/MyRewards/gifplnt1.gif';
import gifplnt2 from '../../../assets/MyRewards/gifplnt2.gif';
import gifplnt3 from '../../../assets/MyRewards/gifplnt3.gif';
import gifplnt4 from '../../../assets/MyRewards/gifplnt4.gif';
import gifplnt5 from '../../../assets/MyRewards/gifplnt5.gif';

import metero from '../../../assets/secondScreen/metero.svg';
import tiltship from '../../../assets/secondScreen/tillship1.svg';
import star from '../../../assets/secondScreen/star.svg';
import moneypocket from '../../../assets/MyRewards/moneypkt.svg';
import shootingmeteor from '../../../assets/MyRewards/shotmeteor.svg';
import refalien from '../../../assets/MyRewards/refalien.svg';
import StartFour from '../../../assets/MyRewards/StarFour.svg';

import plus from '../../../assets/offer/plus.svg';
import minus from '../../../assets/offer/minus.svg';

import cardimg1 from '../../../assets/MyRewards/jackPot.svg';
import cardimg2 from '../../../assets/MyRewards/Quiz.svg';
import cardimg4 from '../../../assets/MyRewards/Tic.svg';
import cardimg3 from '../../../assets/MyRewards/Spin.svg';

import arrowTop from '../../../assets/MyRewards/arowtop2.svg';

const RewardSliderJson = [
  { num: 1, img: gifplnt1, lock: false },
  { num: 2, img: gifplnt2, lock: false },
  { num: 3, img: gifplnt3, lock: true },
  { num: 4, img: gifplnt4, lock: true },
  { num: 5, img: gifplnt5, lock: true },
];

const items = [
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

// Play Earn Card Json
const playEarnCardJson = [
  {
    backgroundUrl: cardimg1,
    cls: 'opt-1',
    wid: '10%',
  },
  {
    backgroundUrl: cardimg2,
    cls: 'opt-2',
    wid: '15%',
  },
  {
    backgroundUrl: cardimg3,
    cls: 'opt-3',
    wid: '20%',
  },
  {
    backgroundUrl: cardimg4,
    cls: 'opt-4',
    wid: '25%',
  },
];

const MyRewardThirdScreen = () => {
  // States
  const [openIndex, setOpenIndex] = useState(null);
  const [activeIndex, setActiveIndex] = useState(3);
  const isDragging = useRef(false);
  const startX = useRef(0);

  const rewardSliderSetting = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    centerMode: false,
    initialSlide: 0,
    centerPadding: '0px',
  };
  const discount = {
    dots: false,
    arrows: false,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: '60px',
  };

  // Functions

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Draggeable Cards Functionlaity

  const HandleDragCard = (e, index) => {
    isDragging.current = true;
    startX.current = e.clientX;

    const handleMouseMove = (moveEvent) => {
      const diff = Math.abs(moveEvent.clientX - startX.current);
      if (diff > 10) {
        setActiveIndex(index);
        cleanup();
      }
    };

    const handleMouseUp = () => {
      cleanup();
    };

    const cleanup = () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      isDragging.current = false;
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  return (
    <section className="myreward-third-section">
      <div className="container">
        {/* UFO SHIP SIDE NAV */}
        <div className="row justify-content-between px-3 mt-4 pt-4">
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
        {/* REWARD JOURNEY SLIDER */}
        <div className="d-flex justify-content-between background-text-blue rounded-4 overflow-hidden position-relative py-3 mt-2">
          <div className="width-12">
            <h3 className="font-20 montserrat-semibold text-white ms-3 w-50">
              Your Reward Journey So Far
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
          <div className="slider-container width-87 pe-2">
            <Slider className="reward-slider" {...rewardSliderSetting}>
              {RewardSliderJson?.map((slide) => (
                <div className="background-light-white-2 reward-slides border-radius-12 text-center pt-2 pb-3 ">
                  <h4 className="font-14 montserrat-semibold text-blue">
                    Level {slide?.num}
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

                  <h4 className="font-14 montserrat-regular">1000 Meteors</h4>
                  {slide?.lock ? (
                    <button className="background-text-blue w-75 border-0 border-radius-8 font-12  py-2 mx-3 opacity-25 montserrat-semibold text-white">
                      <img className="mx-auto" src={lock} alt="" />
                    </button>
                  ) : (
                    <button className="background-text-blue w-75 border-0 border-radius-8 font-12  py-2 mx-3 montserrat-semibold text-white">
                      <span className="">Claim</span>
                    </button>
                  )}
                </div>
              ))}
            </Slider>
          </div>
        </div>
        {/* Discount and exclusive cards */}
        <div className="reward-discount border-blue shadow-lg rounded-4 px-3 pt-2 pb-3 mt-3">
          <h2 className="font-18 space-grotesk-bold text-blue mb-0">
            Discount Codes
          </h2>
          <p className="font-14 montserrat-medium text-blue mb-2">
            Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
          </p>
          <div className="slider-container">
            <Slider className="exclusive-discount-sect" {...discount}>
              {[1, 2, 3, 4, 5, 6].map((item, index) => (
                <div className="d-flex excl-discount-card p-2 border-radius-8 background-text-blue position-relative overflow-hidden">
                  <span className="p-4 border-radius-8 bg-white"></span>
                  <div className="text-white ms-3">
                    <h2 className="font-14 mb-0 montserrat-medium">
                      Flat{' '}
                      <span className="font-16 montserrat-bold">10% Off</span>{' '}
                      on
                    </h2>
                    <h2 className="font-14 mb-0 montserrat-medium">
                      Sales Ninja
                    </h2>
                  </div>
                  <div
                    className={`position-absolute top-0 end-0 text-blue font-12 montserrat-semibold ${index == 1 ? 'background-light-pink' : 'background-light-cream'} px-3 py-0 discount-border`}
                  >
                    {index !== 1 ? '7 d' : 'Expire soon'}
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
        <div className="reward-discount border-blue shadow-lg rounded-4 px-3 pt-2 pb-3 mt-3">
          <h2 className="font-18 space-grotesk-bold text-blue mb-0">
            Exclusive Perks
          </h2>
          <p className="font-14 montserrat-medium text-blue mb-2">
            Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
          </p>
          <div className="slider-container">
            <div className="slider-container">
              <Slider className="exclusive-discount-sect" {...discount}>
                {[1, 2, 3, 4, 5, 6].map((item, index) => (
                  <div className="d-flex excl-discount-card p-2 border-radius-8 background-text-blue position-relative overflow-hidden">
                    <span className="p-4 border-radius-8 bg-white"></span>
                    <div className="text-white ms-3">
                      <h2 className="font-14 mb-0 montserrat-medium">
                        Flat{' '}
                        <span className="font-16 montserrat-bold">10% Off</span>{' '}
                        on
                      </h2>
                      <h2 className="font-14 mb-0 montserrat-medium">
                        Sales Ninja
                      </h2>
                    </div>
                    <div
                      className={`position-absolute top-0 end-0 text-blue font-12 montserrat-semibold ${index == 1 ? 'background-light-pink' : 'background-light-cream'} px-3 py-0 discount-border`}
                    >
                      {index !== 1 ? '7 d' : 'Expire soon'}
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
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
        <div className="playearn-section d-flex justify-content-center">
          <div className="playearn-card">
            {playEarnCardJson?.map((option, index) => (
              <div
                key={index}
                className={`playearn-content d-grid position-relative ${option?.cls} ${activeIndex === index ? 'active' : ''}`}
                onMouseDown={(e) => HandleDragCard(e, index)}
                style={{
                  '--optionBackground': `url(${option.backgroundUrl})`,
                  background: `${
                    activeIndex === index
                      ? `radial-gradient(50% 50% at 50% 50%, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.7) 100%),
      var(--optionBackground)`
                      : `var(--optionBackground)`
                  }`,
                  flexGrow: activeIndex === index ? 100 : 1,
                  width: activeIndex === index ? '0%' : `${option?.wid}`,
                }}
              >
                <img
                  className={`position-absolute end-0 ${activeIndex === index ? 'background-light-white m-3 p-1 rounded-circle' : 'd-none'}`}
                  src={arrowTop}
                  alt="toparrow"
                />
                <div
                  className={`align-self-end p-3 ${activeIndex === index ? '' : 'd-none'}`}
                >
                  <h2 className="mb-0 font-24 montserrat-semibold text-white">
                    Jackpot 777
                  </h2>
                  <p className="mb-0 font-14 montserrat-regular text-white">
                    One spin could change everything
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* REDEEM CLAIM SECTION */}
      <div className="container">
        <h2 className="text-dark-blue mt-120 mb-4 pb-4 ">
          Here's How You Unlock Every Reward
        </h2>
      </div>
      <div className="redeem-claim text-center py-4">
        <h2 className="font-24 montserrat-semibold text-white mb-3 ls-4">
          Redeem, Claim Or Level Up
        </h2>
        <p className="font-18 montserrat-medium text-white ls-4">
          You’ve earned it, Now it’s time to claim your perks and level up
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
      {/* FAQ SECTION */}
      <div className="container">
        <h2 className="text-dark-blue mt-120 mb-1 pb-1 ">
          Frequently Asked Questions
        </h2>
        <div className="row">
          <div className="accordion">
            {items.map((item, index) => (
              <div className="mt-4 pt-3" key={index}>
                <div
                  className="purple-border-bottom pb-4 pt-1"
                  id={`heading${index}`}
                >
                  <h6 className="mb-0 font-16 text-dark-blue montserrat-medium">
                    <button
                      className="border-0 bg-transparent d-flex justify-content-between align-items-center w-100"
                      onClick={() => toggle(index)}
                      aria-expanded={openIndex === index}
                      aria-controls={`collapse${index}`}
                    >
                      {item.title}
                      <span className="">
                        <img src={openIndex === index ? minus : plus} alt="" />
                      </span>
                    </button>
                  </h6>
                </div>
                <div
                  id={`collapse${index}`}
                  className={`collapse ${openIndex === index ? 'show' : ''}`}
                  aria-labelledby={`heading${index}`}
                  data-parent="#accordion"
                >
                  <div className="card-body p-3">
                    <p className="mb-0 font-16 text-dark-blue montserrat-regular">
                      {item.content}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* FOOTER SECTION */}
      <div className="offer-footer position-relative overflow-hidden mt-5">
        <div className="offer-footer-section position-relative d-flex justify-content-center text-center">
          <p className="width-36 font-32 space-grotesk-medium mb-5 text-white align-self-end">
            The more you refer, the brighter your rewards shine!
          </p>
        </div>
        <div
          className="position-absolute footer-semi-planet"
          data-aos="fade-up"
          data-aos-delay="200"
        ></div>
      </div>
    </section>
  );
};

export default MyRewardThirdScreen;
