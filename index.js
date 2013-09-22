/**
 * Various Helpers - all docs are in README.md
 */


/**
 * A kind of alternative to *CoffeeScript's* existential operator. Safely get a nested
 * attribute of a javascript object (or undefined). Inspired by *Clojure's* `get_in`.
 *
 * Example:
 *     var obj1 = {one: "one"}
 *     var obj2 = {one: {two: {three: "three"}}}
 *
 *     get_in(obj1, ["one", "two", "three"]) // => undefined
 *     get_in(obj2, ["one", "two", "three"]) // => "three""])"]"}}}"}
 *
 * @param {object} obj the object to query
 * @param {array} attributes an array of attribute names
 * @return {whatever} the resulting attributes or `undefined`
 */
exports.get_in = get_in
function get_in (obj, attributes) {
  function getAttr (prev, cur) { return prev && prev[cur] }
  return attributes.reduce(getAttr, obj)
}