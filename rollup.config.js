import { terser } from 'rollup-plugin-terser';

export default {
    input: 'src/index.js',
    output: [
        {
            dir: 'dist/bundle',
            format: 'es'
        },
        {
            dir: 'dist/bundle.min',
            format: 'es',
            plugins: [terser()]
        }
    ]
};
