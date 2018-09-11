import React, { Component } from 'react';
import styles from './styles.css';

export default class Banner extends Component {
    render() {
        return (
            <div className={styles.bannerContainer}>
                <h2 className={styles.bannerTitle}>
                    Confidence,
                    Sensuality,
                    Burlesque
                </h2>
                <p className={styles.bannerContent}>
                    Professional Dancers for Music Videos, 
                    Burlesque Performances, Backup Dance, 
                    Promo Modeling, Private Bachelorette & 
                    Birthday Parties.
                </p>
            </div>
        )
    }
}






