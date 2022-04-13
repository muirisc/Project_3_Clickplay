import { useEffect, useState } from "react";
import GameCard from "../GameCard";
import GameList from "../GameList";

function AdventureSearch() {
  const [games, setGames] = useState([]);
  const [gameView, setGameView] = useState(false);
  const [gameViewed, setGameViewed] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9292/genres/2")
      .then((r) => r.json())
      .then((fetchedGames) => setGames(fetchedGames));
  }, []);

  function toggleGameView(game) {
    setGameView(!gameView);
    setGameViewed(game);
    console.log(game)
  }

  function toggleGameList(){
    setGameView(!gameView)
    setGameViewed([])
  }

  return (
    <>
      <div>
        <h2 className="gamefound"> Games Found: </h2>
        <div className="resultBox">
          <ul className="gamesListed"></ul>

          {gameView
            ? 
                <GameCard key={gameViewed.id} game={gameViewed} toggleGameList={toggleGameList}/>
              
            : games.map((game) => {
                return (
                  <GameList
                    key={game.id}
                    game={game}
                    toggleGameView={toggleGameView}
                  />
                );
              })}
        </div>
      </div>
    </>
  );
}

export default AdventureSearch;
