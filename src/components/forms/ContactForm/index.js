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
				<div className={styles.picContainer}>

					<div className={styles.picContainer1}>
						
					</div>

					<div className={styles.picContainer2}>
						
					</div>
					
					<div className={styles.picContainer3}>
			
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