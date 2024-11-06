module.exports = {
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
}