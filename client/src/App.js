import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Search from './Pages/Search';
import TourView from './Pages/TourView';
import ArtView from './Pages/ArtView';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import './App.css';
import Home from '.Pages/Home';
import VideoTour from './Pages/VideoTour';


function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<NavBar />
				<Search />
				<TourView />
				<ArtView />
				<Footer />

				<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/TourView" element={<TourView />} />
				<Route path="/VideoTour" element={<VideoTour />} />
			</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
