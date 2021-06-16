const path = require('path')
const glob = require('glob')

var backendEndpoint;

if (process.env.AWS_BRANCH == "master") {
  backendEndpoint = "app.vorder.io"
}
else if (process.env.AWS_BRANCH == "master") {
  backendEndpoint = "app-dev.vorder.io" 
}

module.exports = {
  env: {
    backendEndpoint: backendEndpoint,
  },
  webpack: (config, { dev }) => {
    config.module.rules.push(
      {
        test: /\.scss$/,
        use: ['raw-loader',           
          { loader: 'sass-loader',
            options: {
              outputStyle: 'compressed',
              includePaths: ['styles',]
                .map((d) => path.join(__dirname, d))
                .map((g) => glob.sync(g))
                .reduce((a, c) => a.concat(c), [])
            }
          }
        ]
      },
      /*
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/,
      }
      */
    );

    return config
  }
}