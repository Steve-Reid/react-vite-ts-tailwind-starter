# React Vite Starter

A React TypeScript starter project

## Tech Stack

- Bootstrapped with [`Vite`](https://vitest.dev)
- React & React DOM v18
- Type Checker - TypeScript v4.6.4
- Navigation - [React Router Dom](https://reactrouter.com/en/main/router-components/browser-router) v6.4.1
- Lint - [ESlint v8](https://eslint.org), [AirBnB config](https://www.npmjs.com/package/eslint-config-airbnb) & [AirBnB TypeScript config](https://www.npmjs.com/package/eslint-config-airbnb-typescript)
- Format - [Prettier](https://prettier.io) v2.7.1

## Usage

Inside the project directory run using `npm` or `yarn`:
### Run

```bash
yarn dev
# or
npm run dev
```

Entry point `main.tsx`.


## Available Scripts

In the project directory, you can run:

### `npm run dev` or `yarn dev`

Runs the app in the development mode.\
Open [http://localhost:4000](http://localhost:4000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build` or `yarn build`

Builds the app for production to the `dist` folder.\


See the section about [deployment](https://vitejs.dev/guide/static-deploy.html#building-the-app) for more information.

### `npm run test` or `yarn preview`

The `vite preview` command will boot up a local static web server that serves the files from `dist` at http://localhost:4173. It's an easy way to check if the production build looks OK in your local environment.

You may configure the port of the server by passing the `--port` flag as an argument.

```json
{
  "scripts": {
    "preview": "vite preview --port 8080"
  }
}
```
Now the `preview` command will launch the server at http://localhost:8080.

### `npm test` or `yarn test`

Launches the test runner ([Vitest](https://vitest.dev)) in the interactive watch mode.\
See the section about [running tests].

## Learn More

You can learn more in the [Vite.js documentation](https://vitejs.dev/guide/).

To learn React, check out the [React documentation](https://reactjs.org/).
