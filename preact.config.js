module.exports = (config, env, helpers) => {
  const purgecss = require('@fullhuman/postcss-purgecss')({
    content: [
      './src/**/*.html',
      './src/**/*.js',
      './src/**/*.jsx',
      './src/**/*.ts',
      './src/**/*.tsx',
      './src/**/*.css',
      './src/**/*.scss',
    ],
    defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
  });
  const results = helpers.getLoadersByName(config, 'postcss-loader');
  for (const result of results) {
    result.loader.options.postcssOptions.plugins.push(
      require('tailwindcss')('./tailwind.config.js'),
    );

    if (env.production) {
      result.loader.options.postcssOptions.plugins.push(purgecss);
    }
  }
  return config;
};
