import React from 'react';
import Slider from 'react-slick';
import { CERTIFICATES, LOGOS } from "../data";
import Card from "./Card";

const Certificates = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 2000, // Adjust the speed for slower sliding
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000, // Adjust the autoplay speed
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div className="pb-4">
            <h2 className="my-20 text-center text-4xl">Certificates</h2>
            <div className="p-4">
                <Slider {...settings}>
                    {CERTIFICATES.map((certificate, index) => (
                        <div className="px-2" key={index}>
                            <Card>
                                <div className="flex flex-col lg:flex-row lg:justify-center items-center">
                                    <div className="w-full lg:w-1/4 flex justify-center">
                                        <img src={LOGOS[certificate.issuer]} alt={certificate.issuer} className="h-28 rounded-2xl" />
                                    </div>
                                    <div className="w-full max-w-xl lg:w-3/4 lg:ml-4">
                                        <h6 className="mb-2 font-semibold text-center lg:text-left">
                                            {certificate.title} - <span className="text-purple-300 text-sm">
                                                {certificate.issuer}
                                            </span>
                                        </h6>
                                        <p className="mb-4 text-neutral-400 text-center lg:text-left">{certificate.description}</p>
                                        <div className="flex justify-center lg:justify-start">
                                            <a href={certificate.link} target="_blank" rel="noopener noreferrer" className="bg-purple-600 hover:bg-purple-700 transition-colors px-5 py-2.5 rounded-xl text-white">
                                                See Certificate
                                            </a>
                                            <a href={certificate.pdf} target="_blank" rel="noopener noreferrer" className="bg-blue-600 hover:bg-blue-700 transition-colors px-5 py-2.5 rounded-xl text-white ml-2">
                                                View PDF
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default Certificates;
