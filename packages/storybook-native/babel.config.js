module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    // plugins: [
    //   [
    //     'module-resolver',
    //     {
    //       alias: {
    //         react: require.resolve('react', {
    //           paths: [path.join(__dirname, './')],
    //         }),
    //         '^react-native$': require.resolve(`react-native`, {
    //           paths: [path.join(__dirname, './')],
    //         }),
    //         '^react-native/(.+)': ([, name]) =>
    //           require.resolve(`react-native/${name}`, {
    //             paths: [
    //               path.join(__dirname, './'),
    //             ],
    //           })
    //       },
    //       extensions: [
    //         '.ios.js',
    //         '.ios.ts',
    //         '.ios.tsx',
    //         '.android.js',
    //         '.android.ts',
    //         '.android.tsx',
    //         '.native.js',
    //         '.native.ts',
    //         '.native.tsx',
    //         '.js',
    //         '.ts',
    //         '.tsx',
    //       ],
    //     },
    //   ],
    // ]
  };
};
