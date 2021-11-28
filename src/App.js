import { useState } from 'react';
import styles from './App.module.css';
import Header from './components/Header/Header';
import SelectionSection from './components/SelectionSection/SelectionSection';
import GameSection from './components/GameSection/GameSection';
import Footer from './components/Footer/Footer';

function App() {
	const [startGame, setStartGame] = useState(false);
	const [gameAreaSize, setGameAreaSize] = useState(null);
	const [allGameLevels, setAllGameLevels] = useState(null);
	const [optionsSelectedByDefault] = useState({ size: 16, allLevels: 5})

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
					optionsSelectedByDefault={optionsSelectedByDefault}
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
