const path = require('path');

module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    use: [
      {
        loader: require.resolve('ts-loader'),
        options: {
          configFile: path.resolve('./tsconfig.json')
        }
      },
      // Optional

      {
        loader: require.resolve('react-docgen-typescript-loader'),
        options: {
          tsconfigPath: path.resolve('./tsconfig.json')
        }
      }
    ]
  });
  config.resolve.extensions.push('.ts', '.tsx');
  return config;
};
