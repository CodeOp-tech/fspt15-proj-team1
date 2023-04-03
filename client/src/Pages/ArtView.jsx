import { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router-dom";

function ArtView() {
  let params = useParams();
  console.log("Object number:", params.objectNumber);
  const [artwork, setArtwork] = useState({});

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

  return (
    <div className="ArtView">
      {artwork.artObject && (
        <>
          <img
            src={artwork.artObject.webImage.url}
            alt={artwork.artObject.title}
            style={{ maxWidth: "80%", height: "auto" }}
          />
          <h2> {artwork.artObject.longTitle}</h2>

          <h4 style={{ border: "1px solid black" }}>
            {artwork.artObject.scLabelLine}
          </h4>

          <div style={{ border: "1px solid black" }}>
            <h6>{artwork.artObject.label.description}</h6>
          </div>
        </>
      )}
    </div>
  );
}

export default ArtView;
