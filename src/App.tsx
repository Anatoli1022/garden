import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Layout from './layouts/layout';
import Home from './pages/Home';
import Caterogies from './pages/Caterogies';
import Discounted from './pages/Discounted'
import NotFound from './pages/NotFound';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="categories" element={<Caterogies />} />
          <Route path="discounted" element={<Discounted />} />
          <Route path="notFound" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
