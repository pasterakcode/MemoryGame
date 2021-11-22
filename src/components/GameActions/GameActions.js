import React from 'react';
import styles from './GameActions.module.css';

function GameActions() {
	return (
		<div className={styles.gameActions}>
			<button>Start</button>
			<button>Reset</button>
		</div>
	);
}

export default GameActions;