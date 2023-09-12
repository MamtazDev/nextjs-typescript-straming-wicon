import React from "react";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import s1 from "@/assets/img/s1.png";

interface AvatarTooltipProps {
  title: string;
}

const AvatarTooltip: React.FC<AvatarTooltipProps> = ({ title }) => {
  const renderTooltip = (props: any) => {
    return <Tooltip {...props}>{title}</Tooltip>;
  };

  return (
    <OverlayTrigger placement="top" overlay={renderTooltip}>
      <a href="#" title="">
        <img
          width={20}
          className="total-like-user rounded-circle"
          src={s1.src}
          alt=""
        />
      </a>
    </OverlayTrigger>
  );
};

export default AvatarTooltip;

interface UsersWhoLikedProps {}

const UsersWhoLiked: React.FC<UsersWhoLikedProps> = () => {
  return (
    <span dir="rtl" className="total-like-user-main  d-flex align-items-center">
      <AvatarTooltip title="Gurdeep Osahan" />
      <AvatarTooltip title="Gurdeep Osahan" />
      <AvatarTooltip title="Gurdeep Osahan" />
      <AvatarTooltip title="Gurdeep Osahan" />
    </span>
  );
};

export { UsersWhoLiked };
