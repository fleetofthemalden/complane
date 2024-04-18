<!-- <script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()
const goToSendComplaintPage = () => router.push('/send-to-pete')

const store = useFlightInfoStore()
</script> -->

<script setup lang="ts">
import { useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import * as z from 'zod'

import { Check, ChevronsUpDown } from 'lucide-vue-next'
import { cn } from '@/lib/utils'

import { useFlightInfoStore } from '@/stores/flightInfo'

import { Button } from '@/components/ui/button'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command'
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'

const store = useFlightInfoStore()

const airlines = [
  { label: 'Alaska', value: 'AS' },
  { label: 'American', value: 'AA' },
  { label: 'Avelo', value: 'XP' },
  { label: 'Breeze', value: 'MX' },
  { label: 'Delta', value: 'DL' },
  { label: 'Frontier', value: 'F9' },
  { label: 'Hawaiian', value: 'HA' },
  { label: 'JetBlue', value: 'B6' },
  { label: 'Southwest', value: 'WN' },
  { label: 'Spirit', value: 'NK' },
  { label: 'United', value: 'UA' },
  { label: 'Virgin America', value: 'VX' },
]

const formSchema = toTypedSchema(z.object({
  airline: z.string({
    required_error: 'Please select a airline.',
  }),
  flightNo: z.string().min(2).max(50),
}))

const { handleSubmit, setValues, values } = useForm({
  validationSchema: formSchema,
})

const onSubmit = handleSubmit((values) => {
  console.log({ values }) // DM debug
  // store.setAirline(values.airline)
})
</script>

<template>
  <ComplaintStepLayout>
    <template #header-text>What flight were you on?</template>
    <form class="space-y-6" @submit="onSubmit">
      <FormField name="airline">
        <FormItem class="flex flex-col">
          <FormLabel>Airline</FormLabel>
          <Popover>
            <PopoverTrigger as-child>
              <FormControl>
                <Button
                  variant="outline"
                  role="combobox"
                  :class="cn('w-[200px] justify-between', !values.airline && 'text-muted-foreground')"
                >
                  {{ values.airline ? airlines.find(
                    (airline) => airline.value === values.airline,
                  )?.label : 'Select airline...' }}
                  <ChevronsUpDown class="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
              </FormControl>
            </PopoverTrigger>
            <PopoverContent class="w-[200px] p-0">
              <Command>
                <CommandInput placeholder="Search airline..." />
                <CommandEmpty>No matching US Airline.</CommandEmpty>
                <CommandList>
                  <CommandGroup>
                    <CommandItem
                      v-for="airline in airlines"
                      :key="airline.value"
                      :value="airline.label"
                      @select="() => {
                        setValues({
                          airline: airline.value,
                        })
                      }"
                    >
                      <Check
                        :class="cn('mr-2 h-4 w-4', airline.value === values.airline ? 'opacity-100' : 'opacity-0')"
                      />
                      {{ `${airline.label} (${airline.value})` }}
                    </CommandItem>
                  </CommandGroup>
                </CommandList>
              </Command>
            </PopoverContent>
          </Popover>
          <FormDescription>
            This is the airline that will be used in the dashboard.
          </FormDescription>
          <FormMessage />
        </FormItem>
      </FormField>
      <FormField v-slot="{ componentField }" name="flightNo">
        <FormItem>
          <FormLabel>Flight Number</FormLabel>
          <FormControl>
            <Input type="text" placeholder="ex: 1234" v-bind="componentField" />
          </FormControl>
          <FormDescription>
            This is your public display name.
          </FormDescription>
          <FormMessage />
        </FormItem>
      </FormField>

      <div class="text-right">
        <Button variant="link" @click="store.reset"> Clear Input </Button>
        <Button as="a" type="submit"> Next </Button>
      </div>
    </form>
  </ComplaintStepLayout>
</template>
