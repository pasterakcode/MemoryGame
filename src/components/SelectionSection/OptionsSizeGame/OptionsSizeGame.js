import React from 'react';
import styles from './OptionsSizeGame.module.css';

function OptionsSizeGame() {
	return (
		<div className={styles.OptionsSizeGame}>
			<div className={styles.selectionCard}>
				<span>4x4</span>
			</div>
			<div className={styles.selectionCard}>
				<span>5x5</span>
			</div>
		</div>
	);
}

export default OptionsSizeGame;
