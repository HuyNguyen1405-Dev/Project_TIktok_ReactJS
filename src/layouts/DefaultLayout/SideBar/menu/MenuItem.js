import classNames from 'classnames/bind';
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);
function MenuItem({ title, icon, to}) {
    return ( 
        <NavLink to={to}>
            {icon}
            <span>{title}</span>
        </NavLink>
    );
}
MenuItem.propTypes = {
    title: PropTypes.node.isRequired,
    icon: PropTypes.node.isRequired,
    to: PropTypes.node.isRequired,
}
export default MenuItem;