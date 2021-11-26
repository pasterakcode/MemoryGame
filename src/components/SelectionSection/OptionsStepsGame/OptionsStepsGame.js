import React, { useState } from 'react';
import styles from './OptionsStepsGame.module.css';

function OptionsStepsGame({ onHandleAllGameLevels }) {
	const [inputValue, setInputValue] = useState(0);
	const handleInputValue = e => {
		setInputValue(e.target.value);
		onHandleAllGameLevels(e.target.value);
	};

	return (
		<div className={styles.OptionsStepsGame}>
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
					{inputValue}
				</label>
			</form>
		</div>
	);
}

export default OptionsStepsGame;
