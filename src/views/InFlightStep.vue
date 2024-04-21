<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import * as z from 'zod'

import ComplaintFormStepLayout from '@/components/ComplaintFormStepLayout.vue'

import { useInflightComplaintStore } from '@/stores/inflightComplaints'

import { Button } from '@/components/ui/button'
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Textarea } from '@/components/ui/textarea'

const router = useRouter()
const goToNextStep = () => router.push('/send-to-pete')
const goToPrevStep = () => router.push('/')

const store = useInflightComplaintStore()

const formSchema = toTypedSchema(
  z.object({
    whatHappened: z.string().min(2).max(2000)
  })
)

const { handleSubmit, defineField, resetForm, values } = useForm({
  validationSchema: formSchema,
  initialValues: {
    whatHappened: store.whatHappened
  }
})

const onPrevStepClick = () => {
  const { whatHappened = '' } = values
  // Note: We don't need to validate the form here because the user can't proceed without filling it out correctly
  store.setWhatHappened(whatHappened)
  goToPrevStep()
}

const [whatHappened] = defineField('whatHappened')

const onSubmit = handleSubmit((values) => {
  console.log({ values }) // DM debug
  store.setWhatHappened(values.whatHappened)
  goToNextStep()
})

const clickReset = () => {
  store.reset()
  resetForm()
}
</script>

<template>
  <ComplaintFormStepLayout :on-reset-button-click="store.hadIssues ? clickReset : undefined">
    <template #header-text>Did you experience an issue with your flight?</template>
    <form v-if="store.hadIssues" class="space-y-6" @submit="onSubmit">
      <FormField v-slot="{ componentField }" name="whatHappened">
        <FormItem>
          <FormLabel>What Happened?</FormLabel>
          <FormControl>
            <Textarea
              placeholder="Tell us about your experience."
              v-bind="componentField"
              v-model="whatHappened"
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      </FormField>
      <div class="text-right">
        <Button variant="link" @click="onPrevStepClick"> Go Back </Button>
        <Button type="submit"> Next </Button>
      </div>
    </form>
    <div v-else class="text-right mt-9">
      <Button @click="goToNextStep" as="a" variant="secondary">No</Button>
      <Button @click="store.setHadIssues(true)" class="ml-3">Yes</Button>
    </div>
  </ComplaintFormStepLayout>
</template>
