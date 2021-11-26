import React, { useState, useEffect, useRef } from 'react';
import GameArea from '../GameArea/GameArea';
import styles from './GameSolution.module.css';

function GameSolution({
	gameAreaSize,
	allGameLevels,
	onHandleSelectedCard,
	countCorrectSelected,
}) {
	const gameSteps = [1, 2, 3, 4, 5, 6];
	const [lastChoise, setLastChoise] = useState(null);
	const cards = useRef(gameAreaSize.map(() => React.createRef()));
	const steps = useRef(allGameLevels.map(() => React.createRef()));

	useEffect(() => {
		if (lastChoise) {
			if (countCorrectSelected > 0) {
				markStepOnGreen(countCorrectSelected - 1);
				lastChoise.style.backgroundColor = 'green';
				setTimeout(() => {
					clearMarkedCard(lastChoise);
				}, 500);
			} else if (countCorrectSelected === 0) {
				clearMarkedAllSteps();
			} else if (!countCorrectSelected) {
				lastChoise.style.backgroundColor = 'red';
				//  zamienić to na klase z rozbłyskiem
			}
		}
	}, [countCorrectSelected]);
	const markStepOnGreen = id => {
		steps.current[id].current.style.backgroundColor = 'green';
	};
	const clearMarkedAllSteps = () => {
		steps.current.forEach(el => {
			el.current.style.backgroundColor = 'white';
		});
	};
	const clearMarkedCard = card => {
		card.style.backgroundColor = 'transparent';
	};

	const handleOnClickCard = e => {
		setLastChoise(e.target);
		onHandleSelectedCard(e);
	};

	const cardsDimension = () => {
		if (gameAreaSize.length === 9) {
			return {
				width: '30px',
				height: '30px',
			};
		} else if (gameAreaSize.length === 16) {
			return {
				width: '20px',
				height: '20px',
			};
		} else if (gameAreaSize.length === 25) {
			return {
				width: '15px',
				height: '15px',
			};
		}
	};
	return (
		<div className={styles.game}>
			<div className={styles.steps}>
				{allGameLevels.map((id, i) => (
					<div
						className={`${styles.oneStep}`}
						key={id}
						id={`step.${id}`}
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
						key={id}
						id={`card.${i}`}
						ref={cards.current[i]}
						onClick={handleOnClickCard}
					></div>
				))}
			</div>
		</div>
	);
}

export default GameSolution;
