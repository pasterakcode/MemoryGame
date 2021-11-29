import React, { useEffect, useRef } from 'react';
import styles from './GameTask.module.css';

function GameTask({
	gameAreaSize,
	allGameLevels,
	startGame,
	gameLevel,
	onHandleGameLevel,
	cardsToFind,
	onHandleCardsToFind,
	cardsDimension,
	levelCounterDimension,
	gameOver,
	victory,
	onHandleWaitingMovementOfUser,
	onHandleBlockingMovementOfUser,
}) {
	const cards = useRef(gameAreaSize.map(() => React.createRef()));
	const steps = useRef(allGameLevels.map(() => React.createRef()));

	useEffect(() => {
		if (startGame) {
			onHandleGameLevel();
		} else {
			clearMarkedAllSteps();
		}
	}, [startGame]);

	useEffect(() => {
		if (gameLevel > 0) {
			let newCardToRemember =
				cards.current[getRandomInt(gameAreaSize.length)].current;
			onHandleCardsToFind(newCardToRemember);
		}
	}, [gameLevel]);

	useEffect(() => {
		oneLevelTask(gameLevel);
	}, [cardsToFind, gameOver]);

	const getRandomInt = max => {
		return Math.floor(Math.random() * max);
	};
	const waitFor = ms => new Promise(r => setTimeout(r, ms));
	const asyncForEach = async (array, callback) => {
		for (let index = 0; index < array.length; index++) {
			await callback(array[index], index, array);
		}
	};
	const oneLevelTask = async newLevel => {
		onHandleBlockingMovementOfUser();
		newLevel > 1 && markADoneLevel(newLevel - 2);
		let counter = 0;
		await asyncForEach(cardsToFind, async cardToFindInThisStep => {
			if (counter <= newLevel) {
				await waitFor(750);
				markCardOnGreen(cardToFindInThisStep, counter);
				if (!gameOver) {
					markStepOnYellow(newLevel - 1);
				} else {
					if (victory) {
						markADoneLevel(newLevel - 1);
					} else {
						markStepOnRed(newLevel - 1);
						clearMarkedCard(cardsToFind[cardsToFind.length - 1]);
					}
				}
				await waitFor(500);
				clearMarkedCard(cardToFindInThisStep);
				counter++;
			}
		});
		!gameOver && onHandleWaitingMovementOfUser();
	};
	const markADoneLevel = doneLevel => {
		markStepOnGreen(doneLevel);
	};
	const markStepOnYellow = id => {
		steps.current[id].current.style.backgroundColor =
			'rgba(202, 175, 20, 0.74)';
	};
	const markStepOnGreen = id => {
		steps.current[id].current.style.backgroundColor = 'green';
	};
	const markStepOnRed = id => {
		steps.current[id].current.style.backgroundColor = 'tomato';
	};
	const clearMarkedAllSteps = () => {
		steps.current.forEach(el => {
			el.current.style.backgroundColor = 'white';
		});
	};
	const markCardOnGreen = (card, counter) => {
		switch (counter + 1) {
			case 1:
				card.style.backgroundColor = 'rgb(100, 255, 100)';
				break;
			case 2:
				card.style.backgroundColor = 'rgb(58, 235, 90)';
				break;
			case 3:
				card.style.backgroundColor = 'rgb(40, 215, 80)';
				break;
			case 4:
				card.style.backgroundColor = 'rgb(40, 195, 70)';
				break;
			case 5:
				card.style.backgroundColor = 'rgb(28, 175, 60)';
				break;
			case 6:
				card.style.backgroundColor = 'rgb(35, 155, 50)';
				break;
			case 7:
				card.style.backgroundColor = 'rgb(16, 135, 40)';
				break;
			case 8:
				card.style.backgroundColor = 'rgb(10, 115, 30)';
				break;
			case 9:
				card.style.backgroundColor = 'rgb(11, 95, 20)';
				break;
			case 10:
				card.style.backgroundColor = 'rgb(10, 75, 10)';
				break;
			default:
				card.style.backgroundColor = 'green';
				break;
		}
	};
	const clearMarkedCard = card => {
		card.style.backgroundColor = 'transparent';
	};

	return (
		<div className={styles.game}>
			<div className={styles.steps}>
				{allGameLevels.map((id, i) => (
					<div
						className={`${styles.oneStep}`}
						style={levelCounterDimension()}
						id={`step.${i}`}
						key={`steps.${i}`}
						ref={steps.current[i]}
					>
						{id}
					</div>
				))}
			</div>
			<div className={styles.gameArea}>
				{gameAreaSize.map((id, i) => (
					<div
						className={styles.oneCard}
						style={cardsDimension()}
						id={`card.${i}`}
						key={`card.${i}`}
						ref={cards.current[i]}
					></div>
				))}
			</div>
		</div>
	);
}

export default GameTask;
