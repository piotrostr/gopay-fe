import { h } from 'preact';
import { IItem } from '../components/item';

const Checkout = () => {
  const item = { id: '1', name: 'Item 1', price: '$1.00' };
  return (
    <div className="flex flex-col h-full justify-around">
      <div className="flex flex-col justify-center items-center">
        <div className="w-24 h-24 rounded-md bg-orange-300" />
        <div className="text-2xl font-medium my-2">{item?.name}</div>
        <div className="text-xl text-gray-400">${item?.price}.00</div>
      </div>
      <div className="bg-teal-200 rounded shadow-neutral-50 justify-center flex w-32 h-12 items-center cursor-pointer text-white font-bold">
        Pay
      </div>
    </div>
  );
};

export default Checkout;
