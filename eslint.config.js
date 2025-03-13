import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactPlugin from 'eslint-plugin-react';
import tseslint from 'typescript-eslint';
import reactRefresh from 'eslint-plugin-react-refresh';

export default tseslint.config(
  { ignores: ['dist', 'node_modules'] },
  { files: ['**/*.{js,mjs,cjs,ts,tsx}'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    languageOptions: {
      ecmaVersion: 2020,
      globals: {
        ...globals.node,
        ...globals.browser, // 保留浏览器环境的全局变量
      },
    },
    plugins: {
      react: reactPlugin,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-unused-vars': [
        1,
        {
          args: 'after-used',
          ignoreRestSiblings: true,
          argsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
          destructuredArrayIgnorePattern: '^_',
          varsIgnorePattern: '^_',
        },
      ],
      'array-callback-return': [
        1,
        {
          allowImplicit: false,
          checkForEach: false,
          allowVoid: false,
        },
      ],
      'constructor-super': [2],
      'getter-return': [
        1,
        {
          allowImplicit: false,
        },
      ],
      'new-parens': [1],
      'no-array-constructor': [0],
      'no-caller': [2],
      'no-cond-assign': [1, 'except-parens'],
      'no-const-assign': [2],
      'no-control-regex': [1],
      'no-dupe-args': [1],
      'no-dupe-class-members': [0],
      'no-dupe-keys': [1],
      'no-duplicate-case': [1],
      'no-duplicate-imports': [
        0,
        {
          includeExports: false,
        },
      ],
      'no-empty-character-class': [1],
      'no-empty-pattern': [
        1,
        {
          allowObjectPatternsAsParameters: false,
        },
      ],
      'no-empty': [
        1,
        {
          allowEmptyCatch: true,
        },
      ],
      'no-eval': [
        2,
        {
          allowIndirect: false,
        },
      ],
      'no-ex-assign': [1],
      'no-extend-native': [
        1,
        {
          exceptions: [],
        },
      ],
      'no-extra-bind': [1],
      'no-extra-boolean-cast': [1, {}],
      'no-extra-label': [1],
      'no-fallthrough': [
        1,
        {
          allowEmptyCase: false,
          reportUnusedFallthroughComment: false,
        },
      ],
      'no-func-assign': [1],
      'no-global-assign': [
        1,
        {
          exceptions: [],
        },
      ],
      'no-implied-eval': [1],
      'no-invalid-regexp': [1, {}],
      'no-label-var': [1],
      'no-labels': [
        1,
        {
          allowLoop: true,
          allowSwitch: false,
        },
      ],
      'no-lone-blocks': [1],
      'no-loop-func': [1],
      'no-mixed-operators': [
        1,
        {
          groups: [
            ['&', '|', '^', '~', '<<', '>>', '>>>'],
            ['==', '!=', '===', '!==', '>', '>=', '<', '<='],
            ['&&', '||'],
            ['in', 'instanceof'],
          ],
          allowSamePrecedence: false,
        },
      ],
      'no-native-reassign': [1],
      'no-new-func': [1],
      'no-new-object': [1],
      'no-new-symbol': [1],
      'no-new-wrappers': [1],
      'no-octal': [1],
      'no-octal-escape': [2],
      'no-redeclare': [
        0,
        {
          builtinGlobals: true,
        },
      ],
      'no-restricted-globals': [
        2,
        'addEventListener',
        'blur',
        'close',
        'closed',
        'confirm',
        'defaultStatus',
        'defaultstatus',
        'event',
        'external',
        'find',
        'focus',
        'frameElement',
        'frames',
        'history',
        'innerHeight',
        'innerWidth',
        'length',
        'location',
        'locationbar',
        'menubar',
        'moveBy',
        'moveTo',
        'name',
        'onblur',
        'onerror',
        'onfocus',
        'onload',
        'onresize',
        'onunload',
        'open',
        'opener',
        'opera',
        'outerHeight',
        'outerWidth',
        'pageXOffset',
        'pageYOffset',
        'parent',
        'print',
        'removeEventListener',
        'resizeBy',
        'resizeTo',
        'screen',
        'screenLeft',
        'screenTop',
        'screenX',
        'screenY',
        'scroll',
        'scrollbars',
        'scrollBy',
        'scrollTo',
        'scrollX',
        'scrollY',
        'self',
        'status',
        'statusbar',
        'stop',
        'toolbar',
        'top',
      ],
      'no-restricted-properties': [2],
      'no-restricted-syntax': [2, 'WithStatement'],
      'no-script-url': [1],
      'no-self-assign': [
        1,
        {
          props: true,
        },
      ],
      'no-self-compare': [1],
      'no-sequences': [
        1,
        {
          allowInParentheses: true,
        },
      ],
      'no-shadow-restricted-names': [1],
      'no-sparse-arrays': [1],
      'no-template-curly-in-string': [1],
      'no-this-before-super': [1],
      'no-undef': [
        0,
        {
          typeof: false,
        },
      ],
      'no-unreachable': [1],
      'no-unsafe-negation': [
        2,
        {
          enforceForOrderingRelations: false,
        },
      ],
      'no-unused-expressions': [
        0,
        {
          allowShortCircuit: true,
          allowTernary: true,
          allowTaggedTemplates: true,
          enforceForJSX: false,
        },
      ],
      'no-unused-labels': [1],
      'no-unused-vars': [
        0,
        {
          args: 'after-used',
          ignoreRestSiblings: true,
          argsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
          destructuredArrayIgnorePattern: '^_',
          varsIgnorePattern: '^_',
        },
      ],
      'no-use-before-define': [
        0,
        {
          classes: false,
          functions: false,
          variables: false,
          allowNamedExports: false,
        },
      ],
      'no-useless-computed-key': [
        1,
        {
          enforceForClassMembers: true,
        },
      ],
      'no-useless-concat': [1],
      'no-useless-constructor': [0],
      'no-useless-escape': [1],
      'no-useless-rename': [
        1,
        {
          ignoreDestructuring: false,
          ignoreImport: false,
          ignoreExport: false,
        },
      ],
      'no-var': [0],
      'no-with': [1],
      'require-yield': [1],
      'use-isnan': [
        1,
        {
          enforceForIndexOf: false,
          enforceForSwitchCase: true,
        },
      ],
      'valid-typeof': [
        1,
        {
          requireStringLiterals: false,
        },
      ],
      '@typescript-eslint/consistent-type-assertions': [1],
      '@typescript-eslint/consistent-type-imports': [1],
      '@typescript-eslint/no-array-constructor': [1],
      '@typescript-eslint/no-use-before-define': [
        1,
        {
          functions: false,
          classes: false,
          variables: false,
          typedefs: false,
        },
      ],
      '@typescript-eslint/no-unused-expressions': [
        1,
        {
          allowShortCircuit: true,
          allowTaggedTemplates: true,
          allowTernary: true,
        },
      ],
      'react/jsx-no-undef': [2],
      'react/style-prop-object': [2],
      'react/display-name': [0],
      'react/forbid-foreign-prop-types': [
        1,
        {
          allowInPropTypes: true,
        },
      ],
      'react/jsx-key': [1],
      'react/jsx-no-comment-textnodes': [1],
      'react/jsx-no-target-blank': [1],
      'react/jsx-pascal-case': [
        1,
        {
          allowNamespace: true,
        },
      ],
      'react/jsx-uses-vars': [1],
      'react/jsx-uses-react': [1],
      'react/no-danger-with-children': [1],
      'react/no-deprecated': [1],
      'react/no-direct-mutation-state': [1],
      'react/no-find-dom-node': [1],
      'react/no-is-mounted': [1],
      'react/no-render-return-value': [2],
      'react/no-string-refs': [1],
      'react/no-typos': [1],
      'react/react-in-jsx-scope': [0],
      'react/require-render-return': [0],
      'react-hooks/exhaustive-deps': [1],
      'react-hooks/rules-of-hooks': [2],
    },
  },
);
