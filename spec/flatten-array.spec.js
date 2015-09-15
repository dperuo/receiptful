var flattenArray = require("../dist/flatten-array.min");

describe("flattenArray()", function() {
  "use strict";

  var mock;

  it("transforms an empty array into an empty array", function() {
    mock = [];
    expect(flattenArray(mock)).toEqual([]);
  });

  describe("transforms a 1-level interger array into", function() {

    beforeEach(function() {
      mock = [1, 2000, 300, 40, 5];
    });

    it("a flat array", function() {
      expect(flattenArray(mock)).toEqual([1, 2000, 300, 40, 5]);
    });

    it("an alpha-sorted flat array", function() {
      expect(flattenArray(mock, {sortByAlpha: true})).toEqual([1, 2000, 300, 40, 5]);
    });

    it("a number-sorted flat array", function() {
      expect(flattenArray(mock, {sortByNum: true})).toEqual([1, 5, 40, 300, 2000]);
    });
  });

  describe("transforms a 2-level interger array into", function() {

    beforeEach(function() {
      mock = [1, [2000, 300], 40, 5, [1, 2000, 300, 40, 5]];
    });

    it("a flat array", function() {
      expect(flattenArray(mock)).toEqual([1, 2000, 300, 40, 5, 1, 2000, 300, 40, 5]);
    });

    it("an alpha-sorted flat array", function() {
      expect(flattenArray(mock, {sortByAlpha: true})).toEqual([1, 1, 2000, 2000, 300, 300, 40, 40, 5, 5]);
    });

    it("a number-sorted flat array", function() {
      expect(flattenArray(mock, {sortByNum: true})).toEqual([1, 1, 5, 5, 40, 40, 300, 300, 2000, 2000]);
    });
  });

  describe("transforms a 3-level interger array into", function() {

    beforeEach(function() {
      mock = [1, [[2000, 300], 40, 5], [1, 2000, 300, 40, 5]];
    });

    it("a flat array", function() {
      expect(flattenArray(mock)).toEqual([1, 2000, 300, 40, 5, 1, 2000, 300, 40, 5]);
    });

    it("an alpha-sorted flat array", function() {
      expect(flattenArray(mock, {sortByAlpha: true})).toEqual([1, 1, 2000, 2000, 300, 300, 40, 40, 5, 5]);
    });

    it("a number-sorted flat array", function() {
      expect(flattenArray(mock, {sortByNum: true})).toEqual([1, 1, 5, 5, 40, 40, 300, 300, 2000, 2000]);
    });

    it("an alpha-reversed flat array", function() {
      expect(flattenArray(mock, {sortByAlpha: true, reversed: true})).toEqual([5, 5, 40, 40, 300, 300, 2000, 2000, 1, 1]);
    });

    it("a number-reversed flat array", function() {
      expect(flattenArray(mock, {sortByNum: true, reversed: true})).toEqual([2000, 2000, 300, 300, 40, 40, 5, 5, 1, 1]);
    });
  });

  describe("transforms a 3-level string array into", function() {

    beforeEach(function() {
      mock = ["1", [["2000", "300"], "40", "5"], ["1", "2000", "300", "40", "5"]];
    });

    it("a flat array", function() {
      expect(flattenArray(mock)).toEqual(["1", "2000", "300", "40", "5", "1", "2000", "300", "40", "5"]);
    });

    it("an alpha-sorted flat array", function() {
      expect(flattenArray(mock, {sortByAlpha: true})).toEqual(["1", "1", "2000", "2000", "300", "300", "40", "40", "5", "5"]);
    });

    it("a number-sorted flat array", function() {
      expect(flattenArray(mock, {sortByNum: true})).toEqual(["1", "1", "5", "5", "40", "40", "300", "300", "2000", "2000"]);
    });

    it("an alpha-reversed flat array", function() {
      expect(flattenArray(mock, {sortByAlpha: true, reversed: true})).toEqual(["5", "5", "40", "40", "300", "300", "2000", "2000", "1", "1"]);
    });

    it("a number-reversed flat array", function() {
      expect(flattenArray(mock, {sortByNum: true, reversed: true})).toEqual(["2000", "2000", "300", "300", "40", "40", "5", "5", "1", "1"]);
    });
  });

});
