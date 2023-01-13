import React, { useEffect, useState } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";
import NewsCards from "./components/NewsCards/NewsCards";
const App = () => {
  const [newsArticles, setNewsArticles] = useState([]);

  useEffect(() => {
    alanBtn({
      key: "ab91214ea7df19db27b24d2478be3e942e956eca572e1d8b807a3e2338fdd0dc/stage",
      onCommand: ({ command, articles }) => {
        if (command === "newHeadlines") {
          setNewsArticles(articles);
          console.log(newsArticles);
        }
      },
    });
  }, [newsArticles]);
  return (
    <div>
      <h1>Alan AI news application</h1>
      <NewsCards />
    </div>
  );
};

export default App;
