import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Layout from './layouts/layout';
import Home from './pages/Home';
import Categories from './pages/Categories';
import Discounted from './pages/Discounted';
import NotFound from './pages/NotFound';
import AllProducts from './pages/AllProducts';
import ShoppingCart from './pages/ShoppingCart';
import SingleProduct from './pages/SingleProduct';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="categories" element={<Categories />} />
          <Route path="discounted" element={<Discounted />} />
          <Route path="notFound" element={<NotFound />} />
          <Route path="allProducts" element={<AllProducts />} />
          <Route path="shoppingCart" element={<ShoppingCart />} />
          <Route path="allProducts/:slug" element={<SingleProduct />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
