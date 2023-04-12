import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

// REMEMBER!! FOR FavoritesView ROUTES START WITH /favorites
// DB STRUCTURE mysql/art/favorites
// DB TABLE DATA: objectNumber, title, imageURL
// DATA FROM API: objectNumber, longTitle, webImage.url

function FavoritesView() {
  // STORE FAV ART IN ARRAY
  const [favorites, setFavorites] = useState([]);

  // FUNCTION TO RETRIEVE FAVORITES FROM DATABASE
  // LOOP THROUGH USING SAVED RIJKSMUSEUM API objectNumber
  async function getFavorites() {
    try {
      let results = await fetch("/favorites");
      let data = await results.json();
      setFavorites(data);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    // USE getFavorites FUNCTION  TO LOAD FAVORITE ART
    getFavorites();
  }, []);

  return (
    <div>
      <h2> Community Favorites </h2>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {Array.isArray(favorites) ? (
          favorites.map((item) => {
            return (
              <div key={item.id} style={{ margin: "10px", width: "200px" }}>
                <Link to={`/ArtView/${item.objectNumber}`}>
                  <img
                    src={item.imageURL}
                    alt={item.title}
                    style={{
                      width: "100%",
                      height: "auto",
                      borderRadius: "5px",
                    }}
                  />
                </Link>
              </div>
            );
          })
        ) : (
          <p>No Favorites Found</p>
        )}
      </div>
    </div>
  );
}

export default FavoritesView;
