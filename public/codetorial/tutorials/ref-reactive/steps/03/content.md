Note that a ref is an object where the reactive data is available through the `.value` property.

```js
count === 0 // false
count.value === 0 // true
```

A big “gotcha” with `ref` is that accessing the value in JavaScript is different to accessing it in the template.

In the template, you *do not* access the reactive variable through the `value` property.

```html
<h1>{{ count.value }}</h1> <!--incorrect-->
<h1>{{ count }}</h1> <!--correct-->
```

In the code editor, we've moved the click handler into a method and out of the template, therefore we increment `count.value` not `count` like we did in the template.

```js
const increment = () => {
  count.value++
}
```
