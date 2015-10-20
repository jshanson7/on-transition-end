import prefixProperty from 'prefix-property';

const defaultEventFailureGracePeriod = 100;
const transitionEndEvent = {
  transition: 'transitionend',
  OTransition: 'otransitionend',
  MozTransition: 'transitionend',
  WebkitTransition: 'webkitTransitionEnd'
}[prefixProperty('transition')];

export default (element, expectedDuration, callback, failureGracePeriod) =>
  new Promise(resolve => {
    let done = false;
    let forceEnd = false;

    element.addEventListener(transitionEndEvent, onTransitionEnd);

    setTimeout(() => {
      if (!done) {
        // forcing onTransitionEnd callback...
        forceEnd = true;
        onTransitionEnd();
      }
    }, expectedDuration + (failureGracePeriod || defaultEventFailureGracePeriod));

    function onTransitionEnd(e) {
      if (forceEnd || e.target === element) {
        done = true;
        element.removeEventListener(transitionEndEvent, onTransitionEnd);
        resolve(e);
        if (callback) { callback(e); }
      }
    }
  });
