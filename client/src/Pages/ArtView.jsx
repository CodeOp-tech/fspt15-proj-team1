import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import { NavLink } from "react-router-dom";

const API_Key = "IagrCxtB";

function ArtView() {
  let params = useParams();
  const [artwork, setArtwork] = useState({});

  const fetchArtwork = async () => {
    const resp = await fetch(
      `https://www.rijksmuseum.nl/api/en/collection?key=${API_Key}&hasImage=true&p=10.000&ps=100`
    );

    const data = await resp.json();
    return data;
  };

  useEffect(() => {
    let isMounted = true;

    ArtView().then((data) => {
      if (isMounted) setArtwork(data);
    });
    return () => {
      isMounted = false;
    };
  });

  // WILL NEED TO REVISE TO COORDINATE WITH TOURVIEW AND API INFO
  // ArtView USES collection, setCollection
  // TourView USES artwork, setArtwork
  // LOOK AT API DATA TO MATCH NAMES
  // NOTE principalOrFirstMaker SEEMS TO BE ARTIST NAME
  // DON'T SEE DESCRIPTION OPTION IN API??

  return (
    <div className="ArtView">
      <img src={artwork.artObjects[0].webImage.url} alt={artwork.title} />
      <h2>{artwork.artObjects[0].title}</h2>
      <div>{artwork.artObjects[0].principalOrFirstMaker}</div>
      <div>{artwork.artObjects[0].description}</div>
      <div>{artwork.artObjects[0].type}</div>
      <div>{artwork.artObjects[0].material}</div>
      <div>{artwork.artObjects[0].technique}</div>
    </div>
  );
}

export default ArtView;
