import React from 'react';
import { Link } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import Navbar from '../Components/NavBar';
import Footer from '../Components/Footer';
import VideoTour from './VideoTour';

import './Home.css';

function Home() {
	return (
		<div>
			<p className='intro'>Welcome to our website, designed to bring the beauty and wonder of art galleries and exhibitions to your fingertips! We understand that getting out and about can be a challenge for some, and we believe that everyone deserves the chance to experience the joys of art. That's why we've created a virtual space where you can explore galleries and exhibitions from the comfort of your own home. Our website is designed with accessibility in mind, to ensure that all people can easily navigate and enjoy the art on display. So come on in, take a virtual stroll through our galleries, and discover a whole new world of art that you may never have had the chance to experience before.
			</p>
			<Link to="/TourView">
        <button style={{ backgroundColor: '#CCD5AE', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '5px' }}>Explore Rijksmuseum!</button>
      </Link>
			
			<img src="https://www.european-umbrellas.com/pub/media/amasty/blog/cache/R/i/950/535/Rijksmuseum-Amsterdam-796.jpg" />
		
		</div>
	);
}

export default Home;