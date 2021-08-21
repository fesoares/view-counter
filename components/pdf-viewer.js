import React, { useState, useEffect } from "react";

export default function Viewer() {

  useEffect(() => {
    fetch('https://api-view-counter.herokuapp.com/counter/create', { 
      method: 'POST', 
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ type: 'view', created_at: new Date() }) 
    }).then(response => {
      console.log(response);
    }).catch(error => {
      console.log(error);
    })
  }, []);

  const openDocument = async () => {
    fetch('https://api-view-counter.herokuapp.com/counter/create', { 
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ type: 'click', created_at: new Date() }) 
    }).then(response => {
      console.log(response);
    }).catch(error => {
      console.log(error);
    })
  }

  return (
    <div>
      <button onClick={() => openDocument()}>
        <p>Clique aqui para acessar o PDF!</p>
      </button>
      {/* <a href={"https://drive.google.com/file/d/1dGtop1Z20EyRtBihFbasW6T5DmLn07q2/view?usp=sharing"} target='_blank' rel="noreferrer">
        
      </a> */}
    </div>
  );
}