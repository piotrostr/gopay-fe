import { FunctionalComponent, h } from 'preact';
import { ConnectWallet } from './connect-wallet';
import { Logo } from './logo';
import { Route, Router } from 'preact-router';

import Items from '../routes/items';
import NotFound from '../routes/not-found';
import Checkout from '../routes/checkout';

const App: FunctionalComponent = () => {
  return (
    <div className="w-full h-full p-2 sm:p-3 md:p-10 bg-white dark:bg-slate-900">
      <div className="flex flex-col text-center sm:flex-row mb-5 p-5 sm:justify-between items-center sm:text-start">
        <div className="mb-5">
          <Logo />
        </div>
        <ConnectWallet />
      </div>
      <Router>
        <Route path="/" component={Items} />
        <Route path="/checkout" component={Checkout} />
        <NotFound default />
      </Router>
    </div>
  );
};

export default App;
