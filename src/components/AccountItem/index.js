import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const cx = classNames.bind(styles)
function AccountItem() {
    return ( 
        <div className={cx('wrapper')}>
            <img className={cx('avatar')} src="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/082d64bcfb39f8a18294794f75fbee17~c5_100x100.jpeg?x-expires=1688900400&x-signature=rEqrM8TTioD9REiEKVFSxOUlvHU%3D" alt="Avatar user"  />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Nguyen Van B</span>
                    <FontAwesomeIcon className={cx('check-icon')} icon={faCheckCircle}/>
                </h4>
                <span className={cx('user-name')}>A@123</span>
            </div>
        </div>
    );
}

export default AccountItem;