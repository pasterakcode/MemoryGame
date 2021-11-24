import React, {useState, useEffect} from "react";
import GameArea from "../GameArea/GameArea";
import styles from './GameSolution.module.css'

function GameSolution ( {onHandleSelectedCard} ) {
    const gameSize = [1, 2, 3, 4, 5, 6, 7, 8, 9];
	const gameSteps = [1, 2, 3, 4, 5, 6];

	return (
		<div className={styles.game}>
			<div className={styles.steps}>
				{gameSteps.map(id => (
					<div className={`${styles.oneStep}`} key={id} id={`step.${id}`}>
						{id}
					</div>
				))}
			</div>
			<div className={styles.gameArea}>
				{gameSize.map((id, i) => (
					<div className={styles.oneCard} key={id} id={`card.${id}`} onClick={(e) => onHandleSelectedCard(e)}></div>
				))}
			</div>
		</div>
	);
}

export default GameSolution;