import React, { useState, useEffect } from 'react';
import GameActions from './GameActions/GameActions';
import GameSolution from './GameSolution/GameSolution';
import GameTask from './GameTask/GameTask';
import styles from './GameSection.module.css';

function GameSection({
	startGame,
	onHandleStartGame,
	gameAreaSize,
	allGameLevels,
}) {
	const [gameLevel, setGameLevel] = useState(0);
	const [cardsToFind, setCardsToFind] = useState([]);
	const [selectedCard, setSelectedCard] = useState([]);
	const [gameOver, setGameOver] = useState(false);
	const [victory, setVictory] = useState(false);
	const [countCorrectSelected, setCountCorrectSelected] = useState(false);

	const handleResetGame = () => {
		setGameOver(false);
		onHandleStartGame();
		setSelectedCard([]);
		setCardsToFind([]);
		setVictory(false);
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
			if (!isEndGame()) {
				setTimeout(() => {
					isEndLevel();
				}, 500);
			}
		} else {
			setCountCorrectSelected(false);
			setGameOver(true);
		}
	};
	const isEndLevel = () => {
		if (selectedCard.length === cardsToFind.length) {
			setSelectedCard([]);
			handleGameLevel();
			setCountCorrectSelected(0);
		}
	};
	const isEndGame = () => {
		if (selectedCard.length === allGameLevels.length) {
			setVictory(true);
			setGameOver(true);
			return true;
		} else {
			return false;
		}
	};
	const cardsDimension = () => {
		const dimension = 165 / Math.sqrt(gameAreaSize.length);
		return {
			width: dimension + 'px',
			height: dimension + 'px',
		};
	};
	const levelCounterDimension = () => {
		const dimension = 165 / Math.sqrt(allGameLevels.length);
		return {
			height: dimension + 'px',
		};
	};
	return (
		<div className={styles.gameSection}>
			<GameActions
				onHandleStartGame={onHandleStartGame}
				onHandleResetGame={handleResetGame}
				startGame={startGame}
				gameOver={gameOver}
			/>
			{startGame && (
				<>
					<div className={styles.oneGameSection}>
						<h6>task</h6>
						<GameTask
							gameAreaSize={gameAreaSize}
							allGameLevels={allGameLevels}
							selectedCard={selectedCard}
							startGame={startGame}
							gameLevel={gameLevel}
							onHandleGameLevel={handleGameLevel}
							cardsToFind={cardsToFind}
							onHandleCardsToFind={handleCardsToFind}
							cardsDimension={cardsDimension}
							levelCounterDimension={levelCounterDimension}
							gameOver={gameOver}
							victory={victory}
						/>
					</div>
					<div className={styles.oneGameSection}>
						<h6>solution</h6>
						<GameSolution
							gameAreaSize={gameAreaSize}
							allGameLevels={allGameLevels}
							onHandleSelectedCard={e => handleSelectedCard(e)}
							countCorrectSelected={countCorrectSelected}
							gameLevel={gameLevel}
							selectedCard={selectedCard}
							cardsDimension={cardsDimension}
							levelCounterDimension={levelCounterDimension}
						/>
					</div>
				</>
			)}
			<h3 className={styles.gameOverInformation}>
				{gameOver &&
					(victory
						? `You Won! Your Score: ${cardsToFind.length}`
						: `You lost! Your Score: ${cardsToFind.length - 1}`)}
			</h3>
		</div>
	);
}

export default GameSection;
