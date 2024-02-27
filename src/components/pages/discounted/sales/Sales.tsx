import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Sales.module.scss';

const cx = classNames.bind(styles);

import data from '../../../../data/data.tsx';

const Sales = () => {
  const filteredData = data.filter((item) => item.discount > 0);
  return (
    <section className={cx('sale')}>
      <div className={cx('container')}>
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

export default Sales;
