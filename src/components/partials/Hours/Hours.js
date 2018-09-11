import React, { Component }  from 'react';
import styles from './styles.css';

export default class Hours extends Component {
    render(){
        return (
            <div className={styles.mainContainer}>
            <div className={styles.imageContainer}>
                <img src={require('../../../images/class.jpg')} alt={'Dance Class'} />
            </div>
                <section className={styles.hours} id={styles.hours}>
                    <h2>Studio Hours</h2>
                    <dl className="hours-days clearfix">
                        <dt className={styles.hoursDayLabel}>Sunday</dt>
                        <dd className={styles.hoursDay}>9:00 AM - 5:00 PM</dd>
                        <dt className={styles.hoursDayLabel}>Monday</dt>
                        <dd className={styles.hoursDay}>9:00 AM - 5:00 PM</dd>
                        <dt className={styles.hoursDayLabel}>Tuesday</dt>
                        <dd className={styles.hoursDay}>9:00 AM - 5:00 PM</dd>
                        <dt className={styles.hoursDayLabel}>Wednesday</dt>
                        <dd className={styles.hoursDay}>9:00 AM - 5:00 PM</dd>
                        <dt className={styles.hoursDayLabel}>Thursday</dt>
                        <dd className={styles.hoursDay}>9:00 AM - 5:00 PM</dd>
                        <dt className={styles.hoursDayLabel}>Friday</dt>
                        <dd className={styles.hoursDay}>9:00 AM - 5:00 PM</dd>
                        <dt className={styles.hoursDayLabel}>Saturday</dt>
                        <dd className={styles.hoursDay}>9:00 AM - 5:00 PM</dd>
                    </dl>
                </section>
            </div>
        )
    }
};