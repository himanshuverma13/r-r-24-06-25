// import { useState, useEffect, useRef, useCallback } from 'react';
// import '../../styles/main.scss';
// import '../../App.scss'
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// // Components
// import Index from './index';
// import Invitefriend from './invitefriend';
// import Howitworks from './howitworks';
// import RedeemAndEarn from './redeemAndEarn';
// import PlayEarn from './playEarn';
// import Offer from './offer';
// import Test from './test';

// function Home() {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [exitAnimation, setExitAnimation] = useState(false);
//   const [transitioning, setTransitioning] = useState(false);
//   const offerRef = useRef(null);

//   useEffect(() => {
//     AOS.init({
//       duration: 1500,
//       once: false,
//       mirror: true,
//       easing: 'ease-in-out',
//     });
//   }, []);

//   // useEffect(() => {
//   //   if (activeIndex === 2 && activeIndex === 1) {
//   //     setExitAnimation(false);
//   //     setTimeout(() => AOS.refreshHard(), 100);
//   //   } else if (activeIndex > 2) {
//   //     setExitAnimation(true);
//   //   }
//   // }, [activeIndex]);
// useEffect(() => {
//   if (typeof window !== 'undefined') {
//     requestAnimationFrame(() => {
//       setTimeout(() => {
//         AOS.refreshHard();
//       }, 100);
//     });
//   }
// }, [activeIndex]);


//   useEffect(() => {
//     setTimeout(() => {
//       AOS.refreshHard();
//     }, 1000);
//   }, [activeIndex]);
// useEffect(() => {
//   if (activeIndex === 2) {
//     setExitAnimation(false);
//   } else if (activeIndex > 2) {
//     setExitAnimation(true);
//   }
// }, [activeIndex]);

// // const handleWheel = useCallback(
// //   (e) => {
// //     if (transitioning) return;

// //     if (activeIndex === 5 && offerRef.current) {
// //       const el = offerRef.current;
// //       const { scrollTop, scrollHeight, clientHeight } = el;

// //       if (
// //         (e.deltaY > 0 && scrollTop + clientHeight < scrollHeight) ||
// //         (e.deltaY < 0 && scrollTop > 0)
// //       ) {
// //         return;
// //       }
// //     }

// //     let newIndex = activeIndex;
// //     if (e.deltaY > 0 && activeIndex < 5) {
// //       newIndex = activeIndex + 1;
// //     } else if (e.deltaY < 0 && activeIndex > 0) {
// //       newIndex = activeIndex - 1;
// //     }

// //     if (newIndex !== activeIndex) {
// //       setTransitioning(true);
// //       setExitAnimation(true); // 🔥 trigger zoom-down-out animation

// //       setTimeout(() => {
// //         setActiveIndex(newIndex);
// //         setTimeout(() => setTransitioning(false), 1500);
// //       }, 500); // wait before section switch
// //     }
// //   },
// //   [activeIndex, transitioning],
// // );

// //   const handleWheel = useCallback(
// //     (e) => {
// //       if (transitioning) return;

// //       if (activeIndex === 5 && offerRef.current) {
// //         const el = offerRef.current;
// //         const { scrollTop, scrollHeight, clientHeight } = el;

// //         if (
// //           (e.deltaY > 0 && scrollTop + clientHeight < scrollHeight) ||
// //           (e.deltaY < 0 && scrollTop > 0)
// //         ) {
// //           return;
// //         }
// //       }

// //       let newIndex = activeIndex;
// //       if (e.deltaY > 0 && activeIndex < 5) {
// //         newIndex = activeIndex + 1;
// //       } else if (e.deltaY < 0 && activeIndex > 0) {
// //         newIndex = activeIndex - 1;
// //       }

// //       // if (newIndex !== activeIndex) {
// //       //   setTransitioning(true);
// //       //   setTimeout(() => {
// //       //     setActiveIndex(newIndex);
// //       //     setTimeout(() => setTransitioning(false), 1500);
// //       //   }, 300);
// //       // }
// //       if (newIndex !== activeIndex) {
// //   setTransitioning(true);
// //   setExitAnimation(true); // trigger exit animation

// //   // Give time for exit animation before switching section
// //   setTimeout(() => {
// //     setActiveIndex(newIndex);
// //     setTimeout(() => {
// //       setTransitioning(false);
// //     }, 1500); // matches zoom-down-out animation duration
// //   }, 500); // delay before switching
// // }

// //     },
// //     [activeIndex, transitioning],
// //   );
// const handleWheel = useCallback(
//   (e) => {
//     if (transitioning) return;

//     if (activeIndex === 5 && offerRef.current) {
//       const el = offerRef.current;
//       const { scrollTop, scrollHeight, clientHeight } = el;

//       if (
//         (e.deltaY > 0 && scrollTop + clientHeight < scrollHeight) ||
//         (e.deltaY < 0 && scrollTop > 0)
//       ) {
//         return;
//       }
//     }

//     let newIndex = activeIndex;
//     if (e.deltaY > 0 && activeIndex < 5) {
//       newIndex = activeIndex + 1;
//     } else if (e.deltaY < 0 && activeIndex > 0) {
//       newIndex = activeIndex - 1;
//     }

