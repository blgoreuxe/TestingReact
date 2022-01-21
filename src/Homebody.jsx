import React from 'react';
import './App.css';

function Homebody() {
  return (
    <div className="homebody">
      <div className="sub">
		    <h1 class="heading">Hapseek</h1>
		    <h3 class="subtitle">App and game development</h3>
	    </div>
      <div className="mostRecent">
		    <h2>Most Recent Creation:</h2>
		    <h3>DEEP SEA TRASH HUNT!</h3>
		    <img src="/src/72QIEZ.png" alt="Deep Sea Trash Hunt" />
        <br />
        <a href="SeaCatcher.apk" download><img class="badge" src="/src/android_badge.png" alt="Avalible On Android" /></a>
        <br />
        <a href="https://blvuxe.itch.io/seaclean"><img className="badge" src="/src/badge.svg" alt="Avalible On Itch.io" /></a>
      </div>
    </div>
  );
}

export default Homebody;