export interface myData {
  price: number;
  image: string;
  title: string;
  discount: number;
  description: string;
  id: number;
  slug: string;
  quantity: number;
}

export interface IncreaseQuantityPayload {
  id: number;
}

export interface DecreaseQuantityPayload {
  id: number;
}

export interface BasketState {
  products: myData[];
}
