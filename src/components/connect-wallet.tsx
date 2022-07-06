import { ComponentChildren, h } from 'preact';
import {
  useError,
  useIsActive,
  useIsActivating,
  useAccounts,
  useChainId,
  useMetamask,
} from '../metamask';
import { Dots } from 'react-activity';
import 'react-activity/dist/library.css';
import { useState } from 'preact/hooks';

const CHAIN_ID = 4;

interface Props {
  onClick?: () => void;
  children?: ComponentChildren;
}

const Button = ({ onClick, children }: Props) => (
  <div
    onClick={onClick}
    className="cursor-pointer w-48 h-16 rounded-md bg-gray-100 flex justify-center items-center text-xl dark:bg-slate-800 dark:text-white"
  >
    {children}
  </div>
);

export const ConnectWallet = () => {
  const error = useError();
  const isActive = useIsActive();
  const isActivating = useIsActivating();
  const accounts = useAccounts();
  const chainId = useChainId();
  const metaMask = useMetamask();
  const [showDisconnect, setShowDisconnect] = useState(false);
  const connect = async () => {
    await metaMask.activate();
  };

  const changeChain = async () => {
    await metaMask?.provider?.request({
      method: 'wallet_switchEthereumChain',
      params: [{ chainId: `0x${CHAIN_ID}` }],
    });
  };

  if (!isActive && !isActivating) {
    return <Button onClick={connect}>Connect</Button>;
  } else if (isActivating) {
    return (
      <Button>
        <Dots />
      </Button>
    );
  } else if (chainId !== CHAIN_ID) {
    return <Button onClick={changeChain}>Switch to {CHAIN_ID}</Button>;
  } else if (isActive) {
    return (
      <div
        onMouseEnter={() => setShowDisconnect(true)}
        onMouseLeave={() => setShowDisconnect(false)}
      >
        <Button onClick={() => metaMask.deactivate()}>
          {showDisconnect
            ? 'disconnect'
            : accounts?.length
            ? accounts[0].slice(0, 7) + '...'
            : 'disconnect'}
        </Button>
      </div>
    );
  } else if (error) {
    alert(error);
  }
  return <Button onClick={connect}>Connect</Button>;
};
