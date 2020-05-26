import inquirer from 'inquirer';
import path from 'path';
import { log } from './error';
import { init, config, filePathMap } from './const';
import { readDir, copy } from './util';
import chalk from 'chalk';

const ask = inquirer.prompt;
const cwd = process.cwd();
const source =
    process.env.NODE_ENV === 'development'
        ? path.join(__dirname, '..', 'source')
        : path.join(__dirname, '../..', 'source');

async function next() {
    const { init: result } = await ask(init).catch(
        log('some unexpected things happened!')
    );

    let files = [];

    if (result) {
        files = readDir(source);
    } else {
        const resultConfig = await ask(config).catch(
            log('some unexpected things happened!')
        );

        for (let key in resultConfig) {
            if (resultConfig[key]) {
                files.push(...filePathMap.get(key));
            }
        }
    }

    files.forEach(filename => {
        copyConfig(filename);
    });
}

function copyConfig(filename) {
    const src = path.resolve(source, filename),
        dest = path.resolve(cwd, filename);
    try {
        copy(src, dest);
    } catch (error) {
        console.log(chalk.blue(`${filename} is exists in dest pos`));
    }
}

next();
