import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// import images
import offerastro from '../../assets/icons/home/offer/offerastro.svg'
import offersolor from '../../assets/icons/home/offer/offersolor.svg';
import offerRocket from '../../assets/icons/home/offer/offerRocket.svg';
import rightarrow from '../../assets/icons/home/offer/rightarrow.svg';
import offerexcimg from '../../assets/icons/home/offer/excoffimg.svg';
import zomato from '../../assets/icons/home/offer/zmt.svg';
import excrocket from '../../assets/icons/home/offer/excrocket.svg';

import metero from '../../assets/icons/home/secondScreen/metero.svg';
import suitcase from '../../assets/icons/home/offer/suitcase.svg';
import smartwatch from '../../assets/icons/home/offer/smartwatch.svg';
import headphone from '../../assets/icons/home/offer/headphones.svg';

import plus from '../../assets/icons/home/offer/plus.svg';
import minus from '../../assets/icons/home/offer/minus.svg';
// import semiplnt from '../../assets/icons/home/offer/semiplanet.svg';


import AOS from 'aos';
import 'aos/dist/aos.css';

const Offer = () => {
  const cards = [
    {
      id: 1,
      img: offerRocket,
      title: 'Explore, Earn, Elevate',
      content:
        'Every referral fuels your journey, climb the ranks and claim your rewards!',
    },
    {
      id: 2,
      img: offerastro,
      title: 'Reach for Rewards, Refer for More!',
      content:
        'Invite your friends, collect cosmic points, and unlock stellar perks!',
    },
    {
      id: 3,
      img: offersolor,
      title: 'Explore, Earn, Elevate',
      content:
        'Every referral fuels your journey, climb the ranks and claim your rewards!',
    },
    {
      id: 4,
      img: offerastro,
      title: 'Reach for Rewards, Refer for More!',
      content:
        'Invite your friends, collect cosmic points, and unlock stellar perks!',
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '20px',
  };

  const [openIndex, setOpenIndex] = useState(null);
    const [SemiPlntRaise, setSemiPlntRaise] = useState(true);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

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

  // Initialize AOS on component mount
  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: false,
      mirror: true,
      easing: 'ease-in-out',
    });
    // Refresh AOS when the component updates
    AOS.refresh();
  }, []);

  return (
    <section className="offer-section">
      <div className="offer-sect-content top-0 start-0 bottom-0 end-0">
        <div className="container-fluid px-5 pt-5">
          <div
            className="row offer-slider-fade-left ${isActive ? 'aos-animate' : ''}"
            data-aos="fade-left"
            data-aos-offset="500"
            data-aos-delay="200"
            data-aos-easing="linear"
            data-aos-duration="5000"
          >
            <Slider className="offer-slider" {...settings}>
              {cards?.map((card, index) => (
                <div
                  className={`d-flex offer-cards offer-bg-img-${card?.id}`}
                  key={index}
                >
                  <div className="col-lg-7 ms-3 ps-3 my-3 py-3 d-grid align-items-end">
                    <h3 className="text-white font-36 montserrat-semibold mb-2 pb-1 truncate-text-2 lh-sm">
                      {card.title}
                    </h3>
                    <p className="text-white font-20 montserrat-regular mb-4 pb-3 truncate-text-3 lh-sm">
                      {card.content}
                    </p>
                    <a
                      className="text-decoration-none text-white font-18 montserrat-medium d-flex"
                      href="#"
                    >
                      Learn More{' '}
                      <img className="ms-2" src={rightarrow} alt="" />
                    </a>
                  </div>
                  <div className="col-lg-5 d-flex justify-content-center align-items-center">
                    <img
                      className="width-82"
                      src={card?.img}
                      alt="offerImages"
                    />
                  </div>
                </div>
              ))}
            </Slider>
          </div>
          {/*  Exclusive Offers SECTION */}
          <h1 className="text-dark-blue mt-120 mb-4 pb-4 ">Exclusive Offers</h1>
          <div className="pt-5 d-grid price-exclusive gap-3">
            <div className="mt-5 rounded-4 shadow-lg bg-white px-0">
              <div className="head-sec position-relative">
                <img className="w-100" src={offerexcimg} alt="offerexcimg" />
                <img
                  className="position-absolute offer-exc-rocket"
                  src={excrocket}
                  alt=""
                />
              </div>
              <div className="text-center px-5">
                <img src={zomato} alt="zomato" />
                <h3 className="font-24 text-light-black montserrat-semibold mt-3 mb-2">
                  Get 10% Off on Zomato
                </h3>
                <p className="font-16 text-light-black montserrat-regular">
                  Enjoy delicious deals on your next order!
                </p>
                <hr className="my-4 border-1" />
                <button
                  className="btn background-text-blue text-white font-14 montserrat-medium mb-4 w-100 rounded-5"
                  type="button"
                >
                  Claim Now
                </button>
              </div>
            </div>
            <div className="mt-5 rounded-4 shadow-lg bg-white px-0">
              <div className="head-sec position-relative">
                <img className="w-100" src={offerexcimg} alt="offerexcimg" />
                <img
                  className="position-absolute offer-exc-rocket"
                  src={excrocket}
                  alt=""
                />
              </div>
              <div className="text-center px-5">
                <img src={zomato} alt="zomato" />
                <h3 className="font-24 text-light-black montserrat-semibold mt-3 mb-2">
                  Get 10% Off on Zomato
                </h3>
                <p className="font-16 text-light-black montserrat-regular">
                  Enjoy delicious deals on your next order!
                </p>
                <hr className="my-4 border-1" />
                <button
                  className="btn background-text-blue text-white font-14 montserrat-medium mb-4 w-100 rounded-5"
                  type="button"
                >
                  Claim Now
                </button>
              </div>
            </div>
            <div className="mt-5 rounded-4 shadow-lg bg-white px-0">
              <div className="head-sec position-relative">
                <img className="w-100" src={offerexcimg} alt="offerexcimg" />
                <img
                  className="position-absolute offer-exc-rocket"
                  src={excrocket}
                  alt=""
                />
              </div>
              <div className="text-center px-5">
                <img src={zomato} alt="zomato" />
                <h3 className="font-24 text-light-black montserrat-semibold mt-3 mb-2">
                  Get 10% Off on Zomato
                </h3>
                <p className="font-16 text-light-black montserrat-regular">
                  Enjoy delicious deals on your next order!
                </p>
                <hr className="my-4 border-1" />
                <button
                  className="btn background-text-blue text-white font-14 montserrat-medium mb-4 w-100 rounded-5"
                  type="button"
                >
                  Claim Now
                </button>
              </div>
            </div>
          </div>
          {/* Win Exciting Prizes SECTION */}
          <h2 className="text-dark-blue mt-120 mb-4 pb-4 ">
            Win Exciting Prizes
          </h2>
          <div className="row justify-content-between">
            <div className="col-lg-6 shadow-lg d-flex justify-content-between px-0 price-trolley">
              <div className="col-lg-8 pt-5 ps-5 d-grid">
                <div className="head-content ">
                  <h2 className="font-24 montserrat-medium text-white mb-2">
                    Exciting Chance to Win a Trolley Bag!!
                  </h2>
                  <p className="font-14 montserrat-light text-white mb-5 pb-5">
                    *Terms & Conditions Applied*
                  </p>
                </div>
                <div className="section-offer align-self-end mb-3 pb-1">
                  <h4 className="font-40 montserrat-medium text-white mb-0">
                    Collect
                  </h4>
                  <div className="d-flex align-items-center">
                    <span className="font-24 montserrat-semibold text-light-yellow">
                      1500
                    </span>
                    <img className="mx-3" src={metero} alt="" />
                    <span className="font-28 montserrat-medium text-white">
                      Total Meteors
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 d-flex justify-content-start">
                <img className="align-self-end mb-1" src={suitcase} alt="" />
              </div>
            </div>
            <div className="col-lg-6 px-4 d-grid">
              <div className="col-lg-12 shadow-lg py-3 d-flex price-watch align-self-start">
                <div className="col-lg-8  ms-4 ps-4 align-self-end mb-1">
                  <h4 className="font-40 montserrat-medium text-white mb-0">
                    Collect
                  </h4>
                  <div className="d-flex align-items-center">
                    <span className="font-24 montserrat-semibold text-light-yellow">
                      1500
                    </span>
                    <img className="mx-3" src={metero} alt="" />
                    <span className="font-28 montserrat-medium text-white">
                      Total Meteors
                    </span>
                  </div>
                </div>
                <div className="col-lg-4 d-flex align-items-center ">
                  <img src={smartwatch} alt="smartwatch" />
                </div>
              </div>
              <div className="col-lg-12 py-3 shadow-lg d-flex price-headphone align-self-end">
                <div className="col-lg-8  ms-4 ps-4 align-self-end mb-1">
                  <h4 className="font-40 montserrat-medium text-white mb-0">
                    Collect
                  </h4>
                  <div className="d-flex align-items-center">
                    <span className="font-24 montserrat-semibold text-light-yellow">
                      1500
                    </span>
                    <img className="mx-3" src={metero} alt="" />
                    <span className="font-28 montserrat-medium text-white">
                      Total Meteors
                    </span>
                  </div>
                </div>
                <div className="col-lg-4 d-flex align-items-center">
                  <img src={headphone} alt="headphone" />
                </div>
              </div>
            </div>
          </div>
          {/* FAQ SECTION */}
          <h2 className="text-dark-blue mt-120 mb-1 pb-1 ">
            Frequently Asked Questions
          </h2>
          <div className="row" 
                  onMouseEnter={() => setSemiPlntRaise(true)}
        onMouseLeave={() => setSemiPlntRaise(false)}>
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
                          <img
                            src={openIndex === index ? minus : plus}
                            alt=""
                          />
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
        <div className="offer-footer position-relative overflow-hidden mt-5"
        onMouseEnter={() => setSemiPlntRaise(true)}
        onMouseLeave={() => setSemiPlntRaise(false)}
        >
          <div className="offer-footer-section position-relative d-flex justify-content-center text-center">
            <p className="width-36 font-32 space-grotesk-medium mb-5 text-white align-self-end">
              The more you refer, the brighter your rewards shine!
            </p>
          </div>
          <div
            className={`position-absolute footer-semi-planet hoverRaiseSemiPlnt ${SemiPlntRaise ? "active" : ""} `}
            // data-aos="fade-up"
            // data-aos-delay="100"
          ></div>
        </div>
      </div>
    </section>
  );
};

export default Offer;