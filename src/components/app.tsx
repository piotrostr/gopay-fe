import { FunctionalComponent, h } from 'preact';
import { Item, IItem } from './item';
import { ConnectWallet } from './connect-wallet';
import { Logo } from './logo';
import { useState } from 'preact/hooks';
import { PayWindowModal } from './modal';

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
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<IItem>(items[0]);

  function onPressCheckout(item: IItem) {
    setSelectedItem(item);
    setIsOpen(true);
  }

  return (
    <div className="w-full h-full p-2 sm:p-3 md:p-10 bg-white dark:bg-slate-900">
      <div className="flex flex-col text-center sm:flex-row mb-5 p-5 sm:justify-between items-center sm:text-start">
        <div className="mb-5">
          <Logo />
        </div>
        <ConnectWallet />
      </div>
      <div className="w-full justify-center flex mt-12">
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 md:max-w-5xl lg:grid-cols-4 place-content-center">
          {items.map((item) => (
            <div className="flex justify-center">
              <Item item={item} onPressCheckout={onPressCheckout} />
            </div>
          ))}
        </div>
      </div>
      <PayWindowModal
        isOpen={isOpen}
        item={selectedItem}
        setIsOpen={setIsOpen}
      />
    </div>
  );
};

export default App;
