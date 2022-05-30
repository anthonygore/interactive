`reactive` is another Composition API method used for declaring reactive data.

Unlike `ref`, `reactive` can only be initialized with an object. Each property of the object can be a different reactive variable, however.

```js
const data = reactive({
  count: 0,
  name: 'Peter Griffin',
  flag: false
})
```

One advantage of `reactive` is that it doesn’t require a `value` property. 

```js
data.name === 'Peter Griffin' // true
data.name.value === 'Peter Griffin' // false
```

This means it looks the same in both the JavaScript and the template!
