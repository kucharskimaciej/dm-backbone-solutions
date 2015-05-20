# Solutions for the Backbone training

## About the code structure

The code is bundled on per-task basis. All `*.es6.js` files within a single task directory will be compiled into a single `main.js` file which is then referenced from `index.html`.

## Installation

You'll need to have `node` and `npm` installed globally. All commands should be executed from the project's main directory.

```
npm install
```
```
npm install -g webpack
```
This will install `webpack` globally for convenient use.

## Usage

To compile all files **once**:
```
webpack webpack.config.js
```

To watch the changes and compile only the files that have changed:
```
webpack webpack.config.js --watch
```
