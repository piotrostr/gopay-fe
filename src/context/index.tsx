import { createContext } from 'preact';
import { IItem } from '../components/item';

interface IAppContext {
  item: IItem;
  setItem: any;
}

export const AppContext = createContext<IAppContext>({
  item: { name: '', price: 0 },
  setItem: () => {},
});
