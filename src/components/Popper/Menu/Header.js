import styles from './Menu.module.scss'
import classNames from 'classnames/bind'


//Import in components
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

//Use module scss style
const cx = classNames.bind(styles);

function Header({ title, onBack }) {
    return (
        <div>
            <header className={cx('header')}>
                <button className={cx('btn-back')}>
                    <FontAwesomeIcon icon={faChevronLeft} onClick={onBack  }/>
                </button>
                <h4 className={cx('header-title')}>{title}</h4>
            </header>
        </div>
    );
}

export default Header;
