<script>
import { reactive } from 'vue';

export default {
  setup() {
    const data = reactive({
      msg: 'Hello World!'
    })
    return {
      data,
    };
  },
};
</script>

<template>
  <h1>{{ data.msg }}</h1>
</template>
