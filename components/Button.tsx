import { ButtonHTMLAttributes } from 'react';
import styles from '../styles/Button.module.sass';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    children: React.ReactNode;
    className?: string;
}

const Button = ({ children, className, ...props }: ButtonProps) => (
    <button className={`${styles.button} ${className}`} {...props}>
        {children}
    </button>
);

export default Button;