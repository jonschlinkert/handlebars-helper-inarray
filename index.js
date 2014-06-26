/*!
 * handlebars-helper-inarray <https://github.com/jonschlinkert/handlebars-helper-inarray>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT License
 */

'use strict';

var inArray = require('in-array');

module.exports = function (arr, val, options) {
  if (inArray(arr, val)) {
    return options.fn(this);
  } else {
    return options.inverse(this);
  }
};