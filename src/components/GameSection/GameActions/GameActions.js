import React from 'react';
import styles from './GameActions.module.css';

function GameActions({
	onHandleStartGame,
	onHandleResetGame,
	startGame,
	gameOver,
}) {
	return (
		<div className={styles.gameActions}>
			{!startGame && <button onClick={onHandleStartGame}>Start</button>}
			{startGame && (
				<>
					{gameOver && <button onClick={onHandleResetGame}>Reset</button>}
				</>
			)}
		</div>
	);
}

export default GameActions;
