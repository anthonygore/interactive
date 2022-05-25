<script>
import { ref } from 'vue';

export default {
  setup() {
    const count = ref(0);
    return {
      count,
    };
  },
};
</script>

<template>
  <h1>{{ count }}</h1>
</template>
