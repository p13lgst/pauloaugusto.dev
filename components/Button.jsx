import styles from '../styles/Button.module.sass';

const Button = ({ children, className, ...props }) => (
    <button className={`${styles.button} ${className}`} {...props}>
        {children}
    </button>
);

export default Button;