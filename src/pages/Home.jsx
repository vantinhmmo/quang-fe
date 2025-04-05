import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import logoImage from '../assets/home/slide.png';

const images = [
    logoImage,
    logoImage,
    logoImage,
    logoImage,
    logoImage,
];

const CenterModeSlider = () => {
    const settings = {
        centerMode: true,
        centerPadding: "300px",
        slidesToShow: 1,
        speed: 500,
        infinite: true,
        dots: true,
        arrows: false, // Disable next/previous buttons
        responsive: [
            {
                breakpoint: 1024, // For small screens
                settings: {
                    centerMode: false, // Disable center mode on small screens
                    slidesToShow: 1, // Show only 1 slide
                    centerPadding: "0px", // Remove padding
                },
            },
        ],
    };

    return (
        <div className="w-full bg-[#03193A] pt-[1.43rem] pb-[2.43rem]">
            <Slider {...settings}>
                {images.map((img, index) => (
                    <div className="slide-container bg-[#147261] !flex justify-between pt-[2.43rem] rounded-[30px] text-center bg-[linear-gradient(to_right,_#147261,_#082C25)] h-[423px]">
                        <div className="px-[5.3rem] flex-1">
                            <p className="font-semibold text-[1.3rem] mb-[0.93rem]">Exclusive Tournament</p>
                            <h2 className="text-[2.62rem] font-extrabold mb-[0.9rem]">Piggy Christmas Tap:
                                €35,000 For Your<br/>
                                Wins</h2>
                            <button className="px-[5.5rem] py-[1rem] bg-[#FF0960] rounded-[0.75rem] text-[1.3rem] text-[#FFF]">JOIN AND WIN</button>
                        </div>
                        <div key={index} className="px-2 flex-1">
                            <img
                                src={img}
                                alt={`Slide ${index + 1}`}
                                className="rounded-lg shadow-lg"
                            />
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default function Home() {
    return (
        <div className="">
            <CenterModeSlider />
        </div>
    );
}
