import React from 'react'
import styles from './header.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

const index = () => {
    return <header className={cx('wrapper')}>
        <div className={cx('content')}>

        </div>
    </header>
}

export default index