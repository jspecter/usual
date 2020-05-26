const pkg = require('./package');
const fs = require('fs');
const path = require('path');
const VERSION_TYPE = ['MAGOR', 'MINOR', 'PATCH'];

function updateVersion(version) {
    let vObj = {};

    const v = /^([0-9]+)\.([0-9]+)\.([0-9]+)$/.exec(version);

    vObj[VERSION_TYPE[0]] = parseInt(v && v[1]);
    vObj[VERSION_TYPE[1]] = parseInt(v && v[2]);
    vObj[VERSION_TYPE[2]] = parseInt(v && v[3]);

    return function(type) {
        vObj[type.toLocaleUpperCase()] += 1;
        return `${vObj[VERSION_TYPE[0]]}.${vObj[VERSION_TYPE[1]]}.${
            vObj[VERSION_TYPE[2]]
        }`;
    };
}

const update = updateVersion(pkg.version);

if (!process.env.HUSKY_GIT_PARAMS) {
    throw new Error('未发现git commit msg路径');
}

const gitParams = process.env.HUSKY_GIT_PARAMS;

const commitMsg = fs.readFileSync(path.resolve(__dirname, gitParams), 'utf-8');
const params = /^([^-]+)--?([a-z]{1,5})/g.exec(commitMsg);

if (params && params[2]) {
    let newVersion = '';
    switch (params[2]) {
        case 'p' || 'patch':
            newVersion = update(VERSION_TYPE[2]);
            break;
        case 'min' || 'minor':
            newVersion = update(VERSION_TYPE[1]);
            break;
        case 'mag' || 'magor':
            newVersion = update(VERSION_TYPE[0]);
            break;
        default:
            newVersion = update(VERSION_TYPE[2]);
            break;
    }

    pkg.version = newVersion;
    fs.writeFileSync(__dirname + '/package.json', JSON.stringify(pkg, null, 4));
    require('child_process').execSync('git add .', { encoding: 'utf8' });
} else {
    throw new Error('需要传入更改版本类型');
}
