import React from "react";
// import Media from "react-bootstrap/Media";
// import Button from "react-bootstrap/Button";
// import Form from "react-bootstrap/Form";
import UsersWhoLiked from "./UsersWhoLiked";
import { BiSolidLike } from "react-icons/bi";
import { BiSolidDislike } from "react-icons/bi";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faThumbsDown } from "@fortawesome/free-solid-svg-icons";
import { Button, Card, Form } from "react-bootstrap";
import s1 from "@/assets/img/s1.png";

interface CommentMediaProps {
  commentAuthor?: any;
  timeAgo?: any;
  likesCount?: any;
  unlikesCount?: any;
  commentBody?: any;
  commentCount?: any;
}

const CommentMedia: React.FC<CommentMediaProps> = ({
  commentAuthor,
  timeAgo,
  likesCount,
  unlikesCount,
  commentBody,
  commentCount,
}) => {
  return (
    <div className="reviews-members">
      <Card>
        <div className="d-flex m-4 align-items-start">
          <a href="#">
            <img
              className="mr-3 rounded-circle w-75"
              src={s1.src}
              alt="Generic placeholder image "
            />
          </a>
          <Card.Body>
            <div className="media-body">
              <div className="reviews-members-header">
                <h6 className="mb-1">
                  <a className="text-black" href="#">
                    {commentAuthor}{" "}
                  </a>{" "}
                  <small className="text-gray">{timeAgo} ago</small>
                </h6>
              </div>
              <div className="reviews-members-body">
                <p>{commentBody}</p>
              </div>
              <div className="reviews-members-footer d-flex gap-2 align-items-center">
                <a className="total-like" href="#">
                  {/* <FontAwesomeIcon width={12} icon={faThumbsUp} />{" "} */}
                  <BiSolidLike />
                  {likesCount}
                </a>{" "}
                <a className="total-like" href="#">
                  {/* <FontAwesomeIcon width={12} icon={faThumbsDown} />{" "} */}
                  <BiSolidDislike />
                  {unlikesCount}
                </a>
                <UsersWhoLiked title={""} />
              </div>
            </div>
          </Card.Body>
        </div>
      </Card>
    </div>
  );
};

interface CustomMediaProps {
  commentCount: number;
}

const CustomMedia: React.FC<CustomMediaProps> = ({ commentCount }) => {
  return (
    <div className="reviews-members pt-0">
      <Card>
        <div className="d-flex m-3 align-items-start">
          <a href="#">
            <img className="mr-3 rounded-circle w-50" src={s1.src} alt="" />
          </a>
          <Card.Body className="p-0">
            <div className="form-members-body">
              <Form.Control
                as="textarea"
                rows={1}
                placeholder="Add a public comment..."
              />
            </div>

            <div className="form-members-footer text-right mt-2 d-flex justify-content-between">
              <b className="float-left text-secondary">
                {commentCount} Comments
              </b>
              <div>
                <Button variant="outline-danger" size="sm">
                  CANCEL
                </Button>
                &nbsp;
                <Button variant="danger" size="sm">
                  COMMENT
                </Button>
              </div>
            </div>
          </Card.Body>
        </div>
      </Card>
    </div>
  );
};

export { CustomMedia, CommentMedia };
