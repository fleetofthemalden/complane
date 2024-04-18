<script setup lang="ts">
import LetterAddress from './LetterAddress.vue'

const todaysDate = new Date().toLocaleDateString('en-us', {
  year: 'numeric',
  month: 'short',
  day: 'numeric'
})
// import { defineProps } from 'vue';

// defineProps<{
//   noIndent?: boolean;
// }>();
</script>

<template>
  <div>
    <div>
      <LetterAddress class="w-fit text-left mx-auto">
        <slot name="senderAddress"></slot>
        <br />
        {{ todaysDate }}
      </LetterAddress>
    </div>
    <LetterAddress>
      <slot name="recipientAddress"></slot>
    </LetterAddress>

    <slot name="default">
      <!-- Letter Content -->
    </slot>
    <div class="mt-8">
      <div class="w-fit text-left mx-auto">
        Sincerely, <br />
        <slot name="signature"></slot>
      </div>
    </div>
  </div>
</template>
