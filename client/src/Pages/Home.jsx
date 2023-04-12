import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Splide, SplideSlide } from "@splidejs/react-splide"; // Importing Splide slider component
import "@splidejs/splide/dist/css/themes/splide-default.min.css"; // Importing default styling for Splide slider
import "./Home.css";

function Home() {
  const [isSpeaking, setIsSpeaking] = useState(false); // Setting state for whether intro is being spoken or not
  const introText =
    "Welcome to our virtual exhibition of Rijksmuseum! We understand that getting out and about can be a challenge for some, and we believe that everyone deserves the chance to experience the beauty and wonder of art. That's why we've created a virtual space where you can explore the galleries of Rijksmuseum from the comfort of your own home. Our website is designed with accessibility in mind, to ensure that all people can easily navigate and enjoy the art on display. So come on in, take a virtual stroll through our Rijksmuseum galleries, and discover a whole new world of art that you may never have had the chance to experience before.";

  const images = [
    // Array of image URLs for the slider
    "https://images.pexels.com/photos/208733/pexels-photo-208733.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1414467/pexels-photo-1414467.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/4449429/pexels-photo-4449429.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/6039194/pexels-photo-6039194.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/9022677/pexels-photo-9022677.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/4456986/pexels-photo-4456986.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://www.european-umbrellas.com/pub/media/amasty/blog/cache/R/i/950/535/Rijksmuseum-Amsterdam-796.jpg",
    "https://images.pexels.com/photos/6318598/pexels-photo-6318598.jpeg?auto=compress&cs=tinysrgb&w=600",
  ];

  const options = {
    // Options for the Splide slider
    perPage: 1, // Number of slides to display per page
    rewind: true, // Whether the slider should loop back to the beginning or stop at the last slide
    gap: 10, // Space between slides
    pagination: false, // Whether to show pagination bullets at the bottom of the slider
    arrows: true, // Whether to show arrow buttons to navigate between slides
  };

  const speakIntro = () => {
    // Function to speak the intro text using the SpeechSynthesis API
    const synth = window.speechSynthesis;
    const introUtterance = new SpeechSynthesisUtterance(introText);
    introUtterance.onend = () => {
      setIsSpeaking(false); // Set isSpeaking state to false when intro is finished speaking
    };
    setIsSpeaking(true); // Set isSpeaking state to true while intro is speaking
    synth.speak(introUtterance);
  };

  const stopReading = () => {
    const synth = window.speechSynthesis;
    synth.cancel();
    setIsSpeaking(false);
  };

  return (
    <div>
      <div className="intro-container">
        <div className="intro">{introText}</div>
        <button
          style={{
            backgroundColor: "#F7C815",
            color: "black",
            fontSize: "20px",
            padding: "10px 20px",
            border: "none",
            borderRadius: "5px",
            marginBottom: "20px",
          }}
          onClick={speakIntro}
          disabled={isSpeaking}
        >
          {isSpeaking ? "Speaking..." : "Read Introduction"}
        </button>
        {isSpeaking && (
          <button
            style={{
              backgroundColor: "red",
              color: "black",
              fontSize: "20px",
              padding: "10px 20px",
              border: "none",
              borderRadius: "5px",
            }}
            onClick={stopReading}
          >
            Stop Reading
          </button>
        )}
      </div>

      <Link to="/Gallery">
        <button
          style={{
            backgroundColor: "#EC9704",
            color: "black",
            fontSize: "20px",
            padding: "10px 20px",
            border: "none",
            borderRadius: "5px",
          }}
        >
          Explore Rijksmuseum!
        </button>
      </Link>
      {/* using react splide for creating an image gallery */}
      <Splide options={options} className="splide-container">
        {images.map((image, index) => (
          <SplideSlide key={index} style={{ margin: "0 10px" }}>
            <img
              src={image}
              alt={`Rijksmuseum ${index}`}
              className="slide-image"
              style={{
                display: "block",
                margin: "10px auto !important",
                height: "50%",
                width: "auto",
              }}
            />
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
}

export default Home;
