import fs from 'fs';

export function readDir(path) {
    return fs.readdirSync(path, {
        encoding: 'utf8'
    });
}

export function copy(source, dest) {
    fs.copyFileSync(source, dest, fs.constants.COPYFILE_EXCL);
}
