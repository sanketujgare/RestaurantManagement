export interface CartItemProps {
  id: string;
  itemName: string;
  price: number;
  handlePrice: (arg1: number) => void;
  handleCartData: (id: string, quantity: number) => void;
}
