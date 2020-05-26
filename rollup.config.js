import { terser } from 'rollup-plugin-terser';

export default {
    input: 'src/index.js',
    output: [
        {
            dir: 'dist/bundle',
            format: 'cjs'
        },
        {
            dir: 'dist/bundle.min',
            format: 'cjs',
            plugins: [terser()]
        }
    ]
};
