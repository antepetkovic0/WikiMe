const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.common");

module.exports = (args) => {
  const { env } = args;
  const envConfig = require(`./webpack.${env}.js`);
  const config = merge(commonConfig, envConfig);
  return config;
};
