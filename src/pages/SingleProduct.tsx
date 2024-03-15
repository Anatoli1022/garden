import { useParams } from 'react-router-dom';
import data from '../data/data';
import Hero from '../components/pages/singleProduct/hero/Hero';
import Contact from '../components/shared/contact/Contact';

const SingleProduct = () => {
  const params = useParams();

  const filteredData = data.filter((data) => data.slug == params.slug);
  const object = filteredData[0];

  return (
    <>
      <Hero info={object} />
      <Contact />
    </>
  );
};

export default SingleProduct;
