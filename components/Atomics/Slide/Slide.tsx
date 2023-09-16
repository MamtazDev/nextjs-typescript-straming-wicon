
import React from "react";
import { VerifiedTooltip } from "../CustomCheckTooltips/CustomCheckTooltips";
import {RiVerifiedBadgeFill} from "react-icons/ri"
import Image from 'next/image'

interface SlideProps {
	href?: string;
	imgSrc?: string;
	imgAlt?: string;
	label?: string;
	views?: string;
	verified?: boolean | null;
}

const Slide: React.FC<SlideProps> = ({
	href,
	imgSrc,
	imgAlt = "",
	label,
	views,
	verified = null,
}) => {
	const verifyLabel = verified ? <RiVerifiedBadgeFill /> : null;


	

	return (
		<div className="item">
			<div className="category-item">
				{/* <a href={href || "#"}> */}
					{/* <img
						className="img-fluid custom-slick-img"
						src={imgSrc}
						alt={imgAlt}
					/> */}
					<Image
						src={imgSrc}
						alt={imgAlt}
						width={60}
						height={60}
						quality={100}
						/>
					<h6>
						{label} {verifyLabel}
					</h6>
					<p>{views} views</p>
				{/* </a> */}
			</div>
		</div>
	);
};

export default Slide;
