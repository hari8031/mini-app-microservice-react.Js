import React from "react";
import { FaCommentDots } from "react-icons/fa";

const CommentList = ({ comments }) => {
  return (
    <div className="flex flex-col items-start">
      {comments.map((comment) => {
        let content;

        if(comment.status === 'approved'){
          content = comment.content;
        }
        if(comment.status === 'pending'){
          content = 'this is a pending comment';
        }
        if(comment.status === 'rejected'){
          content = 'this is a rejected comment';
        }
        return (
          <li
            key={comment.id}
            className="list-none font-bold m-3 flex items-center"
          >
            <FaCommentDots className="m-2" />
            {content}
          </li>
        );
      })}
    </div>
  );
};

export default CommentList;
