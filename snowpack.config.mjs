/** @type {import("snowpack").SnowpackUserConfig } */

export default {
  mount: {
    public: { url: '/', static: true },
    src: { url: '/dist' }
  },
  plugins: [
    '@snowpack/plugin-react-refresh',
    '@snowpack/plugin-typescript',
    '@snowpack/plugin-sass'
  ],
  alias: {
    src: './src',
    comp: './src/components',
    public: './public'
  },
  routes: [{ match: 'routes', src: '.*', dest: '/index.html' }]
}
