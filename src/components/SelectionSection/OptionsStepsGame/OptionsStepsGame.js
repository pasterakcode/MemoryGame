import React, { useState, useEffect } from 'react';
import styles from './OptionsStepsGame.module.css';

function OptionsStepsGame({ onHandleAllGameLevels, optionsSelectedByDefault }) {
	const [inputValue, setInputValue] = useState(0);
	const handleInputValue = e => {
		setInputValue(e.target.value);
		onHandleAllGameLevels(e.target.value);
	};

	useEffect(() => {
		if (optionsSelectedByDefault.allLevels) {
			const defalutLevelsGame = optionsSelectedByDefault.allLevels;
			setInputValue(defalutLevelsGame);
			onHandleAllGameLevels(defalutLevelsGame);
		}
	}, []);
	return (
		<div className={styles.OptionsStepsGame}>
			<div className={styles.subTitle}>
				<h6>level</h6>
			</div>
			<div className={styles.input}>
				<form>
					<label>
						<input
							type='range'
							id='levels'
							name='levels'
							min='1'
							max='10'
							value={inputValue}
							onChange={handleInputValue}
						/>
						<span>{inputValue}</span>
					</label>
				</form>
			</div>
		</div>
	);
}

export default OptionsStepsGame;
