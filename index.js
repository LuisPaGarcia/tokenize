// Example

// tokenize('12+34-56*78', {
//   number: /\d+/y,
//   sign: /[+\-*/]/y
// })
/**
 *
 * @param {string} s string to tokenize
 * @param {Object} tokens Declaration of definition of tokens
 */
function *tokenize(s, tokens) {
  ;(tokens = Object.entries(tokens)).push(['error', /.*/sy])
  for (let i = 0, m; i < s.length; ) {
    tokens.some(
      ([n, r]) =>
        ((r.lastIndex = i), (m = r.exec(s)), m) &&
        ((i = r.lastIndex), (m = { name: n, match: m[0] }))
    )
    yield m
  }
}

export default tokenize
