# Simple Modal

This is a simple modal package for use with the Pushkin framework. It is designed to be used with the [Simple Swap DAPP](

## Installation

```shell
# NPM
npm install --save pushkin-simple-modals-01

# Yarn
yarn add pushkin-simple-modals-01

# PNPM
pnpm add pushkin-simple-modals-01
```

## Usage

```typescript jsx
import { ModalProvider, ModalTrigger } from 'pushkin-simple-modals-01';

const App: React.FC = () => {
  return (
    <ModalProvider>
       <ModalTrigger
          modalName={'simple-modal'}
          trigger={'Open Modal'}
          modalContent={<div>Hello World</div>}
          modalClassName="md:max-w-lg"
        />
     </ModalProvider>
  );
};