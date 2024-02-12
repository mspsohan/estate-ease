module.exports = {
   webpack: (config, { isServer }) => {
      // Add loader for mp4 files
      config.module.rules.push({
         test: /\.(mp4|webm)$/,
         use: {
            loader: 'file-loader',
            options: {
               outputPath: 'static/media',
               publicPath: '/_next/static/media',
            },
         },
      });

      return config;
   },
   images: {
      domains: ['i.ibb.co'],
   },
};
