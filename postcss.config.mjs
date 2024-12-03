import postCssPrefix from 'autoprefixer';
import postCssImport from 'postcss-import';
import postCssNesting from 'postcss-nesting';

export default {
  plugins: [
    postCssImport,
    postCssNesting,
    postCssPrefix,
  ]
};
