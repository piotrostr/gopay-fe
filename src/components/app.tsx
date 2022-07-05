import { FunctionalComponent, h } from 'preact';
import { IItem, Item } from './item';

const items = [
  { name: 'First Item', price: 1 },
  { name: 'Second Item', price: 2 },
  { name: 'Third Item', price: 3 },
  { name: 'Fourth Item', price: 4 },
];

const App: FunctionalComponent = () => {
  function onPressCheckout(item: IItem) {
    alert(`checking out with ${item.name}`);
  }

  return (
    <div className="w-full h-full">
      <h1 className="text-3xl mb-5">gopay example</h1>
      <div className="flex justify-between p-7 max-h-96">
        {items.map((item) => (
          <Item item={item} onPressCheckout={onPressCheckout} />
        ))}
      </div>
    </div>
  );
};

export default App;
