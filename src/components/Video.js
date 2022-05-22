import React from "react";

const Video = (props) => {
  return (
    <div>
      {/* <iframe src="https://www.youtube.com/embed/QJWrBq02iZo"></iframe> */}
      <iframe
        width="853"
        height="480"
        // src={`https://www.youtube.com/embed/QJWrBq02iZo`}
        src={`https://www.youtube.com/embed/${props.embedLink}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
    </div>
  );
};

export default Video;
