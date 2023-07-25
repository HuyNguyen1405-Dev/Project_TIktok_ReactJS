import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);

function Button({
    className,
    to = false,
    text = false,
    rounded = false,
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
        [className]: className,
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
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Comp>
    );
}

Button.propTypes = {
    className: PropTypes.string,
    to:PropTypes.string,
    text:PropTypes.string,
    rounded:PropTypes.bool,
    disable:PropTypes.bool,
    primary:PropTypes.bool,
    outline:PropTypes.bool,
    small:PropTypes.bool,
    large:PropTypes.bool,
    href:PropTypes.string,
    leftIcon:PropTypes.node,
    rightIcon:PropTypes.node,
    onClick:PropTypes.func,
    children:PropTypes.node.isRequired,
}
export default Button;