import './App.css';
import MainPresentation from './Components/MainPresentation/MainPresentation';

function App() {
	return (
		<div className='App'>
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
