export interface MenuItemProps {
  name: string;
  price: number;
  description: string;
  recipe?: string;
  handleCartData: () => void;
}
