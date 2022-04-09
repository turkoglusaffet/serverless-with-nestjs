const dotenv = require('dotenv');

module.exports = async ({ options, resolveConfigurationProperty }) => {
  const envVars = dotenv.config({ path: './src/resources/.env.local' }).parsed;
  return envVars;
};
