import axios from "axios";
import React, { useState } from "react";

const CommentCreate = ({postId}) => {
  const [content, setContent] = useState("");

const handleSubmit = async(event) => {
    event.preventDefault()
    await axios.post(`http://localhost:4001/posts/${postId}/comments`,{
        content
    })
    setContent('')
}

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="new comment"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="border-2 rounded-lg border-gray-300 outline-none hover:outline-none"
      />
    </form>
  );
};

export default CommentCreate;
