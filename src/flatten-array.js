/* global define */

/**
 * flattenArray()
 * Returns a flat array. Array parameter can be any length, depth, or type.
 * Packaged as UMD: github.com/umdjs/umd
 *
 * @param {Array} array - The nested array.
 * @param {Object} [config] - Configuration options:
 *                              sortByAlpha - {Boolean} - Sort the array by alphabet. Default is false.
 *                              sortByNum   - {Boolean} - Sort the array by number. Default is false.
 *                              reversed    - {Boolean} - Reverses the array. Default is false.
 *
 * @return {Array} flatArray - The flat array.
 */

(function(root, factory) {
  'use strict';

  if (typeof define === 'function' && define.amd) {
    define([], factory);
  } else if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    if (root.flattenArray) {
      console.warn('the existing flattenArray() found in root scope was overridden.');
    }
    root.flattenArray = factory();
  }
}(this, function() {
  'use strict';

  return function flattenArray(array, config, undefined) {

    // for later export
    var flatArray = [];

    // Polyfill: developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray
    if (!Array.isArray) {
      Array.isArray = function(arg) {
        return Object.prototype.toString.call(arg) === '[object Array]';
      };
    }

    // error handling
    if (!Array.isArray(array)) {
      throw new TypeError('flattenArray() requires an array as the first argument');
    }

    checkArray(array);

    /**
     * checkArray()
     * checks for arrays and passes non-arrays into flatArray.
     *
     * @param {array} array - passed in from flattenArray();
     */

    function checkArray(array) {
      array.forEach(function(value) {
        // if value is an array...
        if (Array.isArray(value)) {
          // check again...
          checkArray(value);
        } else {
          // otherwise push the value into flatArray
          flatArray.push(value);
        }
      });
    }

    if (config) {
      if (config.sortByAlpha) {
        var unsorted = flatArray;
        flatArray = unsorted.sort();
      }

      if (config.sortByNum) {
        var unsortedNum = flatArray;
        flatArray = unsortedNum.sort(function(a, b) {
          return a - b;
        });
      }

      if (config.reversed) {
        var unreversed = flatArray;
        flatArray = unreversed.reverse();
      }
    }

    return flatArray;
  };
}));
