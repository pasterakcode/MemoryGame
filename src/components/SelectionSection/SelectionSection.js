import React from 'react';
import OptionsSizeGame from './OptionsSizeGame/OptionsSizeGame';
import OptionsStepsGame from './OptionsStepsGame/OptionsStepsGame';
import styles from './SelectionSection.module.css';

function SelectionSection({ onHandleGameAreaSize, onHandleAllGameLevels }) {
	return (
		<div className={styles.selectionSection}>
			<h3>Make choise</h3>
			<div className={styles.options}>
				<OptionsSizeGame onHandleGameAreaSize={onHandleGameAreaSize} />
				<OptionsStepsGame onHandleAllGameLevels={onHandleAllGameLevels} />
			</div>
		</div>
	);
}

export default SelectionSection;
