import html from '@web/rollup-plugin-html';
import summary from 'rollup-plugin-bundle-summary';
import copy from 'rollup-plugin-copy';
import { nodeResolve } from '@rollup/plugin-node-resolve';

export default {
  input: 'index.html',
  output: { dir: 'dist' },
  plugins: [
    html(),
    summary(),
    copy({
      targets: [
        { src: 'assets', dest: 'dist/' },
      ]
    }),
    nodeResolve(),
  ],
};

