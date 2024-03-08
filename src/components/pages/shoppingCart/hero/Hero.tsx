import { useAppSelector } from '../../../../hooks';
import { Link } from 'react-router-dom';
import styles from './Hero.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Hero = () => {
  const itemsBasket = useAppSelector((state) => state.basket.products);
  return (
    <section className={cx('hero')}>
      <div className={cx('container')}>
        <div className={cx('wrapper')}>
          <h1 className={cx('title')}>Shopping cart</h1>
          <hr className={cx('line')} />
          <div>
            <Link to="/" className={cx('all-sale-link')}>
              Back to the store
            </Link>
          </div>
        </div>
        <div className={cx('products-wrapper')}>
          <ul className={cx('list')}>
            {itemsBasket?.map((item) => (
              <li key={item.id} className={cx('item')}>
                <Link
                  to={`../allProducts/${item.id}`}
                  className={cx('product-link')}
                >
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
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Hero;
