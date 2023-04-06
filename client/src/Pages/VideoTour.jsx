import React, { useState } from "react";
import './VideoTour.css';

function VideoTour() {
  const [isLearnFromMastersOpen, setIsLearnFromMastersOpen] = useState(false);
  const [isGreatArtExplainedOpen, setIsGreatArtExplainedOpen] = useState(false);
  const introduction = "Welcome to Great Art Explained, a channel dedicated to exploring the world's most iconic and captivating artworks. Through a series of informative and entertaining videos, we delve into the fascinating history, context, and techniques behind some of the greatest masterpieces in human history. From the enigmatic smile of the Mona Lisa to the shimmering gold of Klimt's The Kiss, our experts guide you through the intricacies of each artwork, revealing their hidden meanings and shedding light on the creative process of their creators. Join us on this artistic journey and discover the stories and secrets behind the works that have inspired and moved audiences for centuries."
  const introText = "Welcome to Learn From Masters, a channel dedicated to exploring the works and lives of some of the greatest artists in history. Through a series of informative and inspiring videos, we dive into the fascinating stories and creative processes of iconic painters, sculptors, and photographers. From the vibrant brushstrokes of Van Gogh to the delicate sculptures of Michelangelo, our experts offer a unique perspective on each artist's work, revealing their techniques, inspirations, and impact on the art world. Whether you're a seasoned art lover or a curious beginner, our channel provides a wealth of knowledge and insight into the world of fine art. Join us on this journey of discovery and learn from the masters themselves."
  
  const handleLearnFromMastersClick = () => {
    setIsLearnFromMastersOpen(!isLearnFromMastersOpen);
  };
  
  const handleGreatArtExplainedClick = () => {
    setIsGreatArtExplainedOpen(!isGreatArtExplainedOpen);
  };

  const handleCloseLearnFromMasters = () => {
    setIsLearnFromMastersOpen(false);
  };

  const handleCloseGreatArtExplained = () => {
    setIsGreatArtExplainedOpen(false);
  };

  return (
    <div className="video-tour-container">
      <button type="button" onClick={handleLearnFromMastersClick} style={{ backgroundColor: '#EC9704', color: 'white',  fontSize: '40px', padding: '10px 20px', border: 'none', borderRadius: '5px' }}>
       <img src ="https://yt3.googleusercontent.com/ytc/AL5GRJUZkTEhtKB-KQpMPjR3suePIbvO3_MTMLF9Xr5K=s176-c-k-c0x00ffffff-no-rj-mo" alt="Learn From Masters"  width="auto" height="auto" />  Learn From Masters
      </button>
      {isLearnFromMastersOpen && (
        <div className="video">
          <button onClick={handleCloseLearnFromMasters} style={{ backgroundColor: 'red', color: 'white',  fontSize: '20px', padding: '10px 20px', border: 'none', borderRadius: '5px' }}>Close</button>
          <p className="intro">{introText}</p>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/nCVYEqc_Hw4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/fm5QeGGfKvY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/o0ue0TtNg5c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/XycZtblDZgA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/a3gI-MBUVy0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/ygV9jJNx-1Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/hpMrSFk_7Og" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/NBd7Y4hBH2Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
      )}
  <button type="button" className="collapsible" onClick={handleGreatArtExplainedClick} style={{ backgroundColor: '#EC9704', color: 'white',  fontSize: '40px', padding: '10px 20px', border: 'none', borderRadius: '5px' }}>
  <img className="image" src="https://yt3.googleusercontent.com/SVoD_4bbVOt1Nc3ncoDbMq7s-LU87TWovuFlUw3O0wQAKik0lwMwccnCWcp65cHSnZ4SQbuDPCc=s900-c-k-c0x00ffffff-no-rj" alt="Great Art Explained"  width="150" height="250" /> Great Art Explained
      </button>
      {isGreatArtExplainedOpen && (
        <div className="content">
          <button onClick={handleCloseGreatArtExplained} style={{ backgroundColor: 'red', color: 'white',  fontSize: '20px', padding: '10px 20px', border: 'none', borderRadius: '5px', marginRight: '50'}}>Close</button>
          <p className="intro">{introduction}</p>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/wk9L1N9bRRE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/-e16DmKH01s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/T9JvUDrrXmY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/IBcB_dYtGUg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/vBG621XEegk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/lKIbT-4UFaE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/rxKR2cHmlPY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/fd-Me3EBGYY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/SNhmSdLDmto" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/gA0RAPh2ZgU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
      )}
  
    </div>
  );
}

export default VideoTour;



