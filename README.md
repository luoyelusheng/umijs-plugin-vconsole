# umijs-plugin-vconsole

## Install

```bash
# or yarn
$ npm install
```

```bash
$ npm run build --watch
$ npm run start
```

## Usage

Configure in `.umirc.js`,

```js
export default {
  plugins: ['umijs-plugin-vconsole'],
};
```

More configuration click [here](https://github.com/Tencent/vConsole)

```js
export default {
  vconsole: {
    defaultPlugins: ['system', 'network', 'element', 'storage'],
    onReady: true,
  },
};
```

## Options

TODO

## LICENSE

MIT
