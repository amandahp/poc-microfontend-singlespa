const { merge }  = require("webpack-merge");
const { mergeWithRules } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react");

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "ah",
    projectName: "header",
    webpackConfigEnv,
    argv,
  });

  const config = mergeWithRules({
    module: {
      rules: {
        test: "match",
        use: "replace",
      },
    },
  })(defaultConfig, {
    // customize the webpack config here
    module: {
      rules: [
        {
          test: /\.svg$/,
          use: ['@svgr/webpack', 'url-loader'],
        },
        {
          test: /\.html$/i,
          loader: 'html-loader',
        },
        {
          test: /\.(png|jpg|gif)$/,
          use: [{
              loader: 'file-loader',
              options: {}
          }]
        },
        {
          test: /\.(jpe?g|png|gif|svg)$/i, 
          loader: "url-loader?name=app/images/[name].[ext]"
        }
      ],
    },
  });

  return merge(defaultConfig, {
    // modify the webpack config however you'd like to by adding to this object
  });
};



