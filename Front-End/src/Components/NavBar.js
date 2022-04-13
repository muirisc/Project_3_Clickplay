import logo from "../images/logo.png";


function NavBar() {
  
  
  
  return (

<nav>
<ul className="NavBar">
  <img className="logo" src={logo}/>
  <li><a href="/">Home</a></li>
  
  <li><a href="/gamesearch">Find A Game</a></li>
  <li className="dropdown">
    <a href="javascript:void(0)" className="dropbtn"> Find By Genre</a>
    <div className="dropdown-content">
      <a href="/Project_3_Clickplay/ActionFilter">Action</a>
      <a href="/Project_3_Clickplay/AdventureFilter">Adventure</a>
      <a href="/Project_3_Clickplay/MMOFilter">MMO</a>
      <a href="/Project_3_Clickplay/RPGFilter">RPG</a>
      <a href="#">Simulation</a>
      <a href="#">Sports & Racing</a>
      <a href="#">Strategy</a>
    </div>
  </li>
  <li><a href="/AddGame"> Add A Game</a></li>
  <li><a href="/Newsletter">Newsletter</a></li>
  <li><a href="#List">Coming Soon</a></li>
</ul>
</nav>                                                                                                                                                                                             

  );
}

export default NavBar;
