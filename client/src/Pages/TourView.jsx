import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './TourView.css';
import { FiImage } from 'react-icons/fi';
import { HiOutlinePaintBrush } from 'react-icons/hi2';

import { ImImages, ImEye, ImEyePlus } from 'react-icons/im';

import { TripleMaze } from 'react-spinner-animated';

import 'react-spinner-animated/dist/index.css';

const API_Key = 'IagrCxtB';

//const imgUrl = collection[id].webImage.url;

function TourView({ hidden, setHidden }) {
	const [collection, setCollection] = useState();
	const [error, setError] = useState('');
	//const [hidden, setHidden] = useState(false);
	const [loading, setLoading] = useState(false);

	const handleClick = (e) => {
		e.preventDefault();
		getCollection();
		//	hideButton();
	};

	/* const hideButton = () => {
		hidden(true);
	}; */

	const [rows, setRows] = useState(8);

	const handleLoadMore = () => {
		setRows(rows + 8);
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
			{!hidden && (
				<button type="button" onClick={handleClick} className="btn">
					<ImEye className="nav-icon" />
					<br />
					<span className="nav-text">See Gallery</span>
				</button>
			)}
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
								{collection.slice(0, rows).map((obj, index) => (
									<Link
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
								{rows < collection.length && (
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

export default TourView;
