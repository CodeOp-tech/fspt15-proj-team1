import { useEffect, useState, useCallback } from "react";
import { useParams, Link } from "react-router-dom";

function ArtView() {
  let params = useParams();
  console.log("Object number:", params.objectNumber);
  const [artwork, setArtwork] = useState({});
  const [isReading, setIsReading] = useState(false);

  const API_Key = "IagrCxtB";

  const fetchArtwork = useCallback(async () => {
    try {
      const resp = await fetch(
        `https://www.rijksmuseum.nl/api/en/collection/${params.objectNumber}?key=${API_Key}`
      );
      const data = await resp.json();
      console.log(data);
      console.log("fetchArtwork called");
      return data;
    } catch (error) {
      console.error(error);
    }
  }, [API_Key, params.objectNumber]);

  useEffect(() => {
    let isMounted = true;

    fetchArtwork().then((data) => {
      if (isMounted) setArtwork(data);
    });
    return () => {
      isMounted = false;
    };
  }, [fetchArtwork]);

  const toggleReading = () => {
    if (!isReading) {
      const speech = new SpeechSynthesisUtterance(
        artwork.artObject.label.description
      );
      speech.lang = "en-US";
      setIsReading(true);
      speech.onend = () => setIsReading(false);
      window.speechSynthesis.speak(speech);
    } else {
      window.speechSynthesis.cancel();
      setIsReading(false);
    }
  };

  return (
    <div className="ArtView" style={{ maxWidth: "80%", margin: "auto" }}>
      {artwork.artObject && (
        <>
          <img
            src={artwork.artObject.webImage.url}
            alt={artwork.artObject.title}
            style={{ maxWidth: "50%", height: "auto" }}
          />
          <h2 style={{ margin: "20px 0" }}> {artwork.artObject.longTitle}</h2>

          <h4
            style={{
              border: "1px solid black",
              padding: "10px",
              marginBottom: "20px",
            }}
          >
            {artwork.artObject.scLabelLine}
          </h4>

          <div
            style={{
              border: "1px solid black",
              padding: "10px",
            }}
          >
            <h6 style={{ fontSize: "30px" }}>
              {artwork.artObject.label.description}
            </h6>
            <button style={{fontSize: "20px", fontWeight: "bold", margin: "10px 0"}} onClick={toggleReading}>
              {isReading ? "Stop Reading" : "Read Description"}
            </button>
          </div>

          <Link to="/TourView" style={{display: "block", margin: "40px 0"}}>
            <button style={{fontSize: "20px", fontWeight: "bold"}}>
              <i className="fa fa-chevron-left" style={{marginRight: "10px"}}></i>
              Go Back to the Gallery
            </button>
          </Link>
        </>
      )}
    </div>
  );
}

export default ArtView;
