import './App.css';
import MainPresentation from './Components/MainPresentation/MainPresentation';
import TopBar from './Components/TopBar/TopBar';

function App() {
	return (
		<div>
			<TopBar />
			<MainPresentation />
			<div
				style={{
					width: '100vw',
					height: '300px',
					backgroundColor: 'rgb(22,22,22)',
				}}
			></div>
		</div>
	);
}

export default App;
