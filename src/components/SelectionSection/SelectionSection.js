import React from 'react';
import OptionsSizeGame from './OptionsSizeGame/OptionsSizeGame';
import OptionsStepsGame from './OptionsStepsGame/OptionsStepsGame';
import styles from './SelectionSection.module.css';

function SelectionSection({
	startGame,
	onHandleGameAreaSize,
	onHandleAllGameLevels,
}) {
	return (
		<>
			{!startGame && (
				<div className={styles.selectionSection}>
					<div className={styles.titleSelectSection}>
						<h3>Options</h3>
					</div>
					<div className={styles.options}>
						<OptionsSizeGame onHandleGameAreaSize={onHandleGameAreaSize} />
						<OptionsStepsGame onHandleAllGameLevels={onHandleAllGameLevels} />
					</div>
				</div>
			)}
		</>
	);
}

export default SelectionSection;
