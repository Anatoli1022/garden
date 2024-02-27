import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Sale.module.scss';

const cx = classNames.bind(styles);

import data from '../../../../data/data.tsx';

const Sale = () => {
  const filteredData = data
    .filter((item) => item.discount > 0 && item.price >= 121)
    .slice(0, 4);

  return (
    <section className={cx('sale')}>
      <div className={cx('container')}>
        <div className={cx('wrapper')}>
          <h2 className={cx('title')}>Sales</h2>
          <hr className={cx('line')} />
          <div>
            <Link to="/discounted" className={cx('all-sale-link')}>
              All sales
            </Link>
          </div>
        </div>
        <ul className={cx('list')}>
          {filteredData.map((item) => (
            <li key={item.id} className={cx('item')}>
              <Link to="">
                <img
                  src={item.image}
                  alt=""
                  loading="lazy"
                  className={cx('image')}
                />
                <div className={cx('wrapper-info')}>
                  <span className={cx('item-title')}>{item.title}</span>
                  <div className={cx('price-wrapper')}>
                    <span className={cx('new-price')}>
                      $
                      {Math.round(
                        item.price - (item.price / 100) * item.discount
                      )}
                    </span>
                    <span className={cx('old-price')}>${item.price}</span>
                  </div>
                </div>

                <div className={cx('sale-percent')}>-{item.discount}%</div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Sale;
