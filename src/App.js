import react, { useState } from 'react';
import styles from './App.module.css';
import Header from './components/Header/Header';
import SelectionSection from './components/SelectionSection/SelectionSection';
import GameSection from './components/GameSection/GameSection';
import Footer from './components/Footer/Footer';

function App() {
	return (
		<div className={`${styles.app} container`}>
			<Header />
			<div className={`${styles.mainSection}`}>
				<SelectionSection />
				<GameSection />
			</div>
			<Footer />
		</div>
	);
}

export default App;
