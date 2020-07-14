# sync-copydir
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

copydir('path/from', 'path/to', config)`

## Example
move all of files from 'aaa' folder to 'bbb' folder
move 'bbb' folder to 'ccc' folder

### Usage1

```javascript
const path = require('path')
const copydir = require('sync-copydir')

copydir(path.join(__dirname, './aaa'), path.join(__dirname, './bbb'),{

})


```

### Usage2

```javascript
const path = require('path')
const copydir = require('sync-copydir')

copydir('./aaa','./bbb',{
    relative: true
})


```

## config
| property     | type       | default | description   | 
| -------- | ---------- | ------ |------ |
| relative | bool   | false | Output static directory(copy('./fileA','./fileB'))  |