//     if (newIndex !== activeIndex) {
//       setTransitioning(true);
//       setExitAnimation(true); // Trigger exit animation

//       setTimeout(() => {
//         setActiveIndex(newIndex);
//         setExitAnimation(false); // Clear exit flag AFTER section switch
//         setTimeout(() => setTransitioning(false), 500); // matches animation time
//       }, 500); // Full zoom-out animation duration before switch
//     }
//   },
//   [activeIndex, transitioning],
// );

//   useEffect(() => {
//     window.addEventListener('wheel', handleWheel, { passive: false });
//     return () => window.removeEventListener('wheel', handleWheel);
//   }, [handleWheel]);

//   return (
//     <div className="fixed-section-container">
//       {[
//         Index,
//         // Test,
//         Invitefriend,
//         Howitworks,
//         RedeemAndEarn,
//         PlayEarn,
//         Offer,
//       ].map((Component, index) => {
//         const isActive = index === activeIndex;
//         const isOfferSection = index === 5;

//         return (
//           <div
//             key={index}
//             className={`section ${isActive ? 'active' : ''}`}
//             ref={isOfferSection ? offerRef : null}
//             style={{
//               overflowY: isOfferSection && isActive ? 'auto' : 'hidden',
//             }}
//           >
//             {index === 2 ? (
//   <Howitworks isActive={isActive} isExiting={exitAnimation} />
// ) : index === 1 ? (
//   <Invitefriend isActive={isActive} isExiting={exitAnimation} />
// ) : (
//   <div data-aos="fade-up">
//     <Component />
//   </div>
// )}

//           </div>
//         );
//       })}
//     </div>
//   );
// }

// export default Home;
import { useState, useEffect, useRef, useCallback } from 'react';
import '../../styles/main.scss';
import '../../App.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// Components
import Index from './index';
import Invitefriend from './invitefriend';
import Howitworks from './howitworks';
import RedeemAndEarn from './redeemAndEarn';
import PlayEarn from './playEarn';
import Offer from './offer';

function Home() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [exitAnimation, setExitAnimation] = useState(false);
  const [transitioning, setTransitioning] = useState(false);
  const offerRef = useRef(null);

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: false,
      mirror: true,
      easing: 'ease-in-out',
    });
  }, []);

  // Refresh AOS on activeIndex change
  useEffect(() => {
    setTimeout(() => {
      AOS.refreshHard();
    }, 500);
  }, [activeIndex]);

  // Control exit animation
  useEffect(() => {
    if (activeIndex === 2) {
      setExitAnimation(false);
    } else if (activeIndex > 2) {
      setExitAnimation(true);
    }
  }, [activeIndex]);

  // Wheel scroll handler
  const handleWheel = useCallback(
    (e) => {
      if (transitioning) return;

      if (activeIndex === 5 && offerRef.current) {
        const el = offerRef.current;
        const { scrollTop, scrollHeight, clientHeight } = el;

        if (
          (e.deltaY > 0 && scrollTop + clientHeight < scrollHeight) ||
          (e.deltaY < 0 && scrollTop > 0)
        ) {
          return;
        }
      }

      let newIndex = activeIndex;
      if (e.deltaY > 0 && activeIndex < 5) {
        newIndex = activeIndex + 1;
      } else if (e.deltaY < 0 && activeIndex > 0) {
        newIndex = activeIndex - 1;
      }

      if (newIndex !== activeIndex) {
        setTransitioning(true);
        setExitAnimation(true);

        setTimeout(() => {
          setActiveIndex(newIndex);
          setExitAnimation(false);
          setTimeout(() => setTransitioning(false), 800);
        }, 800);
      }
    },
    [activeIndex, transitioning]
  );

  // Add wheel event listener
  useEffect(() => {
    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => window.removeEventListener('wheel', handleWheel);
  }, [handleWheel]);

  return (
    <div className="fixed-section-container">
      {[
        Index,
        Invitefriend,
        Howitworks,
        RedeemAndEarn,
        PlayEarn,
        Offer,
      ].map((Component, index) => {
        const isActive = index === activeIndex;
        const isOfferSection = index === 5;

        return (
          <div
            key={index}
            className={`section ${isActive ? 'active' : ''}`}
            ref={isOfferSection ? offerRef : null}
            style={{
              overflowY: isOfferSection && isActive ? 'auto' : 'hidden',
            }}
          >

            {index === 0 ? (
              <Component />
            ) : index === 1 ? (
              <Invitefriend isActive={isActive} isExiting={exitAnimation} />
            ) : index === 2 ? (
              <Howitworks isActive={isActive} isExiting={exitAnimation} />
            ) : index === 3 ? (
              <RedeemAndEarn isActive={isActive} />
            ) : index === 4 ? (
              <PlayEarn isActive={isActive} />
            ) : index === 5 ? (
              <Offer isActive={isActive} />
            ) : (
              <div data-aos="fade-up">
                <Component />
              </div>
            )}

          </div>
        );
      })}
    </div>
  );
}

export default Home;
