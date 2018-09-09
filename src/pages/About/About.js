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
                <div className={styles.mainContainer}>
                    <div className={styles.miya}>
                        <img src={require('../../images/miya.png')} 
                            draggable={false} />
                    </div>
                    <div>
                    <div className={styles.headerContainer}>
                        <h1 className={styles.header}>
                            About the Owner
                        </h1>
                    </div>
                    <div className={styles.descContainer}>
                        <p className={styles.desc}>
                            Miya L. Parks is the owner and founder of Rubiez Dance Company LLC. 
                            She lives in Atlanta, GA and an original Atlanta native. 
                            The University of West Georgia is where she obtained a bachelor’s 
                            degree in Business while also being a member of Alpha Kappa Psi, 
                            a co-ed business fraternity. She has been dancing since the age 
                            of 13 on several dance groups in school and summer camp. 
                            As a choreographer, she paved her way through many forms of dance 
                            including jazz, hip hop, and burlesque.
                        </p>
                        <p className={styles.desc}> 
                            In 2009, she started Christian 
                            hip hop dance team in college called Vision. As a flight attendant, 
                            she travels the world extensively but still manages to uphold her 
                            business while encouraging her staff to be dedicated. In 2012, she 
                            joined a team of urban burlesque dancers who enjoyed the art of dance 
                            but there was something missing. Little did she know, this would lead 
                            her to start her own group the very next year. Her creativity and encouragement 
                            from friends and family sparked a great opportunity for her and her business.
                        </p>
                    </div>
                        <div className={styles.sigContainer}>
                        <img src={require('../../images/sig.png')} />
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}