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

import { myData } from '../types';

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
    quantity: 0,
  },
  {
    price: 35,
    image: collectionBerriesImg,
    title: 'Collection for berries (plastic)',
    discount: 26,
    description: `
    Introducing our innovative Berry Picker, a must-have tool for every berry enthusiast and avid gardener. Crafted with precision and care using high-quality plastic, this ingenious device revolutionizes the berry-picking experience, making it easier and more efficient than ever before.
    
    Designed with comfort and convenience in mind, our Berry Picker features a lightweight plastic handle that fits comfortably in your hand, reducing strain and fatigue during extended picking sessions. The handle is ergonomically designed for optimal grip, providing maximum control and maneuverability as you navigate through berry-laden bushes and vines.`,
    id: 2,
    slug: '2',
    quantity: 0,
  },
  {
    price: 14,
    image: glovesImg,
    title: 'Gloves (black)',
    discount: 36,
    description: `Made from premium quality materials, our Black Gloves feature a soft and supple black fabric that offers a luxurious feel against your skin. The sleek black color adds a touch of elegance to any ensemble, making them the perfect accessory for both formal occasions and everyday wear.`,
    id: 3,
    slug: '3',
    quantity: 0,
  },
  {
    price: 155,
    image: sickleShapedImg,
    title: 'Sickle-shaped hacksaw',
    discount: 0,
    description: `Introducing our innovative Sickle-shaped Hacksaw, a cutting-edge tool designed to revolutionize your cutting experience. Inspired by the efficient and ergonomic design of a sickle, this hacksaw combines the versatility of a traditional hacksaw with the precision of a sickle blade, making it the ultimate cutting companion for a wide range of applications.

    Crafted with precision engineering, our Sickle-shaped Hacksaw features a unique curved blade that allows for effortless cutting in tight spaces and hard-to-reach areas. The sickle-shaped design provides enhanced control and maneuverability, allowing you to tackle intricate cutting tasks with ease and precision.`,
    id: 4,
    slug: '4',
    quantity: 0,
  },
  {
    price: 180,
    image: bayonetShovelImg,
    title: 'Bayonet shovel',
    discount: 0,
    description: `Introducing our rugged and versatile Bayonet Shovel, a multifunctional tool designed to tackle the toughest outdoor tasks with ease and efficiency. Inspired by the iconic bayonet design, this shovel combines the functionality of a traditional shovel with the versatility of a bayonet, making it the ultimate companion for outdoor enthusiasts, survivalists, and adventurers.

    Crafted from high-quality materials, our Bayonet Shovel features a durable steel blade that is built to withstand the rigors of heavy-duty use. The sharp, serrated edge allows for effortless digging through tough soil, while the sturdy construction ensures long-lasting durability in even the most demanding environments.`,
    id: 5,
    slug: '5',
    quantity: 0,
  },
  {
    price: 179,
    image: gardenPitchforkImg,
    title: 'Garden pitchfork',
    discount: 0,
    description: `Introducing our Garden Pitchfork, a sturdy and reliable tool designed to streamline your gardening and landscaping tasks with ease and efficiency. Crafted with precision and care, our pitchfork is built to withstand the rigors of outdoor use while providing exceptional performance in a variety of gardening applications.

    Constructed from high-quality materials, our Garden Pitchfork features a durable steel head with sharp, sturdy tines that penetrate soil effortlessly, making it ideal for turning compost, aerating soil, and lifting and moving mulch or hay. The reinforced design ensures long-lasting durability and reliability, even when faced with heavy-duty tasks.`,
    id: 6,
    slug: '6',
    quantity: 0,
  },
  {
    price: 12,
    image: barbellImg,
    title: 'Barbell',
    discount: 0,
    description: `Introducing our premium Barbell, the ultimate tool for strength training and muscle development. Crafted with precision and durability in mind, our barbell is designed to withstand the most intense workouts while providing optimal performance and safety.

    Constructed from high-quality steel, our barbell features a solid and sturdy design that can handle heavy weights with ease. The chrome finish not only adds a sleek and professional look to the barbell but also provides corrosion resistance, ensuring long-lasting durability even in humid or sweaty workout environments.`,
    id: 7,
    slug: '7',
    quantity: 0,
  },
  {
    price: 120,
    image: souvenirThermometerImg,
    title: 'Souvenir thermometer',
    discount: 18,
    description: `Featuring a classic design with vibrant colors and intricate artwork, our thermometer captures the essence of your favorite destinations, whether it's a picturesque beach, a bustling cityscape, or a serene countryside. Each souvenir thermometer is carefully crafted to showcase iconic landmarks, natural landscapes, or cultural symbols that resonate with travelers and locals alike.

    The thermometer itself is accurate and reliable, providing easy-to-read temperature readings in both Celsius and Fahrenheit. Whether you're checking the weather before heading out for the day or simply admiring the decorative charm of your souvenir thermometer, it adds a touch of whimsy and functionality to any space.`,
    id: 8,
    slug: '8',
    quantity: 0,
  },
  {
    price: 1000,
    image: decorativeForgedImg,
    title: 'Decorative forged',
    discount: 50,
    description: `Crafted from high-quality forged metal, our decorative pieces boast durability and strength, ensuring they stand the test of time as stunning focal points in your home decor. The forging process lends a unique texture and character to each piece, adding depth and dimension to their design.

    From ornate wall sconces to intricately designed candle holders, our Decorative Forged collection offers a range of options to suit every style and aesthetic preference. Whether you prefer classic elegance, rustic charm, or contemporary flair, our collection has something to elevate any space.`,
    id: 9,
    slug: '9',
    quantity: 0,
  },
  {
    price: 150,
    image: flowerBasketImg,
    title: 'Flower basket',
    discount: 34,
    description: `Crafted from high-quality materials such as woven rattan, wicker, or metal, our flower basket combines durability with rustic charm, creating a timeless piece that enhances the ambiance of any room. The intricate weaving adds texture and visual interest, while the sturdy construction ensures the basket can support a bountiful arrangement of flowers.

    Whether you're displaying vibrant roses, delicate daisies, or fragrant lilies, our flower basket provides the perfect vessel to showcase your favorite blooms. The generous size and open design of the basket allow for easy arranging and styling, while the natural materials create a beautiful backdrop that complements any floral arrangement.`,
    id: 10,
    slug: '10',
    quantity: 0,
  },
  {
    price: 200,
    image: aquariumLockImg,
    title: 'Aquarium lock',
    discount: 25,
    description: `Easy to install and use, our aquarium lock features a secure locking mechanism that provides quick and convenient access for authorized users while preventing unauthorized entry. Whether you're a hobbyist with a single tank or a professional aquarist with a large collection of tanks, our lock offers customizable options to suit your specific needs.

    The sleek and discreet design of our aquarium lock blends seamlessly with any aquarium setup, providing security without detracting from the beauty of your underwater ecosystem. With its low-profile design and versatile mounting options, our lock can be installed on a variety of aquarium lids and enclosures, ensuring a secure fit and reliable protection for your aquatic pets.`,
    id: 11,
    slug: '11',
    quantity: 0,
  },
];

export default data;
