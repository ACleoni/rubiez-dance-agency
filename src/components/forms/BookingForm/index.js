import React, { Component } from 'react';
import styles from './styles.css';


export default class BookingForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };
    };

    render() {
        return (
            <React.Fragment>
                <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
                <h1 style={{margin: 0}}>
                    Almost Done!
                </h1>
                <p>
                    Please fill out the specific details below.
                </p>
                </div>
			    <form>
                    <textarea name="text" 
                                className={[styles.feedbackInput, styles.textarea].join(' ')} 
                                placeholder="What type of occasion is this? Please provide details" 
                                required={true}>
                    </textarea>      
                    <input name="date" 
                            type="text" 
                            className={styles.feedbackInput} 
                            placeholder="Date of Event" 
                            required={true} 
                    />   
                    <input name="time" 
                            type="text" 
                            className={styles.feedbackInput} 
                            placeholder="Time of Event (Max 1 hour)" 
                            required={true}  
                    />
                    <select name="ageGroup" 
                            className={styles.feedbackInput}
                    >
                        <option selected={true} disabled={true}>
                            Please select your age group
                        </option>
                        <option>
                            21 - 25
                        </option>
                        <option>
                            26 - 30
                        </option>
                        <option>
                            31 - 35
                        </option>
                        <option>
                            36 - 40
                        </option>
                        <option>
                            41+ 
                        </option>
                    </select>
                    <textarea name="text" 
                                className={[styles.feedbackInput, styles.textarea].join(' ')} 
                                placeholder="Comment" required={true} >
                    </textarea>
                    <input type="submit" 
                            className={styles.submit} 
                            value="SUBMIT" 
                    />
                </form>
            </React.Fragment>
        )
    }
};