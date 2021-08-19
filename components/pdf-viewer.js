import React, { useState, useEffect } from "react";

export default function Viewer() {

  useEffect(() => {
    console.log('1')
  }, []);

  return (
    <div>
      <a href={"https://drive.google.com/file/d/1dGtop1Z20EyRtBihFbasW6T5DmLn07q2/view?usp=sharing"} target='_blank' rel="noreferrer">
        <p>Click to open PDF file in a new tab</p>
      </a>
    </div>
  );
}