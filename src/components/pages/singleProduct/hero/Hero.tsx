import myData from '../../../../types';
import classNames from 'classnames/bind';

import styles from './Hero.module.scss';

const cx = classNames.bind(styles);
const Hero: React.FC<{ info: myData }> = ({ info }) => {
  const booleanDiscount = info.discount > 0 ? true : false;
  return (
    <section className={cx('hero')}>
      <div className={cx('container')}>
        <div className={cx('wrapper')}>
          <div>
            <img src={info.image} alt="" />
          </div>
          <div>
            <h2 className={cx('product-name')}>{info.title}</h2>
            <div className={cx('price-wrapper')}>
              <span className={cx('new-price')}>
                {booleanDiscount
                  ? Math.round(info.price - (info.price / 100) * info.discount)
                  : info.price}
                $
              </span>
              {booleanDiscount && (
                <span className={cx('old-price')}>${info.price}</span>
              )}
            </div>
            <div className={cx('wrapper-buttons')}>
              <button className={cx('button-green', 'button-product')}>
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
