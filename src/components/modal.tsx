import { h } from 'preact';
import Modal from 'react-modal';
import { IItem } from './item';

const customStyle = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    transform: 'translate(-50%, -50%)',
    width: '500px',
    height: '500px',
    display: 'flex',
    justifyContent: 'center',
    padding: '35px',
    border: 'none',
  },
};

interface Props {
  isOpen: boolean;
  item?: IItem;
  setIsOpen: (isOpen: boolean) => void;
}

export const PayWindowModal = ({ item, isOpen, setIsOpen }: Props) => {
  return (
    <Modal
      style={customStyle}
      isOpen={isOpen}
      onRequestClose={() => setIsOpen(false)}
    >
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
    </Modal>
  );
};
