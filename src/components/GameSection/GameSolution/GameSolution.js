import React, { useState, useEffect, useRef } from 'react';
import GameArea from '../GameArea/GameArea';
import styles from './GameSolution.module.css';

function GameSolution({
	onHandleSelectedCard,
	countCorrectSelected,
	gameLevel,
	selectedCard,
}) {
	const gameSize = [1, 2, 3, 4, 5, 6, 7, 8, 9];
	const gameSteps = [1, 2, 3, 4, 5, 6];
	const [lastChoise, setLastChoise] = useState(null);
	const cards = useRef(gameSize.map(() => React.createRef()));
	const steps = useRef(gameSteps.map(() => React.createRef()));

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
	return (
		<div className={styles.game}>
			<div className={styles.steps}>
				{gameSteps.map((id, i) => (
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
				{gameSize.map((id, i) => (
					<div
						className={styles.oneCard}
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
