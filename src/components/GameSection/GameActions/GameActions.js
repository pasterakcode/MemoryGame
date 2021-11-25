import React from 'react';
import styles from './GameActions.module.css';

function GameActions( { onHandleStartGame, onHandleResetGame } ) {
	return (
		<div className={styles.gameActions}>
			<button onClick={onHandleStartGame}>Start</button>
			<button onClick={onHandleResetGame}>Reset</button>
		</div>
	);
}

export default GameActions;