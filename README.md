# eslint-config-thedark1337  [![Build Status](https://img.shields.io/travis/thedark1337/eslint-config-thedark1337.svg)](https://travis-ci.org/thedark1337/eslint-config-thedark1337)   [![npm version](http://img.shields.io/npm/v/eslint-config-thedark1337.svg)](https://npmjs.org/package/eslint-config-thedark1337) [![npm downloads](https://img.shields.io/npm/dm/eslint-config-thedark1337.svg)](https://npmjs.org/package/eslint-config-thedark1337) [![bitHound Overall Score](https://www.bithound.io/github/thedark1337/eslint-config-thedark1337/badges/score.svg)](https://www.bithound.io/github/thedark1337/eslint-config-thedark1337) [![bitHound Dependencies](https://www.bithound.io/github/thedark1337/eslint-config-thedark1337/badges/dependencies.svg)](https://www.bithound.io/github/thedark1337/eslint-config-thedark1337/master/dependencies/npm) [![bitHound Dev Dependencies](https://www.bithound.io/github/thedark1337/eslint-config-thedark1337/badges/devDependencies.svg)](https://www.bithound.io/github/thedark1337/eslint-config-thedark1337/master/dependencies/npm)

> ESLint [shareable config](http://eslint.org/docs/developer-guide/shareable-configs.html) for [Thedark1337](https://github.com/thedark1337)

## Install

**NOTE:** As of Version 1.0, this config will be inline with ESLint's rules at the latest version.

``` javascript
npm i -D eslint-config-thedark1337
```

**NOTE:** If using esnext,  [Babel-eslint](npmjs.com/package/babel-eslint) and [eslint-plugin-babel](https://www.npmjs.com/package/eslint-plugin-babel) must be used. If using ESLint@2 please use babel-eslint@next (beta)
```javascript
npm i -D babel-eslint eslint-plugin-babel
```

## Usage

Add ESLint config to one of the following:

`package.json`:

```json
{
    "name": "my-nodejs-package",
    "eslintConfig": {
        "extends": "thedark1337"
    }
}
```

`.eslintrc.js`:

```js
module.exports = {
    "extends": "thedark1337"
}
```
`.eslintrc.json`:

```json
{
    "extends": "thedark1337"
}
```
`.eslintrc.yaml`:

```yaml
    extends:
        "thedark1337"
```

There are also configs for coding in browser, and in ES2015+.

To use them change extends to one of these:

* thedark1337/browser
* thedark1337/esnext


Thank you to Sindresorhus for their [XO](https://github.com/sindresorhus/eslint-config-xo) Config.

Thank you to Mysticatea for their [Config](https://github.com/mysticatea/eslint-config).

## License

[GPL License](https://github.com/thedark1337/eslint-config-thedark1337/blob/master/LICENSE)

Copyright &copy; 2015 Thedark1337

This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.

This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.

You should have received a copy of the GNU General Public License along with this program. If not, see http://www.gnu.org/licenses/.
