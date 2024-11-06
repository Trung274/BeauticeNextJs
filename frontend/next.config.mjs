/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    compiler: {
      styledComponents: true,
    },
    webpack: (config, { isServer }) => {
      config.module.rules.push({
        test: /\.(tsx|ts|js|mjs|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
            presets: [
              ['@babel/preset-env', { targets: { node: 'current' } }],
              '@babel/preset-typescript',
              ['@babel/preset-react', { runtime: 'automatic' }],
            ],
            plugins: [
              'babel-plugin-macros',
              [
                'babel-plugin-styled-components',
                {
                  ssr: true,
                  displayName: true,
                  preprocess: false,
                },
              ],
            ],
          },
        },
      });
  
      if (!isServer) {
        config.resolve.fallback = {
          ...config.resolve.fallback,
          fs: false,
          module: false,
          path: false,
        };
      }
  
      return config;
    },
  };
  
  export default nextConfig;