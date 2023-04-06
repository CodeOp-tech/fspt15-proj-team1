import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Gallery.css';
import { FiImage } from 'react-icons/fi';
import { HiOutlinePaintBrush } from 'react-icons/hi2';

import { ImImages, ImEye, ImEyePlus } from 'react-icons/im';

import { TripleMaze } from 'react-spinner-animated';

import 'react-spinner-animated/dist/index.css';

const API_Key = 'IagrCxtB';

//const imgUrl = collection[id].webImage.url;

function Gallery({ hidden, setHidden }) {
	const [collection, setCollection] = useState();
	const [error, setError] = useState('');
	//const [hidden, setHidden] = useState(false);
	const [loading, setLoading] = useState(false);

	/* const handleClick = (e) => {
		e.preventDefault();
		getCollection();
		//	hideButton();
	}; */

	/* const hideButton = () => {
		hidden(true);
	}; */

	useEffect(() => {
		getCollection();
	}, []);

	const [imgs, setImgs] = useState(8);

	const handleLoadMore = () => {
		setImgs(imgs + 8);
	};

	const getCollection = async () => {
		try {
			setLoading(true);
			let response = await fetch(
				`https://www.rijksmuseum.nl/api/en/collection?key=${API_Key}&hasImage=true&p=10.000&ps=100`
			);
			if (response.ok) {
				setLoading(false);
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

	//	const visibleImages = collection.slice(0, rows);
	return (
		<div className="TourView">
			<p className="presentation">
				Welcome to the Rijksmuseum in Amsterdam, one of the most renowned
				museums in the world! Founded in 1800, the Rijksmuseum is dedicated to
				preserving and showcasing the rich artistic and cultural heritage of the
				Netherlands, from the Middle Ages to modern times. With over 8,000
				objects on display, including masterpieces by famous Dutch artists like
				Rembrandt, Vermeer, and Van Gogh, the Rijksmuseum offers visitors an
				unparalleled glimpse into the country's history, culture, and artistic
				achievements. Join us on this virtual tour and explore the museum's
				stunning collections and fascinating stories from the comfort of your
				own home.
			</p>
			{/* {!hidden && (
				<button type="button" onClick={handleClick} className="btn">
					<ImEye className="nav-icon" />
					<br />
					<span className="nav-text">See Gallery</span>
				</button>
			)} */}
			{loading ? (
				<>
					<TripleMaze center={true} width={'150px'} height={'150px'} />
					<br />
					<span className="spinner-text">Loading images</span>
				</>
			) : (
				<div className="container container-grid">
					{collection && (
						<>
							<div className="grid">
								{/*  <h3>{collection[1].title}</h3>*/}
								{collection.slice(0, imgs).map((obj, index) => (
									<Link
										className="galleryImg"
										to={`/ArtView/${obj.objectNumber}`}
										key={obj.objectNumber}>
										<img
											className="coll-img"
											key="index"
											alt="description"
											src={obj.webImage.url}
										/>
									</Link>
								))}
							</div>
							<div>
								{imgs < collection.length && (
									<button
										type="button"
										onClick={handleLoadMore}
										className="btn">
										<ImEyePlus className="nav-icon" />

										<br />
										<span className="nav-text">Load More</span>
									</button>
								)}
							</div>
						</>
					)}
				</div>
			)}
		</div>
	);
}

export default Gallery;
