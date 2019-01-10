const fs = require('fs')
const path = require('path')


function copydir(f, t) {
    let _f = path.resolve(process.cwd(), f)
    let _t = path.join(process.cwd(), t)
    
    _copydir(_f, _t);
}

function _copydir(f, t) {
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
                console.log(e)
            }
        })
    } catch (e) {
        console.log(e)
    }
}



module.exports = copydir