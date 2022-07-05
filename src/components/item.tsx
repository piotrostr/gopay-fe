import { h } from 'preact';

export interface IItem {
  name: string;
  price: number;
}

interface Props {
  item: IItem;
  onPressCheckout: (item: IItem) => void;
}

export const Item = ({ item, onPressCheckout }: Props) => {
  return (
    <div className="bg-gray-100 w-64 rounded-md">
      <div className="flex flex-row p-2">
        <div className="w-12 h-12 rounded-md bg-orange-300 mr-3" />
        <div>
          <h1 className="text-lg">{item.name}</h1>
          <p className="text-gray-400">${item.price}.00</p>
        </div>
      </div>
      <div
        className="w-full h-10 flex justify-center items-center bg-blue-200 rounded-b-md cursor-pointer hover:bg-blue-100"
        onClick={() => onPressCheckout(item)}
      >
        Checkout
      </div>
    </div>
  );
};
