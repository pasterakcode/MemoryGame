import React from 'react';
import styles from './GameActions.module.css';

function GameActions( { onHandleStartGame } ) {
	return (
		<div className={styles.gameActions}>
			<button onClick={onHandleStartGame}>Start</button>
			<button>Reset</button>
		</div>
	);
}

export default GameActions;