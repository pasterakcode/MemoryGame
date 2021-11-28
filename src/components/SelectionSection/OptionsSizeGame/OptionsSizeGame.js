import React, { useState, useEffect } from 'react';
import styles from './OptionsSizeGame.module.css';

function OptionsSizeGame({ onHandleGameAreaSize, optionsSelectedByDefault }) {
	const [selectedButton, setSelectedButton] = useState(null);

	const handleGameAreaSize = e => {
		markSelectedButton(e.target);
		const gameSize = e.target.id;
		onHandleGameAreaSize(gameSize);
	};
	const markSelectedButton = button => {
		selectedButton && (selectedButton.style.backgroundColor = 'transparent');
		setSelectedButton(button);
		button.style.backgroundColor = 'gray';
	}
	useEffect(() => {
		if(optionsSelectedByDefault.size){
			const defalutSizeGame = optionsSelectedByDefault.size;
			markSelectedButton(document.getElementById(defalutSizeGame))
			onHandleGameAreaSize(defalutSizeGame);
		}
	}, [])
	

	return (
		<div className={styles.OptionsSizeGame}>
			<div className={styles.subTitle}>
				<h6>size</h6>
			</div>
			<div className={styles.buttons}>
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
		</div>
	);
}

export default OptionsSizeGame;
