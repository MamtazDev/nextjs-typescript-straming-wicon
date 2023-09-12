import React from "react";
import Button from "react-bootstrap/Button";
import { VerifiedTooltip } from "../Atomics/CustomCheckTooltips/CustomCheckTooltips";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { FaBell } from "react-icons/fa";

interface AuthorBoxProps {
  subscriberCount: string;
  imgAlt?: string;
  imgSrc: string;
  isSubscribed?: boolean;
  channelHref?: string;
  channelName: string;
  verified?: boolean | null;
  publishedOn: string;
}

const AuthorBox: React.FC<AuthorBoxProps> = ({
  subscriberCount,
  imgAlt = "",
  imgSrc,
  isSubscribed = false,
  channelHref = "#",
  channelName,
  verified = null,
  publishedOn,
}) => {
  return (
    <div className="single-video-author box mb-3 d-flex align-items-center justify-content-between">
      <div className="d-flex align-items-center">
        <img className="img-fluid" src={imgSrc} alt={imgAlt} />
        <div>
          <p>
            <a href={channelHref} className="text-danger-custom">
              <strong style={{ whiteSpace: "nowrap" }}>{channelName}</strong>
            </a>{" "}
            {/* {verified ? <VerifiedTooltip /> : ""} */}
            <VerifiedTooltip />
          </p>
          <small>Published on {publishedOn}</small>
        </div>
      </div>
      <div className="float-right">
        <Button variant="danger">
          Subscribe <strong>{subscriberCount}</strong>
        </Button>{" "}
        <Button variant="outline-danger">
          {/* <FontAwesomeIcon icon={faBell} /> */}
          <FaBell />
        </Button>
      </div>
    </div>
  );
};

export default AuthorBox;
