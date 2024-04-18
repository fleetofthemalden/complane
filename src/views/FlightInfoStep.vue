<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import * as z from 'zod'

import ComplaintStepLayout from '@/components/ComplaintStepLayout.vue'

import { useInflightComplaintStore as useFlightInfoStore } from '@/stores/inflightComplaints' // DM todo replace

import { Button } from '@/components/ui/button'
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import { Textarea } from '@/components/ui/textarea'

const router = useRouter()
const goToSendComplaintPage = () => router.push('/send-to-pete')

const store = useFlightInfoStore()

const formSchema = toTypedSchema(
  z.object({
    whatHappened: z.string().min(2).max(2000)
  })
)

const { handleSubmit } = useForm({
  validationSchema: formSchema
})

const onSubmit = handleSubmit((values) => {
  console.log({ values }) // DM debug
  store.setWhatHappened(values.whatHappened)
  goToSendComplaintPage()
})
</script>

<template>
  <ComplaintStepLayout>
    <template #header-text>What flight were you on?</template>
    <form v-if="store.hadIssues" class="space-y-6" @submit="onSubmit">
      <FormField v-slot="{ componentField }" name="whatHappened">
        <FormItem>
          <FormLabel>What Happened?</FormLabel>
          <FormControl>
            <Textarea placeholder="Tell us about your experience." v-bind="componentField" />
          </FormControl>
          <FormMessage />
        </FormItem>
      </FormField>
      <div class="text-right">
        <Button variant="link" @click="store.reset"> Clear Input </Button>
        <Button as="a" type="submit"> Next </Button>
      </div>
    </form>
    <div v-else class="text-right mt-9">
      <Button @click="goToSendComplaintPage" as="a" variant="secondary">No</Button>
      <Button @click="store.setHadIssues(true)" class="ml-3">Yes</Button>
    </div>
  </ComplaintStepLayout>
</template>
