# eslint-config-thedark1337 [![npm version](http://img.shields.io/npm/v/eslint-config-thedark1337.svg)](https://npmjs.org/package/eslint-config-thedark1337) [![npm downloads](https://img.shields.io/npm/dm/eslint-config-thedark1337.svg)](https://npmjs.org/package/eslint-config-thedark1337) [![Build Status](https://ci.tfle.xyz/job/ESLint%20Config%20TheDark1337/3/badge/icon)](https://ci.tfle.xyz/job/ESLint%20Config%20TheDark1337/3/)


> ESLint [shareable config](https://eslint.org/docs/latest/developer-guide/shareable-configs.html) for [Thedark1337](https://github.com/thedark1337)

## Install

**NOTE:** As of Version 1.0, this config will be inline with ESLint's rules at the latest version.

``` javascript
npm i -D eslint-config-thedark1337
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

There are also configs for coding in browser.

To use them change extends to one of these:

* thedark1337/browser


Thank you to Sindresorhus for their [XO](https://github.com/sindresorhus/eslint-config-xo) Config.

Thank you to Mysticatea for their [Config](https://github.com/mysticatea/eslint-config).

## License

[GPL License](https://github.com/thedark1337/eslint-config-thedark1337/blob/master/LICENSE)

Copyright &copy; 2022 Thedark1337

This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.

This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.

You should have received a copy of the GNU General Public License along with this program. If not, see http://www.gnu.org/licenses/.
