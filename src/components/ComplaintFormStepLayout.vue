<script setup lang="ts">
import { Button } from '@/components/ui/button'

interface Props {
  onResetButtonClick?: (e: Event) => void
}

defineProps<Props>()
</script>

<template>
  <div class="mx-auto w-[460px]">
    <h1 class="text-xl font-bold">
      <slot name="header-text"></slot>
    </h1>
    <div v-if="onResetButtonClick" class="text-right">
      <Button class="px-0" variant="link" @click="onResetButtonClick"> Clear Input </Button>
    </div>
    <slot></slot>
  </div>
</template>
