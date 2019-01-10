# node-copydir
a async copydir utils for nodejs

## Installing

```
npm i node-copydir
```
or 

```
yarn add node-copydir
```

## Usage

`await copydir('path/from', 'path/to')`

## Example
move all of files from 'aaa' folder to 'bbb' folder

```javascript
const copydir = require('node-copydir')

async function copy() {
    await copydir('./aaa', './bbb')
}


```
