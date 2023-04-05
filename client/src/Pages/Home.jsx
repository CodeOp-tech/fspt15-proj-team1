import React from 'react';
import { Link } from 'react-router-dom';
import { Splide, SplideSlide } from '@splidejs/react-splide'; // Importing the Splide and SplideSlide components from the @splidejs/react-splide package
import '@splidejs/splide/dist/css/themes/splide-default.min.css'; // Importing the default CSS theme for the Splide slider
import './Home.css'; // Importing the Home component's own CSS file

function Home() {
  // Array of image URLs for the Splide slider
  const images = [
    'https://images.pexels.com/photos/4449429/pexels-photo-4449429.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/6039194/pexels-photo-6039194.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/9022677/pexels-photo-9022677.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/4456986/pexels-photo-4456986.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://www.european-umbrellas.com/pub/media/amasty/blog/cache/R/i/950/535/Rijksmuseum-Amsterdam-796.jpg',
    'https://images.pexels.com/photos/6318598/pexels-photo-6318598.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/208733/pexels-photo-208733.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/1414467/pexels-photo-1414467.jpeg?auto=compress&cs=tinysrgb&w=600'
  ];

  // Options for the Splide slider
  const options = {
    perPage: 1, // Number of slides to display per page
    rewind: true, // Whether to allow infinite looping of slides
    gap: 10, // Gap between slides in pixels
    pagination: false, // Whether to show pagination dots
    arrows: true, // Whether to show arrow buttons
  };

  return (
    <div>
      <p className='intro'>
        Welcome to our virtual exhibition of Rijksmuseum! We understand that getting out and about can be a challenge for some, and we believe that everyone deserves the chance to experience the beauty and wonder of art. That's why we've created a virtual space where you can explore the galleries of Rijksmuseum from the comfort of your own home. Our website is designed with accessibility in mind, to ensure that all people can easily navigate and enjoy the art on display. So come on in, take a virtual stroll through our Rijksmuseum galleries, and discover a whole new world of art that you may never have had the chance to experience before.
      </p>
      
      {/* Link to the TourView component */}
      <Link to="/TourView">
        <button style={{ backgroundColor: '#CCD5AE', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '5px' }}>
          Explore Rijksmuseum!
        </button>
      </Link>

      {/* Splide slider component with options */}
      <Splide options={options} className='splide-container'>
        {/* Mapping over the images array to create SplideSlide components */}
        {images
.map((image, index) => (
          <SplideSlide key={index} style={{ margin: '0 10px' }}>
          <img src={image} alt={`Rijksmuseum ${index}`} className="slide-image" style={{ display: 'block', margin: '10px auto !important', height: '50%', width: 'auto' }}
 />
        </SplideSlide>
        
        ))}
      </Splide>
    </div>
  );
}

export default Home;
