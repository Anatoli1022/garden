import Categories from '../components/shared/categories/Categories';
import Hero from '../components/pages/home/hero/Hero';
import Order from '../components/pages/home/order/Order';
import Sale from '../components/pages/home/sale/Sale';
import Contact from '../components/shared/contact/Contact';

const Home = () => {
  return (
    <>
      <Hero />
      <Categories />
      <Order />
      <Sale />
      <Contact />
    </>
  );
};

export default Home;
