export interface OrderProps {
  quantity: number;
  preparationTime: string;
  name: string;
  id: string;
  orderstatus: string;
  handleData: (id: string, type: string) => void;
}
