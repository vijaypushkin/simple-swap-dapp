import './App.css';
import ModalProvider from './context/modal-context.tsx';

function App() {
  return (
    <ModalProvider>
      <h1 className="text-3xl m-4 flex justify-center items-center">
        Hello World
      </h1>
    </ModalProvider>
  );
}

export default App;
