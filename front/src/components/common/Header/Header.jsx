import React from "react"

import userImage from '../../../images/header/user.svg'

import Hamburger from "./Hamburger/Hamburger"

import styles from './Header.module.scss'



const Header = () => {
    return (
        <header className={styles.header}>
            <button type="button">
                <img src={userImage} alt="Auth" />
            </button>
            <Hamburger/>
        </header>
    )
}

export default Header