import React from 'react';
import OptionsSizeGame from './OptionsSizeGame/OptionsSizeGame';
import OptionsStepsGame from './OptionsStepsGame/OptionsStepsGame';
import styles from './SelectionSection.module.css';

function SelectionSection() {
	return (
		<div className={styles.selectionSection}>
			<h3>Make choise</h3>
			<div className={styles.options}>
				<OptionsSizeGame />
				<OptionsStepsGame />
			</div>
		</div>
	);
}

export default SelectionSection;
