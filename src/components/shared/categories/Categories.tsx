import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Categories.module.scss';
const cx = classNames.bind(styles);

import fertilizer from './images/fertilizer.jpeg';
import protective_products from './images/protective_products.jpeg';
import planting_material from './images/planting_material.jpeg';
import tools from './images/tools.jpeg';

const Categories = () => {
  return (
    <section className={cx('categories')}>
      <div className={cx('container')}>
        <div className={cx('wrapper')}>
          <h2 className={cx('title')}>Categories</h2>
          <hr className={cx('line')} />
          <div>
            <Link to="/categories" className={cx('all-categories-link')}>
              All categories{' '}
            </Link>
          </div>
        </div>
        <ul className={cx('list')}>
          <li>
            <Link to="">
              <img
                src={fertilizer}
                alt=""
                loading="lazy"
                className={cx('image')}
              />
              <span className={cx('link-text')}>Fertilizer</span>
            </Link>
          </li>
          <li>
            <Link to="">
              <img
                src={protective_products}
                alt=""
                loading="lazy"
                className={cx('image')}
              />
              <span className={cx('link-text')}>
                Protective products and septic tanks{' '}
              </span>
            </Link>
          </li>
          <li>
            <Link to="">
              <img
                src={planting_material}
                alt=""
                loading="lazy"
                className={cx('image')}
              />
              <span className={cx('link-text')}>Planting material </span>
            </Link>
          </li>
          <li>
            <Link to="">
              <img src={tools} alt="" loading="lazy" className={cx('image')} />
              <span className={cx('link-text')}>Tools and equipment </span>
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Categories;
