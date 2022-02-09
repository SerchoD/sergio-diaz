import useStyles from './useStyles';
import './MainPresentation.scss';
import { useEffect, useState } from 'react';

const MainPresentation = ({ style }) => {
	const styles = useStyles();

	const [X, setMouseX] = useState(0);
	const [Y, setMouseY] = useState(0);

	const [screenHeight, setScreenHeight] = useState(window.innerHeight);
	const [screenWidth, setScreenWidth] = useState(window.innerWidth);

	const [centerVertical, setCenterVertical] = useState(screenHeight / 2);
	const [centerHorizontal, setCenterHorizontal] = useState(screenWidth / 2);

	const handleMouseMove = (e) => {
		setMouseX(e.clientX);
		setMouseY(e.clientY);
	};

	useEffect(() => {
		const handleResize = () => {
			setScreenHeight(window.innerHeight);
			setScreenWidth(window.innerWidth);

			setCenterVertical(screenHeight / 2);
			setCenterHorizontal(screenWidth / 2);
		};
		window.addEventListener('resize', handleResize);
	}, []);

	return (
		<div
			className={styles.mainPresentationContainer}
			onMouseMove={handleMouseMove}
			style={style}
		>
			<div className='div2'>
				<div className={styles.shootingStar}></div>
				<div
					className={styles.textContainer}
					style={{
						position: 'relative',
						bottom: `${centerHorizontal / 20 - Y / 20}px`,
						right: `${centerVertical / 20 - X / 20}px`,
					}}
				>
					<h1>Sergio Díaz</h1>
					<div
						style={{
							position: 'relative',
							bottom: `${centerHorizontal / 50 - Y / 50}px`,
							right: `${centerVertical / 50 - X / 50}px`,
						}}
					>
						<h2>Front End Developer</h2>
					</div>
					<div
						style={{
							position: 'relative',
							bottom: `${centerHorizontal / 30 - Y / 30}px`,
							right: `${centerVertical / 30 - X / 30}px`,
						}}
					>
						<h3>JavaScript - ReactJs</h3>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MainPresentation;
