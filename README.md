# eslint-config-thedark1337  [![Build Status](https://img.shields.io/travis/thedark1337/eslint-config-thedark1337.svg)](https://travis-ci.org/thedark1337/eslint-config-thedark1337)   [![npm version](http://img.shields.io/npm/v/eslint-config-thedark1337.svg)](https://npmjs.org/package/eslint-config-thedark1337) [![npm downloads](https://img.shields.io/npm/dm/eslint-config-thedark1337.svg)](https://npmjs.org/package/eslint-config-thedark1337)

> ESLint [shareable config](http://eslint.org/docs/developer-guide/shareable-configs.html) for [Thedark1337](https://github.com/thedark1337)

## Install

``` javascript
npm i -D eslint-config-thedark1337
```

**NOTE:** If using esnext,  Babel-eslint and eslint-plugin-babel must be used
```javascript
npm i -D babel-eslint eslint-plugin-babel
```

## Usage

Add ESLint config to your `package.json`:

```json
{
    "name": "my-nodejs-package",
    "eslintConfig": {
        "extends": "thedark1337"
    }
}
```

Or to `.eslintrc`:

```json
{
    "extends": "thedark1337"
}
```

There are also configs for coding in browser, in ES6, and on the website [plug.dj](https://plug.dj) ([RIP](https://plugcubed.net/goodbye) Feb. 2012 -  Sept. 2015).
To use them change extends to one of these:

* thedark1337/browser
* thedark1337/esnext
* thedark1337/plugdj

Thank you to Sindresorhus for their [XO](https://github.com/sindresorhus/eslint-config-xo) Config.

## License

[GPL License](https://github.com/thedark1337/eslint-config-thedark1337/blob/master/LICENSE)

Copyright &copy; 2015 Thedark1337

This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.

This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.

You should have received a copy of the GNU General Public License along with this program. If not, see http://www.gnu.org/licenses/.
