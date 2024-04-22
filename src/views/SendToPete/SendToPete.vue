<script lang="ts" setup>
import { Button } from '@/components/ui/button'
import { useRouter } from 'vue-router'
import { useInflightComplaintStore } from '@/stores/inflightComplaints'

import { Card, CardContent } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

import GenratedComplaintLetter from './GeneratedComplaintLetter.vue'

const router = useRouter()
const goToPrevStep = () => router.push('/in-flight')

const store = useInflightComplaintStore()
</script>

<template>
  <div class="mx-auto max-w-[600px]">
    <div v-if="store.hadIssues">
      <h1 class="text-xl font-semibold mb-3">How would you like to submit your complaint?</h1>
      <Tabs default-value="email" class="w-full mb-8">
        <TabsList class="mb-6">
          <TabsTrigger value="mail"> Mail </TabsTrigger>
          <TabsTrigger value="email"> Email </TabsTrigger>
        </TabsList>
        <TabsContent value="mail">
          <h3 class="text-lg font-semibold">Step 1</h3>
          <p>Click print.<br />TODO: build print preview</p>
          <h3 class="text-lg font-semibold mt-3">Step 2</h3>
          <p>Mail letter to the address on the letterhead</p>
        </TabsContent>
        <TabsContent value="email">
          <h3 class="text-lg font-semibold">Step 1</h3>
          <p>Copy the text of the letter below</p>
          <h3 class="text-lg font-semibold mt-3">Step 2</h3>
          <p>
            Paste the text into the body of an email and send it to
            <a href="mailto:secretarybuttigieg@dot.gov?subject=Bad Flight Experience"
              >secretarybuttigieg@dot.gov</a
            >
          </p>
        </TabsContent>
      </Tabs>
      <Card>
        <CardContent class="p-6">
          <GenratedComplaintLetter />
        </CardContent>
      </Card>
    </div>
    <div v-else class="text-center">
      <h1 class="text-xl font-semibold mb-3">Did you forget to complain about something?</h1>
      <p>
        If you forgot to include something in your complaint, you can go back and edit your
        complaint. Just click the button below.
      </p>
      <div class="mt-6">
        <Button @click="goToPrevStep">Go Back</Button>
      </div>
    </div>
  </div>
</template>
