import { Route, Routes } from 'react-router-dom';
import Search from './Pages/Search';
import Home from './Pages/Home';
import TourView from './Pages/TourView.jsx';
import ArtView from './Pages/ArtView.jsx';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer.jsx';
import './App.css';
import VideoTour from './Pages/VideoTour';

function App() {
	return (
		<div className="App">
			<NavBar />
			{/* <Search />

			<TourView />
			<ArtView /> */}
			<Footer />

			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/TourView" element={<TourView />} />
				<Route path="/VideoTour" element={<VideoTour />} />
			</Routes>
		</div>
	);
}

export default App;
