import chalk from 'chalk';

export function log(msg) {
    const error = new Error(msg);
    return (e) => {
        error.origin = e;
        throw chalk.error(error);
    };
}
