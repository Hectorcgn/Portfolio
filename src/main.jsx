import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import video from "./assets/img/background_video_720p.mp4";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <div className="video-container">
      <video autoPlay loop muted className="background-video">
        <source src={video} type="video/mp4" />
      </video>
      <App />
    </div>
  </BrowserRouter>
);
