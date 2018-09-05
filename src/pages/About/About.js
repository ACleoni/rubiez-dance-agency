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
                <div style={{
                    display: 'flex',
                    justifyContent: 'center'
                }}>
                    <div className={styles.miya}>
                        <img src={require('../../images/miya.png')} 
                            height={window.screen.availHeight / 1.2}
                            draggable={false} />
                    </div>
                    <div>
                    <div className={styles.headerContainer}>
                        <h1 style={{
                            fontSize: '32px',
                            display: 'flex',
                            justifyContent: 'center'
                        }}>
                            About the Owner
                        </h1>
                    </div>
                    <div className={styles.description} style={{
                        width: window.screen.availWidth / 2
                    }}>
                        <p style={{
                            fontSize: '22px',
                            padding: '0 0em 0 2em'
                        }}>
                            Miya L. Parks is the owner and founder of Rubiez Dance Company LLC. 
                            She lives in Atlanta, GA and an original Atlanta native. 
                            The University of West Georgia is where she obtained a bachelor’s 
                            degree in Business while also being a member of Alpha Kappa Psi, 
                            a co-ed business fraternity. She has been dancing since the age 
                            of 13 on several dance groups in school and summer camp. 
                            As a choreographer, she paved her way through many forms of dance 
                            including jazz, hip hop, and burlesque.
                        </p>
                        <p style={{
                            fontSize: '22px',
                            padding: '0 0em 0 2em'
                        }}> 
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
                        <div style={{
                            display: 'flex',
                            justifyContent: 'center',
                        }}>
                        <img src={require('../../images/sig.png')} />
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}