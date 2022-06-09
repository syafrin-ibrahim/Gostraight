// module.exports = function(api) {
//   api.cache(true);
//   return {
//     presets: ['babel-preset-expo'],
//     plugins: [[
//       'react-native-reanimated/plugin',
//       ],
//       ["module:react-native-dotenv", {
//           moduleName: "@env",
//           path: ".env",
//         }
//       ]
//     ]
//   };
// };

module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins:[["module:react-native-dotenv",
  
    {
      moduleName:"@env",
      path:".env",
    }
], ['react-native-reanimated/plugin',],

    ]
  };
};