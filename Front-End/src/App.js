import { Route, BrowserRouter, Routes } from "react-router-dom";
import MainPageContent from './Components/MainPageContent';
import NavBar from "./Components/NavBar";
import GamesSearch from "./Components/GameSearch";
import Games from "./Components/GameCard";

function App(){

  return(
    <body>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={ <> <NavBar /> <MainPageContent/> </>} />
        <Route path="/gamesearch" element={ <> <NavBar /> <GamesSearch/> <Games/> </>} />
        </Routes>
        <NavBar/>
        <GamesSearch/>
      </BrowserRouter>
    </body>
  )
}

export default App;