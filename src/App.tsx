import ModalProvider from './context/modal-context.tsx';
import Swap from './components/swap/swap.tsx';
import PageLayout from './components/layout/page-layout.tsx';

function App() {
  return (
    <ModalProvider>
      <PageLayout>
        <Swap />
      </PageLayout>
    </ModalProvider>
  );
}

export default App;
