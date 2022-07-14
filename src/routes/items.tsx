import { FunctionalComponent, h } from 'preact';
import { Item, IItem } from '../components/item';
import { route } from 'preact-router';
import { useContext } from 'preact/hooks';
import { AppContext } from '../context';

const items = [
  { name: 'First Item', price: 1 },
  { name: 'Second Item', price: 2 },
  { name: 'Third Item', price: 3 },
  { name: 'Fourth Item', price: 4 },
  { name: 'Fifth Item', price: 5 },
  { name: 'Sixth Item', price: 6 },
  { name: 'Seventh Item', price: 7 },
];

const Items: FunctionalComponent = () => {
  const { setItem } = useContext(AppContext);

  function onPressCheckout(item: IItem) {
    setItem(item);
    route('/checkout');
  }

  return (
    <div className="w-full justify-center flex mt-12">
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 md:max-w-5xl lg:grid-cols-4 place-content-center">
        {items.map((item) => (
          <div className="flex justify-center">
            <Item item={item} onPressCheckout={() => onPressCheckout(item)} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Items;
