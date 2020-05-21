import inquirer from 'inquirer';
import path from 'path';
import { log } from './error';
import { init, config } from './const';
import { readDir, copy } from './util';
import chalk from 'chalk';

const ask = inquirer.prompt;

const next = async function () {
    const { init: result } = await ask(init).catch(
        log('some unexpected things happened!')
    );
    if (result) {
        const cwd = process.cwd();
        const source = path.join(__dirname, '../..', 'source');

        const files = readDir(source);

        files.forEach((filename) => {
            const src = path.resolve(source, filename),
                dest = path.resolve(cwd, filename);
            try {
                copy(src, dest);
            } catch (error) {
                console.log(chalk.blue(`${filename} is exists in dest pos`));
            }
        });
    }
};

next();
