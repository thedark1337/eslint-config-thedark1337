'use strict';

module.exports = {
    extends: 'xo',
    env: {
        node: true
    },
    globals: {
    },
    rules: {
        'brace-style': [2, '1tbs'],
        'comma-spacing': [2, {
            before: false,
            after: true
        }],
        'comma-style': [2, 'last'],
        'consistent-return': 0,
        'consistent-this': [2, 'that'],
        curly: [2, 'multi-line'],
        eqeqeq: [2, 'smart'],
        'no-eq-null': 0,
        indent: [2, 4, {
            SwitchCase: 1
        }],
        'new-cap': 0,
        'no-array-constructor': 2,
        'no-extra-parens': [2, 'functions'],
        'no-inline-comments': 0,
        'no-lonely-if': 1,
        'no-nested-ternary': 0,
        'no-new-object': 2,
        'no-unused-vars': [1, {
            vars: 'all',
            args: 'none'
        }],
        'no-use-before-define': 2,
        'padded-blocks': 0,
        'space-before-function-paren': [2, {
            anonymous: 'never',
            named: 'never'
        }],
        'no-process-exit': 2,
        'one-var': [2, 'never'],
        'operator-linebreak': [2, 'before'],
        quotes: [2, 'single', 'avoid-escape'],
        'space-in-parens': [2, 'never'],
        'spaced-comment': 0,
        strict: [2, 'global'],
        'valid-jsdoc': [2, {
            'prefer': {
                return: 'returns'
            },
            requireReturn: false
        }]
    }
};
