<script>
import { reactive } from 'vue'

export default {
  setup() {
    const data = reactive({
      count: 0
    })
    const increment = () => {
      let { count } = data
      count++
    }
    return {
      data,
      increment
    }
  }
}
</script>

<template>
  <h1>{{ data.count }}</h1>
  <button @click="increment">Increment</button>
</template>
