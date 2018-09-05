import React, { Component } from 'react';
import styles from './styles.css';


export default class ContactForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };
        this._handleSubmit = this._handleSubmit.bind(this);
    };

    _handleSubmit(){
        console.log('submitted')
    };

    render() {
        return (
			<div style={{display: 'block', marginTop: '50px'}}>
			<div style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
                <div className={styles.headerContainer}>
                    <h1 style={{
                        fontSize: '32px'
                    }}>
                        Notable Appearances
                    </h1>
                </div>   
            </div>
				<div style={{display: 'flex', alignItems: 'center', height: '700px', justifyContent: 'space-around'}}>
					<div style={{width: '600px', height: '600px', display: 'flex'}}>
						<img src={require('../../../images/guest1.jpeg')} alt={'img'} style={{width: '100%', transform: 'rotate(90deg)'}} />
					</div>
					
					<div style={{width: '600px', height: '600px', display: 'flex'}}>
						<img src={require('../../../images/guest2.png')} alt={'img'} style={{width: '100%'}} />
					</div>
				</div>
				<hr />
				<form action="" className={styles.contactForm}>
					<span>Contact Us!</span>
					<ul>
						<li>
							<input type="text" placeholder="Name" />
						</li>
						<li>
							<input type="text" placeholder="Email" />
						</li>
						
						<li>
							<input type="text" placeholder="Phone" />
						</li>
						<li>
							<textarea placeholder="Message" rows="2"></textarea>
						</li>
						<li>
							<input type="submit" placeholder="Submit" />
						</li>
					</ul>
				</form>
			</div>
        )
    }
};