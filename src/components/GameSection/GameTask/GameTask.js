import React, { useState, useEffect, useRef } from 'react';
import styles from './GameTask.module.css';

function GameTask({ selectedCard, startGame }) {
	const gameSize = [1, 2, 3, 4, 5, 6, 7, 8, 9];
	const gameSteps = [1, 2, 3, 4, 5, 6];
	const [cardsToFind, setCardsToFind] = useState([]);
	const [gameLevel, setGameLevel] = useState(0);
	const cards = useRef(gameSize.map(() => React.createRef()));
	const steps = useRef(gameSteps.map(() => React.createRef()));

	useEffect(() => {
		if (selectedCard != []) {
			console.log(selectedCard);
			console.log(cardsToFind);
			// znajdz rozwiązanie problemu -> porównanie dwóch tablic
			if (selectedCard == cardsToFind){
				console.log('OK')
				setGameLevel(gameLevel => gameLevel + 1);
			} else {
				console.log('NOK')
			}
			// do poprawy sprawdzanie aktywnych kart do zlanezienia
		}
	}, [selectedCard]);

	useEffect(() => {
		if (startGame) {
			setGameLevel(1);
		}
	}, [startGame]);

	useEffect(() => {
		if (gameLevel > 0) {
			let newCardToRemember = getRandomInt(gameSize.length);
			console.log(newCardToRemember);
			setCardsToFind(prev => [...prev, newCardToRemember]);
		}
	}, [gameLevel]);

	useEffect(() => {
		oneGame(gameLevel);
	}, [cardsToFind]);

	function getRandomInt(max) {
		return Math.floor((Math.random() * max) + 1);
	}
	const waitFor = ms => new Promise(r => setTimeout(r, ms));
	async function asyncForEach(array, callback) {
		for (let index = 0; index < array.length; index++) {
			await callback(array[index], index, array);
		}
	}
	const oneGame = async lvl => {
		let counter = 0;
		await asyncForEach(cardsToFind, async cardToFindInThisStep => {
			if (counter <= lvl) {
				await waitFor(500);
				steps.current[counter].current.style.backgroundColor = 'green';
				cards.current[cardToFindInThisStep - 1].current.style.backgroundColor =
					'green';
				await waitFor(1000);
				cards.current[cardToFindInThisStep - 1].current.style.backgroundColor =
					'transparent';
				counter++;
				console.log(cardsToFind);
			}
		});
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
