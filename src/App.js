import react, { useState } from 'react';
import styles from './App.module.css';
import Header from './components/Header/Header';
import SelectionSection from './components/SelectionSection/SelectionSection';
import GameSection from './components/GameSection/GameSection';
import Footer from './components/Footer/Footer';

function App() {
	const [gameAreaSize, setGameAreaSize] = useState(null);
	const [allGameLevels, setAllGameLevels] = useState(null);

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
				/>
				{gameAreaSize && allGameLevels && <GameSection gameAreaSize={gameAreaSize} allGameLevels={allGameLevels} />}
			</div>
			<Footer />
		</div>
	);
}

export default App;
