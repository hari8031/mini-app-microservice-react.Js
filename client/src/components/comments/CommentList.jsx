import React from "react";
import { FaCommentDots } from "react-icons/fa";

const CommentList = ({ comments }) => {
  return (
    <div className="flex flex-col items-start">
      {comments.map((comment) => {
        return (
          <li
            key={comment.id}
            className="list-none font-bold m-3 flex items-center"
          >
            <FaCommentDots className="m-2" />
            {comment.content}
          </li>
        );
      })}
    </div>
  );
};

export default CommentList;
