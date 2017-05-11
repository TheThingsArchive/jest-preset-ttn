
# jest-preset-ttn

A jest preset for The Things Network repositories.


## Usage

Install the package: 

```sh
yarn add jest-preset-ttn --dev

# or

npm install jest-preset-ttn --save-dev
```

and use it in your jest config in `package.json`:

```json
{
  "jest": {
    "preset": "jest-preset-ttn"
  }
}
```

## Exposed config

```json
{
  "testMatch": [
    "**/*.test.js"
  ],
  "transform": {
    "^.+\\.js$": "<rootDir>/node_modules/jest-preset-ttn/transform.js",
    "\\.(css|styl|less|sass)$": "<rootDir>/node_modules/jest-preset-ttn/styles.transform.js",
    "\\.(jpg|jpeg|svg)$": "<rootDir>/node_modules/jest-preset-ttn/files.transform.js"
  },
  "moduleNameMapper": {
    "~/(.*)": "<rootDir>/src/$1"
  }
}
```

### Brief explanation

- It sets up jest to only test files of the format `*.test.js`
- It transforms js files with `babel-preset-ttn` and `es2015` to enable module
  transforms
- It replaces style-like (`.css`, `.styl`, ...) file imports with an empty
  object `{}`.
- It replaces file-like (`.jpeg`, `.png`, ...) file imports with a string
  containing the filename.
