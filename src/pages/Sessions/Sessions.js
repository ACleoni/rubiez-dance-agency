import React, {Component} from 'react';
import { Nav } from '../../components/partials';
import styles from './styles.css';

export default class About extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <React.Fragment>
                <Nav />
                <div className={[styles.container, styles.fullScreen].join(' ')}>
    <section class={styles.row}>
        <h1 class={styles.title}>Private Sessions</h1>
        <hr/>
        <div class="col-xs-8 col-xs-offset-2">
            <p class={styles.lead} style={{textAlign: 'center'}}>All Private sessions are for women 21 and up and require a $150 booking fee. Guests may bring outside, soda, water, and birthday cakes. You may also bring wine but no alcohol. </p>
            <hr/>
        </div>
    </section>
    <div style={{display: 'flex', justifyContent: 'space-between'}}>
        <article style={{width: '320px'}}>
            <div className={styles.cards}><span class="glyphicon glyphicon-flash icon"></span>
                <hr className={styles.divider}/>
                <h2 class={styles.title}>Twerk It! (For Beginners)</h2>
                <div className={styles.info}>
                    <hr className={styles.divider}/>
                        <ul>
                            <li>
                            90 min Twerk Class
                            </li>  
                            <li>
                            Up to 10 guests
                            </li>
                            <li>                               
                            $150 ($15 per guest)
                            </li>
                        </ul>
                        <div className={styles.btnContainer}>
                    <a href={'/miya'} className={styles.link}><div className={styles.ownerLink}>
                        Book Session
                    </div>
                    </a>
                </div>
                    </div>
            </div>
        </article>
        <article style={{width: '320px'}}>
            <div class={styles.cards}><span class="glyphicon glyphicon-bookmark icon"></span>
                <hr className={styles.divider} />
                <h2 className={styles.title}>Touch Me, Tease Me. (Burlesque For Beginners)</h2>
                <div className={styles.info}>
                    <hr className={styles.divider}/>
                    <ul>
                            <li>
                            90 min Heels Class
                            </li>  
                            <li>
                            Up to 10 guests  
                            </li>
                            <li>                               
                            $150 ($15 per guest)
                            </li>
                        </ul>
                        <div className={styles.btnContainer}>
                    <a href={'/miya'} className={styles.link}><div className={styles.ownerLink}>
                        Book Session
                    </div>
                    </a>
                </div>
                </div>
            </div>
        </article>
        <article style={{width: '320px'}}>
            <div class={styles.cards}><span class="glyphicon glyphicon-ice-lolly-tasted icon"></span>
                <hr class={styles.divider} />
                <h2 class={styles.title}>Twerk and Tease (Combination for Beginners)</h2>
                <div class={styles.info}>
                    <hr class={styles.divider} />
                    <ul>
                            <li>
                            90 Min Twerk and Tease Class
                            </li>  
                            <li>
                            Up to 10 guests
                            </li>
                            <li>                               
                            $200 ($20 per guest)
                            </li>
                        </ul>
                        <div className={styles.btnContainer}>
                    <a href={'/miya'} className={styles.link}><div className={styles.ownerLink}>
                        Book Session
                    </div>
                    </a>
                </div>
                </div>
            </div>
        </article>
    </div>
</div>
            </React.Fragment>
        )
    }
}