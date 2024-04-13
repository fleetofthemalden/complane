<script setup lang="ts">
import { h } from 'vue'
import { useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import * as z from 'zod'

import ComplaintStepLayout from '@/components/ComplaintStepLayout.vue'

import { Button } from '@/components/ui/button'
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Textarea } from '@/components/ui/textarea'

const formSchema = toTypedSchema(z.object({
  whatHappened: z.string().min(2).max(500),
}))

const { handleSubmit } = useForm({
  validationSchema: formSchema,
})

const onSubmit = handleSubmit((values) => {
  console.log({ values }); // DM debug
})
</script>

<template>
  <ComplaintStepLayout>
    <div class="mx-auto w-[460px]">
      <h1 class="text-xl font-bold">Did you experience an issue with your flight?</h1>
      <div class="text-right mt-9">
        <Button variant="secondary">No</Button>
        <Button class="ml-3">Yes</Button>
      </div>
      <form class="space-y-6" @submit="onSubmit">
        <FormField v-slot="{ componentField }" name="whatHappened">
          <FormItem>
            <FormLabel>What Happened?</FormLabel>
            <FormControl>
              <Textarea placeholder="Tell us about your experience." v-bind="componentField" />
            </FormControl>
            <!-- <FormDescription>
              Tell us about your experience.
            </FormDescription> -->
            <FormMessage />
          </FormItem>
        </FormField>
        <div class="text-right">
          <Button type="submit">
            Next
          </Button>
        </div>
      </form>
    </div>
  </ComplaintStepLayout>
</template>
