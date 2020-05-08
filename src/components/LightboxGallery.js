import React, { useState, useCallback } from 'react';

import Gallery from 'react-photo-gallery';
import Carousel, { Modal, ModalGateway } from 'react-images';
import { photoSources } from '../data/photoSources';

const customStyles = {
	view: () => ({
		// none of react-images styles are passed to <View />
		height: `100vh`,
		width: `100%`,
		textAlign: `center`
	})
};

function PhotoGallery() {
	const [ currentImage, setCurrentImage ] = useState(0);
	const [ viewerIsOpen, setViewerIsOpen ] = useState(false);

	const openLightbox = useCallback((event, { photo, index }) => {
		setCurrentImage(index);
		setViewerIsOpen(true);
	}, []);

	const closeLightbox = () => {
		setCurrentImage(0);
		setViewerIsOpen(false);
	};

	return (
		<div>
			<Gallery photos={photoSources} onClick={openLightbox} direction={'column'} margin={'4'} />
			<ModalGateway>
				{viewerIsOpen ? (
					<Modal
						onClose={closeLightbox}
						styles={{
							height: `auto`,
							maxHeight: `100vh`,
							maxWidth: `100%`
						}}
					>
						<Carousel
							styles={customStyles}
							currentIndex={currentImage}
							views={photoSources.map((x) => ({
								...x,
								srcset: x.srcSet
								// caption: x.title
							}))}
						/>
					</Modal>
				) : null}
			</ModalGateway>
		</div>
	);
}

export default PhotoGallery;
