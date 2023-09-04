import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="cat-icon" title="Monstercat">
        <img src="cat-solid.png" alt="" />
      </div>
      <div className="side-bar">
        <div className="bar-icon">
          <img src="bars-solid.svg" alt="" />
        </div>
        <div className="social-media">
          <img src="instagram.svg" alt="" title="Monstercat on Instagram" />
          <img src="tiktok.svg" alt="" title="Monstercat on TikTok" />
          <img src="twitter.svg" alt="" title="Monstercat on Twitter" />
          <img src="twitch.svg" alt="" title="Monstercat on Twitch" />
          <img src="facebook.svg" alt="" title="Monstercat on Facebook" />
          <img src="discord.svg" alt="" title="Monstercat on Discord" />
          <img src="player.svg" alt="" title="Monstercat Player" />
        </div>
      </div>
      <div className="song-cover"></div>
      <div className="box">
        <div className="song-container">
          <div className="release">
            <span>Instinct</span> - Released May 22,2020
          </div>
          <div className="song-image">
            <img src="girlFace.jpg" alt="" />
          </div>
          <div className="song-box">
            <h2 className="song-title">LEVEL DAYS</h2>
            <h2 className="author">CONRO</h2>
            <div className="song-utils">
              <button className="listen">LISTEN NOW</button>
              <button className="share">SHARE</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
