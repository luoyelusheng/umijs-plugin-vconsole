# umijs-plugin-vconsole [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage percentage][coveralls-image]][coveralls-url] [![david-dm][david-image]][david-url]

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
    hidden:false，
    debug: true
  },
};
```

## Options

<pre>
hidden 优先级最高，表示隐藏 vconsole，同时设置 debug 默认无效
debug 在生产环境下打开调试 vconsole，默认只在开发环境显示 vconsole
</pre>

## LICENSE

MIT

[npm-image]: https://badge.fury.io/js/umijs-plugin-vconsole.svg
[npm-url]: https://npmjs.org/package/umijs-plugin-vconsole
[travis-image]: https://api.travis-ci.com/luoyelusheng/umijs-plugin-vconsole.svg?branch=master
[travis-url]: https://travis-ci.com/luoyelusheng/umijs-plugin-vconsole
[coveralls-image]: https://coveralls.io/repos/github/luoyelusheng/umijs-plugin-vconsole/badge.svg
[coveralls-url]: https://coveralls.io/github/luoyelusheng/umijs-plugin-vconsole
[david-image]: https://david-dm.org/luoyelusheng/umijs-plugin-vconsole.svg
[david-url]: https://david-dm.org/luoyelusheng/umijs-plugin-vconsole
