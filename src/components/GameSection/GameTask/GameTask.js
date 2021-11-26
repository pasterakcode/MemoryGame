import React, { useState, useEffect, useRef } from 'react';
import styles from './GameTask.module.css';

function GameTask({
	startGame,
	gameLevel,
	onHandleGameLevel,
	cardsToFind,
	onHandleCardsToFind,
}) {
	const gameSize = [1, 2, 3, 4, 5, 6, 7, 8, 9];
	const gameSteps = [1, 2, 3, 4, 5, 6];
	const cards = useRef(gameSize.map(() => React.createRef()));
	const steps = useRef(gameSteps.map(() => React.createRef()));

	useEffect(() => {
		if (startGame) {
			onHandleGameLevel();
		} else {
			clearMarkedAllSteps();
		}
	}, [startGame]);

	useEffect(() => {
		if (gameLevel > 0) {
			let newCardToRemember = cards.current[getRandomInt(gameSize.length)].current;
			console.log(newCardToRemember);
			onHandleCardsToFind(newCardToRemember);
		}
	}, [gameLevel]);

	useEffect(() => {
		oneGame(gameLevel);
	}, [cardsToFind]);

	const getRandomInt = max => {
		return Math.floor(Math.random() * max);
	};
	const waitFor = ms => new Promise(r => setTimeout(r, ms));
	const asyncForEach = async (array, callback) => {
		for (let index = 0; index < array.length; index++) {
			await callback(array[index], index, array);
		}
	};
	const oneGame = async newLevel => {
		let counter = 0;
		await asyncForEach(cardsToFind, async cardToFindInThisStep => {
			newLevel > 1 && markStepOnGreen(newLevel - 2);
			if (counter <= newLevel) {
				await waitFor(750);
				markStepOnYellow(newLevel - 1);
				markCardOnGreen(cardToFindInThisStep);
				await waitFor(1000);
				clearMarkedCard(cardToFindInThisStep);
				counter++;
			}
		});
	};
	const markStepOnYellow = id => {
		steps.current[id].current.style.backgroundColor = 'yellow';
	};
	const markStepOnGreen = id => {
		steps.current[id].current.style.backgroundColor = 'green';
	};
	const clearMarkedAllSteps = () => {
		steps.current.forEach(el => {
			el.current.style.backgroundColor = 'white';
		});
	};
	const markCardOnGreen = card => {
		card.style.backgroundColor = 'green';
	};
	const clearMarkedCard = card => {
		card.style.backgroundColor = 'transparent';
	};
	return (
		<div className={styles.game}>
			<div className={styles.steps}>
				{gameSteps.map((id, i) => (
					<div
						className={`${styles.oneStep}`}
						id={`step.${i}`}
						key={`steps.${i}`}
						ref={steps.current[i]}
					>
						{id}
					</div>
				))}
			</div>
			<div className={styles.gameArea}>
				{gameSize.map((id, i) => (
					<div
						className={styles.oneCard}
						id={`card.${i}`}
						key={`card.${i}`}
						ref={cards.current[i]}
					>
						{id}
					</div>
				))}
			</div>
		</div>
	);
}

export default GameTask;
