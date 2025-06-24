import React from 'react'
import Navbar from '../../Common/Navbar/navbar';
import ReferralCards from '../../Common/MyReferralCards/referralCards';
import Cloud from "../../../assets/MyReferral-img/coluds1.png"
import Astronut1 from "../../../assets/MyReferral-img/Character.svg";
import Astronut2 from "../../../assets/MyReferral-img/Astronaut.svg";
import BlueBottom from "../../../assets/MyReferral-img/BLUE PATTI.svg"
const MyReferralScreen1 = () => {
    // const inputRef = useRef(null);
    // const [copied, setCopied] = useState(false);

    // const handleCopy = async () => {
    //     try {
    //         await navigator.clipboard.writeText(inputRef.current.value);
    //         setCopied(true);
    //         setTimeout(() => setCopied(false), 1500);
    //     } catch (err) {
    //         console.error('Failed to copy: ', err);
    //     }
    // };
    return (
        <>
            <section className="hero-section position-relative">
                <Navbar />
                <div className="referral-wrapper position-relative">
                    <div className='container z-1 pt-5'>
                        <ReferralCards />
                        <div className="cloud-img position-absolute w-100 z-2"></div>
                        {/* <div className='invite-card overflow-hidden z-3'>
                            <div className='astronauts position-absolute'>
                                <img src={Astronut1} alt="Loading" />
                                <img src={Astronut2} alt="Loading" />
                            </div>
                            <div className='row p-5 align-items-center'>
                                <div className='col-lg-6 d-flex justify-content-center'>
                                    <div>
                                        <p className='font-32 text-white space-grotesk-bold ms-5'>Invite A Friend</p>
                                    </div>
                                </div>
                                <div className='col-lg-6 mb-5'>
                                    <div className='mb-2'>
                                        <label className='font-size-12 text-white montserrat-medium mb-2'>Invite Code</label>
                                        <div className="copy-input-container">
                                            <input
                                                ref={inputRef}
                                                type="text"
                                                defaultValue="https://example.com/my-link"
                                                className="copy-input input-invite-friend bg-white mb-60"
                                            />
                                            <button className="copy-button montserrat-regular" onClick={handleCopy}>
                                                {copied ? 'Copied!' : 'Copy Link'}
                                            </button>
                                        </div>
                                    </div>
                                    <div className='mb-4'>
                                        <label className='font-size-12 text-white montserrat-medium mb-2'>Invite Link</label>
                                        <div className="copy-input-container">
                                            <input
                                                ref={inputRef}
                                                type="text"
                                                defaultValue="https://example.com/my-link"
                                                className="copy-input input-invite-friend bg-white mb-60"
                                            />
                                            <button className="copy-button montserrat-regular" onClick={handleCopy}>
                                                {copied ? 'Copied!' : 'Copy Link'}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='blue-bottom-img'></div>
                        </div> */}
                    </div>
                </div>
            </section>
        </>
    );
};

export default MyReferralScreen1;