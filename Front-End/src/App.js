import { Route, BrowserRouter, Routes } from "react-router-dom";
import MainPageContent from './Components/MainPageContent';
import NavBar from "./Components/NavBar";
import GamesSearch from "./Components/GameSearch";
import AddGame from "./Components/AddGame";
import Newsletter from "./Components/Newsletter";
import ActionFilter from "./Components/Filter_Components/ActionFilter";
import AdventureFilter from "./Components/Filter_Components/AdventureFilter";
import MMOFilter from "./Components/Filter_Components/MMOFilter";
import RPGFilter from "./Components/Filter_Components/RPGFilter";

function App(){

  return(
  
    <body>
      <main>
      <BrowserRouter>
      <NavBar /> 
        <Routes>
        <Route path="/Project_3_Clickplay" element={ <MainPageContent/>} />

        <Route path="/Project_3_Clickplay/gamesearch" element={ <GamesSearch/> } />
        <Route path="/Project_3_Clickplay/AddGame" element={ <AddGame />} />
        <Route path="/Project_3_Clickplay/Newsletter" element={ <Newsletter />} />
        <Route path="/Project_3_Clickplay/ActionFilter" element={ <ActionFilter />} />
        <Route path="/Project_3_Clickplay/AdventureFilter" element={ <AdventureFilter />} />
        <Route path="/Project_3_Clickplay/MMOFilter" element={ <MMOFilter />} />
        <Route path="/Project_3_Clickplay/RPGFilter" element={ <RPGFilter />} />
        
        </Routes>
      </BrowserRouter>
      </main>

    </body>

          
  )
}

export default App;