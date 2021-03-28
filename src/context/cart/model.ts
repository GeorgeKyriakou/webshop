export interface CartInterface {
  items: Item[];
  cartId: string;
  updatingCart: boolean;
  error: boolean;
  addToCart: Function;
}

interface Item {
  productId: string;
  quantity: number;
}
