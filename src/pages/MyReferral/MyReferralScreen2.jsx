import React, { useRef, useState } from 'react'

// Images
import Astronut1 from "../../../assets/MyReferral-img/Character.svg";
import Astronut2 from "../../../assets/MyReferral-img/Astronaut.svg";
import BlueBottom from "../../../assets/MyReferral-img/BLUE PATTI.svg"
import SliderCard from '../../Common/MyReferralSliderCards/SliderCard';
import StartFour from '../../../assets/MyRewards/StarFour.svg';

// Common Components
import FAQ from "../../Common/Faq/faq";

// Import Json
const faqData = [
    {
        title: '1. What is wealth Elites Reward & Program?',
        content: 'You can return any item within 30 days of purchase.'
    },
    {
        title: '2. How do I track my referrals?',
        content: 'You can track your order from the “My Orders” section after login.'
    },
    {
        title: '3. What does a successfull referral mean?',
        content: 'Yes, we offer 24/7 customer support via chat and email.'
    },
    {
        title: '3. What does a successfull referral mean?',
        content: 'Yes, we offer 24/7 customer support via chat and email.'
    }
];


const MyReferralScreen2 = () => {
    const inputRef = useRef(null);
    const [copied, setCopied] = useState(false);


    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(inputRef.current.value);
            setCopied(true);
            setTimeout(() => setCopied(false), 1500);
        } catch (err) {
            console.error('Failed to copy: ', err);
        }
    };


    return (
        <>
            <section className='hero-section position-relative d-flex align-items-center justify-content-center'>
                <div className="cloud-img position-absolute w-100 z-2 h-75 overflow-auto">
                    <div className='container h-100 overflow-auto'>
                        <div className='invite-card overflow-hidden'>
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
                                    <div>
                                        <label className='font-size-12 text-white montserrat-medium mb-2'>Invite Link</label>
                                        <div className="copy-input-container">
                                            <input
                                                ref={inputRef}
                                                type="text"
                                                defaultValue="https://example.com/my-link"
                                                className="copy-input input-invite-friend bg-white mb-60"
                                            />
                                            <button className="copy-button  montserrat-medium" onClick={handleCopy}>
                                                {copied ? 'Copied!' : 'Copy Link'}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='blue-bottom-img'></div>
                        </div>

                        {/* Referral Cards */}
                        <SliderCard />

                        {/* INVITING, TRACKING CARD SECTION */}
                        <div className="container">
                            <div className="text-dark-blue mt-120 mb-4 pb-4 space-grotesk-bold font-size-32">
                                Here's How You Earn with  Every Referral
                            </div>

                            <div className="redeem-claim text-center py-5">
                                <div className="font-24 montserrat-semibold text-white mb-3 ls-4">
                                    Inviting, Tracking, And Earning From Referrals
                                </div>
                                <p className="font-18 montserrat-medium text-white ls-4">
                                    Refer your circle, track your impact, and watch your rewards grow
                                </p>

                                <div className="text-light-yellow font-32 space-grotesk-bold d-flex justify-content-center my-5 ls-4">
                                    Invite
                                    <img className="mx-4" src={StartFour} alt="Loading" />
                                    Friend Invests
                                    <img className="mx-4" src={StartFour} alt="Loading" />
                                    You Earn
                                </div>
                                <div className="pt-3 ">
                                    <button className="py-2 mx-3 width-18 rounded-3 text-white bg-transparent border border-white font-16 montserrat-semibold">
                                        Invite a Friend
                                    </button>
                                    <button className="py-2 mx-3 width-18 rounded-3 border-0 bg-white text-blue font-16 montserrat-semibold">
                                        Track
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* FAQ Section Start here */}
                        <div className='mb-5'>
                            <FAQ items={faqData} />
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
                </div>

            </section>
        </>
    );
};

export default MyReferralScreen2;