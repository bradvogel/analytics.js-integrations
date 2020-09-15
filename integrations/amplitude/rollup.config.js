import resolve from '@rollup/plugin-node-resolve';
import commonJS from '@rollup/plugin-commonjs';

export default {
  input: 'lib/index.js',
  output: {
    file: 'bundle/index.js',
    format: 'cjs'
  },
  plugins: [commonJS(), resolve()]
};
