import React, { Component }  from 'react';
import styles from './styles.css';

export default class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchClass: false
        }
        this._toggleSearch = this._toggleSearch.bind(this);
    }

    _toggleSearch() {
        this.setState({
            searchClass: !this.state.searchClass
        })
    }

    render() {
        let barClass = [styles.navbar];
        if(this.state.searchClass === true) {
            barClass.push(styles.searchOpen)
        }
        return (
            <nav className={barClass.join(' ')}>
                <div className={[styles.overlay, styles.btnClose].join(' ')} />
                <div className={[styles.container, styles.dFlex].join(' ')}>
                    <a href={'/'} className={styles.title}>
                        <img src={require('../../../images/logo.png')} alt={'Logo'} />
                    </a>
                    <ul>
                        <a href="/">
                            <span>Home</span>
                        </a>
                        <a href="#about">
                            <span>About Us</span>
                        </a>
                        <a href="/sessions">
                            <span>Private Sessions</span>
                        </a>
                        
                        <a href="/bookings">
                            <span>Book Dancers</span>
                        </a>
                        
                        <a href="#contact">
                            <span>Contact Us</span>
                        </a>
                    </ul>
                </div>
            </nav>
        )
    }
}
