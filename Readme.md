# On Transition End [![NPM version][npm-image]][npm-url] [![Build status][travis-image]][travis-url]

Cross-browser `transtionEnd` event listener:

```javascript
import onTransitionEnd from 'onTransitionEnd';
// or
const onTransitionEnd = window.onTransitionEnd;

const element = document.getElementById('transitioning-element');
const expectedDuration = 1000;

// promise:
onTransitionEnd(element, expectedDuration, () => console.log('done'));

// promise:
onTransitionEnd(element, expectedDuration)
  .then(() => console.log('done'));

// es7 await:
await onTransitionEnd(element, expectedDuration);
console.log('done');

```

## Demo
[http://codepen.io/jshanson7/pen/avEZry?editors=001](http://codepen.io/jshanson7/pen/avEZry?editors=001)

## Installation

```
npm install on-transition-end
```

Then reference either `dist/on-transition-end.js` or `dist/on-transition-end.min.js` in your html, or `import 'on-transition-end'`.  If a module environment is not detected, `onTransitionEnd` will be exported to `window.onTransitionEnd`.

## Contributing

Clone repo, cd into it.

```
npm install && npm start
```

### Building

```
npm run build
```

### Testing

[Run the tests on your browser here.](https://rawgit.com/jshanson7/on-transition-end/master/test/test.html)

```
npm test && npm run test-browser
```

### License

MIT

[npm-image]: https://badge.fury.io/js/on-transition-end.svg
[npm-url]: https://npmjs.org/package/on-transition-end
[travis-image]: https://travis-ci.org/jshanson7/on-transition-end.svg
[travis-url]: https://travis-ci.org/jshanson7/on-transition-end