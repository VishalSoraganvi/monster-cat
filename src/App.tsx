import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="navbar">
        <div className="cat-icon" title="Monstercat">
          <img src="cat-solid.png" alt="" />
        </div>
        <div className="bar-icon">
          <img src="bars-solid.svg" alt="" />
        </div>
      </div>
      <div className="side-bar">
        <img src="instagram.svg" alt="" title="Monstercat on Instagram" />
        <img src="tiktok.svg" alt="" title="Monstercat on TikTok" />
        <img src="twitter.svg" alt="" title="Monstercat on Twitter" />
        <img src="twitch.svg" alt="" title="Monstercat on Twitch" />
        <img src="facebook.svg" alt="" title="Monstercat on Facebook" />
        <img src="discord.svg" alt="" title="Monstercat on Discord" />
        <img src="player.svg" alt="" title="Monstercat Player" />
      </div>
      <div className="song-cover"></div>
      <div className="box">
        <div className="song-container">
          {/* <div className="release">
            <span>Instinct</span> - Released May 22,2020
          </div> */}
          <div className="song-image">
            <img src="song-cover.jpg" alt="" />
          </div>
          <div className="song-box">
            <h3 className="song-title">LEVEL DAYS</h3>
            <h2 className="author">CONRO</h2>
            <div className="song-utils">
              <button className="listen">
                <i className="bx bx-play"></i>
                LISTEN NOW
              </button>
              <button className="share">
                <i className="bx bx-share-alt"></i>
                SHARE
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="dark-bg">
        <div className="box1">
          <h1 className="stream_heading">STREAM IT YOUR WAY</h1>
          <div className="icon-table">
            <div>
              <div
                className=""
                title="STREAM ON MONSTERCAT PLAYER"
                style={{ cursor: "pointer" }}
              >
                <img src="player.svg" alt="" /> PLAYER
              </div>
            </div>
            <div>
              <i
                className="bx bxs-compass"
                style={{ color: "#fdfdfd" }}
                title="STREAM ON BANDCAMP"
              ></i>
            </div>
            <div>
              <i
                className="bx bxl-soundcloud"
                style={{ color: "#fdfdfd" }}
                title="STREAM ON SOUND CLOUD"
              ></i>
            </div>
            <div>
              <i
                className="bx bxl-apple"
                style={{ color: "#fdfdfd" }}
                title="STREAM ON APPLE MUSIC"
              ></i>
            </div>
            <div>
              <i
                className="bx bxl-youtube"
                style={{ color: "#fdfdfd" }}
                title="STREAM ON YOUTUBE"
              ></i>
            </div>
            <div>
              <i
                className="bx bxl-spotify"
                style={{ color: "#fdfdfd" }}
                title="STREAM ON SPOTIFY"
              ></i>
            </div>
          </div>
          <h1 className="track-list">TRACK LIST </h1>
          <table>
            <tr>
              <td className="song-number">1</td>
              <td className="play-button">
                <i className="bx bx-play" style={{ color: "#fdfdfd" }}></i>
              </td>
              <td className="song-desc">
                <div className="song_name">The Small Things</div>
                <div className="singer">Conro</div>
              </td>
              <td className="song-duration">3:35</td>
              <td className="share-button">
                <i className="bx bx-share-alt" style={{ color: "#fdfdfd" }}></i>
              </td>
            </tr>
            <tr>
              <td className="song-number">2</td>
              <td className="play-button">
                <i className="bx bx-play" style={{ color: "#fdfdfd" }}></i>
              </td>
              <td className="song-desc">
                <div className="song_name">Without Your Love</div>
                <div className="singer">Conro</div>
              </td>
              <td className="song-duration">3:09</td>
              <td className="share-button">
                <i className="bx bx-share-alt" style={{ color: "#fdfdfd" }}></i>
              </td>
            </tr>
            <tr>
              <td className="song-number">3</td>
              <td className="play-button">
                <i className="bx bx-play" style={{ color: "#fdfdfd" }}></i>
              </td>
              <td className="song-desc">
                <div className="song_name">Therapy</div>
                <div className="singer">Conro</div>
              </td>
              <td className="song-duration">3:06</td>
              <td className="share-button">
                <i className="bx bx-share-alt" style={{ color: "#fdfdfd" }}></i>
              </td>
            </tr>
            <tr>
              <td className="song-number">4</td>
              <td className="play-button">
                <i className="bx bx-play" style={{ color: "#fdfdfd" }}></i>
              </td>
              <td className="song-desc">
                <div className="song_name">Fighters</div>
                <div className="singer">Conro</div>
              </td>
              <td className="song-duration">3:46</td>
              <td className="share-button">
                <i className="bx bx-share-alt" style={{ color: "#fdfdfd" }}></i>
              </td>
            </tr>
            <tr>
              <td className="song-number">5</td>
              <td className="play-button">
                <i className="bx bx-play" style={{ color: "#fdfdfd" }}></i>
              </td>
              <td className="song-desc">
                <div className="song_name">Way Up</div>
                <div className="singer">Conro & Nevve</div>
              </td>
              <td className="song-duration">3:32</td>
              <td className="share-button">
                <i className="bx bx-share-alt" style={{ color: "#fdfdfd" }}></i>
              </td>
            </tr>
            <tr>
              <td className="song-number">6</td>
              <td className="play-button">
                <i className="bx bx-play" style={{ color: "#fdfdfd" }}></i>
              </td>
              <td className="song-desc">
                <div className="song_name">Waiting</div>
                <div className="singer">Conro</div>
              </td>
              <td className="song-duration">3:07</td>
              <td className="share-button">
                <i className="bx bx-share-alt" style={{ color: "#fdfdfd" }}></i>
              </td>
            </tr>
            <tr>
              <td className="song-number">7</td>
              <td className="play-button">
                <i className="bx bx-play" style={{ color: "#fdfdfd" }}></i>
              </td>
              <td className="song-desc">
                <div className="song_name">Dreaming</div>
                <div className="singer">Conro</div>
              </td>
              <td className="song-duration">2:57</td>
              <td className="share-button">
                <i className="bx bx-share-alt" style={{ color: "#fdfdfd" }}></i>
              </td>
            </tr>
            <tr>
              <td className="song-number">8</td>
              <td className="play-button">
                <i className="bx bx-play" style={{ color: "#fdfdfd" }}></i>
              </td>
              <td className="song-desc">
                <div className="song_name">Tattoo</div>
                <div className="singer">Conro</div>
              </td>
              <td className="song-duration">3:29</td>
              <td className="share-button">
                <i className="bx bx-share-alt" style={{ color: "#fdfdfd" }}></i>
              </td>
            </tr>
            <tr>
              <td className="song-number">9</td>
              <td className="play-button">
                <i className="bx bx-play" style={{ color: "#fdfdfd" }}></i>
              </td>
              <td className="song-desc">
                <div className="song_name">Out for the Night</div>
                <div className="singer">Conro</div>
              </td>
              <td className="song-duration">3:05</td>
              <td className="share-button">
                <i className="bx bx-share-alt" style={{ color: "#fdfdfd" }}></i>
              </td>
            </tr>
            <tr>
              <td className="song-number">10</td>
              <td className="play-button">
                <i className="bx bx-play" style={{ color: "#fdfdfd" }}></i>
              </td>
              <td className="song-desc">
                <div className="song_name">Overdue</div>
                <div className="singer">Conro</div>
              </td>
              <td className="song-duration">2:48</td>
              <td className="share-button">
                <i className="bx bx-share-alt" style={{ color: "#fdfdfd" }}></i>
              </td>
            </tr>
            <tr>
              <td className="song-number">11</td>
              <td className="play-button">
                <i className="bx bx-play" style={{ color: "#fdfdfd" }}></i>
              </td>
              <td className="song-desc">
                <div className="song_name">Say It</div>
                <div className="singer">Conro</div>
              </td>
              <td className="song-duration">3:04</td>
              <td className="share-button">
                <i className="bx bx-share-alt" style={{ color: "#fdfdfd" }}></i>
              </td>
            </tr>
            <tr>
              <td className="song-number">12</td>
              <td className="play-button">
                <i className="bx bx-play" style={{ color: "#fdfdfd" }}></i>
              </td>
              <td className="song-desc">
                <div className="song_name">Here to stay</div>
                <div className="singer">Conro</div>
              </td>
              <td className="song-duration">2:44</td>
              <td className="share-button">
                <i className="bx bx-share-alt" style={{ color: "#fdfdfd" }}></i>
              </td>
            </tr>
          </table>

          <h1 className="music-video">MUSIC VIDEO</h1>
          <iframe
            className="video-component"
            width="420"
            height="315"
            src="https://www.youtube.com/embed/tgbNymZ7vqY"
          ></iframe>
          <div className="seperator"></div>
          <div className="info">
            <div className="info1">
              <h2>ABOUT MONSTERCAT</h2>
              <h2>CONTACT US</h2>
              <h2>CAREERS</h2>
              <h2>NEWS</h2>
              <h2>PRESS</h2>
            </div>
            <div className="info2">
              <h2>TERMS OF SERVICE</h2>
              <h2>PRIVACY POLICY</h2>
            </div>
            <div className="info3">
              <h2>MONSTERCAT NEWS</h2>
              <p>
                Don't miss a thing, stay up to date with the latest news from
                us.
              </p>
              <div className="input">
                <input type="text" placeholder="Enter email" />
                <button className="input-sub">
                  <i className="bx bx-right-arrow-alt"></i>
                </button>
                <div className="seperator-inp"></div>
              </div>
            </div>
          </div>
          <div className="seperator"></div>
          <div className="footer">
            <div className="rights">
              2011 - 2023 © Monstercat, All Rights Reserved
            </div>
            <div className="footer-icons">
              <img src="instagram.svg" alt="" title="Monstercat on Instagram" />
              <img src="tiktok.svg" alt="" title="Monstercat on TikTok" />
              <img src="twitter.svg" alt="" title="Monstercat on Twitter" />
              <img src="twitch.svg" alt="" title="Monstercat on Twitch" />
              <img src="facebook.svg" alt="" title="Monstercat on Facebook" />
              <img src="discord.svg" alt="" title="Monstercat on Discord" />
              <img src="player.svg" alt="" title="Monstercat Player" />
            </div>
          </div>
          <div className="footer-p">
            <div>
              We acknowledge with gratitude the traditional, ancestral and
              unceded land of the Coast Salish peoples, including the
              territories of the Sḵwx̱wú7mesh (Squamish), Stó:lō and
              Səl̓ílwətaʔ/Selilwitulh (Tsleil-Waututh) and xʷməθkʷəy̓əm (Musqueam)
              Nations, on which Monstercat's Vancouver HQ stands.
            </div>
            <div>
              We acknowledge the unceded and ancestral territories of the
              Gabrielino/Tongva peoples on which our LA team live and work.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
