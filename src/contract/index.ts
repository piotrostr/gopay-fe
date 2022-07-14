import { Contract } from '@ethersproject/contracts';
import { ethers } from 'ethers';
import { useEffect, useState } from 'react';

import VaultArtifact from './Vault.json';
import { Vault } from './Vault';
import { useProvider, useChainId } from '../metamask';

export const CONTRACT_ADDRESS = process.env.GOPAY_CONTRACT_ADDRESS || '';
export const PROJECT_ID = process.env.PROJECT_ID;
export const GOPAY_API_URL = process.env.GOPAY_API_URL || 'http://localhost';
export const CHAIN_ID = process.env.CHAIN_ID || 4;

export const useContract = () => {
  const [contract, setContract] = useState<Vault>();
  const chainId = useChainId();
  const provider = useProvider();
  const url = `https://mainnet.infura.io/v3/${PROJECT_ID}`;

  useEffect(() => {
    (async function () {
      const signer = provider?.getSigner();
      const shouldUseSigner = chainId === CHAIN_ID && signer !== undefined;

      const _contract = new Contract(
        CONTRACT_ADDRESS,
        VaultArtifact.abi,
        shouldUseSigner ? signer : ethers.getDefaultProvider(url),
      ) as Vault;

      setContract(_contract);
    })();
  }, [provider]);

  return contract;
};
