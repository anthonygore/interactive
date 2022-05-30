<script>
import { ref } from 'vue';

export default {
  setup() {
    const msg = ref('Hello World!')
    return {
      msg,
    };
  },
};
</script>

<template>
  <h1>{{ msg.value }}</h1>
</template>
