import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Gallery.css';
import { FiImage } from 'react-icons/fi';
import { HiOutlinePaintBrush } from 'react-icons/hi2';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';

import { ImImages, ImEye, ImEyePlus } from 'react-icons/im';

import { TripleMaze } from 'react-spinner-animated';

import 'react-spinner-animated/dist/index.css';

const API_Key = 'IagrCxtB';
const apiUrl = `https://www.rijksmuseum.nl/api/en/collection?key=${API_Key}&hasImage=true&p=10.000&ps=100`;

function Gallery({ hidden, setHidden }) {
	const [collection, setCollection] = useState();
	const [error, setError] = useState('');
	//const [hidden, setHidden] = useState(false);
	const [loading, setLoading] = useState(false);
	const [isSpeaking, setIsSpeaking] = useState(false); // Setting state for whether intro is being spoken or not
	const introText =
		"Welcome to the Rijksmuseum in Amsterdam, one of the most renowned museums in the world! Founded in 1800, the Rijksmuseum is dedicated to preserving and showcasing the rich artistic and cultural heritage of the Netherlands, from the Middle Ages to modern times. With over 8,000 objects on display, including masterpieces by famous Dutch artists like Rembrandt, Vermeer, and Van Gogh, the Rijksmuseum offers visitors an unparalleled glimpse into the country's history, culture, and artistic achievements. Join us on this virtual tour and explore the museum's stunning collections and fascinating stories from the comfort of your own home.";
	const speakIntro = () => {
		// Function to speak the intro text using the SpeechSynthesis API
		const synth = window.speechSynthesis;
		const introUtterance = new SpeechSynthesisUtterance(introText);
		introUtterance.onend = () => {
			setIsSpeaking(false); // Set isSpeaking state to false when intro is finished speaking
		};
		setIsSpeaking(true); // Set isSpeaking state to true while intro is speaking
		synth.speak(introUtterance);
	};

	const stopReading = () => {
		const synth = window.speechSynthesis;
		synth.cancel();
		setIsSpeaking(false);
	};

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
			let response = await fetch('http://localhost:5002/collection');
			if (response.ok) {
				setLoading(false);
				let data = await response.json();
				let imagesArray = data.artObjects;
				setCollection(imagesArray);
				//console.log(data.artObjects);
			} else {
				setError(`Error: ${response.status} ${response.statusText}`);
			}
		} catch (error) {
			console.log(error.message);
		}
	};

	//	const visibleImages = collection.slice(0, rows);
	return (
		<>
			<div className="gallery container py-5">
				<h1>Welcome to the Rijksmuseum!</h1>
				<br />
				<div className="presentation">
					<p>{introText}</p>
					<button
						style={{
							backgroundColor: '#F7C815',
							color: 'white',
							fontSize: '20px',
							padding: '10px 20px',
							border: 'none',
							borderRadius: '5px',
							marginBottom: '20px',
						}}
						onClick={speakIntro}
						disabled={isSpeaking}>
						{isSpeaking ? 'Speaking...' : 'Read Introduction'}
					</button>
					{isSpeaking && (
						<button
							style={{
								backgroundColor: 'red',
								color: 'white',
								fontSize: '20px',
								padding: '10px 20px',
								border: 'none',
								borderRadius: '5px',
							}}
							onClick={stopReading}>
							Stop Reading
						</button>
					)}
				</div>
				<div>
					{collection && (
						<>
							<ResponsiveMasonry
								columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 4 }}>
								<Masonry gutter="{{100 rem}}">
									{collection.slice(0, imgs).map((obj, index) => (
										/* <div className="col-sm-6 col-lg-4 mb-4"> */
										<Link
											className="galleryImg card"
											to={`/ArtView/${obj.objectNumber}`}
											key={obj.objectNumber}>
											<img
												className="coll-img "
												key="index"
												alt="description"
												src={obj.webImage.url}
											/>
										</Link>
									))}
								</Masonry>
							</ResponsiveMasonry>
							<div>
								{imgs < collection.length && (
									<button
										type="button"
										onClick={handleLoadMore}
										className="btn">
										<ImEyePlus className="nav-icon" />

										<br />
										<span className="nav-text">See more art</span>
									</button>
								)}
							</div>
						</>
					)}
				</div>
			</div>
		</>
	);
}

export default Gallery;
