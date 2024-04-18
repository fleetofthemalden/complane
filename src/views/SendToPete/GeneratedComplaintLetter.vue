<script lang="ts" setup>
import { LetterLayout, LetterParagraph } from '@/components/ui/letter'

import { useInflightComplaintStore } from '@/stores/inflightComplaints'

const inflightComplaints = useInflightComplaintStore()
</script>

<template>
  <LetterLayout>
    <template #senderAddress> TODO: collect user info </template>
    <template #recipientAddress>
      The Honorable Pete Buttigieg <br />
      Secretary of Transportation<br />
      Lord High Admiral of Planes, Trains, and Automobiles<br />
      Director of Roads, Rails, and Runways / Boat Czar<br />
      U.S. Department of Transportation<br />
      1200 New Jersey Ave. SE<br />
      Washington, DC 20590<br />
    </template>
    <LetterParagraph noIndent>Dear Secretary Pete,</LetterParagraph>

    <LetterParagraph>
      Can I call you "Secretary Pete?" I know we have never met, but I feel like I have known you my
      whole life. "Secretary Pete" just feels right; It feels natural. Just go with it.
    </LetterParagraph>

    <LetterParagraph>
      Anyway, Secretary Pete, my dude, I am writing to you to express my concerns regarding my
      recent flight experience. I experienced the following issues:
    </LetterParagraph>

    <LetterParagraph>
      {{ inflightComplaints.whatHappened }}
    </LetterParagraph>

    <LetterParagraph>
      I hope you can help me with this matter. I look forward to hearing from you soon. Thank you
      for your time and attention.
    </LetterParagraph>

    <template #signature> TODO: collect user info </template>
  </LetterLayout>
</template>
