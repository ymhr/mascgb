import React from 'react';
import HeroImage from 'shared/HeroImage';
import { Container, Row, Col } from 'react-grid-system';

export default function Home() {
	const images = [
		'https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1834&q=80',
		'https://images.unsplash.com/photo-1513263196760-c38dee051d18?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1931&q=80',
		'https://images.unsplash.com/photo-1503256207526-0d5d80fa2f47?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1833&q=80',
		'https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1860&q=80',
		'https://images.unsplash.com/photo-1507146426996-ef05306b995a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80'
	];

	const [image, setImage] = React.useState(null);

	React.useEffect(() => {
		if (image) return;
		setImage(images[Math.floor(Math.random() * images.length)]);
	}, [image, images]);

	return (
		<>
			<HeroImage
				title="Welcome to the MASCGB"
				text={{
					__html:
						"This is the Miniature American Shepherd Club of Great Britain.<br><br>We love the breed, and we hope you will too!<br><br>We're always on the look out for new friends, so please get in touch!"
				}}
				image={image}
			/>
			<Container>
				<Row>
					<Col>
						<h1>And I am content down here...</h1>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit. Donec et vulputate sapien, quis interdum
							tortor.
						</p>
						<p>
							Donec vestibulum tortor sit amet velit cursus, id
							cursus velit mattis. Vivamus sollicitudin auctor
							urna. Integer faucibus diam sit amet lacus congue
							malesuada. Curabitur lacinia et lectus at consequat.
							Praesent lobortis eget urna ac consectetur. Sed odio
							justo, tristique nec ultrices pretium, tincidunt vel
							sapien. Integer quis elit iaculis, aliquet nulla et,
							malesuada nibh. Quisque ultrices lectus massa, nec
							euismod lacus sagittis non.
						</p>
						<p>
							Maecenas sodales, risus vel suscipit maximus, tortor
							mauris gravida arcu, vel luctus quam turpis id enim.
							Proin malesuada purus pellentesque est pretium, in
							viverra lorem fermentum.
						</p>
						<p>
							Curabitur efficitur nisl quam, id fringilla libero
							commodo ut. Mauris at neque sed metus interdum
							finibus. In urna quam, varius vitae iaculis eu,
							fringilla in dolor. Mauris dui ex, porttitor ut
							bibendum id, fermentum sit amet dolor. Mauris
							viverra fringilla quam.
						</p>

						<p>
							Donec commodo viverra lectus, a mollis lorem pretium
							non. Sed malesuada consequat dolor, quis varius nunc
							convallis at. Morbi dapibus nunc laoreet tortor
							consectetur, at ultrices diam aliquam. Phasellus
							blandit imperdiet lorem, vitae luctus enim rutrum
							ultricies. Aenean at lorem lacinia, posuere nisl
							quis, blandit eros.
						</p>
						<p>
							Maecenas non justo dignissim, interdum arcu
							accumsan, facilisis dolor. Maecenas sed massa
							mattis, commodo nisl et, elementum augue. In nisl
							dui, volutpat eget mauris et, finibus semper nisi.
							Vivamus mollis rutrum diam, et lobortis purus. Donec
							nec neque pharetra, efficitur augue ac, tincidunt
							justo. Duis imperdiet sapien sed eros eleifend, eu
							dignissim magna consectetur.
						</p>
						<p>
							Etiam varius est eget enim bibendum, nec laoreet
							massa lacinia. Quisque finibus metus eget orci
							condimentum volutpat. Morbi eget turpis augue.
							Vestibulum egestas tortor at scelerisque rhoncus.
						</p>
					</Col>
				</Row>
			</Container>
		</>
	);
}
