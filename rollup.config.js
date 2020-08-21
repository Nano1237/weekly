import typescript from 'rollup-plugin-typescript';
import {uglify} from "rollup-plugin-uglify";
import nodeResolve from "rollup-plugin-node-resolve";

export default {
    input: './src/main.ts',
    output: {
        format: 'umd',
        file: 'bundle.js',
    },
    plugins: [
        typescript(),
        uglify(),
        nodeResolve()
    ]
}
