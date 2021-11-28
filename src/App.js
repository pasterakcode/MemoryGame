import react, { useState } from 'react';
import styles from './App.module.css';
import Header from './components/Header/Header';
import SelectionSection from './components/SelectionSection/SelectionSection';
import GameSection from './components/GameSection/GameSection';
import Footer from './components/Footer/Footer';

function App() {
	const [startGame, setStartGame] = useState(false);
	const [gameAreaSize, setGameAreaSize] = useState(null);
	const [allGameLevels, setAllGameLevels] = useState(null);
	// const [startGame, setStartGame] = useState(true);
	// const [gameAreaSize, setGameAreaSize] = useState([1,2,3,4,5,6,7,8,9]);
	// const [allGameLevels, setAllGameLevels] = useState([1,2,3,4,5,6,7,8,9,10]);

	const handleStartGame = () => {
		gameAreaSize && allGameLevels && setStartGame(!startGame);
	};
	const handleGameAreaSize = size => {
		const arrayOfDigitsForGameAreaSize = fillerOfArray(size);
		setGameAreaSize(arrayOfDigitsForGameAreaSize);
	};
	const handleAllGameLevels = levels => {
		const arrayOfDigitsForGameLevels = fillerOfArray(levels);
		setAllGameLevels(arrayOfDigitsForGameLevels);
	};
	const fillerOfArray = count => {
		const arrayOfDigits = [];
		for (let i = 1; i <= count; i++) {
			arrayOfDigits.push(i);
		}
		return arrayOfDigits;
	};

	return (
		<div className={`${styles.app} container`}>
			<Header />
			<div className={`${styles.mainSection}`}>
				<SelectionSection
					onHandleGameAreaSize={handleGameAreaSize}
					onHandleAllGameLevels={handleAllGameLevels}
					onHandleStartGame={handleStartGame}
					startGame={startGame}
				/>
				<GameSection
					startGame={startGame}
					gameAreaSize={gameAreaSize}
					allGameLevels={allGameLevels}
					onHandleStartGame={handleStartGame}
				/>
			</div>
			<Footer />
		</div>
	);
}

export default App;
