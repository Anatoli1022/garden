import classNames from 'classnames/bind';

import styles from './Header.module.scss';
import logo from '../../../assets/logo.svg';
import basket from '../../../assets/basket.svg';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../../hooks';

const cx = classNames.bind(styles);
const Header = () => {
  const itemsBasket = useAppSelector((state) => state.basket.products);

  return (
    <header className={cx('header')}>
      <div className={cx('container')}>
        <nav className={cx('navigation')}>
          <div>
            <Link to="/">
              <img src={logo} alt="" className={cx('logo')} loading="eager" />
            </Link>
          </div>
          <ul className={cx('list')}>
            <li>
              <Link to="/" className={cx('link')}>
                Main Page
              </Link>
            </li>
            <li>
              <Link to="/categories" className={cx('link')}>
                Categories
              </Link>
            </li>
            <li>
              <Link to="/allProducts" className={cx('link')}>
                All products
              </Link>
            </li>
            <li>
              <Link to="/discounted" className={cx('link')}>
                All sales
              </Link>
            </li>
          </ul>
          <div>
            <Link to="/shoppingCart" className={cx('basket')}>
              {itemsBasket.length > 0 ? (
                <span className={cx('items-basket')}>{itemsBasket.length}</span>
              ) : null}

              <img src={basket} alt="" loading="eager" />
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
