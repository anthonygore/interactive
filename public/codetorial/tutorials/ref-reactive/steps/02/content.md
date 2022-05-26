To create a single reactive variable with the Composition API you can use `ref`. You can initialize a ref with any JavaScript primitive e.g. `String`, `Number`, `Object`, etc.

```js
const count = ref(0);
```

Since `count` is a reactive variable, changing its value in JavaScript will cause a re-render of the component - that's the main use of reactivity in Vue.

In the "Preview" window of the code editor, press the "Increment" button and you’ll see the value of `count` increases because it is incremented by the button click handler (line 16).
