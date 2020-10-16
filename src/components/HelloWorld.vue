<template>
  <button @click="inc">Bytt</button>
  <p>{{ count }}</p>
</template>

<script lang="ts">
import { ref } from 'vue'

export default {
  setup () {
    const count = ref(0)
    const inc = () => count.value++

    return { count, inc }
  }
}
</script>
