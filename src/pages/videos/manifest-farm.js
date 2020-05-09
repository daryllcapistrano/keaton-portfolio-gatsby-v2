import React from 'react';
import { Link } from 'gatsby';
import Layout from '../../components/layout';
import SEO from '../../components/seo';

const ManifestFarmPage = () => (
	<Layout>
		<SEO title="ManifestFarmPage" />
		<div>
			<div style={{ textAlign: 'center', padding: `20px` }}>
				<Link
					to="/"
					style={{
						color: '#000000',
						padding: '10px'
					}}
				>
					Back
				</Link>
				<Link
					to="/videos/bittersland"
					style={{
						color: '#000000',
						padding: '10px'
					}}
				>
					Next
				</Link>
			</div>
		</div>
		<div
			style={{
				position: 'relative',
				paddingBottom: '56.25%' /* 16:9 */,
				paddingTop: 25
			}}
		>
			<iframe
				style={{
					position: 'absolute',
					top: 0,
					left: 0,
					width: '100%',
					height: '100%'
				}}
				src={`https://www.youtube.com/embed/fXV8AEs1IdQ`}
				frameBorder="0"
				allowFullScreen={true}
				title="manifest farm"
			/>
		</div>
	</Layout>
);

export default ManifestFarmPage;
