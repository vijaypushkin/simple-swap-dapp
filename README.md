# Simple Swap DAPP MonoRepo

This is a monorepo for the Simple Swap DAPP. It contains the following packages:

- [Simple Swap DAPP](apps/example/README.md)
- [Modal Package](libraries/pushkin-simple-modals/README.md)

## Installation

This monorepo uses [rush](https://rushjs.io/) to manage the packages. To install rush, run the following command:

```shell
# NPM
npm install -g @microsoft/rush

# PNPM (recommended)
pnpm install -g @microsoft/rush
```

Then, to install the packages, run the following command:

```shell
rush install
```