<script setup lang="ts">
import LetterAddress from './LetterAddress.vue';
// import { defineProps } from 'vue';

// defineProps<{
//   noIndent?: boolean;
// }>();
</script>

<template>
  <div>
    <LetterAddress>
      <slot name="senderAddress"></slot>
      <br />
      {{ new Date().toLocaleDateString('en-us', { year:"numeric", month:"short", day:"numeric"}) }}
    </LetterAddress>
    <LetterAddress>
      <slot name="recipientAddress"></slot>
    </LetterAddress>
    <slot />
    <slot name="signature"></slot>
  </div>
</template>
