import React, {useState} from "react";
import GameSolution from "./GameSolution/GameSolution";
import GameTask from "./GameTask/GameTask";
import styles from './GameSection.module.css'

function GameSection () {
    const [selectedCard, setSelectedCard] = useState(null)

    const handleSelectedCard = (e) => {
        setSelectedCard(e.target.attributes.id);
        console.log(e.target.attributes.id);
    }
    return (
        <div className={styles.gameSection}>
            <GameTask selectedCard={selectedCard}/>
            <GameSolution onHandleSelectedCard={handleSelectedCard}/>
        </div>
    )
}

export default GameSection;