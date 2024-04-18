<script setup lang="ts">
defineProps<{
  msg: string
}>()
</script>

<template>
  <div class="greetings">
    <div class="w-fit">
      <img
        alt="Complane logo"
        class="logo mx-auto"
        src="@/assets/logo.svg"
        width="125"
        height="125"
      />
      <h1 class="green font-medium text-5xl my-3 text-emerald-500">{{ msg }}</h1>
    </div>

    <h3 class="text-xl">"Complane" to Secretary Pete about a recent bad flight experience</h3>
  </div>
</template>

<style scoped>
.greetings div {
  margin: 0 auto;
}
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
