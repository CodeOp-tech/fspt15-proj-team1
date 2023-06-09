import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Gallery.css';

import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import { FiVolume2, FiVolumeX } from 'react-icons/fi';
import { ImEyePlus } from 'react-icons/im';

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
		"The Rijksmuseum in Amsterdam is one of the most renowned museums in the world! Founded in 1800, this museum is dedicated to preserving and showcasing the rich artistic and cultural heritage of the Netherlands, from the Middle Ages to modern times. With over 8,000 objects on display, including masterpieces by famous Dutch artists like Rembrandt, Vermeer, and Van Gogh, the Rijksmuseum offers visitors an unparalleled glimpse into the country's history, culture, and artistic achievements. Join us on this virtual tour and explore the museum's stunning collections and fascinating stories from the comfort of your own home.";
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
			let response = await fetch(apiUrl);
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

	return (
		<>
			<div className="gallery container py-5">
				<h1>Welcome to the Rijksmuseum!</h1>

				<div className="presentation">
					<p>{introText}</p>
					<button
						style={{
							backgroundColor: '#F7C815',
							color: 'black',
							fontSize: '25px',
							padding: '10px 20px',
							border: 'none',
							borderRadius: '5px',
							marginBottom: '20px',
						}}
						onClick={speakIntro}
						disabled={isSpeaking}>
						{isSpeaking ? 'Speaking...' : 'Click to hear this text'}
						<FiVolume2 className="TSS-icon" />
					</button>
					{isSpeaking && (
						<button
							style={{
								backgroundColor: 'red',
								color: 'black',
								fontSize: '25px',
								padding: '10px 20px',
								border: 'none',
								borderRadius: '5px',
							}}
							onClick={stopReading}>
							Stop Audio <FiVolumeX className="TSS-icon" />
						</button>
					)}
				</div>
				<div className="collection-div">
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
							<br />
							<div className="LMButton-div">
								{imgs < collection.length && (
									<button
										type="button"
										onClick={handleLoadMore}
										className="btn">
										<ImEyePlus className="nav-icon" />

										<br />
										<span
											className="nav-text"
											style={{
												fontSize: '25px',
											}}>
											Click to see more art
										</span>
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
