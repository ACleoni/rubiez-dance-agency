import React, {Component} from 'react';
import { Nav, Hours, Banner, Flyers, About } from '../../components/partials';
import { ContactForm }  from '../../components/forms';
import styles from './styles.css';


export default class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            
        }
    }

    componentDidMount() {
        console.log(styles)
    }

    render() {
        return (
            <React.Fragment>
                <Nav />
                <img src={require('../../images/mainbg.jpg')} width={'100%'} alt={'img'} />
                <Banner />
                <Flyers />
                <div id='about'><About /></div>
                <Hours />
                <div id='contact'><ContactForm /></div>
            </React.Fragment>
        )
    }
};