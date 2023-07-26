import React from 'react'
import styles from './sideBar.module.scss'
import classNames from 'classnames/bind'
import config from '~/config'
import Menu, { MenuItem } from '~/layouts/DefaultLayout/SideBar/menu';
const cx = classNames.bind(styles)

const index = () => {
  return <aside className={cx('wrapper')}>
    <Menu>
      <MenuItem title="For you" to={config.routes.home} icon={null}/>
      <MenuItem title="For you" to={config.routes.home} icon={null}/>
      <MenuItem title="For you" to={config.routes.home} icon={null}/>
    </Menu>
  </aside>
}

export default index