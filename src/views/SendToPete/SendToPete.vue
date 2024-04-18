<script lang="ts" setup>
import { Card, CardContent } from '@/components/ui/card'
import ComplaintStepLayout from '@/components/ComplaintStepLayout.vue'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

import GenratedComplaintLetter from './GeneratedComplaintLetter.vue'
</script>

<template>
  <ComplaintStepLayout>
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
  </ComplaintStepLayout>
</template>
