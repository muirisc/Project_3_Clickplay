function GameCard() {
  return (
    <div className="gamebox">
    <ol className="game">
      <h3 className="gametitle"> It Takes Two </h3>
      <img className="gameimg" alt="boxart for game" src="https://upload.wikimedia.org/wikipedia/en/a/aa/It_Takes_Two_cover_art.png"/>
      <p className="gamerating"> Rating: T </p>
      <p className="gameget"> Where to get: </p>
      <ul className="storelogos">
        <li>a </li>
        <li>a</li>
        <li>a </li>
        <li>a </li>
        <li> a</li>
        <li> a</li>
      </ul>
    </ol>
    </div>
  );
}

export default GameCard;