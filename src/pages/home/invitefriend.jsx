
import React, { useEffect, useRef, useState } from 'react';
// import './invitefriend.scss';

import stars from '../../assets/icons/home/redeemEarn/starts.svg';
import footer from '../../assets/images/home/Invitefriend/Bottom-invite.svg';
import FacebookIcon from '../../assets/icons/home/Invitefriend/fb-invite.svg';
import TwitterIcon from '../../assets/icons/home/Invitefriend/twitter-invite.svg';
import InstaIcon from '../../assets/icons/home/Invitefriend/insta-invite.svg';
import YoutubeIcon from '../../assets/icons/home/Invitefriend/youtube-invite.svg';

const Invitefriend = ({ isActive, onAnimationComplete }) => {
  const inputRef = useRef(null);
  const animationTriggered = useRef(false);

  const [animateTop, setAnimateTop] = useState(false);
  const [animateFooter, setAnimateFooter] = useState(false);
  const [animateMiddle, setAnimateMiddle] = useState(false);
  const [copied, setCopied] = useState(false);

  // Disable scroll outside while active
  useEffect(() => {
    document.body.style.overflow = isActive ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isActive]);

  // Reset animations when Invitefriend becomes active (either from up or down)
  useEffect(() => {
    if (isActive) {
      setTimeout(() => {
        setAnimateTop(false);
        setAnimateFooter(false);
        setAnimateMiddle(false);
        animationTriggered.current = false;
      }, 50); // small delay to force DOM update before next animation
    }
  }, [isActive]);

  // Scroll-based animation trigger
  useEffect(() => {
    const handleWheel = (e) => {
      if (!isActive || animationTriggered.current) return;

      const direction = e.deltaY;
      animationTriggered.current = true;
      e.preventDefault();

      if (direction > 0) {
        // Scroll Down
        setAnimateTop(true);
        setAnimateFooter(true);
        setAnimateMiddle(true);

        setTimeout(() => {
          if (typeof onAnimationComplete === 'function') {
            onAnimationComplete(); // go forward
          }
          animationTriggered.current = false;
        }, 1200);
      } else {
        // Scroll Up
        setAnimateTop(false);
        setAnimateFooter(false);
        setAnimateMiddle(false);

        setTimeout(() => {
          if (typeof onAnimationComplete === 'function') {
            onAnimationComplete('reverse'); // go back
          }
          animationTriggered.current = false;
        }, 1200);
      }
    };

    if (isActive) {
      window.addEventListener('wheel', handleWheel, { passive: false });
    }

    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
  }, [isActive, onAnimationComplete]);

  const handleCopy = () => {
    if (inputRef.current) {
      navigator.clipboard.writeText(inputRef.current.value).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
      });
    }
  };

  const handleClick = () => {
    const url = `https://wa.me/?text=${encodeURIComponent(
      'Join me on this amazing app: https://example.com/my-link'
    )}`;
    window.open(url, '_blank');
  };

  return (
    <div className="invitefriend-wrapper invite-bg-image section-invitefriend position-relative overflow-hidden vh-100 d-flex align-items-center justify-content-center">
      {/* Top Stars */}
      <img
        className={`w-100 position-absolute top-0 left-0 asto-transition-all ${animateTop ? 'nav-slide-top' : ''}`}
        src={stars}
        alt="Stars"
      />

      {/* Bottom Footer */}
      <img
        className={`w-100 position-absolute bottom-0 left-0 asto-transition-all ${animateFooter ? 'astro-slide-down' : ''}`}
        src={footer}
        alt="Footer"
      />

      {/* Center Section */}
      <div className={`container center-section transition-all duration-1000 ${animateMiddle ? 'form-fade-down' : ''}`}>
        <div className="row text-center justify-content-center align-items-start h-100">
          <div className="col-12 col-md-5 content-z-index pt-72">
            <h2 className="text-white font-40 mb-58 space-grotesk-b">Invite a friend</h2>

            <div className="copy-input-container">
              <input
                ref={inputRef}
                type="text"
                defaultValue="https://example.com/my-link"
                className="copy-input input-invite-friend bg-white mb-60"
              />
              <button className="copy-button" onClick={handleCopy}>
                {copied ? 'Copied!' : 'Copy'}
              </button>
            </div>

            <div className="divider-with-text">
              <span className="divider-border">Or</span>
            </div>

            <button
              onClick={handleClick}
              className="btn-share-via-whatsapp poppins-regular text-white bg-primary-color font-18 mb-46"
            >
              Share Via Whatsapp
            </button>

            <ul className="social-nav pl-0 d-flex justify-content-center">
              <li className="social-list">
                <a className="social-link" href="#" target="_blank" rel="noopener noreferrer">
                  <img className="social-icon" src={FacebookIcon} alt="Facebook" />
                </a>
              </li>
              <li className="social-list">
                <a className="social-link" href="#" target="_blank" rel="noopener noreferrer">
                  <img className="social-icon" src={InstaIcon} alt="Instagram" />
                </a>
              </li>
              <li className="social-list">
                <a className="social-link" href="#" target="_blank" rel="noopener noreferrer">
                  <img className="social-icon" src={YoutubeIcon} alt="YouTube" />
                </a>
              </li>
              <li className="social-list">
                <a className="social-link" href="#" target="_blank" rel="noopener noreferrer">
                  <img className="social-icon" src={TwitterIcon} alt="Twitter" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Invitefriend;
