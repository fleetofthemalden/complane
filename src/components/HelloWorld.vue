<script setup lang="ts">
defineProps<{
  msg: string
}>()
</script>

<template>
  <div class="greetings">
    <h1 class="green font-medium text-5xl my-3">{{ msg }}</h1>
    <h3 class="text-xl">
      "Complane" to Secretary Pete about a recent bad flight experience
    </h3>
  </div>
</template>

<style scoped>

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
