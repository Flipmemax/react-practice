import "./Articlestyle.css";
import "./ButtonStyle.css";
import ArticleTemplate from "./ArticleTemplate";
import LikeButton from "./LikeButton";
import { useState, useEffect } from "react";
import axios from "axios";

export default function ArticleList() {
  const [articles, set_articles] = useState([]);

  const clearNotifications = () => {
    set_articles([]);
  };

  useEffect(() => {
    async function doSomeDataFetching() {
      console.log("I'm gonna fetch some data!");
      const res = await axios.get(
        "https://jsonplaceholder.typicode.com/posts?_limit=5"
      );
      set_articles(res.data);
      console.log("Got back", res);
    }
    doSomeDataFetching();
  }, []);

  return (
    <div>
      <button onClick={clearNotifications} className="ButtonDislikeStyle">
        Click here to clear articles
      </button>
      {articles.map((articles) => (
        <div className="Articlestyle">
          <div key={articles.id}>
            <ArticleTemplate title={articles.title} content={articles.body} />
            <LikeButton />
          </div>
        </div>
      ))}
    </div>
  );
}
