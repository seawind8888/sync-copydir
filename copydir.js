const fs = require('fs')
const path = require('path')


function copydir(f, t, cb) {
    let _f = path.resolve(process.cwd(), f)
    let _t = path.join(process.cwd(), t)
    
    _copydir(_f, _t, cb);
}

function _copydir(f, t, cb) {
    try {
        fs.accessSync(t);
    } catch (e) {
        fs.mkdirSync(t);
    }
    try {
        fs.readdirSync(f).forEach(function (p) {
            let _f = f + '/' + p;
            let _t = t + '/' + p;
            try {
                let stat = fs.statSync(_f)
                if (stat.isFile()) {
                    fs.writeFileSync(_t, fs.readFileSync(_f));
                } else if (stat.isDirectory()) {
                    _copydir(_f, _t)
                }
            } catch (e) {
                cb(e)
            }
        })
    } catch (e) {
        cb(e)
    }
}



module.exports = copydir