import React, {Component} from 'react';
import { Nav } from '../../components/partials';
import styles from './styles.css';

export default class Bookings extends Component {
    constructor(props){
        super(props);
        this.state = {
            dancersArray: 
            [
                {
                    name: 'Amber',
                    description: `Amber is a young firecracker with a passion for dance. She began her career at the early age of 5 where she trained in ballet, jazz, and hip-hop at T.H. Williams Dance Academy in Memphis, TN. She went on to dance in grade school, all-star and college. Amber has been seen in music videos such as Vivian Green "I don't know" and Sean Anthony "Captivated". She also has had the opportunity to act and dance live in productions such as Beauty Shop: Divas Unleashed, directed by Shelley Garret. Amber has experience in choreography, music videos, and backup dancing.`,
                    image: './images/Amber.jpg'
                },
                {
                    name: 'Beautifull',
                    description: `Beautifull is a dynamic woman of talent, ambition, and appeal. In the world of arts, media, and entertainment, she blazes as a runway model and choreographer for Rubiez. She has experience as a model coach and talent/project coordinator. Beautifull has over 20 years of formal dance experience and training, to include ballet, hip-hop, jazz/contemporary, and lyrical including choreography and dance studio instructor experience. She also has her own burlesque workout brand called Bedroom Burlesque and experience as a choreographer with Fever The Company. Beautifull is a joy to work with, loyal, and an exciting dancer to book for any event, production or show.`,
                    image: './images/Beautifull .jpeg'
                },
                {
                    name: 'Chante',
                    description: `Chante has been dancing since the age of 2 and has 15 years of trained dancing in Tap, Ballet & Jazz. She was born in Jamaica, lived in Connecticut for 18 years before moving to Georgia in 2017 to expand her dance career. She has experience in music videos, backup dancing, promotional photo shoots & performances. Her experience in music videos includes A-Boogie w Da Hoodie & Davido to their song “Way Too Fly” and Summerella feat. Jacquees’ song “Pull Up”.`,
                    image: './images/Chante.jpeg'
                },
                {
                    name: 'Ketia',
                    description: `Ketia is spoken word artist and runway model. She has participated in numerous fashion shows since 2009 and assisted as a runway coach for multiple designers. She began writing and performing at the age of 15. For the past 2 years, she has had the opportunity to "sharpen" her skills by becoming a member of the Atlanta Burlesque Community and it made her a better entertainer. She performs mime praise dance in the church delivering praise messages always reminds her of where she has been, what's to come, and greatful for every opportunity.`,
                    image: './images/Ketia.png'
                },
                {
                    name: 'Love',
                    description: `Love has been a part of Rubiez for a few months and has already shined like a star. Although she is a fairly new dancer and model, she remains dedicated in being attentive and available for gigs at any moment. She is a hardworking self-starter who will never give up on perfecting her craft. If a client needs a promotional model to promote their brand at a women’s conference, networking event, or photoshoot, Love aims at making herself available and helpful at any moment’s notice.`,
                    image: './images/Love.jpeg'
                },
                {
                    name: 'Mikecia',
                    description: `Mikecia has been a model and dancer for Rubiez for several months and has been one of the most driven dancers in such a short time period. Since being a part of Rubiez, she has been featured in the “Superfly’ movie, a reality show with Stevie J called “Leave it to Steve”and many other gigs with clients. She was also featured as a dancer at our “Spice it Up” burlesque show that showcased heels dancers with amazing talent. Mikecia makes herself available for gigs at any moment proving her dedication and loyalty. With her modeling background, she has an amazing portfolio with high quality images and maintains professionalism everywhere she goes.`,
                    image: './images/Mikecia.jpg'
                },
                {
                    name: 'Paige',
                    description: `Paige also known as “Cupid “ to her dance community left Florida as a student to pursue her dance career in Atlanta. She worked at Dance 411 Studios as an intern for nine months and worked her way up as a Heels Instructor for three years. She has had the opportunity to work with top industry artists and actors in Atlanta and overseas. She was featured on the new upcoming BET series “Bobby Brown “ movie and wrapped up her 3rd Tour with local Atlanta Artist “ 2chainz “. She is currently on tour with Jeremih and Teyana Taylor ripping up the stage while traveling the world. As a Rubiez choreographer, she has experience as a promo model and choreographer teaching women confidence and sensual body movement.`,
                    image: './images/Paige.jpg'
                },
                {
                    name: 'Naomi',
                    description: `Naomi Vul Seyy is a fearless entertainer and the lead choreographer for Rubiez with many years of dance experience. She has a natural ability to teach others how to be sensual and confident in their own skin ensuring that a client would want to book her again. Her talent excels in Burlesque and Boudoir centered in teaching, performing, and assisting in other dancers’ development. She has extensive experience in drama, Broadway, jazz, contemporary and hip hop choreography. Naomi is guaranteed to entertain any crowd and her bubbly presence leaves a stamp on every room and person she encounters.`,
                    image: './images/Naomi.jpeg'
                },
                {
                    name: 'Nettie',
                    description: `Nettie has been a model and dancer for Rubiez for a little over a year. She has participated in many gigs involving major and independent artists. Her Burlesque background has given her the motivation to excel on the stage wherever she goes. As a backup dancer, model, and burlesque queen, she has had the opportunity be featured in broadway productions, performances and music videos. Nettie has a sweet personality and always makes a point to make sure that her audience will remember her. She is the perfect example of a dancer that developed herself and stops at nothing to get what she truly desires.`,
                    image: './images/Nettie.jpg'
                },
                {
                    name: 'Jazze',
                    description: `Jazze derived from one of the most classical genres of music, originated by her father who loves jazz music. Her dance career began at an early age of seven with an introduction to ballet and tap classes, on a military base in Virginia. After graduating from Clark Atlanta University with a Bachelor’s Degree in Mass Media, her natural talents brought her to Rubiez in 2017. The professional dancer, model and actress’ career  has surfaced with Rubiez, as a background dancer for award winning artist such as Amanda Pollard, Zonnique (Tiny’s Daughter),  independent artists such as Shawntel Nix. She also launched her first ‘Twerk & Tease’ fitness class as an instructor with the company.`,
                    image: './images/Jazze.jpeg'
                },
                {
                    name: 'PraRenee’',
                    description: `PraRenee’ is a professional trained dancer and entertainer. She accepts that training never stops and there is always room for growth. She is well-groomed and has worked with some of the most influential choreographers and artists in the industry. PraRenee’ also has many talents like singing and sewing. She owns her own fitness and performance wear brand called Armre’Lux LLC.`,
                    image: './images/PraRenee.jpg'
                },
                {
                    name: 'Shanelle',
                    description: `Shanelle has been dancing for over 10 years and has always loved perfecting her craft. Her training began in high school in Rochester, NY where she majored in dance. She has extensive training in Modern, Salsa, African, and folkloric dance. In high school, she shaped her dance passion by joining “Sweet Dancerz”, a hip hop dance crew. She received her Bachelor of Arts in Dance and moved to Atlanta shortly after to pursue her dance dreams.`,
                    image: './images/Shanelle.jpeg'
                },
            ]
        }
    }

    render() {
        return (
            <React.Fragment>
                <Nav />
                {this.state.dancersArray.map((dancer, index) => {
                    return <React.Fragment key={index}>
                                <div className={styles.profileContainer}>
                                    <span className={styles.imgContainer}>
                                        <img src={require(`${dancer.image}`)} className={styles.img} />
                                    </span>
                                    <span className={styles.infoContainer}>
                                        <h1 className={styles.dancerName}>{dancer.name}</h1>
                                        <p className={styles.dancerDesc}>{dancer.description}</p>
                                        <div className={styles.btnContainer}>
                                            <a href={'/miya'} className={styles.link}>
                                                <div className={styles.ownerLink}>
                                                    Book Now
                                                </div>
                                            </a>
                                        </div>
                                    </span>
                                </div>
                                <hr className={styles.lineBrk} />
                            </React.Fragment>
                    
                })}
            </React.Fragment>
        )
    }
}

