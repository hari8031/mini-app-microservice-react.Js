import axios from "axios";
import React, { useEffect, useState } from "react";
import CommentCreate from "../comments/CommentCreate";
import CommentList from "../comments/CommentList";

const ListPost = () => {
  const [data, setData] = useState({});
  useEffect(() => {
    axios
      .get("http://localhost:4002/posts")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err, "error"));
  }, []);

  const renderedPost = Object.values(data).map((post) => {
    return (
      <div
        key={post.id}
        className="border border-gray-100 p-6 m-2 text-center shadow-2xl"
      >
        <h1 className="text-2xl w-[200px] min-h-[100px] uppercase font-bold">
          {post.title}
        </h1>
        <CommentList comments={post.comments} />
        <CommentCreate postId={post.id} />
      </div>
    );
  });

  
  return <div className="flex flex-wrap">{renderedPost}</div>;
};

export default ListPost;
