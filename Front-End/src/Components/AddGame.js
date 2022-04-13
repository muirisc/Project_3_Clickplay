import { useState } from "react";

function AddGame() {
  const [games, setGames] = useState([]);
  const [display, setDisplay] = useState(false);
  const [gameSubmitted, setGameSubmitted] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    box_art: "",
    rating: "",
    genretype: "",
    descrip: "",
    metacritic: "",
    opencritic: "",
    steam: false,
    epic: false,
    macOS: false,
    playstation: false,
    xbox: false,
    nintendo: false,
    genre_id: null,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const postGame = (game) => {
    fetch("http://localhost:9292/games", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(game),
    })
      .then((r) => r.json())
      .then((newGame) => {
        setGames([newGame, ...games]);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postGame(formData);
    setFormData({});
    setGameSubmitted(!gameSubmitted);
    e.reset();
  };

  function handleVendors(e) {
    setFormData({ ...formData, [e.target.name]: true });
    console.log(formData);
  }

  return (
    <main>
      <h2 className="addGameIntroText"> Add a Game to Our Database</h2>
      {gameSubmitted ? (
        <form className="addGameForm" onSubmit={handleSubmit}>
          <h3>Name of Game Here </h3>
          <input
            type="text"
            name="name"
            placeholder="Name of game here"
            value={formData.name}
            onChange={handleChange}
          ></input>
          <h3>Boxart Reference Material </h3>
          <input
            type="text"
            name="box_art"
            placeholder="Boxart here"
            value={formData.box_art}
            onChange={handleChange}
          ></input>
          <h3>Rating of Game Here </h3>
          <input
            type="text"
            name="rating"
            placeholder="Rating of game of here"
            value={formData.rating}
            onChange={handleChange}
          ></input>
          <h3> Genre Here</h3>
          <input
            type="text"
            name="genretype"
            placeholder="Genre here"
            value={formData.genretype}
            onChange={handleChange}
          ></input>
          <h3> Genre ID Here</h3>
          <input
            type="text"
            name="genre_id"
            placeholder="Genre ID follows order of genres, e.g. action is 1, adventure is 2, strategy is 7"
            value={formData.genre_id}
            onChange={handleChange}
          ></input>
          <h3> Description Here</h3>
          <input
            type="text"
            name="descrip"
            placeholder="Description here"
            value={formData.descrip}
            onChange={handleChange}
          ></input>
          <h3> Metacritic Score Here</h3>
          <input
            type="number"
            name="metacritic"
            placeholder="Metacritic score here"
            value={formData.metacritic}
            onChange={handleChange}
          ></input>
          <h3> Opencritic Score Here</h3>
          <input
            type="number"
            name="opencritic"
            placeholder="Opencritic score here"
            value={formData.opencritic}
            onChange={handleChange}
          ></input>
          <h3> What platforms is it available on?</h3>
          <div className="platformBoxes">
            <input
              type="checkbox"
              id="steam"
              name="steam"
              value={formData.steam}
              // onChange={handleChange}
              onClick={handleVendors}
            ></input>
            <label for="steam">Steam </label>
            <input
              type="checkbox"
              id="epic"
              name="epic"
              value={formData.epic}
              // onChange={handleChange}
              onClick={handleVendors}
            ></input>
            <label for="epic">Epic Game Store </label>
            <input
              type="checkbox"
              id="macOS"
              name="macOS"
              value={formData.macOS}
              // onChange={handleChange}
              onClick={handleVendors}
            ></input>
            <label for="macOS">MacOS </label>
            <input
              type="checkbox"
              id="nintendo"
              name="nintendo"
              value={formData.nintendo}
              // onChange={handleChange}
              onClick={handleVendors}
            ></input>
            <label for="nintendo">Nintendo</label>
            <input
              type="checkbox"
              id="playstation"
              name="playstation"
              value={formData.steam}
              // onChange={handleChange}
              onClick={handleVendors}
            ></input>
            <label for="playstation">Playstation </label>
            <input
              type="checkbox"
              id="xbox"
              name="xbox"
              value={formData.xbox}
              // onChange={handleChange}
              onClick={handleVendors}
            ></input>
            <label for="xbox">Xbox </label>
          </div>
          <button className="addGamesubmitButton" onClick={handleSubmit}>
            {" "}
            Submit Game!
          </button>
        </form>
      ) : (
        <h3 className="addGameIntroText"> Thank you for your Submission!</h3>
      )}
    </main>
  );
}

export default AddGame;
