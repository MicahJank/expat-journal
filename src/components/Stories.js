import React from "react";

function Story() {
  const story = props.match.params.id;

  return (
    <div id={story.id}>
      <h1>{story.title}</h1>
      <img src={story.img} alt={story.title} />
      <p>{story.content}</p>
    </div>
  );
}

export default Story;
