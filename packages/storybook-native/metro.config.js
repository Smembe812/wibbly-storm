/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */
const path = require('path');
const watchFolders = [
  path.resolve(__dirname + '/..'), //Relative path to packages directory
];

const { getDefaultConfig } = require('@expo/metro-config');

const defaultConfig = getDefaultConfig(__dirname);

module.exports = async () => {
    const config = {
        ...defaultConfig,
        watchFolders,
        reporter: {
          update: () => {}
        },
        resolver: {
          ...defaultConfig.resolver,
          sourceExts: ["js", "ts", "jsx", "tsx", "json"]
        }
    }
    return config
};