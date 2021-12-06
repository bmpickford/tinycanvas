import html from '@web/rollup-plugin-html';
import summary from 'rollup-plugin-bundle-summary';
import { terser } from "rollup-plugin-terser";

export default {
  input: 'src/index.html',
  output: { dir: 'dist' },
  plugins: [
    html({ minify: true }),
    terser({
      mangle: {
        properties: {
          regex: /^_/,
        },
      },
    }),
    summary(),
  ],
};

