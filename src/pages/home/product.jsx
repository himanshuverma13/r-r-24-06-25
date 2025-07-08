import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Logo from '../../assets/icons/logo/logo.svg';
import stargroup from '../../assets/icons/auth/stargroup.svg';

// Example product data
const products = [
  {
    id: 1,
    title: 'Sales Ninja',
    price: '₹ 10,000/-',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus necessitatibus, voluptate rerum delectus quia nam ullam pariatur facilis illo quos consequuntur dolore cumque modi. Nisi ad facilis aliquam accusantium quo.Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    image: 'https://via.placeholder.com/200x150?text=Product+1',
  },
  {
    id: 2,
    title: 'Market Master',
    price: '₹ 15,000/-',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus necessitatibus, voluptate rerum delectus quia nam ullam pariatur facilis illo quos consequuntur dolore cumque modi. Nisi ad facilis aliquam accusantium quo.Another description for produc.',
    image: 'https://via.placeholder.com/200x150?text=Product+2',
  },
  {
    id: 3,
    title: 'Growth Guru',
    price: '₹ 20,000/-',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus necessitatibus, voluptate rerum delectus quia nam ullam pariatur facilis illo quos consequuntur dolore cumque modi. Nisi ad facilis aliquam accusantium quo.Description for product.',
    image: 'https://via.placeholder.com/200x150?text=Product+3',
  },
  {
    id: 4,
    title: 'Success Pro',
    price: '₹ 25,000/-',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus necessitatibus, voluptate rerum delectus quia nam ullam pariatur facilis illo quos consequuntur dolore cumque modi. Nisi ad facilis aliquam accusantium quo.Description for product.',
    image: 'https://via.placeholder.com/200x150?text=Product+4',
  },
  {
    id: 5,
    title: 'Profit Max',
    price: '₹ 30,000/-',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus necessitatibus, voluptate rerum delectus quia nam ullam pariatur facilis illo quos consequuntur dolore cumque modi. Nisi ad facilis aliquam accusantium quo.Description for product.',
    image: 'https://via.placeholder.com/200x150?text=Product+5',
  },
  {
    id: 6,
    title: 'Revenue King',
    price: '₹ 35,000/-',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus necessitatibus, voluptate rerum delectus quia nam ullam pariatur facilis illo quos consequuntur dolore cumque modi. Nisi ad facilis aliquam accusantium quo.Description for product.',
    image: 'https://via.placeholder.com/200x150?text=Product+6',
  },
];

const ProductPage = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3.5, // Show 5 cards per slide
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200, // For smaller screens, show fewer cards
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
    arrows: false,
  };

  return (
    <section className="container-fluid login-bg-img h-10">
      <div className="nav-logo text-center">
        <img className="header-center-img width-13" src={Logo} alt="logo" />
      </div>
      <div>
        <div className="text-center">
          <p className="font-size-46 text-blue montserrat-bold mb-3">
            Congratulations
          </p>
          <p className="text-blue montserrat-semibold font-size-20 pb-3">
            Your friend Riya just helped you earn 200 Meteor Points!
            <br />
            Use your points to unlock up to 20% off on your first purchase.
          </p>
        </div>

        {/* product card slider */}
        <Slider {...settings}>
          {products.map((product) => (
            <div key={product.id} className="px-2">
              <div className="card rounded-4 h-100 shadow-sm px-3 text-center">
                <img
                  src={product.image}
                  className="card-img-top"
                  alt={product.title}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="text-blue font-24 montserrat-semibold">
                    {product.title}
                  </h5>
                  <h6 className="text-blue font-20 montserrat-medium">
                    {product.price}
                  </h6>
                  <p className="text-blue montserrat-semibold font-14 product-descpt flex-grow-1">
                    {product.description}
                    {'  '}
                    {'  '}
                    <span>
                      {'  '}
                      <a className="font-14 montserrat-semibold text-red text-decoration-none">
                        learn more....
                      </a>
                    </span>
                  </p>
                  <button className="btn btn-primary mt-3">Submit</button>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <div className="d-flex position-relative justify-content-around">
        <img className="position-absolute left-0" src={stargroup} alt="stargroup" />
        <p className="w-50 text-blue font-18 montserrat-semibold">
          Shop with us and get a chance to join our exclusive Rewards & Referral
          Program & keep earning even more points and benefits
        </p>
        <button className='border-0 background-text-blue text-white font-16 montserrat-semibold py-0 h-auto px-2 rounded-2'>Explore more products {'>'}</button>
      </div>
    </section>
  );
};

export default ProductPage;
