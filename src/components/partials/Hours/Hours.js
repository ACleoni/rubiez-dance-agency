import React, { Component }  from 'react';
import styles from './styles.css';

export default class Hours extends Component {
    render(){
        return (
            <div style={{
                display: 'flex',
                // height: '500px'
            }}>
            <div style={styles.leftImage}>
                <img src={require('../../../images/class.jpg')} alt={'img'} height={'auto'} style={{width: '50vw'}} />
            </div>
                <section class={styles.hours} id={styles.hours}>
                    <h2>Studio Hours</h2>
                    <dl class="hours-days clearfix">
                        <dt class={styles.hoursDayLabel}>Sunday</dt>
                        <dd class={styles.hoursDay}>9:00 AM - 5:00 PM</dd>
                        <dt class={styles.hoursDayLabel}>Monday</dt>
                        <dd class={styles.hoursDay}>9:00 AM - 5:00 PM</dd>
                        <dt class={styles.hoursDayLabel}>Tuesday</dt>
                        <dd class={styles.hoursDay}>9:00 AM - 5:00 PM</dd>
                        <dt class={styles.hoursDayLabel}>Wednesday</dt>
                        <dd class={styles.hoursDay}>9:00 AM - 5:00 PM</dd>
                        <dt class={styles.hoursDayLabel}>Thursday</dt>
                        <dd class={styles.hoursDay}>9:00 AM - 5:00 PM</dd>
                        <dt class={styles.hoursDayLabel}>Friday</dt>
                        <dd class={styles.hoursDay}>9:00 AM - 5:00 PM</dd>
                        <dt class={styles.hoursDayLabel}>Saturday</dt>
                        <dd class={styles.hoursDay}>9:00 AM - 5:00 PM</dd>
                    </dl>
                </section>
            </div>
        )
    }
};