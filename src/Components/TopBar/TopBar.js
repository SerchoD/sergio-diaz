import { useState, useEffect } from 'react';
import useStyles from '../TopBar/useStyles';
import './TopBar.scss';

const TopBar = () => {
	const [y, setY] = useState(window.scrollY);
	const [hideTopBar, setHideTopBar] = useState(false);
	const [showTopBar, setShowTopBar] = useState(false);

	const handleNavigation = (e) => {
		const window = e.currentTarget;
		if (y > window.scrollY) {
			setHideTopBar(false);
		} else if (y < window.scrollY) {
			setHideTopBar(true);
		}
		setY(window.scrollY);
	};

	useEffect(() => {
		window.addEventListener('scroll', (e) => handleNavigation(e));
	}, [y]);

	useEffect(() => {
		setTimeout(() => {
			setShowTopBar(true);
		}, 7000);
	}, []);

	const style = useStyles({ hideTopBar });

	return (
		<div>
			{showTopBar && (
				<div className={style.topBarMainContainer}>
					<div
						onClick={() => {
							document.getElementById('test1').scrollIntoView();
						}}
					>
						pepe1
					</div>
					<div>pepe2</div>
					<div>pepe3</div>
				</div>
			)}
		</div>
	);
};

export default TopBar;
