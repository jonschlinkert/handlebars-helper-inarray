/*!
 * handlebars-helper-inarray <https://github.com/jonschlinkert/handlebars-helper-inarray>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT License
 */

var expect = require('chai').expect;
var Handlebars = require('handlebars');
var inArray = require('..');

Handlebars.registerHelper('inArray', inArray);


it('handlebars test.', function () {
  expect(Handlebars.compile('{{foo}}')({foo: 'bar'})).to.equal('bar');
});

describe('inArray:', function () {
  it('should return true if the value exists', function () {
    var context = {
      arr: ['a', 'b', 'c']
    };
    var fixture = '{{#inArray arr "a"}}true{{else}}false{{/inArray}}';
    expect(Handlebars.compile(fixture)(context)).to.equal('true');
    expect(Handlebars.compile(fixture)(context)).to.not.equal('false');
  });

  it('should return true if the value exists', function () {
    var context = {
      arr: ['a', 'b', 'c']
    };
    var fixture = '{{#inArray arr "d"}}true{{else}}false{{/inArray}}';
    expect(Handlebars.compile(fixture)(context)).to.equal('false');
    expect(Handlebars.compile(fixture)(context)).to.not.equal('true');
  });

  it('should return true if the value exists', function () {
    var context = {
      arr: null
    };
    var fixture = '{{#inArray arr "d"}}true{{else}}false{{/inArray}}';
    expect(Handlebars.compile(fixture)(context)).to.equal('false');
    expect(Handlebars.compile(fixture)(context)).to.not.equal('true');
  });

  it('should return true if the value exists', function () {
    var context = {};
    var fixture = '{{#inArray arr "d"}}true{{else}}false{{/inArray}}';
    expect(Handlebars.compile(fixture)(context)).to.equal('false');
    expect(Handlebars.compile(fixture)(context)).to.not.equal('true');
  });

  it('should return true if the value exists', function () {
    var context = {};
    var fixture = '{{#inArray arr ""}}true{{else}}false{{/inArray}}';
    expect(Handlebars.compile(fixture)(context)).to.equal('false');
    expect(Handlebars.compile(fixture)(context)).to.not.equal('true');
  });
});