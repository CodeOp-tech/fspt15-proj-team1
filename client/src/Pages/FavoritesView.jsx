import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

// REMEMBER!! FOR FavoritesView ROUTES START WITH /favorites
// DB STRUCTURE mysql/art/favorites
// DATA FROM API:

function FavoritesView() {
  // STORE FAV ART IN ARRAY
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    // USE getFavorites FUNCTION BELOW TO LOAD FAVORITE ART
    getFavorites();
  }, []);

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

  return (
    <div>
      <h2> My Favorite Artwork</h2>
      <Grid>
        {favorites.map((item) => {
          return (
            <Card key={item.id}>
              <Link to={"/ArtView/" + item.objectNumber}>
                <img src={item.image} alt="" />
                <h4>{item.title}</h4>
              </Link>
            </Card>
          );
        })}
      </Grid>
    </div>
  );

  const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    grid-gap: 3rem;
  `;

  const Card = styled.div`
    img {
      width: 100%;
      border-radius: 2rem;
    }
    a {
      text-decoration: none;
    }
    h4 {
      text-align: center;
      padding: 1rem;
    }
  `;
}

export default FavoritesView;
