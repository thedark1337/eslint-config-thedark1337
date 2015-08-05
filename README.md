# eslint-config-thedark1337

> ESLint [shareable config](http://eslint.org/docs/developer-guide/shareable-configs.html) for [Thedark1337](https://github.com/thedark1337)

## Install

``` javascript
npm install --save-dev eslint-config-thedark1337
```
**NOTE: ** This extends [eslint-config-xo](https://github.com/sindresorhus/eslint-config-xo/) and utilizes [ESLint](https://eslint.org) to lint code.
``` javascript
npm install --save-dev eslint eslint-config-xo
```

## Usage

Add some ESLint config to your `package.json`:

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

There are also configs for coding in browser and on the website [plug.dj](https://plug.dj), just change the extends to thedark1337/browser or thedark1337/plugdj for either one.


## License

[GPL License](https://github.com/thedark1337/eslint-config-thedark1337/blob/master/LICENSE)

Copyright &copy; 2015 Thedark1337

This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.

This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.

You should have received a copy of the GNU General Public License along with this program. If not, see http://www.gnu.org/licenses/.
