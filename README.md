# node-copydir
a copydir utils for nodejs

## Installing

```
npm i node-copydir
```
or 

```
yarn add node-copydir
```

## Usage

`copydir('path/from', 'path/to', callback)`

## Example
move all of files from 'aaa' folder to 'bbb' folder

```javascript
const copydir = require('node-copydir')

copydir('./aaa', './bbb', function(){})

```
