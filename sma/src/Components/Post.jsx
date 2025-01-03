import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Users } from "../dummyData";
import { useState } from "react";

export default function Post({ post }) {
  const [like, setLike] = useState(post.like);
  const [isLiked, setIsLiked] = useState(false);

  const likeHandler = () => {
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };

  return (
    <div className="w-full rounded-xl shadow-lg my-8">
      <div className="p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img
              className="w-10 h-10 rounded-full object-cover"
              src={post.photo}
              alt=""
            />
            <span className="font-semibold mx-3">{post.username}</span>
            <span className="text-xs text-gray-500">{post.date}</span>
          </div>
          <div className="cursor-pointer">
            <MoreVertIcon />
          </div>
        </div>
        <div className="my-5">
          <span className="text-sm">{post.desc}</span>
          <img
            className="mt-5 w-full max-h-[500px] object-contain"
            src={post.photo}
            alt=""
          />
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img
              className="w-6 h-6 cursor-pointer"
              src="/assets/like.png"
              onClick={likeHandler}
              alt=""
            />
            <img
              className="w-6 h-6 cursor-pointer"
              src="/assets/heart.png"
              onClick={likeHandler}
              alt=""
            />
            <span className="text-sm text-gray-500">{like} people like it</span>
          </div>
          <div className="cursor-pointer border-b border-gray-500 text-sm">
            {post.comment} comments
          </div>
        </div>
      </div>
    </div>
  );
}
