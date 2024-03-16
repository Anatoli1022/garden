import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Products.module.scss';
import { useDispatch } from 'react-redux';
import { setAddItem } from '../../../../redux/basket/basket';
const cx = classNames.bind(styles);

import data from '../../../../data/data.tsx';
import { myData } from '../../../../types.tsx';

const Products = () => {
  const dispatch = useDispatch();
  const handleAdded = (item: myData) => {
    dispatch(setAddItem(item));
  };
  return (
    <section className={cx('products')}>
      <div className={cx('container')}>
        <h2 className={cx('title')}>All products</h2>

        <ul className={cx('list')}>
          {data.map((item) => (
            <li key={item.id} className={cx('item')}>
              <Link to={`./${item.id}`}>
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
                    {item.discount > 0 && (
                      <span className={cx('old-price')}>${item.price}</span>
                    )}
                  </div>
                </div>

                {item.discount > 0 && (
                  <div className={cx('sale-percent')}>-{item.discount}%</div>
                )}
              </Link>
              <button
                className={cx('button-add')}
                onClick={() => handleAdded(item)}
              >
                Add to cart
              </button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Products;
