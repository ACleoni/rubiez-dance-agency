import React, { Component } from 'react';
import styles from './styles.css';

export default class Banner extends Component {
    render() {
        return (
            <React.Fragment>
                <div className={styles.bannContainer}>
                <h1 className={styles.header}>
                    Confidence,
                    Sensuality,
                    Burlesque
                </h1>
                <p className={styles.content}>
                    Professional Dancers for Music Videos,
                    Burlesque Performances, Backup Dance,
                    Promo Modeling, Private Bachelorette and
                    Birthday Parties.
                </p>
                </div>
            </React.Fragment>
        )
    }
}






