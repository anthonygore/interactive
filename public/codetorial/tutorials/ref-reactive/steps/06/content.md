The big "gotcha" of `reactive` is that may tempt you to destructure the object, especially if it's being returned from a function in another file.

You shouldn't do this as the destructured value will not be reactive.

```js
// Wrong
let { count } = data
count++

// Right
count.data++
```

In the code editor, you'll notice the "Increment" button doesn't work. See if you can fix it!
