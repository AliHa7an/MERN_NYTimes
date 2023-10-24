import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [topStories, setTopStories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/api/top-stories")
      .then((res) => res.json())
      .then((data) => setTopStories(data))
      .catch((error) => console.error("Error:", error));
  }, []);

  return (
    <div className="App">
      <h1>New York Times Top Stories</h1>
      <div className="story-container">
        {topStories.map((story) => (
          <div className="card" key={story.url}>
            <img
              src={story.multimedia[0].url}
              alt={story.title}
              onClick={() => window.open(story.url, "_blank")}
            />
            <h2>{story.title}</h2>
            <p>{story.abstract}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
