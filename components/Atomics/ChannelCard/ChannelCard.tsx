// import "./ChannelCard.css";

// import Button from "react-bootstrap/Button";

// import { VerifiedTooltipLinkDark } from "../CustomCheckTooltips/CustomCheckTooltips";

// function ChannelCard({
// 	imgSrc,
// 	imgAlt = "",
// 	imgHref = "#",
// 	views,
// 	channelName,
// 	subscriberCount,
// 	channelHref = "#",
// 	verified,
// 	isSubscribed,
// 	outline = false,
// }) {
// 	let buttonVariant;

// 	if (outline) {
// 		buttonVariant = isSubscribed ? "outline-secondary" : "outline-danger";
// 	} else {
// 		buttonVariant = isSubscribed ? "secondary" : "danger";
// 	}
// 	const buttonText = isSubscribed ? "Subscribed" : "Subscribe";

// 	return (
// 		<>
// 			<div className="channels-card">
// 				<div className="channels-card-image">
// 					<a href={imgHref}>
// 						<img className="img-fluid" src={imgSrc} alt={imgAlt} />
// 					</a>
// 					<div className="channels-card-image-btn">
// 						<Button variant={buttonVariant}>
// 							{buttonText} <strong>{views}</strong>
// 						</Button>
// 					</div>
// 				</div>
// 				<div className="channels-card-body">
// 					<div className="channels-title">
// 						<a href={channelHref}>
// 							{channelName}{" "}
// 							{verified ? <VerifiedTooltipLinkDark /> : ""}
// 						</a>
// 					</div>
// 					<div className="channels-view">
// 						{subscriberCount} subscribers
// 					</div>
// 				</div>
// 			</div>
// 		</>
// 	);
// }

// export default ChannelCard;

import React from "react";
// import "./ChannelCard.css";
import Button from "react-bootstrap/Button";
import { VerifiedTooltipLinkDark } from "../CustomCheckTooltips/CustomCheckTooltips";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import Image from 'next/image'

interface ChannelCardProps {
  imgSrc?: any;
  imgAlt?: string;
  imgHref?: string;
  views?: string;
  channelName?: string;
  subscriberCount?: string;
  channelHref?: string;
  verified?: boolean;
  isSubscribed?: boolean;
  outline?: boolean;
}

function ChannelCard({
  imgSrc,
  imgAlt = "",
  imgHref = "#",
  views,
  channelName,
  subscriberCount,
  channelHref = "#",
  verified,
  isSubscribed,
  outline = false,
}: ChannelCardProps) {
  let buttonVariant:
    | "outline-secondary"
    | "outline-danger"
    | "secondary"
    | "danger";

  if (outline) {
    buttonVariant = isSubscribed ? "outline-secondary" : "outline-danger";
  } else {
    buttonVariant = isSubscribed ? "secondary" : "danger";
  }
  const buttonText = isSubscribed ? "Subscribed" : "Subscribe";

  return (
    <>
      <div className="channels-card">
        <div className="channels-card-image">
          <a href={imgHref}>
          <Image
                src={imgSrc}
                alt={imgAlt}
                width={80}
                height={80}
              />
          </a>
          <div className="channels-card-image-btn">
            <Button variant={buttonVariant}>
              {buttonText} <strong>{views}</strong>
            </Button>
          </div>
        </div>
        <div className="channels-card-body">
          <div className="channels-title">
            <a href={channelHref}>
              {channelName} {verified ? <RiVerifiedBadgeFill /> : ""}
            </a>
          </div>
          <div className="channels-view">{subscriberCount} subscribers</div>
        </div>
      </div>
    </>
  );
}

export default ChannelCard;
