import cleanup from 'rollup-plugin-cleanup';
export default {
  input: './index.js',
  output: { dir: 'dist' },
  plugins: [
    cleanup()
  ]
};

