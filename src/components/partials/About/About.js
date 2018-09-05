import React, { Component }  from 'react';
import styles from './styles.css';

export default class About extends Component {
    render(){
        return (
            <div className={styles.aboutContainer}>
                <div className={styles.headerContainer}>
                    <h1 style={{
                        fontSize: '32px'
                    }}>
                        About Us
                    </h1>
                </div>
                <div className={styles.description}>
                    <p style={{
                        fontSize: '22px'
                    }}>
                        Rubiez Dance Agency is specialized 
                        in the development of female professional 
                        dancers & models. We condition dancers for 
                        performances, music videos, backup dance, and more. 
                        Book a choreographer for a private dance session for 
                        a girl’s night out, bachelorette or birthday party. 
                        Either way, we’ve got you covered for your next event!
                    </p>
                </div>
                <div className={styles.btnContainer}>
                    <a href={'/miya'} className={styles.link}><div className={styles.ownerLink}>
                        Meet The Owner
                    </div>
                    </a>
                </div>
                <hr />
            </div>
        )
    }
};