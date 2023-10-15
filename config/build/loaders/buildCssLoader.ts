import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export const buildCssLoader = (isDev: boolean) => {
  return {
    test: /\.s[ac]ss$/i,
    use: [
      isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader',
        options: {
          modules: {
            auto: (path: string) => path.includes('.module.'),
            localIdentName: isDev ? '[name]__[local]--[hash:base64:8]' : '[hash:base64:8]',
          },
          sourceMap: false,
        },
      },
      'sass-loader',
    ],
  };
};
