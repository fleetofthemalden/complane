<script lang="ts" setup>
import ComplaintStepLayout from '@/components/ComplaintStepLayout.vue'
import { Button } from '@/components/ui/button'

import { useInflightComplaintStore } from '@/stores/inflightComplaints'

const inflightComplaints = useInflightComplaintStore()
</script>

<template>
  <ComplaintStepLayout>
    <h1 class="text-xl font-semibold mb-5">Here is your complaint letter</h1>

    <p>
      The Honorable Pete Buttigieg<br />
      Secretary of Transportation<br />
      Lord High Admiral of Planes, Trains, and Automobiles<br />
      Director of Roads, Rails, and Runways<br />
      Boat Czar<br />
      <br />
      U.S. Department of Transportation<br />
      1200 New Jersey Ave. SE<br />
      Washington, DC 20590<br />
    </p>

    <p>Dear Secretary Pete,</p>

    <p style="text-indent: 20px">
      Can I call you "Secretary Pete?" I know we have never met, but I feel like I have known you my
      whole life. "Secretary Pete" just feels right; It feels natural. Just go with it.
    </p>

    <p>
      Anyway, Secretary Pete, my dude, I am writing to you to express my concerns regarding my
      recent flight experience. I experienced the following issues:
    </p>

    <p>
      <strong>What Happened?</strong><br />
      {{ inflightComplaints.whatHappened }}
    </p>

    <p>
      I hope you can help me with this matter. I look forward to hearing from you soon. Thank you
      for your time and attention.
    </p>

    <p>Sincerely,</p>

    <p>
      Your Name <br />
      TODO: collect user info
    </p>
  </ComplaintStepLayout>
</template>
