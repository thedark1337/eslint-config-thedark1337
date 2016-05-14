'use strict';

module.exports = {
    parserOptions: {
        ecmaVersion: 6,
        ecmaFeatures: {
            jsx: true
        }
    },
    env: {
        node: true,
        es6: true
    },
    rules: {

        // Possible Errors
        'comma-dangle': 2,
        'no-cond-assign': 2,
        'no-constant-condition': 2,
        'no-control-regex': 2,
        'no-debugger': 2,
        'no-dupe-args': 2,
        'no-dupe-keys': 2,
        'no-duplicate-case': 2,
        'no-empty': 2,
        'no-empty-character-class': 2,
        'no-ex-assign': 2,
        'no-extra-boolean-cast': 2,
        'no-extra-semi': 2,
        'no-func-assign': 2,
        'no-inner-declarations': 2,
        'no-invalid-regexp': 2,
        'no-irregular-whitespace': 2,
        'no-negated-in-lhs': 2,
        'no-obj-calls': 2,
        'no-regex-spaces': 2,
        'no-sparse-arrays': 2,
        'no-unexpected-multiline': 2,
        'no-unreachable': 2,
        'no-unsafe-finally': 2,
        'use-isnan': 2,
        'valid-typeof': 2,

        // Best Practices
        'accessor-pairs': 2,
        'array-callback-return': 1,
        'block-scoped-var': 2,
        complexity: 0,
        'consistent-return': 0,
        curly: [2, 'multi-line'],
        'default-case': 2,
        'dot-notation': 2,
        'dot-location': [2, 'property'],
        eqeqeq: [2, 'smart'],
        'guard-for-in': 2,
        'no-alert': 2,
        'no-caller': 2,
        'no-case-declarations': 0,
        'no-div-regex': 2,
        'no-else-return': 2,
        'no-eq-null': 0,
        'no-empty-function': 0,
        'no-empty-pattern': 2,
        'no-eval': 2,
        'no-extend-native': 2,
        'no-extra-bind': 2,
        'no-extra-label': 2,
        'no-extra-parens': 0,
        'no-fallthrough': 2,
        'no-floating-decimal': 2,
        'no-implicit-coercion': 2,
        'no-implied-eval': 2,
        'no-implicit-globals': 0,
        'no-invalid-this': 0,
        'no-iterator': 2,
        'no-labels': 2,
        'no-lone-blocks': 2,
        'no-loop-func': 2,
        'no-magic-numbers': 0,
        'no-multi-spaces': 2,
        'no-multi-str': 2,
        'no-native-reassign': 2,
        'no-new-func': 2,
        'no-new-wrappers': 2,
        'no-new': 2,
        'no-octal-escape': 2,
        'no-octal': 2,
        'no-process-env': 0,
        'no-proto': 2,
        'no-redeclare': 2,
        'no-return-assign': [2, 'always'],
        'no-script-url': 2,
        'no-self-assign': 1,
        'no-self-compare': 2,
        'no-sequences': 2,
        'no-throw-literal': 2,
        'no-unmodified-loop-condition': 2,
        'no-unused-expressions': 2,
        'no-unused-labels': 2,
        'no-useless-call': 2,
        'no-useless-concat': 2,
        'no-useless-escape': 2,
        'no-void': 2,
        'no-warning-comments': 1,
        'no-with': 2,
        radix: 2,
        'wrap-iife': [2, 'inside'],
        yoda: 2,

        strict: [2, 'global'],

        // Variables
        'init-declarations': 0,
        'no-catch-shadow': 0,
        'no-console': 0,
        'no-delete-var': 2,
        'no-label-var': 2,
        'no-restricted-globals': 0,
        'no-shadow': 2,
        'no-shadow-restricted-names': 2,
        'no-undef-init': 2,
        'no-undef': [2, {
            typeof: true
        }],
        'no-undefined': 0,
        'no-unused-vars': [1, {
            vars: 'all',
            args: 'none'
        }],
        'no-use-before-define': [2, 'nofunc'],

        // Node.js
        'callback-return': 0,
        'global-require': 0,
        'handle-callback-err': 1,
        'no-mixed-requires': [2, {
            grouping: true
        }],
        'no-new-require': 2,
        'no-path-concat': 2,
        'no-process-exit': 2,
        'no-restricted-imports': 0,
        'no-restricted-modules': 0,
        'no-sync': 2,

        // Stylistic Issues
        'array-bracket-spacing': [2, 'never'],
        'block-spacing': [2, 'always'],
        'brace-style': [2, '1tbs', {
            allowSingleLine: false
        }],
        camelcase: [2, {
            properties: 'always'
        }],
        'comma-spacing': [2, {
            before: false,
            after: true
        }],
        'comma-style': [2, 'last'],
        'computed-property-spacing': [2, 'never'],
        'consistent-this': 0,
        'eol-last': 2,
        'func-names': 0,
        'func-style': [2, 'declaration', {
            allowArrowFunctions: true
        }],
        'id-blacklist': 0,
        'id-length': 0,
        'id-match': 0,
        indent: [2, 4, {
            SwitchCase: 1
        }],
        'jsx-quotes': 2,
        'key-spacing': [2, {
            beforeColon: false,
            afterColon: true
        }],
        'keyword-spacing': 2,
        'linebreak-style': 0,
        'lines-around-comment': [2, {
            beforeBlockComment: true,
            beforeLineComment: true
        }],
        'max-nested-callbacks': [1, 4],
        'max-statements-per-line': 1,
        'new-cap': [2, {
            newIsCap: true,
            capIsNew: true
        }],
        'new-parens': 2,
        'newline-after-var': 2,
        'newline-before-return': 1,
        'newline-per-chained-call': 1,
        'no-array-constructor': 2,
        'no-continue': 0,
        'no-inline-comments': 0,
        'no-lonely-if': 1,
        'no-mixed-spaces-and-tabs': 2,
        'no-multiple-empty-lines': [2, {
            max: 1
        }],
        'no-negated-condition': 2,
        'no-nested-ternary': 0,
        'no-new-object': 2,
        'no-param-reassign': 0,
        'no-restricted-syntax': [2, 'WithStatement'],
        'no-spaced-func': 2,
        'no-ternary': 0,
        'no-trailing-spaces': 2,
        'no-underscore-dangle': 0,
        'no-unneeded-ternary': 2,
        'no-whitespace-before-property': 2,
        'object-curly-spacing': [2, 'always'],
        'object-property-newline': [2, { allowMultiplePropertiesPerLine: true }],
        'one-var': [2, 'never'],
        'one-var-declaration-per-line': [2, 'initializations'],
        'operator-assignment': [2, 'always'],
        'operator-linebreak': [2, 'after'],
        'padded-blocks': 0,
        'quote-props': [2, 'as-needed'],
        quotes: [2, 'single', 'avoid-escape'],
        'require-jsdoc': 0,
        'semi-spacing': [2, {
            before: false,
            after: true
        }],
        semi: [2, 'always'],
        'sort-imports': 0,
        'sort-vars': 0,
        'space-before-blocks': [2, 'always'],
        'space-before-function-paren': [2, {
            anonymous: 'never',
            named: 'never'
        }],
        'space-in-parens': [2, 'never'],
        'space-infix-ops': 2,
        'space-unary-ops': 2,
        'spaced-comment': [1, 'always'],
        'valid-jsdoc': [2, {
            prefer: {
                return: 'returns'
            },
            requireReturn: false
        }],
        'vars-on-top': 0,
        'wrap-regex': 0,

        // Legacy
        'max-depth': [2, 10],
        'max-len': 0,
        'max-params': 0,
        'max-statements': 0,
        'no-bitwise': 0,
        'no-plusplus': 0,

        // ES2015
        'arrow-body-style': 0,
        'arrow-parens': [2, 'always'],
        'arrow-spacing': [2, {
            before: true,
            after: true
        }],
        'constructor-super': 2,
        'generator-star-spacing': [2, 'both'],

        'no-class-assign': 2,
        'no-confusing-arrow': 2,
        'no-const-assign': 2,
        'no-dupe-class-members': 2,
        'no-duplicate-imports': 2,
        'no-new-symbol': 2,
        'no-this-before-super': 2,
        'no-useless-computed-key': 2,
        'no-useless-constructor': 2,
        'no-var': 2,
        'object-shorthand': 2,
        'prefer-arrow-callback': 2,
        'prefer-const': 2,

        // TODO: Enable when Node.js officially supports Reflect ES2015 in LTS
        'prefer-reflect': [0, {
            exceptions: ['delete']
        }],

        // TODO: Enable when Node.js officially supports rest params in LTS.
        'prefer-rest-params': 0,
        'prefer-spread': 2,
        'prefer-template': 2,
        'require-yield': 2,
        'template-curly-spacing': 2,
        'yield-star-spacing': [2, 'before']
    }
};
