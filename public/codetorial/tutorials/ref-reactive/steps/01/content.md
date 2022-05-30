To create a single reactive variable with the Composition API you can use `ref`. 

You can initialize a ref with any JavaScript primitive e.g. `String`, `Number`, `Object`, etc.

```js
const count = ref(0);
```

Since `count` is a reactive variable, changing its value in JavaScript will cause a re-render of the component (that's the main use case of reactivity in Vue, after all).

Make sure you have opened the *Preview* window of the code editor. Then press the "Increment" button and you’ll see the value of `count` increases. This is because it is incremented by the button click handler (line 16).
