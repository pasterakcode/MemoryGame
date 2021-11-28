import React, { useState, useEffect, useRef } from 'react';
import styles from './GameSolution.module.css';

function GameSolution({
	gameAreaSize,
	allGameLevels,
	onHandleSelectedCard,
	countCorrectSelected,
	cardsDimension,
	levelCounterDimension
}) {
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
			el.current.style.backgroundColor = 'transparent';
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
				{allGameLevels.map((id, i) => (
					<div
						className={`${styles.oneStep}`}
						style={levelCounterDimension()}
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
