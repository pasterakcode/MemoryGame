import React, { useState, useEffect } from 'react';
import GameActions from './GameActions/GameActions';
import GameSolution from './GameSolution/GameSolution';
import GameTask from './GameTask/GameTask';
import styles from './GameSection.module.css';

function GameSection({ gameAreaSize, allGameLevels }) {
	const [startGame, setStartGame] = useState(false);
	const [gameLevel, setGameLevel] = useState(0);
	const [cardsToFind, setCardsToFind] = useState([]);
	const [selectedCard, setSelectedCard] = useState([]);
	const [gameOver, setGameOver] = useState(false);
	const [countCorrectSelected, setCountCorrectSelected] = useState(false);

	const handleStartGame = () => {
		setStartGame(true);
	};
	const handleResetGame = () => {
		setGameOver(false);
		setStartGame(false);
		setSelectedCard([]);
		setCardsToFind([]);
		setGameLevel(0);
	};
	const handleGameLevel = () => {
		setGameLevel(prev => prev + 1);
	};
	const handleCardsToFind = newCardToRemember => {
		setCardsToFind(prev => [...prev, newCardToRemember]);
	};
	const handleSelectedCard = e => {
		let newSelectedCard = e.target;
		setSelectedCard(prev => [...prev, newSelectedCard]);
	};

	useEffect(() => {
		if (selectedCard.length > 0) {
			isSelectedCardCorrect();
		}
	}, [selectedCard]);

	const isSelectedCardCorrect = () => {
		let lastSelected = selectedCard.length - 1;
		if (selectedCard[lastSelected].id === cardsToFind[lastSelected].id) {
			setCountCorrectSelected(prev => prev + 1);
			if (selectedCard.length === cardsToFind.length) {
				setSelectedCard([]);
				handleGameLevel();
				// setTimeout(() => {
				// 	setCountCorrectSelected(0);
				// }, 500);
			}
		} else {
			setCountCorrectSelected(false);
			setGameOver(true);
		}
	};
	return (
		<div className={styles.gameSection}>
			<GameActions
				onHandleStartGame={handleStartGame}
				onHandleResetGame={handleResetGame}
			/>
			<div className={styles.oneGameSection}>
				<h6>task</h6>
				<>
					<GameTask
						gameAreaSize={gameAreaSize}
						allGameLevels={allGameLevels}
						selectedCard={selectedCard}
						startGame={startGame}
						gameLevel={gameLevel}
						onHandleGameLevel={handleGameLevel}
						cardsToFind={cardsToFind}
						onHandleCardsToFind={handleCardsToFind}
					/>
				</>
			</div>
			<div className={styles.oneGameSection}>
				<h6>solution</h6>
				<>
					<GameSolution
						gameAreaSize={gameAreaSize}
						allGameLevels={allGameLevels}
						onHandleSelectedCard={e => handleSelectedCard(e)}
						countCorrectSelected={countCorrectSelected}
						gameLevel={gameLevel}
						selectedCard={selectedCard}
					/>
				</>
			</div>
			{gameOver && <p>Przegrałeś! Twój wynik: {cardsToFind.length - 1}</p>}
		</div>
	);
}

export default GameSection;
