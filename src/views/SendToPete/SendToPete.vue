<script lang="ts" setup>
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import ComplaintStepLayout from '@/components/ComplaintStepLayout.vue'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

import GenratedComplaintLetter from './GeneratedComplaintLetter.vue'
</script>


<template>
  <ComplaintStepLayout>
    <h1 class="text-xl font-semibold mb-3">How would you like to submit your complaint?</h1>
    <Tabs default-value="email" class="w-full">
      <TabsList>
        <TabsTrigger value="mail">
          Mail
        </TabsTrigger>
        <TabsTrigger value="email">
          Email
        </TabsTrigger>
      </TabsList>
      <TabsContent value="mail">
        Instructions for printing and mailing your complaint will go here.
      </TabsContent>
      <TabsContent value="email">
        Instructions for copying and emailing your complaint will go here.
      </TabsContent>
    </Tabs>
    <Card>
      <CardContent class="p-6">
        <GenratedComplaintLetter />
      </CardContent>
    </Card>
  </ComplaintStepLayout>
</template>
