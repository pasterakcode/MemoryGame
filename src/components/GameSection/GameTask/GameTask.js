import React, { useState, useEffect } from 'react';
import styles from './GameTask.module.css';

function GameTask({ selectedCard }) {
	const gameSize = [1, 2, 3, 4, 5, 6, 7, 8, 9];
	const gameSteps = [1, 2, 3, 4, 5, 6];
	// const cardsToFind = [];
	const [cardsToFind, setCardsToFind] = useState([]);
	const onHandleStart = false;
	const lvl = 1;

	useEffect(() => {
		if (selectedCard) {
			console.log(selectedCard);
			console.log(cardsToFind);
			// selectedCard == `card.${cardsToFind[0]}`
            // do poprawy sprawdzanie aktywnych kart do zlanezienia
		}
	}, [selectedCard]);

	useEffect(() => {
		let newCardToRemember = getRandomInt(gameSize.length + 1);
		setCardsToFind(prev => prev.push(newCardToRemember));
		lvl && oneGame(lvl);
	}, [lvl]);


	function getRandomInt(max) {
		return Math.floor(Math.random() * max);
	}
	const waitFor = ms => new Promise(r => setTimeout(r, ms));
	async function asyncForEach(array, callback) {
		for (let index = 0; index < array.length; index++) {
			await callback(array[index], index, array);
		}
	}
	const oneGame = async lvl => {
		let counter = 1;
		await asyncForEach(cardsToFind, async id => {
			if (counter <= lvl) {
				await waitFor(500);
				let elementCount = document.getElementById(`step.${counter}`);
				let elementCard = document.getElementById(`card.${id}`);
				elementCount.classList.add(`${styles.active}`);
				elementCard.classList.add(`${styles.active}`);
				await waitFor(1000);
				elementCard.classList.remove(`${styles.active}`);
				counter++;
			}
		});
	};

	return (
		<div className={styles.game}>
			<div className={styles.steps}>
				{gameSteps.map(id => (
					<div className={`${styles.oneStep}`} id={`step.${id}`}>
						{id}
					</div>
				))}
			</div>
			<div className={styles.gameArea}>
				{gameSize.map(id => (
					<div className={styles.oneCard} id={`card.${id}`}></div>
				))}
			</div>
		</div>
	);
}

export default GameTask;
