# Checks for diacritical marks

This simple module provides 2 methods to check if a character is a diacritical mark, more specifically, accents.

This is useful for cases where you're firing events on everything a user
types but you might want to ignore when he types an accent before the
character the accent is applied on.

The following accents are detected:
```
^
`
~
¨
´
```

## Install

`npm install is-diacritical-mark`

## fromCode(code)

Takes a [charCode](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCharCode) and returns true if the code for the character matches.

## fromChar(char)

Takes a character and returns true if the character matches.
