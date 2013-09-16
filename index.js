/**
 * Various Helpers - all docs are in README.md
 */

exports.get_in = get_in
function get_in (obj, attributes) {
  function getAttr (prev, cur) { return prev && prev[cur] }
  return attributes.reduce(getAttr, obj)
}