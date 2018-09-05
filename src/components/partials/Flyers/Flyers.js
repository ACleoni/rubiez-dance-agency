import React, { Component }  from 'react';
import styles from './styles.css';

export default class Flyers extends Component {
    render(){
        return (
            <div className={styles.flyersContainer}>
                <div className={styles.flyer}>
                    <div className={styles.modal}>
                        <img src={require('../../../images/flyerleft.jpg')} alt={'img'}/>
                    </div>
                </div>
                <div className={styles.flyer}>
                    <div className={styles.modal}>
                        <img src={require('../../../images/flyermiddle.jpg')} alt={'img'} />
                    </div>
                </div>
                <div className={styles.flyer}>
                    <div className={styles.modal}>
                        <img src={require('../../../images/flyerright.jpg')} alt={'img'} />
                    </div>
                </div>
            </div>
        )
    }
};