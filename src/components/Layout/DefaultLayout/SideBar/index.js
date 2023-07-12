import React from 'react'
import styles from './sideBar.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

const index = () => {
  return <aside className={cx('wrapper')}>
    <h2>SideBar</h2>
  </aside>
}

export default index