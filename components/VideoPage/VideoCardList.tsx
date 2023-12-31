import React from "react";
import SectionHeader from "../Atomics/SectionHeader/SectionHeader";
import {
  VerifiedTooltip,
  UnverifiedTooltip,
} from "../Atomics/CustomCheckTooltips/CustomCheckTooltips";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { PiSmileySadFill } from "react-icons/pi";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlayCircle,
  faEllipsisV,
  faCalendarAlt,
} from "@fortawesome/free-solid-svg-icons";

interface VideoCardListProps {
  imgAlt?: string;
  imgSrc: string;
  videoTitle: string;
  videoCategory: string;
  views: string;
  timeAgo: string;
  videoHref?: string;
  time: string;
  active?: boolean | null;
  verified?: boolean;
}

const VideoCardList: React.FC<VideoCardListProps> = ({
  imgAlt = "",
  imgSrc,
  videoTitle,
  videoCategory,
  views,
  timeAgo,
  videoHref = "#",
  time,
  active = false,
  verified = false,
}) => {
  const activeStatus = active
    ? "video-card video-card-list active"
    : "video-card video-card-list";
  const categoryClass = verified
    ? "video-page text-success-custom"
    : "video-page text-danger-custom";
  return (
    <>
      <div className={activeStatus}>
        <div className="video-card-image">
          <a className="play-icon" href="#">
            <FontAwesomeIcon icon={faPlayCircle} />
          </a>
          <a href="#">
            <img className="img-fluid" src={imgSrc} alt={imgAlt} />
          </a>
          <div className="time">{time}</div>
        </div>

        <div className="video-card-body">
          <SectionHeader dropdownOnly icon={faEllipsisV} noIconLabel />

          <div className="video-title">
            <a href={videoHref}>{videoTitle}</a>
          </div>
          <div className={categoryClass}>
            {videoCategory}{" "}
            {/* {verified ? <VerifiedTooltip /> : <UnverifiedTooltip />} */}
            {verified ? <RiVerifiedBadgeFill /> : <PiSmileySadFill />}
          </div>
          <div className="video-view d-flex gap-1 align-items-center">
            {views} views &nbsp;
            <div style={{ width: "12px" }}>
              <FontAwesomeIcon icon={faCalendarAlt} />
            </div>{" "}
            {timeAgo}
            ago
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoCardList;
