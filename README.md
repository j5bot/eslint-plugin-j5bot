# eslint-plugin-j5bot

j5&#39;s custom eslint rules

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-j5bot`:

```
$ npm install eslint-plugin-j5bot --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-j5bot` globally.

## Usage

Add `j5bot` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "j5bot"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "j5bot/rule-name": 2
    }
}
```

## Supported Rules

* Fill in provided rules here





