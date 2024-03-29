'use strict';

module.exports = {
    parserOptions: {
        ecmaVersion: 11,
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
        'for-direction': 2,
        'getter-return': [2, {
            allowImplicit: true
        }],
        'no-async-promise-executor': 2,
        'no-await-in-loop': 2,
        'no-compare-neg-zero': 2,
        'no-cond-assign': 2,
        'no-constant-condition': 2,
        'no-control-regex': 2,
        'no-debugger': 2,
        'no-dupe-args': 2,
        'no-dupe-else-if': 2,
        'no-dupe-keys': 2,
        'no-duplicate-case': 2,
        'no-empty': 2,
        'no-empty-character-class': 2,
        'no-ex-assign': 2,
        'no-extra-boolean-cast': 2,
        'no-extra-semi': 2,
        'no-func-assign': 2,
        'no-import-assign': 1,
        'no-inner-declarations': 2,
        'no-invalid-regexp': 2,
        'no-irregular-whitespace': 2,
        'no-loss-of-precision': 2,
        'no-misleading-character-class': 2,
        'no-negated-in-lhs': 2,
        'no-obj-calls': 2,
        'no-promise-executor-return': 2,
        'no-prototype-builtins': 0,
        'no-regex-spaces': 2,
        'no-sparse-arrays': 2,
        'no-template-curly-in-string': 2,
        'no-unexpected-multiline': 2,
        'no-unreachable': 2,
        'no-unreachable-loop': 2,
        'no-unsafe-finally': 2,
        'no-unsafe-negation': 2,
        'no-unsafe-optional-chaining': 2,
        'no-unused-private-class-members': 1,
        'no-useless-backreference': 2,
        'require-atomic-updates': 2,
        'use-isnan': 2,
        'valid-typeof': 2,

        // Best Practices
        'accessor-pairs': 2,
        'array-callback-return': 1,
        'block-scoped-var': 2,
        'class-methods-use-this': 0,
        complexity: 0,
        'consistent-return': 0,
        curly: [2, 'multi-line'],
        'default-case': 2,
        'default-case-last': 2,
        'default-param-last': 1,
        'dot-notation': 2,
        'dot-location': [2, 'property'],
        eqeqeq: [2, 'smart'],
        'grouped-accessor-pairs': 0,
        'guard-for-in': 2,
        'max-classes-per-file': 0,
        'no-alert': 2,
        'no-caller': 2,
        'no-case-declarations': 0,
        'no-constant-binary-expression': 2,
        'no-constructor-return': 1,
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
        'no-global-assign': 0,
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
        'no-multi-assign': 0,
        'no-multi-spaces': 2,
        'no-multi-str': 2,
        'no-native-reassign': 2,
        'no-new-func': 2,
        'no-new-wrappers': 2,
        'no-new': 2,
        'no-nonoctal-decimal-escape': 2,
        'no-octal-escape': 2,
        'no-octal': 2,
        'no-process-env': 0,
        'no-proto': 2,
        'no-redeclare': 2,
        'no-restricted-properties': 0,
        'no-return-assign': [2, 'always'],
        'no-return-await': 2,
        'no-script-url': 2,
        'no-self-assign': 1,
        'no-self-compare': 2,
        'no-sequences': 2,
        'no-setter-return': 2,
        'no-throw-literal': 2,
        'no-unmodified-loop-condition': 2,
        'no-unused-expressions': 2,
        'no-unused-labels': 2,
        'no-useless-catch': 2,
        'no-useless-call': 2,
        'no-useless-concat': 2,
        'no-useless-escape': 2,
        'no-useless-return': 0,
        'no-void': 2,
        'no-warning-comments': 1,
        'no-with': 2,
        'prefer-named-capture-group': 1,
        'prefer-promise-reject-errors': 0,
        'prefer-regex-literals': 2,
        radix: 2,
        'require-await': 2,
        'require-unicode-regexp': 0,
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
        'no-restricted-exports': 0,
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
        'no-buffer-constructor': 2,
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
        'array-bracket-newline': 0,
        'array-bracket-spacing': [2, 'never'],
        'array-element-newline': 0,
        'block-spacing': [2, 'always'],
        'brace-style': [2, '1tbs', {
            allowSingleLine: false
        }],
        camelcase: [2, {
            properties: 'always'
        }],
        'capitalized-comments': 0,
        'comma-spacing': [2, {
            before: false,
            after: true
        }],
        'comma-style': [2, 'last'],
        'computed-property-spacing': [2, 'never'],
        'consistent-this': 0,
        'eol-last': 2,
        'function-call-argument-newline': ['error', 'consistent'],
        'func-call-spacing': 2,
        'func-names': 0,
        'func-name-matching': 0,
        'func-style': [2, 'declaration', {
            allowArrowFunctions: true
        }],
        'function-paren-newline': [2, 'consistent'],
        'id-blacklist': 0,
        'id-denylist': 0,
        'id-length': 0,
        'id-match': 0,
        'implicit-arrow-linebreak': 2,
        indent: [2, 4, {
            SwitchCase: 1
        }],
        'indent-legacy': 0,
        'jsx-quotes': 2,
        'key-spacing': [
            2, {
                beforeColon: false,
                afterColon: true
            }
        ],
        'keyword-spacing': 2,
        'linebreak-style': 0,
        'lines-between-class-members': 2,
        'line-comment-position': 0,
        'lines-around-comment': [2, {
            beforeBlockComment: true,
            beforeLineComment: true
        }],
        'lines-around-directive': 2,
        'max-lines': 0,
        'max-lines-per-function': 1,
        'max-nested-callbacks': [1, 4],
        'max-statements-per-line': 1,
        'multiline-comment-style': 2,
        'multiline-ternary': 0,
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
        'no-mixed-operators': 2,
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
        'no-tabs': 2,
        'no-ternary': 0,
        'no-trailing-spaces': 2,
        'no-underscore-dangle': 0,
        'no-unneeded-ternary': 2,
        'no-whitespace-before-property': 2,
        'nonblock-statement-body-position': 2,
        'object-curly-newline': [2, {
            consistent: true
        }],
        'object-curly-spacing': [2, 'always'],
        'object-property-newline': [2, {
            allowMultiplePropertiesPerLine: true
        }],
        'one-var': [2, {
            initialized: 'never'
        }],
        'one-var-declaration-per-line': [2, 'initializations'],
        'operator-assignment': [2, 'always'],
        'operator-linebreak': [2, 'after'],
        'padded-blocks': 0,
        'padding-line-between-statements': 0,
        'prefer-object-has-own': 1,
        'prefer-object-spread': 2,
        'prefer-exponentiation-operator': 1,
        'quote-props': [2, 'as-needed'],
        quotes: [2, 'single', 'avoid-escape'],
        'require-jsdoc': 0,
        'semi-spacing': [2, {
            before: false,
            after: true
        }],
        'semi-style': 2,
        semi: [2, 'always'],
        'sort-imports': 0,
        'sort-keys': 0,
        'sort-vars': 0,
        'space-before-blocks': [2, 'always'],
        'space-before-function-paren': [2, {
            anonymous: 'never',
            named: 'never'
        }],
        'space-in-parens': [2, 'never'],
        'space-infix-ops': 2,
        'space-unary-ops': 2,
        'template-tag-spacing': 2,
        'spaced-comment': [1, 'always'],
        'switch-colon-spacing': 2,
        'unicode-bom': 0,
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
        'rest-spread-spacing': [2, 'never'],
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
        'no-useless-rename': 2,
        'no-var': 2,
        'object-shorthand': 2,
        'prefer-arrow-callback': 2,
        'prefer-const': 2,
        'prefer-destructuring': 1,
        'prefer-numeric-literals': 2,
        'prefer-reflect': [1, {
            exceptions: ['delete']
        }],
        'prefer-rest-params': 1,
        'prefer-spread': 2,
        'prefer-template': 2,
        'require-yield': 2,
        'symbol-description': 1,
        'template-curly-spacing': 2,
        'yield-star-spacing': [2, 'before']
    }
};
