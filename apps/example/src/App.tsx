import ModalProvider from './context/modal-context.tsx';
import Swap from './components/swap/swap.tsx';
import PageLayout from './components/layout/page-layout.tsx';
import WalletProvider from './context/wallet-context.tsx';

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
