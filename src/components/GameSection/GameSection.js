import React, { useState } from 'react';
import GameSolution from './GameSolution/GameSolution';
import GameTask from './GameTask/GameTask';
import styles from './GameSection.module.css';

function GameSection({ startGame }) {
	const [selectedCard, setSelectedCard] = useState([]);

	const handleSelectedCard = e => {
		let newSelectedCard = 1*(e.target.attributes.id.value.replace("card.", ""));
		setSelectedCard(prev => [...prev, newSelectedCard]);
	};
	return (
		<div className={styles.gameSection}>
			<GameTask selectedCard={selectedCard} startGame={startGame} />
			<GameSolution onHandleSelectedCard={e => handleSelectedCard(e)} />
		</div>
	);
}

export default GameSection;
