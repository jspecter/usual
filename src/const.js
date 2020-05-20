export const init = {
    type: 'confirm',
    name: 'init',
    message: 'do u hope use default config?'
};

export const config = [
    {
        type: 'confirm',
        name: 'editor',
        message: 'should u add editor config?'
    },
    {
        type: 'confirm',
        name: 'git',
        message: 'should u add git config?'
    },
    {
        type: 'confirm',
        name: 'prettier',
        message: 'should u add prettier config?'
    },
    {
        type: 'confirm',
        name: 'eslint',
        message: 'should u add eslint config?'
    },
    {
        type: 'confirm',
        name: 'ts',
        message: 'should u add typescript config?'
    }
];
