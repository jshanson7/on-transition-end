import $ from 'jquery';
import { random, sample, omit } from 'lodash';
import colors from 'material-colors';
import prefix from 'prefix-property';
import onTransitionEnd from '../../';

const transitionDuration = 2000;
const elSize = 100;
const $demoEl = $('<div/>', {
  css: {
    position: 'absolute',
    left: 0,
    top: 0,
    height: elSize,
    width: elSize,
    backgroundColor: randomColor(),
    [prefix('transition')]: `left ${transitionDuration}ms linear, top ${transitionDuration}ms linear`
  }
});

$('html, body').css({
  height: '100%',
  width: '100%',
  margin: 0,
  padding: 0
});

$('body').append($demoEl);

setTimeout(transitionLoop, 1000);

function transitionLoop() {
  $demoEl.css({
    left: random(document.documentElement.offsetWidth - elSize),
    top: random(document.documentElement.offsetHeight - elSize),
    backgroundColor: randomColor()
  });
  onTransitionEnd($demoEl[0], transitionDuration, transitionLoop);
}

function randomColor() {
  return sample(sample(omit(colors, 'white', 'black')));
}
