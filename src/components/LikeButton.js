import "./ButtonStyle.css";
import { useState, useEffect } from "react";

export default function LikeCounter() {
  const initial_numLikes = 0;
  const [numLikes, set_numLikes] = useState(initial_numLikes);
  const [plusClicked, setPlusClicked] = useState(false);

  const like = () => {
    set_numLikes(numLikes + 1);
    setPlusClicked(true);
  };

  const disLike = () => {
    numLikes === initial_numLikes
      ? set_numLikes(initial_numLikes)
      : set_numLikes(numLikes - 1);
    setPlusClicked(false);
  };

  useEffect(() => {
    console.log("The useEffect action!");
  }, [numLikes]);

  return (
    <div>
      <p>
        {numLikes} Likes
        <button onClick={like} disabled={plusClicked} className="ButtonStyle">
          {plusClicked === true ? "Liked" : "Like"}
        </button>
        <button onClick={disLike} className="ButtonDislikeStyle">
          Dislike
        </button>
      </p>
    </div>
  );
}
