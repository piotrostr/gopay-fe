import { h } from 'preact';
import { useContract } from '../contract';
import { randomBytes } from 'ethers/lib/utils';
import { useContext } from 'preact/hooks';
import { AppContext } from '../context';

const Checkout = () => {
  const contract = useContract();
  const { item } = useContext(AppContext);

  const pay = async () => {
    if (!contract) {
      return;
    }

    // send the tx to backend with all of the data
    const hashIdentifier = randomBytes(32).toString();

    const tx = await contract.deposit(item?.price, hashIdentifier);
    // wait for the transaction to finish
    await tx.wait();
    await fetch(`/create`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        amount: item.price,
        from: await contract.signer.getAddress(),
        content_hash: hashIdentifier,
        tx_hash: '',
      }),
    });
  };

  return (
    <div className="flex justify-center w-full">
      <div className="flex flex-col justify-around bg-white w-96 h-96 rounded-md">
        <div className="flex flex-col justify-center items-center">
          <div className="w-24 h-24 rounded-md bg-orange-300" />
          <div className="text-2xl font-medium my-2">{item?.name}</div>
          <div className="text-xl text-gray-400">{item?.price}</div>
          <div
            className="bg-teal-200 rounded shadow-neutral-50 justify-center flex w-32 h-12 items-center cursor-pointer text-white font-bold mt-5"
            onClick={pay}
          >
            Pay
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
