# Simple Swap Dapp

This is a simple swap decentralized application (Dapp) built with React and Vite, using PNPM as the package manager. It allows users to perform token swaps on a decentralized exchange (Mock).
It does not use any libraries or frameworks for state management, and instead uses React's built-in React Context state management capabilities and uses `window.ethereum` for interacting with the blockchain.

## Getting Started

To get started with the Simple Swap Dapp, please follow the instructions below.

### Prerequisites

Before running the application, make sure you have the following software installed on your machine:

- Node.js (version 14 or higher)
- PNPM (version 6 or higher)

### Installation

1. Clone the repository to your local machine:
    ```shell
    git clone https://github.com/vijaypushkin/simple-swap-dapp.git
    ```

2. Navigate to the project directory:
    ```shell
    cd simple-swap-dapp
    ```

3. Install the project dependencies using PNPM:
    ```shell
    pnpm install

## Development
To run the Simple Swap Dapp in development mode, follow these steps:

Start the development server:
```shell
pnpm dev
```

Open your web browser and visit http://localhost:3000 to access the application.

Begin making changes to the code. The application will automatically reload as you save your changes.

## Building for Production
To build the Simple Swap Dapp for production, use the following command:

```shell
pnpm build
```
The optimized production-ready files will be generated in the `dist` directory.

## Testing
To run the tests for the Simple Swap Dapp, use the following command:

```shell
pnpm test
```

## Code Coverage
To generate code coverage for the Simple Swap Dapp, use the following command:

```shell
pnpm coverage
```
The coverage report will be generated, and you can view it in the terminal or by opening the generated HTML file in the coverage directory.

## Libraries Used
The Simple Swap Dapp uses the following libraries:

* Tailwind CSS: A utility-first CSS framework for rapid UI development.
* SCSS: SCSS (Sass) is a CSS preprocessor that extends the capabilities of CSS.
* ESLint: A pluggable linting utility for JavaScript and TypeScript.
* Prettier: An opinionated code formatter for maintaining consistent code styles.
* TypeScript: A typed superset of JavaScript that compiles to plain JavaScript.
* Vitest: A lightweight and fast test runner for Vite.
* React Testing Library: A library for testing React components in a way that simulates user interactions.