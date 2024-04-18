<script setup lang="ts">
import { defineProps } from 'vue'

defineProps<{
  noIndent?: boolean
}>()
</script>

<template>
  <p class="my-2 text-sm" :style="[noIndent ? '' : 'text-indent: 20px']">
    <slot />
  </p>
</template>
