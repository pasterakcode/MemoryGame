import React from "react";
import styles from './Header.module.css'

function Header () {
    return (
        <div className={styles.headerBar}>
            <p>Memory Game</p>
        </div>
    )
}

export default Header;