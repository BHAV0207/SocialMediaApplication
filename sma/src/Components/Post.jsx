import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Post({ post }) {
  const [like, setLike] = useState(post.like.length);
  const [isLiked, setIsLiked] = useState(false);
  const [user, setUser] = useState({});
  const Pf = import.meta.env.VITE_PUBLIC_FOLDER;

  useEffect(() => {
    const fetchingUser = async () => {
      const res = await axios.get(`users/${post.userId}`);
      setUser(res.data);
    };

    fetchingUser();
  }, [post.userId]);

  const likeHandler = () => {
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };

  return (
    <div className="w-full rounded-xl shadow-lg my-8">
      <div className="p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link to={`profile/${user.username}`}>
              <img
                className="w-10 h-10 rounded-full object-cover"
                src={user.profilePicture}
                alt=""
              />
            </Link>
            <span className="font-semibold mx-3">
              {user.username || Pf + "person/noAvatar.png"}
            </span>
            <span className="text-xs text-gray-500">{post.date}</span>
          </div>
          <div className="cursor-pointer">
            <MoreVertIcon />
          </div>
        </div>
        <div className="my-5">
          <span className="text-sm">{post?.desc}</span>
          <img
            className="mt-5 w-full max-h-[500px] object-contain"
            src={Pf + post.img}
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
