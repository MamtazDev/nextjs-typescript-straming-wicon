import React from "react";
import Button from "react-bootstrap/Button";

import {
  VerifiedTooltip,
  VerifiedTooltipLinkDark,
} from "../CustomCheckTooltips/CustomCheckTooltips";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import s1 from "@/assets/img/s1.png";
import { AiFillCloseCircle } from "react-icons/ai";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { PiSmileySadFill } from "react-icons/pi";

interface SubscriptionChannelCardProps {
  views?: string;
  channelName?: string;
  subscriberCount?: string;
  verified?: boolean;
  isSubscribed?: boolean;
  success?: boolean;
  imgSrc?: string;
}

const SubscriptionChannelCard: React.FC<SubscriptionChannelCardProps> = ({
  views,
  channelName,
  subscriberCount,
  verified,
  isSubscribed,
  success = false,
  imgSrc,
}) => {
  const showVerifyBadge = success ? (
    <VerifiedTooltip />
  ) : (
    <VerifiedTooltipLinkDark />
  );

  const buttonVariant = success
    ? "success"
    : isSubscribed
    ? "secondary"
    : "danger";
  const buttonText = isSubscribed ? "Subscribed" : "Subscribe";

  return (
    <>
      <div className="channels-card">
        <div className="channels-card-image">
          <a href="#">
            <img className="img-fluid" src={s1.src} alt="" />
          </a>
          <div className="channels-card-image-btn">
            <Button variant={buttonVariant} size="sm" className="border-none">
              {buttonText} <strong>{views}</strong>
            </Button>{" "}
            <Button variant="warning" size="sm" className="border-none">
              {/* <FontAwesomeIcon icon={faTimesCircle} /> */}
              <AiFillCloseCircle />
            </Button>
          </div>
        </div>
        <div className="channels-card-body">
          <div className="channels-title">
            <a href="#">
              {channelName}
              {/* {verified ? showVerifyBadge : ''} */}
              {verified ? <RiVerifiedBadgeFill /> : ""}
            </a>
          </div>
          <div className="channels-view">{subscriberCount} subscribers</div>
        </div>
      </div>
    </>
  );
};

export default SubscriptionChannelCard;
