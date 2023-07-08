import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Button({ 
    className,
    to = false, 
    text = false, 
    rounded=false,  
    disable, 
    primary = false, 
    outline = false, 
    small = false, 
    large = false, 
    href,
    leftIcon,
    rightIcon, 
    onClick, 
    children, 
    ...passProps }) {

    let Comp = 'button';
    const classes = cx('wrapper', {
        [className] : className,
        primary,
        outline,
        small,
        large,
        text,
        disable,
        rounded,
    });
    const props = {
        onClick,
        ...passProps
    }

    //Remove event listeners when btn is disabled
    if (disable) {
        Object.keys(props).forEach(key => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        })
    }
    if (to) {
        props.to = to
        Comp = Link
    }
    else {
        props.href = href
        Comp = 'a'
    }
    return (
        <Comp className={classes} {...props}>
            { leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            { rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Comp>
    );
}

export default Button;