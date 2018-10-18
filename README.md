# google-spreadsheet-i18n

[![npm](https://img.shields.io/npm/v/npm.svg)](https://www.npmjs.com/package/google-spreadsheet-i18n)

Export Google Spreadsheets to I18n JSON files, though Node API or CLI.

## Installation

CLI:

```bash
npm i google-spreadsheet-i18n -g
```

## Help

```bash
gstoi18n --help

Usage: gstoi18n <spreadsheet-id> [saveas] [options]

Options:
    -V, --version   output the version number
    -b, --beautify  Beautify final JSON
    -es, --esmodule Export with es module
    -p, --property  File name case (pascal, default, camel, nospace)
    -h, --help      output usage information
```

## Example

Google spreadsheets example，

[Example](https://docs.google.com/spreadsheets/d/e/2PACX-1vSkv8H8ErzHJ1fUT2agNVJDGsPI7n96m8v3jF9-2Ss6dVeExu5SVGVajOrJooZgiTHMWZsgbx-8S-tz/pubhtml)

![screen](https://ws1.sinaimg.cn/large/006tNc79gy1fpzc25oyr7j31ck0hi76v.jpg)

The address bar red wireframe area is the google spreadsheets id, then

```bash
$ gstoi18n 1fhgYGnV7OhMKqYJBDJhf93LU9xNpoVxVjp50cwIVBIM

zhHant:
  hello:   你好
  chinese: 漢語
zhHans:
  hello:   你好
  chinese: 汉语
en:
  hello:   Hello
  chinese: Chinese
```

save content on your folder,

```bash
$ gstoi18n 1fhgYGnV7OhMKqYJBDJhf93LU9xNpoVxVjp50cwIVBIM ./output
```

It's will create three json file,

```
# zhHant.json
{
    "hello": "你好",
    "chinese": "漢語"
}
```

```
# zhHans.json
{
    "hello": "你好",
    "chinese": "汉语"
}
```

```
# en.json
{
    "hello": "Hello",
    "chinese": "Chinese"
}
```
