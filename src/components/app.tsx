import { FunctionalComponent, h } from 'preact';
import { IItem, Item } from './item';
import { ConnectWallet } from './connect-wallet';

const items = [
  { name: 'First Item', price: 1 },
  { name: 'Second Item', price: 2 },
  { name: 'Third Item', price: 3 },
  { name: 'Fourth Item', price: 4 },
  { name: 'Fifth Item', price: 5 },
  { name: 'Sixth Item', price: 6 },
  { name: 'Seventh Item', price: 7 },
];

const App: FunctionalComponent = () => {
  function onPressCheckout(item: IItem) {
    alert(`checking out with ${item.name}`);
  }

  return (
    <div className="w-full h-full p-10">
      <div className="flex flex-row text-3xl mb-5 p-5 justify-between items-center">
        <div>
          <a
            href="https://github.com/piotrostr/gopay"
            className="text-teal-500 hover:underline"
          >
            gopay
          </a>
        </div>
        <ConnectWallet />
      </div>
      <div className="w-full justify-center flex mt-12">
        <div className="w-full grid grid-cols-2 md:grid-cols-3 gap-12 md:max-w-5xl lg:grid-cols-4 place-content-center">
          {items.map((item) => (
            <div className="flex justify-center">
              <Item item={item} onPressCheckout={onPressCheckout} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
