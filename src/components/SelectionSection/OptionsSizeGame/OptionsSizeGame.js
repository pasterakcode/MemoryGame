import React from 'react';
import styles from './OptionsSizeGame.module.css';

function OptionsSizeGame({ onHandleGameAreaSize }) {
	const handleGameAreaSize = e => {
		const gameSize = e.target.id;
		onHandleGameAreaSize(gameSize);
	};

	return (
		<div className={styles.OptionsSizeGame}>
			<button
				id='9'
				className={styles.selectionCard}
				onClick={handleGameAreaSize}
			>
				3x3
			</button>
			<button
				id='16'
				className={styles.selectionCard}
				onClick={handleGameAreaSize}
			>
				4x4
			</button>
			<button
				id='25'
				className={styles.selectionCard}
				onClick={handleGameAreaSize}
			>
				5x5
			</button>
		</div>
	);
}

export default OptionsSizeGame;
