import React from "react";
import Tooltip from "react-bootstrap/Tooltip";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faFrown } from "@fortawesome/free-solid-svg-icons";

const VerifiedTooltip: React.FC = () => {
  const renderTooltip = (props: any) => <Tooltip {...props}>Verified</Tooltip>;
  return (
    <OverlayTrigger placement="top" overlay={renderTooltip}>
      <span className="text-success-custom">
        {/* <FontAwesomeIcon icon={faCheckCircle} /> */}
      </span>
    </OverlayTrigger>
  );
};

const UnverifiedTooltip: React.FC = () => {
  const renderTooltip = (props: any) => <Tooltip {...props}>Unverified</Tooltip>;
  return (
    <OverlayTrigger placement="top" overlay={renderTooltip}>
      <span className="text-danger-custom">
        {/* <FontAwesomeIcon icon={faFrown} /> */}
      </span>
    </OverlayTrigger>
  );
};

const VerifiedTooltipLink: React.FC = () => {
  const renderTooltip = (props: any) => <Tooltip {...props}>Verified</Tooltip>;
  return (
    <OverlayTrigger placement="top" overlay={renderTooltip}>
      <p className="text-success-custom">
        {/* <FontAwesomeIcon icon={faCheckCircle} /> */}
      </p>
    </OverlayTrigger>
  );
};

const VerifiedTooltipLinkDark: React.FC = () => {
  const renderTooltip = (props: any) => <Tooltip {...props}>Verified</Tooltip>;
  return (
    <OverlayTrigger placement="top" overlay={renderTooltip}>
      <p className="">
        {/* <FontAwesomeIcon icon={faCheckCircle} /> */}
      </p>
    </OverlayTrigger>
  );
};

const UnverifiedTooltipLink: React.FC = () => {
  const renderTooltip = (props: any) => <Tooltip {...props}>Unverified</Tooltip>;
  return (
    <OverlayTrigger placement="top" overlay={renderTooltip}>
      <p className="text-danger-custom">
        {/* <FontAwesomeIcon icon={faFrown} /> */}
      </p>
    </OverlayTrigger>
  );
};

export {
  VerifiedTooltip,
  UnverifiedTooltip,
  VerifiedTooltipLink,
  UnverifiedTooltipLink,
  VerifiedTooltipLinkDark,
};
