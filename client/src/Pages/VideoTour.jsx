import React, {useState, useEffect} from "react";
import './VideoTour.css';

function VideoTour() {
  const introduction = "Welcome to Great Art Explained, a channel dedicated to exploring the world's most iconic and captivating artworks. Through a series of informative and entertaining videos, we delve into the fascinating history, context, and techniques behind some of the greatest masterpieces in human history. From the enigmatic smile of the Mona Lisa to the shimmering gold of Klimt's The Kiss, our experts guide you through the intricacies of each artwork, revealing their hidden meanings and shedding light on the creative process of their creators. Join us on this artistic journey and discover the stories and secrets behind the works that have inspired and moved audiences for centuries."
  const introText = "Welcome to Learn From Masters, a channel dedicated to exploring the works and lives of some of the greatest artists in history. Through a series of informative and inspiring videos, we dive into the fascinating stories and creative processes of iconic painters, sculptors, and photographers. From the vibrant brushstrokes of Van Gogh to the delicate sculptures of Michelangelo, our experts offer a unique perspective on each artist's work, revealing their techniques, inspirations, and impact on the art world. Whether you're a seasoned art lover or a curious beginner, our channel provides a wealth of knowledge and insight into the world of fine art. Join us on this journey of discovery and learn from the masters themselves."
  const [isReading, setIsReading] = useState(false);

  const toggleReading = () => {
    if (!isReading) {
      // Create a new SpeechSynthesisUtterance object and speak the description
      const speech = new SpeechSynthesisUtterance(
        introduction
      );
      speech.lang = "en-US";
      setIsReading(true);
      speech.onend = () => setIsReading(false);
      window.speechSynthesis.speak(speech);
    } else {
      // Stop speaking if the description is already being read out loud
      window.speechSynthesis.cancel();
      setIsReading(false);
    }
  };
  const toggleReading1 = () => {
    if (!isReading) {
      // Create a new SpeechSynthesisUtterance object and speak the description
      const speech = new SpeechSynthesisUtterance(
        introText
      );
      speech.lang = "en-US";
      setIsReading(true);
      speech.onend = () => setIsReading(false);
      window.speechSynthesis.speak(speech);
  
      // Add an event listener to stop speech when the user leaves the page
      window.addEventListener('beforeunload', () => {
        window.speechSynthesis.cancel();
      });
    } else {
      // Stop speaking if the description is already being read out loud
      window.speechSynthesis.cancel();
      setIsReading(false);
    }
  };
  
  return (
    
    <div>

    
        <div className="content">
    
          <p className="intro">{introText} <br></br>
          <button style={{ backgroundColor: '#F7C815', color: 'white',  fontSize: '20px', padding: '10px 20px', border: 'none', borderRadius: '5px', background: isReading ? 'red' : '#F7C815'}} onClick={toggleReading1}>
              {isReading ? "Stop Reading" : "Read Description"}
            </button>
          </p>
          
          <iframe width="560" height="315" src="https://www.youtube.com/embed/nCVYEqc_Hw4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/fm5QeGGfKvY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/o0ue0TtNg5c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/XycZtblDZgA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/a3gI-MBUVy0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/ygV9jJNx-1Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/hpMrSFk_7Og" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/NBd7Y4hBH2Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
      
 
     
        <div className="content">

          <p className="intro">{introduction} <br></br>
          <button style={{ backgroundColor: '#F7C815', color: 'white',  fontSize: '20px', padding: '10px 20px', border: 'none', borderRadius: '5px', background: isReading ? 'red' : '#F7C815'}} onClick={toggleReading}>
              {isReading ? "Stop Reading" : "Read Description"}
            </button>
          </p>
          
          <iframe width="560" height="315" src="https://www.youtube.com/embed/wk9L1N9bRRE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/-e16DmKH01s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/T9JvUDrrXmY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/IBcB_dYtGUg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/vBG621XEegk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/lKIbT-4UFaE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/rxKR2cHmlPY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/fd-Me3EBGYY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
         </div>
  
  
    </div>
  );
}

export default VideoTour;