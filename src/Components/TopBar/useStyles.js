const useStyles = ({ hideTopBar }) => {
	return {
		topBarMainContainer: `topBar__mainContainer topBar__mainContainer--${
			hideTopBar ? 'hide' : 'unhide'
		}  d-flex justify-content-around align-items-center col-12`,
	};
};

export default useStyles;
