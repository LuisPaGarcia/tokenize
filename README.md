# tokenize-js

simple string tokenizer for js

Usage:

```javascript
tokenize('12+34-56*78', {
  number: /\d+/y,
  sign: /[+\-*/]/y
})
```

## Example

```javascript
for (let t of tokenize('12+34-56*78', {
  number: /\d+/y,
  sign: /[+\-*/]/y
})) {
  console.log(t)
}
// output
// { name: 'number', match: "12"}
// { name: 'sign', match: "+"}
// { name: 'number', match: "34"}
// { name: 'sign', match: "-"}
// { name: 'number', match: "56"}
// { name: 'sign', match: "*"}
// { name: 'number', match: "78"}
```

## Error handling

```javascript
for (let t of tokenize('12+34-56#78', {
  number: /\d+/y,
  sign: /[+\-*/]/y
})) {
  console.log(t)
}
// output
// { name: 'number', match: "12"}
// { name: 'sign', match: "+"}
// { name: 'number', match: "34"}
// { name: 'sign', match: "-"}
// { name: 'number', match: "56"}
// { name: 'error', match: "#78"}
```
