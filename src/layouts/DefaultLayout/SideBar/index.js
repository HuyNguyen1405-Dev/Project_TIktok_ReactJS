import React from 'react'
import styles from './sideBar.module.scss'
import classNames from 'classnames/bind'
import config from '~/config'
import Menu, { MenuItem } from '~/layouts/DefaultLayout/SideBar/menu';
import { HomeIcon, UserGroupIcon, LiveIcon, LiveActiveIcon, UserGroupActiveIcon, HomeActiveIcon } from '~/components/Icons';

const cx = classNames.bind(styles)

const index = () => {
  return <aside className={cx('wrapper')}>
    <Menu>
      <MenuItem title="For you" to={config.routes.home} icon={<HomeIcon />} activeIcon= {<HomeActiveIcon />}/>
      <MenuItem title="Following" to={config.routes.following} icon={<UserGroupIcon />} activeIcon= {<UserGroupActiveIcon/>}/>
      <MenuItem title="LIVE" to={config.routes.live} icon={<LiveIcon />} activeIcon= {<LiveActiveIcon />}/>
    </Menu>
  </aside>
}

export default index