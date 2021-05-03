import { useState } from "react";
import "./ButtonStyle.css";

export default function LikeCounter() {
  const initial_numLikes = 0;
  const [numLikes, set_numLikes] = useState(initial_numLikes);

  const like = () => {
    set_numLikes(numLikes + 1);
  };

  const disLike = () => {
    set_numLikes(numLikes - 1);
  };

  return (
    <div>
      <p>
        {numLikes >= 0 ? `${numLikes} Likes` : `${numLikes} Dislikes`}
        <button onClick={like} className="ButtonStyle">
          Like
        </button>
        <button onClick={disLike} className="ButtonDislikeStyle">
          Dislike
        </button>
      </p>
    </div>
  );
}
