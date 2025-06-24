import React from 'react';

// Assets icons and images
import Logo from '../../assets/icons/logo/logo.svg';
import OrangePLanet from '../../assets/icons/subscription/Orange-Planet.svg';
import GreenPlanet from '../../assets/icons/subscription/Green Planet 3.svg';
import Plane from '../../assets/icons/subscription/Plane.svg';
import Fram from "../../assets/icons/subscription/product-frame.svg"

// React Icons
import { IoIosArrowForward } from 'react-icons/io';

// React Slick for carousel
import Slider from 'react-slick';

const Product = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    centerMode: true,
    centerPadding: '0px',
    slidesToShow: 5,
    slidesToScroll: 1,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 4.2,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3.5,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2.5,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1.8,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1.2,
        },
      },
    ],
  };

  const CardData = [
    {
      discount: '20%',
      bgClass: 'card-bg-purple-color',
      img: OrangePLanet,
      title: 'Social Media',
      cardImg: 'orange-planet',
      price: '₹ 20,000/-',
      description: `Sed ut perspiciatis, unde omnis iste natus error
                  sit voluptatem accusantium doloremque laudantium,
                  totam rem veritatis et quasi architecto beatae vitae dicta sunt, explicabo`,
      btnText: 'Purchase',
      btnClass: 'product-btn-purple',
    },
    {
      discount: '10%',
      bgClass: 'card-bg-pink-color',
      img: Plane,
      title: 'Sales Ninja',
      cardImg: 'pink-planet',
      price: '₹ 10,000/-',
      description: `Sed ut perspiciatis, unde omnis iste natus error sit
                  voluptatem accusantium doloremque laudantium,
                  totam rem aperiam eaque ipsa`,
      btnText: 'Unlock with 300 points',
      btnClass: 'product-btn-pink',
    },
    {
      discount: '10%',
      bgClass: 'card-bg-green-color',
      img: GreenPlanet,
      cardImg: 'green-planet',
      title: 'Upcoming Offer',
      description: `Next: Get 50% Off on DM Services at 500 Points`,
      btnText: 'Unlock with 500 points',
      btnClass: 'product-btn-green',
    },
    {
      discount: '10%',
      bgClass: 'card-bg-purple-color',
      img: OrangePLanet,
      cardImg: 'orange-planet',
      title: 'Social Media',
      price: '₹ 20,000/-',
      description: `Sed ut perspiciatis, unde omnis iste natus error
                  sit voluptatem accusantium doloremque laudantium,
                  totam rem veritatis et quasi architecto beatae vitae dicta sunt, explicabo`,
      btnText: 'Purchase',
      btnClass: 'product-btn-purple',
    },
    {
      discount: '10%',
      bgClass: 'card-bg-pink-color',
      img: Plane,
      cardImg: 'pink-planet',
      title: 'Sales Ninja',
      price: '₹ 10,000/-',
      description: `Sed ut perspiciatis, unde omnis iste natus error sit
                  voluptatem accusantium doloremque laudantium,
                  totam rem aperiam eaque ipsa`,
      btnText: 'Unlock with 300 points',
      btnClass: 'product-btn-pink',
    },
    {
      discount: '10%',
      bgClass: 'card-bg-green-color',
      img: GreenPlanet,
      cardImg: 'green-planet',
      title: 'Upcoming Offer',
      description: `Next: Get 50% Off on DM Services at 500 Points`,
      btnText: 'Unlock with 500 points',
      btnClass: 'product-btn-green',
    },
  ];

  return (
    <>
      <div className="login-bg-img vh-100">
        <div className="nav-logo text-center mt-0">
          <img className="header-center-img width-13" src={Logo} alt="logo" />
        </div>
        <div className="row p-lg-4 p-2 d-flex justify-content-center">
          <div className="col-lg-7">
            <div className="text-center mt-3">
              <p className="font-size-44 text-blue montserrat-bold mb-2">
                Congratulations
              </p>
              <p className="text-blue montserrat-semibold font-size-20 pb-2">
                Your friend Riya just helped you earn 200 Meteor Points!
                <br />
                Use your points to unlock up to 20% off on your first purchase.
              </p>
            </div>
          </div>
        </div>

        <div className="slider-container product-slider my-5">
          <Slider {...settings}>
            {CardData.map((card, index) => (
              <div
                key={index}
                className={`${card.bgClass} product-card d-flex flex-column justify-content-center align-items-center`}
              >
                <div className="discount-badge d-flex justify-content-center align-items-center text-center">
                  {card.discount} <br />
                  Discount
                </div>
                <div className="overflow-hidden">
                  <img
                    src={card.img}
                    className={`rounded-start-3 ${card.cardImg}`}
                    alt="Loading"
                  />
                </div>
                <div className="text-center px-4 pb-4 z-3 pt-5">
                  <p className="text-blue font-size-24 montserrat-semibold mb-0">
                    {card.title}
                  </p>
                  {card.price && (
                    <p className="text-blue font-size-20 montserrat-medium">
                      {card.price}
                    </p>
                  )}
                  <p className="text-blue font-size-14 montserrat-medium">
                    {card.description}
                    <span className="text-red"> learn more....</span>
                  </p>
                  <button
                    className={`product-btn w-100 text-white ${card.btnClass} px-3 py-2 border-0 mt-3`}
                  >
                    {card.btnText}
                  </button>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        <footer className="product-footer fixed-bottom">
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-lg-9">
                <div className="footer-star">
                  {/* <img src={Star} className='mb-0' alt="Loading" /> */}
                  <p className="text-blue ms-4 pt-5 montserrat-semibold fotnt-size-18 text-uppercase">
                    Shop with us and get a chance to join our exclusive Rewards
                    & Referral Program & keep earning even more points and
                    benefits
                  </p>
                </div>
              </div>
              <div className="col-lg-3 text-end">
                <button className="montserrat-bold px-4 border-0 font-size-16 py-2 rounded-3 background-text-blue text-white">
                  Explore More Products <IoIosArrowForward />
                </button>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Product;
