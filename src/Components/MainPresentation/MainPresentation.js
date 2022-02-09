import useStyles from './useStyles';
import './MainPresentation.scss';

const MainPresentation = ({ style }) => {
	const styles = useStyles();

	return (
		<div className={styles.mainPresentationContainer} style={style}>
			<div className={styles.shootingStar}></div>
			<div className={styles.textContainer}>
				<h1>Sergio Díaz</h1>
				<h2>Front End Developer</h2>
				<h3>JavaScript - ReactJs</h3>
			</div>
		</div>
	);
};

export default MainPresentation;
