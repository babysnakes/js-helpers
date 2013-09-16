## Various javascript helpers.

A bunch of javascript helpers you can copy/paste to your
project.

### get_in

A kind of alternative to *CoffeeScript's* existential operator.
Instead of calling `obj.foo.bar.baz` which may cause an error you call
`get_in(obj, ["foo", "bar", "baz"])` and it'll return either the
`obj.foo.bar.baz` (if exists) or `undefined`. Syntax is borrowed from
*Clojure*.

```javascript
var obj1 = {one: "one"}
var obj2 = {one: {two: {three: "three"}}}

get_in(obj1, ["one", "two", "three"]) // => undefined
get_in(obj2, ["one", "two", "three"]) // => "three"
```
