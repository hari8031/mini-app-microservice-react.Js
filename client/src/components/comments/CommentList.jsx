import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaCommentDots } from "react-icons/fa";

const CommentList = ({ postId }) => {
  const [comments, setComments] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:4001/posts/${postId}/comments`)
      .then((response) => setComments(response.data))
      .catch((err) => console.log(err));
  }, []);
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
