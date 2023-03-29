import React, { useState } from 'react';
import './TourView.css';

const API_Key = 'IagrCxtB';

//const imgUrl = collection[id].webImage.url;

function TourView() {
	const [collection, setCollection] = useState();
	const [error, setError] = useState('');

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
				let imagesArray = data.artObjects;
				setCollection(imagesArray);
				console.log(data.artObjects);
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
				className="btn btn-primary btn-lg btn-block">
				START VIRTUAL TOUR
			</button>
			<div className="container container-grid">
				{collection && (
					<div className="grid">
						{/*  <h3>{collection[1].title}</h3>*/}
						{collection.map((obj, index) => (
							<img
								className="coll-img"
								key={index}
								alt="description"
								src={obj.webImage.url}
							/>
						))}
					</div>
					/* <div className="col-sm">
							<img alt="description" src={collection[0].webImage.url} />
						</div>
						<div className="col-sm">
							<img alt="description" src={collection[0].webImage.url} />
						</div> */
				)}
			</div>
		</div>
	);
}

export default TourView;
