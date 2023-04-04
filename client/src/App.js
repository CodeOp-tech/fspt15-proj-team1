import { Route, Routes } from "react-router-dom";
//import Search from "./Pages/Search";
import Home from "./Pages/Home";
import TourView from "./Pages/TourView.jsx";
import ArtView from "./Pages/ArtView.jsx";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer.jsx";
import "./App.css";
import VideoTour from "./Pages/VideoTour";

function App() {
	return (
		<div className="App">
			<NavBar />
			{/* <Search />

			<TourView />
			<ArtView /> */}
			

			<Routes>
        <Route path="/" element={<Home />} />
        <Route path="/TourView" element={<TourView />} />
        <Route path="/ArtView/:objectNumber" element={<ArtView />} />
        <Route path="/VideoTour" element={<VideoTour />} />
      </Routes>
			<Footer />
		</div>
	);
}
export default App;