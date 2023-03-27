import { BrowserRouter } from "react-router-dom";
import Search from "./Pages/Search";
import TourView from "./Pages/TourView"
import ArtView from "./Pages/ArtView"
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav>

        </Nav>
        <Search />
        <TourView />
        <ArtView />
      </BrowserRouter>
      
    </div>
  );
}

export default App;
