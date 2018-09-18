import React, {Component} from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';
import styles from './styles.css';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { setUser } from '../../../redux/actions/UserActions';


class Checkout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                paid: false,
                name: '',
                email: '',
                description: '',
                addressLine: '',
                addressCity: '',
                addressState: '',
                addressCountry: '',
                addressZip: ''
            }  
        }
        this._handleUserInfo = this._handleUserInfo.bind(this);
    }

    _handleUserInfo() {
        this.props.setUser(this.state.user)
    }
    
    onToken = (amount) => token => 
        axios.post('http://localhost:1337/stripe', {
            amount,
            description: this.props.session,
            token
        })
        .then(res => {
            console.log(res)
            if (res.data.paid === true) {
                this.setState({
                    user: {
                        paid: true, 
                        name: token.card.name,
                        email: res.data.receipt_email,
                        description: res.data.description,
                        addressLine: token.card.address_line1,
                        addressCity: token.card.address_city,
                        addressState: token.card.address_state,
                        addressCountry: token.card.address_country,
                        addressZip: token.card.address_zip
                    }
                })
                    this._handleUserInfo()
            } else {
                    alert('We were unable to process your payment in the amount of ' + this.props.amount + '. Please try again.')
            }
        })
        .catch(err => console.error(err))

    render() {
        return (
            <React.Fragment>
                <StripeCheckout
                    token={this.onToken(this.props.amount)}
                    name={'Rubiez Dance Agency'}
                    description={this.props.session}
                    stripeKey={ process.env.NODE_ENV === 'development' ? 
                                process.env.TEST_STRIPE_PUBLISHABLE_KEY : 
                                process.env.LIVE_STRIPE_PUBLISHABLE_KEY }
                    amount={this.props.amount}
                    billingAddress={true}
                    shippingAddress={true}
                    zipCode={true}
                    image={require('../../../images/gem.png')}
                >
                    <div className={styles.btnContainer}>
                        <a className={styles.link}>
                            <div className={styles.ownerLink}>
                                Book Session
                            </div>
                        </a>
                    </div>
                </StripeCheckout>
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
        setUser: (userInfo) => {
            dispatch(setUser(userInfo))
        }
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Checkout))