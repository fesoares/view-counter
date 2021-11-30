import React, { useEffect } from "react";
import styles from '../styles/Home.module.css'

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
//     <div className={styles.button}>
//       <iframe src="https://drive.google.com/file/d/1fDgHcvKCG3BzeCPkLnbg35emri7jsoAm/preview" width="640" height="480" allow="autoplay"></iframe>
//       <a ref={linkRef} href="https://drive.google.com/file/d/1fDgHcvKCG3BzeCPkLnbg35emri7jsoAm/view?usp=sharing" target="_blank" onClick={() => openDocument()} rel="noreferrer">Clique aqui para acessar o PDF!</a>
//     </div>
    <iframe src="https://drive.google.com/file/d/17bXWj20lw-h21VkDl_X5HpUcc6pPlVWX/preview" width="100%" height="100%" allow="autoplay"></iframe>
  );
}
