import React from "react";

import { useState } from "react";

const API_Key = "IagrCxtB";

function TourView() {
  const [collection, setCollection] = useState();
  const [error, setError] = useState("");

  const handleClick = (e) => {
    e.preventDefault();

    getCollection();
  };

  const getCollection = async () => {
    try {
      let response = await fetch(
        `https://www.rijksmuseum.nl/api/en/collection?key=${API_Key}&hasImage=true&p=10.000&ps=100`
      );
      if (response.ok) {
        let data = await response.json();
        setCollection(data);
        console.log(data);
      } else {
        setError(`Error: ${response.status} ${response.statusText}`);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="TourView">
      <button
        type="button"
        onClick={handleClick}
        className="btn btn-primary btn-lg btn-block"
      >
        START VIRTUAL TOUR
      </button>
      {collection && (
        <div>
          <h3>{collection.artObjects[0].title}</h3>
          <img alt="description" src={collection.artObjects[0].webImage.url} />
        </div>
      )}
    </div>
  );
}

export default TourView;
