

function NavBar() {
  
  
  
  return (

<nav>
<ul className="NavBar">
  <li><a href="/">Home</a></li>

  <li><a href="gamesearch">Find A Game</a></li>
  <li className="dropdown">
    <a href="javascript:void(0)" className="dropbtn"> Find By Genre</a>
    <div className="dropdown-content">
      <a href="#">Action</a>
      <a href="#">Adventure</a>
      <a href="#">MMO</a>
      <a href="#">RPGs</a>
      <a href="#">Simulation</a>
      <a href="#">Sports & Racing</a>
      <a href="#">Strategy</a>
    </div>
  </li>
  <li><a href="#forums"> Forums</a></li>
  <li><a href="#sign-up">Newsletter</a></li>
  <li><a href="#List">Top 10 Lists</a></li>
</ul>
</nav>                                                                                                                                                                                             

  );
}

export default NavBar;
