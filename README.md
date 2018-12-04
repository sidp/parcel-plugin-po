# Parcel plugin

This is a plugin for [Parcel](https://github.com/parcel-bundler/parcel) that allows importing PO files. It's a tiny wrapper around [po2json](https://github.com/mikeedwards/po2json).

## Installation

```sh
npm install @sidp/parcel-plugin-po
```

## Usage

example.po:
```
msgid "Pages:"
msgstr "Sidor:"
```

```js
import strings from './example.po';

console.log(strings['Pages:']);
```
