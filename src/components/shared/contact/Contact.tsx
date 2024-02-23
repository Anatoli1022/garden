import classNames from 'classnames/bind';
import styles from './Contact.module.scss';
const cx = classNames.bind(styles);

import instagram from '../../../assets/instagram.svg';
import viber from '../../../assets/viber.svg';

const Contact = () => {
  return (
    <section className={cx('contact')}>
      <div className={cx('container')}>
        <h2 className={cx('title')}>Contact</h2>
        <ul className={cx('list')}>
          <li className={cx('item')}>
            <p className={cx('title-link')}>Phone</p>
            <a href="tel:+74993506604" className={cx('link')}>
              +7 (499) 350-66-04
            </a>
          </li>
          <li className={cx('item')}>
            <p className={cx('title-link')}>Socials</p>
            <a href="" className={cx('link')}>
              <img src={instagram} alt="instagram" loading="lazy" />
            </a>
            <a href="" className={cx('link')} style={{ marginLeft: '10px' }}>
              <img src={viber} alt="viber" loading="lazy" />
            </a>
          </li>
          <li className={cx('item')}>
            <p className={cx('title-link')}>Address</p>
            <a href="" className={cx('link')}>
              Dubininskaya Ulitsa, 96, Moscow, Russia, 115093
            </a>
          </li>
          <li className={cx('item')}>
            <p className={cx('title-link')}>Working Hours</p>
            <a href="" className={cx('link')}>
              24 hours a day
            </a>
          </li>
        </ul>
        <iframe
          src="https://yandex.ru/map-widget/v1/?um=constructor%3A77a41f51c41a57273b281137d73853f48ecfd0c248f4c70f1f7f149493a73b4c&amp;source=constructor"
          width="100%"
          height="350"
          className={cx('map')}
        ></iframe>
      </div>
    </section>
  );
};

export default Contact;
