import classNames from 'classnames/bind';

import styles from './Header.module.scss';
import logo from '../../../assets/logo.svg';
import basket from '../../../assets/basket.svg';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);
const Header = () => {
  return (
    <header className={cx('header')}>
      <div className={cx('container')}>
        <nav className={cx('navigation')}>
          <div>
            <Link to="">
              <img src={logo} alt="" className={cx('logo')} />
            </Link>
          </div>
          <ul className={cx('list')}>
            <li>
              <Link to="" className={cx('link')}>
                Main Page
              </Link>
            </li>
            <li>
              <Link to="" className={cx('link')}>
                Categories
              </Link>
            </li>
            <li>
              <Link to="" className={cx('link')}>
                All products
              </Link>
            </li>
            <li>
              <Link to="" className={cx('link')}>
                All sales
              </Link>
            </li>
          </ul>
          <div>
            <Link to="">
              <img src={basket} alt="" className={cx('basket')} />
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
