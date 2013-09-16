var assert = require("assert")
var get_in = require("../index.js").get_in

suite("Helpers", function() {
  suite('#get_in', function () {
    var testObj1 = {one: "one"}
    var testObj2 = {one: {two: "two"}}
    var testObj3 = {one: {two: {three: "three"}}}
    var testObj4 = {one: {two: "two"}, three: "three"}
    var attrs = ["one", "two", "three"]

    test("should return the right nested value in an object if exists", function () {
      assert.deepEqual("three", get_in(testObj3, attrs))
    })

    test("It should return undefined if any of the attributes are invalid", function() {
      assert.equal(undefined, get_in(testObj1, attrs))
      assert.equal(undefined, get_in(testObj2, attrs))
      assert.equal(undefined, get_in(testObj4, attrs))
    })
  })
})
