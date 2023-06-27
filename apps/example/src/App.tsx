import { ModalProvider } from 'pushkin-simple-modals-01';

import Swap from './components/swap/swap.tsx';
import PageLayout from './components/layout/page-layout.tsx';
import WalletProvider from './context/wallet-context.tsx';

import 'pushkin-simple-modals-01/dist/style.css';
import './App.css';

function App() {
  return (
    <WalletProvider>
      <ModalProvider>
        <PageLayout>
          <Swap />
        </PageLayout>
      </ModalProvider>
    </WalletProvider>
  );
}

export default App;
