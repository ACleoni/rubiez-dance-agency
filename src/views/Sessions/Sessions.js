import React, {Component} from 'react';
import { Nav, Checkout } from '../../components/partials';
import {BookingForm} from '../../components/forms'
import styles from './styles.css';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { sendMail } from '../../redux/actions/UserActions';

class Sessions extends Component {
    constructor(props){
        super(props);
        this.state = {
            modalVisible: false,
            selectedSession: '',
            sessionsArray: 
            [
                {
                    title: 'Twerk It! (For Beginners)',
                    li_1: '90 min Twerk Class',
                    li_2: 'Up to 10 guests',
                    li_3: '$200 ($20 per guest)'

                },
                {
                    title: 'Touch Me, Tease Me. (Burlesque for Beginners)',
                    li_1: '90 min Heels Class',
                    li_2: 'Up to 10 guests',
                    li_3: '$200 ($20 per guest)'

                },
                {
                    title: 'Twerk and Tease (Combination for Beginners)',
                    li_1: '90 Min Twerk and Tease Class',
                    li_2: 'Up to 10 guests',
                    li_3: '$200 ($20 per guest)'
                }
            ]
        }
        this._handleSelectedSession = this._handleSelectedSession.bind(this);
        this._handleDateChange = this._handleDateChange.bind(this);
    }

    _handleSelectedSession(title) {
            this.setState({ selectedSession: title })
    }

    _handleDateChange(date) {
        this.setState({
            startDate: date
        });
        setTimeout(() => {
            console.log(this.state)
        })
    }

    render() {
        return (
            <React.Fragment>
                {this.props.user.userInfo.paid ?
                    <div className={styles.modal} style={{display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'absolute', height: '100%', width: '100vw', zIndex: 999}}>
                        <div>
                            <BookingForm />
                        </div>
                    </div>
                                        : null
                }
                <Nav />
                <div className={[styles.container, styles.fullScreen].join(' ')}>
                    <section className={styles.row}>
                        <h1 className={styles.title}>Private Sessions</h1>
                        <hr/>
                        <div className="col-xs-8 col-xs-offset-2">
                            <p className={styles.lead} style={{textAlign: 'center'}}>
                                All Private sessions are for women 21 and up and require a $200 booking fee. 
                                Guests may bring birthday cakes. We provide the wine, water, dancer, and venue.
                            </p>
                            <hr/>
                        </div>
                    </section>
                    <div className={styles.articleContainer}>
                        {this.state.sessionsArray.map((session, index) => {
                            return (
                                <article 
                                    className={styles.article} 
                                    key={index} 
                                    onClick={() => this._handleSelectedSession(session.title)}
                                >
                                    <div className={styles.cards}><span className="glyphicon glyphicon-flash icon"></span>
                                        <hr className={styles.divider}/>
                                        <h2 className={styles.title}>{session.title}</h2>
                                        <div className={styles.info}>
                                            <hr className={styles.divider}/>
                                            <ul>
                                                <li>
                                                    {session.li_1}
                                                </li>  
                                                <li>
                                                    {session.li_2}
                                                </li>
                                                <li>                               
                                                    {session.li_3}
                                                </li>
                                            </ul>
                                            <Checkout 
                                                date={this.state.startDate} 
                                                amount={20000} 
                                                session={this.state.selectedSession} 
                                            />
                                        </div>
                                    </div>
                                </article>
                            )
                        })}
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        sendMail: (user) => {
            dispatch(sendMail(user))
        }
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Sessions))