import React, { useState } from 'react'

// Images
import plus from '../../src/assets/icons/home/offer/plus.svg';
import minus from '../../src/assets/icons/home/offer/minus.svg';

const FAQ = ({ items }) => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <>
            <div className="container">
                <h2 className="text-dark-blue mt-120 mb-1 pb-1">
                    Frequently Asked Questions
                </h2>
                <div className="row">
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
                                            <span>
                                                <img src={openIndex === index ? minus : plus} alt="" />
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
        </>
    );
};

export default FAQ;
