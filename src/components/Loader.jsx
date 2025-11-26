import { useEffect, useState } from 'react'
import styles from '../styles/Loader.module.css'

function Loader() {
    return (
        <div className={styles.loader}>
            <div className={styles.loaderCircle}></div>
            <div className={styles.loaderText}>Loading Shanmukha Portfolio...!</div>
        </div>
    )
}

export default Loader
