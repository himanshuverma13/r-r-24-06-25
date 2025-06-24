import React from 'react';
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

const RewardSliderJson = [
  { num: 1, img: gifplnt1, lock: false },
  { num: 2, img: gifplnt2, lock: false },
  { num: 3, img: gifplnt3, lock: true },
  { num: 4, img: gifplnt4, lock: true },
  { num: 5, img: gifplnt5, lock: true },
];

const MyRewardSecondScreen = () => {
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
  return (
    <section className="hero-section  position-relative">
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
        {/* COLLECTION EARN MORE CARDS*/}
        <div className="d-flex my-reward-cards gap-4 mt-3 px-0">
          <div className="w-50 myreward-card-1 px-4 pb-4 rounded-4">
            <h2 className="font-24 montserrat-bold text-white mb-1 mt-3">
              My Collections
            </h2>
            <p className="font-14 montserrat-medium text-white mb-0">
              Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
            </p>
            <div className="row justify-content-around">
              <div className="col-lg-4 rounded-4 background-light-white position-relative px-2 pb-0 pt-2 mt-4">
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
              <div className="col-lg-6 rounded-4 background-light-white position-relative px-2 pb-0 pt-2 mt-4">
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
              </div>
              <div className="col-lg-6 d-flex position-relative justify-content-between rounded-4 background-light-white  px-2 pb-0 pt-4 mt-3">
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
              <div className="col-lg-4 rounded-4 background-light-white px-2 pb-0 pt-4 mt-3">
                <span className="font-46 montserrat-semibold text-blue ms-1">
                  X
                </span>{' '}
                <span className="text-blue font-16 montserrat-semibold ms-1">
                  Vouchers
                </span>{' '}
              </div>
            </div>
          </div>
          <div className="w-50 myreward-card-2 px-4 pb-4 rounded-4">
            <h2 className="font-24 montserrat-bold text-white mb-1 mt-3">
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
              className="background-light-white border-0 rounded-3 w-100 py-2"
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
              className="background-light-white border-0 rounded-3 w-100 py-2"
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
      </div>
    </section>
  );
};

export default MyRewardSecondScreen;
