<script lang="ts" setup>
import { Button } from '@/components/ui/button'
import { useRouter } from 'vue-router'

const router = useRouter()
const goToNextStep = () => router.push('/flight-info')
</script>

<template>
  <div class="mx-auto w-[460px]">
    <h1 class="text-xl font-bold">Welcome to Complane!</h1>
    <p>
      Fed up with subpar experiences on US airlines? It's time to make your voice heard. Complane
      provides a platform to help you submit your complaints directly to the Secretary of
      Transportation, Pete Buttigieg. Whether it's lost luggage, flight delays, or poor customer
      service, your grievances matter. Hold airlines accountable and advocating for better travel
      experiences for all passengers. Let your voice soar with Complane.
    </p>
    <div class="text-right mt-9">
      <Button @click="goToNextStep">Get Started</Button>
    </div>
  </div>
</template>
