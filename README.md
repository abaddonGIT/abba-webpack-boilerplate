# 📦📦📦📦📦 webpack Boilerplate

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![GitHub issues](https://img.shields.io/github/issues/abaddonGIT/abba-webpack-boilerplate)](https://github.com/abaddonGIT/abba-webpack-boilerplate/issues)
[![GitHub stars](https://img.shields.io/github/stars/abaddonGIT/abba-webpack-boilerplate)](https://github.com/abaddonGIT/abba-webpack-boilerplate/stargazers)

![Webpack started site boilerplate](https://miro.medium.com/max/2000/1*Ko-WJyAJ1uoOX4LHaHkweA.png)

Sensible webpack 5 boilerplate using Babel, PostCSS and Sass with a hot dev server and an optimized production build.

## Requirements
- node >= 10.13.0
- yarn or npm

## Installation

Clone this repo and npm install. 

```bash
yarn install
```

## Usage

### Development server

```bash
yarn run start
```

You can view the development server at `localhost:8080`.

### Production build

```bash
yarn run build
```

> Note: Install [http-server](https://www.npmjs.com/package/http-server) globally to deploy a simple server.

```bash
yarn add http-server
```

You can view the deploy by creating a server in `dist`.

```bash
cd dist && http-server
```

#### Update package.json
```bash
yarn run check
```
#### ESLint check
```bash
yarn run lint
```
#### TS check
```bash
yarn run ts-check
```
#### Fix code style with prettier
```bash
yarn run fix-code-style 
```

## Features

- [webpack](https://webpack.js.org/)
- [Babel](https://babeljs.io/)
- [Sass](https://sass-lang.com/)
- [PostCSS](https://postcss.org/)

## Dependencies

### webpack

- [`webpack`](https://github.com/webpack/webpack) - Module and asset bundler.
- [`webpack-cli`](https://github.com/webpack/webpack-cli) - Command line interface for webpack
- [`webpack-dev-server`](https://github.com/webpack/webpack-dev-server) - Development server for webpack
- [`webpack-merge`](https://github.com/survivejs/webpack-merge) - Simplify development/production configuration
- [`cross-env`](https://github.com/kentcdodds/cross-env) - Cross platform configuration

### Babel

- [`@babel/core`](https://www.npmjs.com/package/@babel/core) - Transpile ES6+ to backwards compatible JavaScript
- [`@babel/plugin-proposal-class-properties`](https://babeljs.io/docs/en/babel-plugin-proposal-class-properties) - Use properties directly on a class (an example Babel config)
- [`@babel/preset-env`](https://babeljs.io/docs/en/babel-preset-env) - Smart defaults for Babel
- [`@babel/plugin-proposal-optional-chaining`](https://babeljs.io/docs/en/babel-plugin-proposal-optional-chaining.html) - Transform optional chaining operators into a series of nil checks
- [`@babel/plugin-transform-regenerator`](https://babeljs.io/docs/en/babel-plugin-transform-regenerator) - Explode async and generator functions into a state machine.
- [`@babel/plugin-transform-runtime`](https://babeljs.io/docs/en/babel-plugin-transform-runtime) - Externalise references to helpers and builtins, automatically polyfilling your code without polluting globals

### Loaders

- [`babel-loader`](https://webpack.js.org/loaders/babel-loader/) - Transpile files with Babel and webpack
- [`sass-loader`](https://webpack.js.org/loaders/sass-loader/) - Load SCSS and compile to CSS
  - [`node-sass`](https://github.com/sass/node-sass) - Node Sass
- [`postcss-loader`](https://webpack.js.org/loaders/postcss-loader/) - Process CSS with PostCSS
  - [`postcss-preset-env`](https://www.npmjs.com/package/postcss-preset-env) - Sensible defaults for PostCSS
- [`css-loader`](https://webpack.js.org/loaders/css-loader/) - Resolve CSS imports
- [`style-loader`](https://webpack.js.org/loaders/style-loader/) - Inject CSS into the DOM
- [`ts-loader`](https://github.com/TypeStrong/ts-loader) - typescript support
- [`svg-sprite-loader`](https://github.com/JetBrains/svg-sprite-loader) - generate svg sprites
- [`svgo-loader`](https://github.com/rpominov/svgo-loader) - optimisation for svg images
- [`pug-loader`](https://github.com/pugjs/pug-loader) - pug template engine

### Plugins

- [`clean-webpack-plugin`](https://github.com/johnagan/clean-webpack-plugin) - Remove/clean build folders
- [`copy-webpack-plugin`](https://github.com/webpack-contrib/copy-webpack-plugin) - Copy files to build directory
- [`html-webpack-plugin`](https://github.com/jantimon/html-webpack-plugin) - Generate HTML files from template
- [`mini-css-extract-plugin`](https://github.com/webpack-contrib/mini-css-extract-plugin) - Extract CSS into separate files
- [`css-minimizer-webpack-plugin`](https://webpack.js.org/plugins/css-minimizer-webpack-plugin/) - Optimize and minimize CSS assets
- [`offline-plugin`](https://github.com/NekR/offline-plugin) - Provide an offline experience for webpack projects

### Linters

- [`eslint`](https://github.com/eslint/eslint) - Enforce styleguide across application
- [`eslint-config-airbnb-base`](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb-base) - Base styleguide to enforce rules
- [`eslint-config-prettier`](https://github.com/prettier/eslint-config-prettier) - Implment prettier rules
- [`eslint-plugin-import`](https://github.com/benmosher/eslint-plugin-import) - Implment import rules
- [`eslint-plugin-prettier`](https://github.com/prettier/eslint-plugin-prettier) - Dependency for prettier usage with ESLint
- [`eslint-import-resolver-webpack`](https://github.com/benmosher/eslint-plugin-import/tree/master/resolvers/webpack) - Throw exceptions for import/export in webpack
- [`eslint-webpack-plugin`](https://github.com/webpack-contrib/eslint-webpack-plugin) - ESLint configuration for webpack
- [`prettier`](https://github.com/prettier/prettier) - Dependency for `prettier-webpack-plugin` plugin
- [`prettier-webpack-plugin`](https://github.com/hawkins/prettier-webpack-plugin) - Prettier configuration for webpack

### Libs

- [jQuery](https://jquery.com/), 
- [Fancybox](https://fancyapps.com/fancybox/3/), 
- [OwlCarousel](https://owlcarousel2.github.io/OwlCarousel2/), 
- [FlexSlider](http://flexslider.woothemes.com/),
- [jquery-selectric](https://selectric.js.org/),
- [jquery.maskedinput](https://github.com/digitalBush/jquery.maskedinput),
- [NoUiSlider](https://refreshless.com/nouislider/)
- [WebComponentsJs](https://github.com/webcomponents/polyfills/tree/master/packages/webcomponentsjs)

## Author

- [Mickle Goriachkin (abaddonGIT) ](https://github.com/abaddonGIT)

## License

This project is open source and available under the [MIT License](LICENSE).