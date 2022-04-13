

function MainPageContent(){


  return(

   <main role="main" id="main" tabindex="0" className="mainpage">
    <section class="banner">
      <h1 className="intro">Welcome to Click & Play!</h1>
      <p className="introMessage"> These are the games you are searching for! 
      <br/> 
Search through our database or filter through games via the genre filter option! <br /> 
    Find out how the game was received by critics, a quick description, and where you can play and purchase! </p>
    <a  href="/gamesearch">
    <button className="mainPageButton">Find A Game </button>
    </a>
    </section>
    </main>
    

  )
}

export default MainPageContent;