import ObjMap from './map';

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
        name: 'typescript',
        message: 'should u add typescript config?'
    }
];

export const filePathMap = new ObjMap({
    editor: ['.editorconfig'],
    eslint: ['.eslintignore', '.eslintrc'],
    git: ['.gitignore'],
    prettier: ['.prettierignore', '.prettierrc'],
    typescript: ['tsconfig.json']
});
