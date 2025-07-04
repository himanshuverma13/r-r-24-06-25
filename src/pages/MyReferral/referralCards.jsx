import React, { useState } from 'react'

// Images
import ReferralUfo from "../../assets/icons/home/MyReferral/UFO-LEFT.svg";
import HoverUfo from "../../assets/icons/home/MyReferral/referral-ufo.svg";
const ReferralCards = ({RefralDataAPI}) => {
    const [isHovered, setIsHovered] = useState(null);

    const cardsData = [
        {
            id: 1,
            count: `${RefralDataAPI?.part1}`,
            title: "Total Referrals",
            subtitle: "People You've Referred",
            image: ReferralUfo,
            hoverImage: HoverUfo,
        },
        {
            id: 2,
            count: `${RefralDataAPI?.part2}`,
            title: "Referrals Earnings",
            subtitle: "People You've Referred",
            image: ReferralUfo,
            hoverImage: HoverUfo,
        },
        {
            id: 3,
            count: `${RefralDataAPI?.part3}`,
            title: "Pending Referrals",
            subtitle: "No of Invites Waiting to Join",
            image: ReferralUfo,
            hoverImage: HoverUfo,
        }
    ];
    return (
        <>
            <div className='row mt-5'>
                {cardsData.map((card, index) => (
                    <div className='col-lg-4' key={card.id}>
                        <div className='referral-card p-5 position-relative text-center'
                            onMouseEnter={() => setIsHovered((card.id))}
                            onMouseLeave={() => setIsHovered(null)}>
                            <div>
                                <img
                                    src={isHovered === card.id ? card.hoverImage : card.image}
                                    alt="Loading"
                                    className={'card-ufo-img'}
                                />
                            </div>
                            <p className='font-size-32 referral-txt montserrat-bold text-white pt-4'>{card.count}</p>
                            <p className='font-size-28 referral-txt montserrat-semibold text-white mb-0'>{card.title}</p>
                            <p className='font-size-14 montserrat-semibold referral-yellow-text'>{card.subtitle}</p>
                            <button className='border-0 text-white rounded background-text-blue px-4 py-2 mt-3'>View</button>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default ReferralCards;