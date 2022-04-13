// import nintendo_logo from "../images/nintendologosmall.png";
import appleTrue from "../images/game_logos/apple-true.png";
import appleFalse from "../images/game_logos/apple-false.png";
import epicTrue from "../images/game_logos/epic-true.png";
import epicFalse from "../images/game_logos/epic-false.png";
import steamTrue from "../images/game_logos/steam-true.png";
import steamFalse from "../images/game_logos/steam-false.png";
import nintendoTrue from "../images/game_logos/nin-true.png";
import nintendoFalse from "../images/game_logos/nin-false.png";
import playstationTrue from "../images/game_logos/ps-true.png";
import playstationFalse from "../images/game_logos/ps-false.png";
import xboxTrue from "../images/game_logos/xbox-true.png";
import xboxFalse from "../images/game_logos/xbox-false.png";
import { useState } from "react";
import GameSearch from "./GameSearch";

function GameCard({ game, toggleGameList }) {
  const [displayUpdate, setDisplayeUpdate] = useState(true);
  const [vendorData, setVendorData] = useState({
    steam: false,
    epic: false,
    macOS: false,
    nintendo: false,
    playstation: false,
    xbox: false,
  });

  function displayUpdatePanel() {
    setDisplayeUpdate(!displayUpdate);
  }

  function patchGame(game) {
    fetch(`http://localhost:9292/games/${game.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...vendorData }),
    })
      .then((r) => r.json())
      .then(
        (data) => console.log(data),
        console.log(vendorData),
        (game.steam = vendorData.steam),
        (game.epic = vendorData.epic),
        (game.macOS = vendorData.macOS),
        (game.nintendo = vendorData.nintendo),
        (game.playstation = vendorData.playstation),
        (game.xbox = vendorData.xbox),
        setVendorData({})
      );
    displayUpdatePanel();
  }

  function handleVendors(e) {
    setVendorData({ ...vendorData, [e.target.name]: true });
    console.log(vendorData);
  }

  return (
    <div className="gamebox">
      <ol className="game">
        <div>
          <h3 className="gametitle"> {game.name} </h3>
          <h3 className="gamegenre"> {game.genretype} </h3>
          <img className="gameimg" alt="boxart for game" src={game.box_art} />
        </div>
        <p className="gamerating"> Rating: {game.rating} </p>
        <div className="gameScores">
          <p> Metacritic: {game.metacritic} </p>

          <p> Opencritic: {game.opencritic} </p>
        </div>
        {/* <div className="gameInfoDiv"> */}
        <p className="gamedescrip"> {game.descrip} </p>

        {/* </div> */}
        <p className="gameget"> Available Platforms: </p>

        {displayUpdate ? (
          <section>
            <ul className="storelogos">
              <img
                className="storeLogo"
                src={game.steam ? `${steamTrue}` : `${steamFalse}`}
                alt="steam logo"
              />
              <img
                className="storeLogo"
                src={game.epic ? `${epicTrue}` : `${epicFalse}`}
                alt="epic logo"
              />
              <img
                className="storeLogo"
                src={game.macOS ? `${appleTrue}` : `${appleFalse}`}
                alt="apple logo"
              />

              <img
                className="storeLogo"
                src={
                  game.playstation
                    ? `${playstationTrue}`
                    : `${playstationFalse}`
                }
                alt="playstation logo"
              />
              <img
                className="storeLogoNintendo"
                src={game.nintendo ? `${nintendoTrue}` : `${nintendoFalse}`}
                alt="nintendo logo"
              />

              <img
                className="storeLogo"
                src={game.xbox ? `${xboxTrue}` : `${xboxFalse}`}
                alt="xbox logo"
              />
            </ul>
            <button className="updateButton" onClick={() => toggleGameList()}>
              Back to Game List
            </button>
            <button className="updateButton" onClick={displayUpdatePanel}>
              Update Game{" "}
            </button>
          </section>
        ) : (
          <section>
            <h3 className="readytoupdate"> Unlocked and Ready to Update </h3>
            <div className="platformBoxes2">
              <input
                type="checkbox"
                id="steam"
                name="steam"
                value="true"
                onClick={handleVendors}
              ></input>
              <label for="steam">Steam </label>
              <input
                type="checkbox"
                id="epic"
                name="epic"
                value="true"
                onClick={handleVendors}
              ></input>
              <label for="epic">Epic Game Store </label>
              <input
                type="checkbox"
                id="macOS"
                name="macOS"
                value="true"
                onClick={handleVendors}
              ></input>
              <label for="macOS">MacOS </label>
              <input
                type="checkbox"
                id="nintendo"
                name="nintendo"
                value="true"
                onClick={handleVendors}
              ></input>
              <label for="nintendo">Nintendo</label>
              <input
                type="checkbox"
                id="playstation"
                name="playstation"
                value="true"
                onClick={handleVendors}
              ></input>
              <label for="playstation">Playstation </label>
              <input
                type="checkbox"
                id="xbox"
                name="xbox"
                value="true"
                onClick={handleVendors}
              ></input>
              <label for="xbox">Xbox </label>
            </div>
            <button className="updateButton" onClick={() => patchGame(game)}>
              Submit Changes{" "}
            </button>
            <button className="updateButton" onClick={() => toggleGameList()}>
              Back to Game List
            </button>
            <button
              className="updateButton"
              onClick={() => displayUpdatePanel()}
            >
              Exit Update Page{" "}
            </button>
          </section>
        )}
      </ol>
    </div>
  );
}

export default GameCard;
