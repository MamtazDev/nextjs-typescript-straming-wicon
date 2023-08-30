import React from "react";

import Slide from "../Atomics/Slide/Slide";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleRight,
  faAngleLeft,
  faCircle,
} from "@fortawesome/free-solid-svg-icons";
import Slider from "react-slick";
import s1 from "@/assets/img/s1.png"
import s2 from "@/assets/img/s2.png"
import s3 from "@/assets/img/s3.png"
import s4 from "@/assets/img/s4.png"
import s5 from "@/assets/img/s5.png"
import s6 from "@/assets/img/s6.png"
import s7 from "@/assets/img/s7.png"
import s8 from "@/assets/img/s8.png"

interface SampleArrowProps {
  onClick: () => void;
}

// function SampleNextArrow(props: SampleArrowProps) {
//   return (
//     <button
//       className="custom-slick-btn custom-slick-next"
//       onClick={props.onClick}
//     >
//       <span>
//         <FontAwesomeIcon
//           icon={faAngleRight}
//           mask={faCircle}
//           transform="shrink-7"
//         />
//       </span>
//     </button>
//   );
// }

// function SamplePrevArrow(props: SampleArrowProps) {
//   return (
//     <button
//       className="custom-slick-btn custom-slick-prev"
//       onClick={props.onClick}
//     >
//       <FontAwesomeIcon icon={faAngleLeft} mask={faCircle} transform="shrink-7" />
//     </button>
//   );
// }

interface SlideProps {
  href?: string;
  imgSrc: string;
  label: string;
  views: string;
  verified?: boolean;
}

function TopCategoriesSlider() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 9,
    slidesToScroll: 1,
    initialSlide: 0,
    swipeToSlide: true,
    autoplay: true,
    autoplaySpeed: 2000,
  //   nextArrow: <SampleNextArrow onClick={function (): void {
	// 	throw new Error("Function not implemented.");
	// } } />,
  //   prevArrow: <SamplePrevArrow onClick={function (): void {
	// 	throw new Error("Function not implemented.");
	// } } />
  
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 8,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  return (
    <>
      <Slider {...settings}>
        <Slide href="#" imgSrc={s1.src} label="Your Life" views="74,853" />
        <Slide imgSrc={s2.src} label="Unboxing Cool" views="74,853" />
        <Slide imgSrc={s3.src} label="Service Reviewing" views="74,853" />
        <Slide imgSrc={s4.src} label="Gaming" views="74,853" verified />
        <Slide
          imgSrc={s5.src}
          label="Technology Tutorials"
          views="74,853"
        />
        <Slide imgSrc={s6.src} label="Singing" views="74,853" />
        <Slide imgSrc={s7.src} label="Cooking" views="74,853" />
        <Slide imgSrc={s8.src} label="Travelling" views="74,853" />
        <Slide imgSrc={s1.src} label="Education" views="74,853" />
        <Slide
          imgSrc={s2.src}
          label="Noodles, Sauces & Instant Food"
          views="74,853"
        />
        <Slide imgSrc={s1.src} label="Comedy" views="74,853" verified />
        <Slide imgSrc={s1.src} label="Lifestyle Advice" views="74,853" />
      </Slider>
    </>
  );
}

export default TopCategoriesSlider;
