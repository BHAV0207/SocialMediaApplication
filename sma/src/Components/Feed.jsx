import { useEffect, useState } from "react";
import Post from "./Post";
import Share from "./Share";
import axios from "axios";

export default function Feed() {
  const [post, setPost] = useState([]);

  useEffect(() => {
    const fetchingPost = async () => {
      const res = await axios.get("/posts/timeline/677b85dd6a423a81ad07f535");
      setPost(res.data);
    };

    fetchingPost();
  }, []);

  return (
    <div className="flex-[5.5] p-5">
      <Share />
      {/* {post.map((p) => (
        <Post key={p._id} post={p} />
      ))} */}
    </div>
  );
}
