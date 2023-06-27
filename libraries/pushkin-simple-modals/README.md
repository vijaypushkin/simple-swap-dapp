# Simple Modal

This is a simple react modal package. It is designed to be used with the [Simple Swap DAPP](../../apps/example/README.md)

It uses native HTML dialog elements and is styled with TailwindCSS.

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

const App = () => {
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