<script setup>
import ComplaintStepLayout from '@/components/ComplaintStepLayout.vue'
import { Button } from '@/components/ui/button'
</script>

<template>
  <ComplaintStepLayout>
    <div>
      <h1 class="text-xl font-bold">Did you experience an issue with your flight?</h1>
      <div class="text-right mt-9">
        <Button variant="secondary">No</Button>
        <Button class="ml-3">Yes</Button>
      </div>
    </div>
  </ComplaintStepLayout>
</template>
