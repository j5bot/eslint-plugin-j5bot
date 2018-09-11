# Allow 'useless call' when this is null (no-useless-call-allow-null)

Please describe the origin of the rule here.


## Rule Details

This rule aims to discourage the use of call when it is unneccessary but still allow call(null) in order to avoid creating new function scopes.

The following patterns are considered warnings:

```js

// fill me in

```

The following patterns are not warnings:

```js

// fill me in

```

### Options

allowNull: boolean

## When Not To Use It

If you want to be able to do .call(null).
