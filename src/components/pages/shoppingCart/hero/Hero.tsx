import { useAppSelector } from '../../../../hooks';
import { Link } from 'react-router-dom';
import styles from './Hero.module.scss';
import classNames from 'classnames/bind';
import { useDispatch } from 'react-redux';
import {
  increaseQuantity,
  decreaseQuantity,
  removeItem,
} from '../../../../redux/basket/basket';


import plus from '../../../../assets/plus.svg';
import minus from '../../../../assets/minus.svg';
import delet from '../../../../assets/x.svg'

const cx = classNames.bind(styles);

const Hero = () => {
  const dispatch = useDispatch();

  const onIncreaseQuantity = (productId: number) => {
    dispatch(increaseQuantity({ id: productId }));
  };

  const onDecreaseQuantity = (productId: number) => {
    dispatch(decreaseQuantity({ id: productId }));
  };

  const onRemoveItem = (productId: number) => {
    dispatch(removeItem({ id: productId }));
  };

  const itemsBasket = useAppSelector((state) => state.basket.products);

  const productPrice = (
    price: number,
    discount: number,
    quantity: number
  ): number => {
    return Math.round((price - (price / 100) * discount) * quantity);
  };

  const getQuantity = () => {
    let quantity = 0;
    itemsBasket.forEach((item) => {
      quantity += item.quantity;
    });
    return quantity;
  };

  const cartCount = getQuantity();
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
          {itemsBasket.length > 0 ? (
            <>
              <ul className={cx('list')}>
                {itemsBasket.map((item) => (
                  <li key={item.id} className={cx('item')}>
                    <Link to={`../allProducts/${item.id}`}>
                      <img
                        src={item.image}
                        alt=""
                        loading="lazy"
                        className={cx('image')}
                      />
                    </Link>

                    <div className={cx('wrapper-info')}>
                      <h2 className={cx('item-title')}>{item.title}</h2>
                      <div className={cx('products-information')}>
                        <div className={cx('container-buttons')}>
                          <button
                            className={cx('button')}
                            onClick={() => onDecreaseQuantity(item.id)}
                          >
                            <img src={minus} alt="minus" loading="eager" />
                          </button>
                          <span className={cx('item-quantity')}>
                            {item.quantity}
                          </span>
                          <button
                            className={cx('button')}
                            onClick={() => onIncreaseQuantity(item.id)}
                          >
                            <img src={plus} alt="plus" loading="eager" />
                          </button>
                        </div>
                        <div>
                          <span className={cx('new-price')}>
                            $
                            {productPrice(
                              item.price,
                              item.discount,
                              item.quantity
                            )}
                          </span>

                          {item.discount > 0 && (
                            <span className={cx('old-price')}>
                              ${item.price * item.quantity}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                    <button
                      className={cx('button-delete')}
                      title="Remove item from cart"
                      onClick={() => onRemoveItem(item.id)}
                      type="button"
                    >
                     <img src={delet} alt="delete" loading="eager" />
                    </button>
                  </li>
                ))}
              </ul>
              <div className={cx('order-wrapper')}>
                <h3 className={cx('order-title')}>Order details</h3>
                <span className={cx('order-items')}>{cartCount} items</span>

                <div className={cx('wrapper-price')}>
                  <span className={cx('total-text')}>Total</span>
                  <span className={cx('order-price')}>
                    $
                    {itemsBasket.reduce((total, item) => {
                      const discountPrice = productPrice(
                        item.price,
                        item.discount,
                        item.quantity
                      );
                      return total + discountPrice;
                    }, 0)}
                  </span>
                </div>
                <form action="" className={cx('form')}>
                  <input
                    type="text"
                    className={cx('input')}
                    placeholder="Name"
                  />
                  <input
                    type="text"
                    className={cx('input')}
                    placeholder="Phone number"
                  />
                  <input
                    type="text"
                    className={cx('input')}
                    placeholder="Email"
                  />
                </form>
                <button
                  type="submit"
                  value="Submit"
                  className={cx('button-form', 'button-green')}
                >
                  Order
                </button>
              </div>
            </>
          ) : (
            <div>
              <p className={cx('text')}>
                Looks like you have no items in your basket currently.
              </p>
              <Link to="/allProducts" className={cx('link-shopping')}>
                Continue Shopping
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
