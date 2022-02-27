import styles from '../styles/Greeting.module.sass';
import Button from './Button';
// import { ReactComponent as ArrowIcon } from './images/arrows-down.svg';


const Greeting = () => {

    const onContactClick = () => {
        const contactForm = document.getElementById('contact');
        contactForm?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className={styles.greeting}>
            <h1>HI,</h1>
            <h1>I{"'"}m Paulo,</h1>
            <h1>Web developer</h1>
            <h2>Full Stack Software Engineer</h2>
            <Button onClick={onContactClick}>Contact me</Button>
            {/* <div className={styles.scrollAbout}>
                About me <ArrowIcon className={styles.arrow} />
            </div> */}
        </div>
    );
};

export default Greeting;