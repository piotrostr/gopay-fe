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
    <div className="w-full h-full p-10">
      <h1 className="text-3xl mb-5 p-5">gopay example</h1>
      <div className="flex flex-col justify-between p-7 max-h-96 space-y-5 md:flex-row md:space-y-0">
        {items.map((item) => (
          <Item item={item} onPressCheckout={onPressCheckout} />
        ))}
      </div>
    </div>
  );
};

export default App;
