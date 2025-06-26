import React, { useEffect, useRef, useState } from 'react';
import navCenterImg from '../assets/images/home/navCenterImg.svg';
const Navbar = () => {
  const navItems = [
    { label: 'Home', color: 'orange' },
    { label: 'My Rewards', color: 'green' },
    { img: navCenterImg },
    { label: 'My Referrals', color: 'blue' },
    { label: 'Profile', color: 'rebeccapurple' },
  ];
  const indicatorRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const navRefs = useRef([]);
  const blurShadowRef = useRef(null);

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  useEffect(() => {
    const currentItem = navRefs.current[activeIndex];
    if (currentItem && indicatorRef.current && blurShadowRef.current) {
      // const { offsetWidth, offsetLeft, offsetTop } = currentItem;
      const { offsetWidth, offsetLeft } = currentItem;

      indicatorRef.current.style.width = `${offsetWidth}px`;
      indicatorRef.current.style.left = `${offsetLeft}px`;
      indicatorRef.current.style.backgroundColor = '#fff';

      blurShadowRef.current.style.width = `200px`; // fixed width as per your CSS
      blurShadowRef.current.style.left = `${offsetLeft - 60}px`; // offset slightly for blur effect
      // blurShadowRef.current.style.top = `${offsetTop}px`;
    }
  }, [activeIndex]);

  return (
    <section className="header-section">
      <nav class="navbar navbar-expand-lg  my-0 py-0">
        <div class="container-fluid justify-content-end">
          <div class="navbar-collapse my-0 py-0">
            <div className="container-fluid px-5">
              <ul className="d-flex justify-content-between my-0 py-0 px-0">
                {navItems?.map((i, index) => {
                  return !i?.img ? (
                    <li
                      className={`list-unstyled list-background h-100 text-white mt-4 pt-3`}
                    >
                      <span
                        data-active-color="orange"
                        ref={(el) => (navRefs.current[index] = el)}
                        className={`nav-link mx-3 cursor-pointer ${
                          activeIndex === index
                            ? 'active space-grotesk-bold'
                            : 'space-grotesk-medium'
                        }`}
                        onClick={() => handleClick(index)}
                      >
                        {i?.label}
                      </span>
                    </li>
                  ) : (
                    <li className="list-unstyled text-center">
                      <img
                        className="header-center-img h-75"
                        src={navCenterImg}
                        alt="navCenterImg"
                      />
                    </li>
                  );
                })}
                <span
                  className="nav-indicator position-absolute"
                  ref={indicatorRef}
                ></span>
                <span
                  className="active-blur-shadow position-absolute"
                  ref={blurShadowRef}
                />
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
