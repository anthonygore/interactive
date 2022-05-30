<script>
import { ref } from 'vue';

export default {
  setup() {
    const count = ref(0);
    const increment = () => {
      count.value++
    }
    return {
      count,
      increment
    };
  },
};
</script>

<template>
  <h1>{{ count }}</h1>
  <button @click="count++">Increment</button>
</template>
