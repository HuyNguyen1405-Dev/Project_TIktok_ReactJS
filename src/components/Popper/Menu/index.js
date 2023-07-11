import 'tippy.js/dist/tippy.css';
import Tippy from '@tippyjs/react/headless';
import styles from './Menu.module.scss'
import classNames from 'classnames/bind'


//Import in components
import { Wrapper as PopperWrapper } from '~/components/Popper'
import MenuItem from './MenuItems';
import Header from './Header';
import { useState } from 'react';
//Use module scss style
const cx = classNames.bind(styles);
const defaultFn = () => {};
function Menu({ children, items = [], onChange = defaultFn }) {

    const [history, setHistory] = useState([{ data: items }])
    const current = history[history.length - 1]

    const render_items = () => {
        return current.data.map((item, index) => {
            const isParent = !!item.children

            return <MenuItem key={index} data={item} onClick={() => {
                if (isParent) {
                    setHistory(prev => [...prev, item.children]);
                }
                else{
                    onChange(item)
                }
            }} />
        });
    }
    return (
        <div>
            <Tippy
                delay={[0, 700]}
                placement='bottom-end'
                offset={[12, 8]}
                interactive
                render={attrs => (
                    <div className={cx('content')} tabIndex="-1" {...attrs}>
                        <PopperWrapper className={cx('menu-popper')}>
                            {history.length > 1 && <Header title="Language" onBack={() => {
                                setHistory((prev) => prev.slice(0, prev.length - 1))
                            }} />}
                            {render_items()}
                        </PopperWrapper>
                    </div>
                )}
                onHide={() => setHistory(prev => prev.slice(0,1))}
            >
                {children}
            </Tippy>
        </div>
    );
}

export default Menu;
