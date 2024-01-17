import React from "react";

const CodePenEmbed = ({ code }) => (
  <iframe
    height="300"
    scrolling="no"
    title="CodePen Embed"
    srcDoc={code}
    frameBorder="no"
    allowtransparency="true"
    allowFullScreen="true"
    style={{ width: "100%" }}
  >
    See the Pen <a href="https://codepen.io">CodePen Embed</a>
  </iframe>
);

export default CodePenEmbed;
