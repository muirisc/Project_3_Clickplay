function GameList( {game, toggleGameView}){



  return(
    <ul className="gamerow">
    <h3 className="gameRowName">{game.name}</h3>
    <div className="gamerowinfo">
    <img className="gameimglist" alt="boxart for game" src={game.box_art}/>
    <p className="gamedescriplist"> {game.descrip}</p>
    </div>
    <button className="gamerowbutton" onClick={() =>toggleGameView(game)}> More Information</button>




    </ul>
  )
}

export default GameList;