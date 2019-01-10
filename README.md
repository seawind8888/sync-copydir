# node-copydir
a async copydir utils for nodejs

## Installing

```
npm i sync-copydir
```
or 

```
yarn add sync-copydir
```

## Usage

copydir('path/from', 'path/to')`

## Example
move all of files from 'aaa' folder to 'bbb' folder
move 'bbb' folder to 'ccc' folder

```javascript
const copydir = require('sync-copydir')

copydir('./aaa', './bbb')
copydir('./bbb', './ccc')


```
