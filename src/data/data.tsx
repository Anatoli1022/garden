import secateursImg from '../assets/secateurs.jpeg';
import collectionBerriesImg from '../assets/collectionBerries.jpeg';
import glovesImg from '../assets/gloves.jpeg';
import sickleShapedImg from '../assets/sickleShaped.jpeg';
import bayonetShovelImg from '../assets/bayonetShovel.jpeg';
import gardenPitchforkImg from '../assets/gardenPitchfork.jpeg';
import souvenirThermometerImg from '../assets/souvenirThermometer.jpeg';
import barbellImg from '../assets/barbell.jpeg';
import decorativeForgedImg from '../assets/decorativeForged.jpeg';
import flowerBasketImg from '../assets/flowerBasket.jpeg';
import aquariumLockImg from '../assets/aquariumLock.jpeg';

import myData from '../types';

const data: myData[] = [
  {
    price: 240,
    image: secateursImg,
    title: 'Secateurs',
    discount: 17,
    description: `This high quality everyday secateur features a fully hardened and
    tempered, high-carbon steel blade for lasting sharpness. For
     comfort, the robust but lightweight alloy handles are covered in a 
     soft grip, in a bright terracotta colour for maximum visibility in the 
     garden. It wont be easy to leave this pruner behind at the end of the
      day! Rubber cushion stops prevent jarring over repeated use, reducing hand strain for the user.

This secateur cuts up to 2.5 cm diameter. Carrying RHS
endorsement, possibly the highest accolade in gardening, for peace 
of mind this pruner comes with a ten-year guarantee against `,
    id: 1,
    slug: '1',
  },
  {
    price: 35,
    image: collectionBerriesImg,
    title: 'Collection for berries (',
    discount: 26,
    description: '',
    id: 2,
    slug: '2',
  },
  {
    price: 14,
    image: glovesImg,
    title: 'Gloves (black)',
    discount: 36,
    description: '',
    id: 3,
    slug: '3',
  },
  {
    price: 155,
    image: sickleShapedImg,
    title: 'Sickle-shaped hacksaw',
    discount: 0,
    description: '',
    id: 4,
    slug: '4',
  },
  {
    price: 180,
    image: bayonetShovelImg,
    title: 'Bayonet shovel',
    discount: 0,
    description: '',
    id: 5,
    slug: '5',
  },
  {
    price: 179,
    image: gardenPitchforkImg,
    title: 'Garden pitchfork',
    discount: 0,
    description: '',
    id: 6,
    slug: '6',
  },
  {
    price: 12,
    image: barbellImg,
    title: 'Barbell',
    discount: 0,
    description: '',
    id: 7,
    slug: '7',
  },
  {
    price: 120,
    image: souvenirThermometerImg,
    title: 'Souvenir thermometer',
    discount: 18,
    description: '',
    id: 8,
    slug: '8',
  },
  {
    price: 1000,
    image: decorativeForgedImg,
    title: 'Decorative forged ',
    discount: 50,
    description: '',
    id: 9,
    slug: '9',
  },
  {
    price: 150,
    image: flowerBasketImg,
    title: 'Flower basket',
    discount: 34,
    description: '',
    id: 10,
    slug: '10',
  },
  {
    price: 200,
    image: aquariumLockImg,
    title: 'Aquarium lock',
    discount: 25,
    description: '',
    id: 11,
    slug: '11',
  },
];

export default data;
