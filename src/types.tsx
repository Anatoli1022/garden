export interface myData {
  price: number;
  image: string;
  title: string;
  discount: number;
  description: string;
  id: number;
  slug: string;
}


export interface BasketState {
  products: myData[];
}
