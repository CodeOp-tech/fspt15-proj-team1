import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const API_Key = "IagrCxtB";

function ArtView() {
  let params = useParams();
  const [artwork, setArtwork] = useState({});

  // I THINK THERE IS SOMETHING WRONG WITH HOW I AM FETCHING DATA FROM THE API
  /*const fetchArtwork = async () => {
    const resp = await fetch(
      `https://www.rijksmuseum.nl/api/en/collection?key=${API_Key}&${params.id}`
    );

    const data = await resp.json();
    return data;
  };*/

  useEffect(() => {
    const fetchArtwork = async () => {
      const resp = await fetch(
        `https://www.rijksmuseum.nl/api/en/collection?key=${API_Key}&${params.id}`
      );

      const data = await resp.json();
      return data;
    };

    let isMounted = true;

    fetchArtwork().then((data) => {
      if (isMounted) setArtwork(data);
    });
    return () => {
      isMounted = false;
    };
  }, [params.id]);

  // TourView useState collection, setCollection
  // ArtView useState artwork, setArtwork

  return (
    <div className="ArtView">
      <img src={artwork.artObjects[0].webImage.url} alt={artwork.title} />
      <h2>{artwork.artObjects[0].longTitle}</h2>
      <div>{artwork.artObjects[0].principalOrFirstMaker}</div>
      <div>{artwork.artObjects[0].description}</div>
      <div>{artwork.artObjects[0].type}</div>
      <div>{artwork.artObjects[0].material}</div>
      <div>{artwork.artObjects[0].technique}</div>
    </div>
  );
}

export default ArtView;
