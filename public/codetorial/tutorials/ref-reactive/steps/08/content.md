The big question is: should you use `ref` or `reactive`?

There are pros to both:

`ref` pros:

- much easier to pass single variables around app
- avoids destructuring pitfall

`reactive` pros:

- can be less verbose if declaring lots of reactive variables
- consistency between JavaScript and template
- Similar to Vue 2’s data object

My personal opinion is that *the best option is to only use one or the other*. This is because I prefer to have one consistent pattern for reactive data in a code base, even if I occasionally miss out on the convenience that the two different methods provide.

So, I normally use `ref` as I find it more flexible.
