import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

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
			let results = await fetch('/favorites');
			let data = await results.json();
			let uniqueFavorites = data.data.filter(
				(item, index, self) =>
					index === self.findIndex((t) => t.objectNumber === item.objectNumber)
			);
			setFavorites(uniqueFavorites);
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
			<h1> Community Favorites </h1>
			<div
				style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
				{Array.isArray(favorites) ? (
					favorites.map((item) => {
						return (
							<div key={item.id} style={{ margin: '10px', width: '200px' }}>
								<Link to={'/ArtView' + item.objectNumber}>
									<img
										src={item.imageURL}
										alt={item.title}
										style={{
											width: '100%',
											height: 'auto',
											borderRadius: '5px',
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
			<Link to="/Gallery" style={{ display: 'block', margin: '40px 0' }}>
				<button
					style={{
						backgroundColor: '#EC9704',
						color: 'black',
						fontSize: '25px',
						padding: '10px 20px',
						border: 'none',
						borderRadius: '5px',
					}}>
					<i className="fa fa-chevron-left" style={{ marginRight: '10px' }}></i>
					Go Back to the Gallery
				</button>
			</Link>
		</div>
	);
}

export default FavoritesView;
