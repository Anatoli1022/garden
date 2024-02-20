import classNames from 'classnames/bind';

import styles from './Hero.module.scss';

import background from './images/background.jpeg';

const cx = classNames.bind(styles);
const Hero = () => {
  return (
    <section className={cx('hero')}>
      <div className={cx('container', 'hero-container')}>
        <h1 className={cx('title')}>Amazing Discounts on Garden Products!</h1>
        <button className={cx('button')}>Check out</button>
        <img
          src={background}
          alt=""
          aria-hidden="true"
          className={cx('background')}
          loading="eager"
        />
      </div>
    </section>
  );
};

export default Hero;
