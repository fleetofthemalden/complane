<script setup lang="ts">
import LetterAddress from './LetterAddress.vue'

import { todaysDate } from '@/lib/utils';
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
