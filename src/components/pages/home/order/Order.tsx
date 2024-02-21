import classNames from 'classnames/bind';

import styles from './Order.module.scss';
const cx = classNames.bind(styles);

import garden from './images/garden.png';

const Order = () => {
  return (
    <section className={cx('order')}>
      <div className={cx('container')}>
        <h2 className={cx('title')}>5% off on the first order</h2>
        <div className={cx('content-container')}>
          <div>
            <img src={garden} alt="" aria-hidden="true" loading="lazy"  className={cx('image')}/>
          </div>
          <form action="submit">
            <input type="text" className={cx('input')} placeholder="Name" />
            <input
              type="text"
              className={cx('input')}
              placeholder="Phone number"
            />
            <input type="text" className={cx('input')} placeholder="Email" />
            <button className={cx('button')}>Get a discount</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Order;
