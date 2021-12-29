import { Route, BrowserRouter, Routes } from "react-router-dom";
import MainPageContent from './Components/MainPageContent';
import NavBar from "./Components/NavBar";

function App(){

  return(
    <body>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={ <> <NavBar /> <MainPageContent/> </>} />
        <Route path="/search" element={ <> <NavBar /> </>} />
        </Routes>
      </BrowserRouter>
    </body>
  )
}

export default App;