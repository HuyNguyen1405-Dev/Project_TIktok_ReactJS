//Import with library
import 'tippy.js/dist/tippy.css';
import Tippy from '@tippyjs/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faEllipsisVertical,
	faPlus,
	faEarthAsia,
	faQuestionCircle,
	faKeyboard,
	faUser,
	faBookmark,
	faCoins,
	faGear,
	faSignOut,
} from '@fortawesome/free-solid-svg-icons';
import styles from './header.module.scss';
import classNames from 'classnames/bind';
//================================================

//Import from components
import config from '~/config';
import images from '~/assets/images';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';
import { UploadIcon, MessageIcon, InboxIcon } from '~/components/Icons';
import Image from '~/components/Image/index';
import Search from '~/components/Search';
import { Link } from 'react-router-dom';
//================================================

const cx = classNames.bind(styles);

const MENU_ITEMS = [
	{
		icon: <FontAwesomeIcon icon={faEarthAsia} />,
		title: 'Languages',
		children: {
			title: 'Language',
			data: [
				{
					type: 'language',
					code: 'en',
					title: 'English',
				},
				{
					type: 'language',
					code: 'vi',
					title: 'Vietnamese',
				},
			],
		},
	},
	{
		icon: <FontAwesomeIcon icon={faQuestionCircle} />,
		title: 'Feedback and help',
		to: '/feedback',
	},
	{
		icon: <FontAwesomeIcon icon={faKeyboard} />,
		title: 'Keyboard shortcuts',
	},
];
const MENU_CURRENT = [
	{
		icon: <FontAwesomeIcon icon={faUser} />,
		title: 'Profile',
		to: '/@hoaa',
	},
	{
		icon: <FontAwesomeIcon icon={faBookmark} />,
		title: 'Favorite',
		to: '/favorite',
	},
	{
		icon: <FontAwesomeIcon icon={faCoins} />,
		title: 'Get Coins',
		to: '/coins',
	},
	{
		icon: <FontAwesomeIcon icon={faGear} />,
		title: 'Setting',
		to: '/setting',
	},
	...MENU_ITEMS,
	{
		icon: <FontAwesomeIcon icon={faSignOut} />,
		title: 'Logout',
		to: '/logout',
		separate: true,
	},
];
const currentUser = true;

const Header = () => {
	const handleMenuChange = (menuItem) => {
		switch (menuItem.type) {
			case 'language':
				console.log(menuItem);
				break;
			default:
		}
	};

	return (
		<header className={cx('wrapper')}>
			<div className={cx('content')}>
				<Link to={config.routes.home} className={cx('logo-link')}>
					<img src={images.logo} alt="TikTok" />
				</Link>
			
				<Search />
				<div className={cx('actions')}>
					{currentUser ? (
						<>
							<Tippy
								delay={[0, 200]}
								content="Upload video"
								placement="bottom"
							>
								<button className={cx('action-btn')}>
									<UploadIcon className={cx('icon-upload')} />
								</button>
							</Tippy>
							<button className={cx('action-btn')}>
								<MessageIcon className={cx('icon-message')} />
							</button>
							<button className={cx('action-btn')}>
								<InboxIcon className={cx('icon-inbox')} />
							</button>
						</>
					) : (
						<>
							<Button
								text
								leftIcon={<FontAwesomeIcon icon={faPlus} />}
							>
								Upload
							</Button>
							<Button primary>Log in</Button>
						</>
					)}
					<Menu
						items={currentUser ? MENU_CURRENT : MENU_ITEMS}
						onChange={handleMenuChange}
					>
						{currentUser ? (
							<Image
								src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/42a81079b5885e152707b170d63ba2df~c5_100x100.jpeg?x-expires=1689080400&x-signature=tryfBQB%2BXFuzJTKOpN%2FfY6DjPFU%3D"
								alt="avatar"
								fallback="https://imgt.taimienphi.vn/cf/Images/np/2021/11/26/hinh-anh-avatar-dep.jpg"
								className={cx('avatar-user')}
							/>
						) : (
							<>
								<button className={cx('more-btn')}>
									<FontAwesomeIcon
										icon={faEllipsisVertical}
									/>
								</button>
							</>
						)}
					</Menu>
				</div>
			</div>
		</header>
	);
};

export default Header;
