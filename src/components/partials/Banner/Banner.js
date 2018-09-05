import React, { Component } from 'react';
import styles from './styles.css';

export default class Bannner extends Component {
    render() {
        return (
            <div className={styles.bannerContainer}>
                <h1 style={{
                    fontSize: '32px',
                    color: 'white',
                    margin: 0
                }}>
                    Confidence,
                    Sensuality,
                    Burlesque
                </h1>
                <p style={{
                    width: '500px',
                    fontSize: '22px',
                    color: 'white',
                    margin: 0,
                    
                }}>
                    Professional Dancers for Music Videos, 
                    Burlesque Performances, Backup Dance, 
                    Promo Modeling, Private Bachelorette & 
                    Birthday Parties.
                </p>
            </div>

        )
    }
}






