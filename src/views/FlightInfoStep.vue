<script setup lang="ts">
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import * as z from 'zod'

import {
  CalendarDate,
  DateFormatter,
  getLocalTimeZone,
  parseDate,
  today,
  type DateValue
} from '@internationalized/date'
import { toDate } from 'radix-vue/date'
import { Calendar as CalendarIcon, Check, ChevronsUpDown } from 'lucide-vue-next'

import { airlines } from '@/lib/airlines'
import { cn, todaysDate } from '@/lib/utils'

import { useFlightInfoStore } from '@/stores/flightInfo'

import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList
} from '@/components/ui/command'
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'

import ComplaintFormStepLayout from '@/components/ComplaintFormStepLayout.vue'

const router = useRouter()
const goToNextStep = () => router.push('/in-flight')
const goToPrevStep = () => router.push('/')

const store = useFlightInfoStore()

const travelDateValue = computed({
  get: () => (values.dateOfTravel ? parseDate(values.dateOfTravel) : undefined),
  set: (val) => val
})

const travelDatePlaceholder = ref<DateValue>()

const df = new DateFormatter('en-US', {
  dateStyle: 'long'
})

const VALID_NUM = 'A valid flight number is required.'

const formSchema = toTypedSchema(
  z.object({
    dateOfTravel: z.string().refine((v) => v, { message: 'Please enter your travel date.' }),
    airline: z.string().refine((v) => v, { message: 'Airline is required.' }),
    /**
     * We validate that the flight number is a positive integer between 1 and 9999 but
     * we store it as a string so that we can have an empty string as a placeholder
     */
    flightNo: z
      .string()
      .refine((v) => v, { message: VALID_NUM })
      .refine((v) => /^\d{1,4}$/.test(v), { message: VALID_NUM })
  })
)

const { handleSubmit, setValues, values, resetForm } = useForm({
  validationSchema: formSchema
})

setValues({
  dateOfTravel: store.dateOfTravel?.toString(),
  airline: store.airline,
  flightNo: store.flightNumber
})

const onSubmit = handleSubmit((values) => {
  console.log({ values }) // DM debug
  const { dateOfTravel, airline, flightNo } = values
  store.setFlightInfo({ date: parseDate(dateOfTravel), airlineCode: airline, flightNo })
  goToNextStep()
})

const onPrevStepClick = () => {
  const { dateOfTravel, airline = '', flightNo = '' } = values
  const date = dateOfTravel ? parseDate(dateOfTravel) : undefined
  // Note: We don't need to validate the form here because the user can't proceed without filling it out correctly
  store.setFlightInfo({
    date,
    airlineCode: airline,
    flightNo
  })
  goToPrevStep()
}

const clickReset = (e: Event) => {
  store.reset()
  resetForm()
}
</script>

<template>
  <ComplaintFormStepLayout :on-reset-button-click="clickReset">
    <template #header-text>What flight were you on?</template>
    <form class="space-y-6" @submit="onSubmit">
      <FormField name="dateOfTravel">
        <FormItem class="flex flex-col">
          <FormLabel>Date of travel</FormLabel>
          <Popover>
            <PopoverTrigger as-child>
              <FormControl>
                <Button
                  variant="outline"
                  :class="
                    cn(
                      'w-[240px] ps-3 text-start font-normal',
                      !travelDateValue && 'text-muted-foreground'
                    )
                  "
                >
                  <span>{{
                    travelDateValue ? df.format(toDate(travelDateValue)) : 'Pick a date'
                  }}</span>
                  <CalendarIcon class="ms-auto h-4 w-4 opacity-50" />
                </Button>
                <input hidden />
              </FormControl>
            </PopoverTrigger>
            <PopoverContent class="w-auto p-0">
              <Calendar
                v-model:placeholder="travelDatePlaceholder"
                v-model="travelDateValue"
                calendar-label="Date of travel"
                initial-focus
                :min-value="new CalendarDate(2021, 1, 1)"
                :max-value="today(getLocalTimeZone())"
                @update:model-value="
                  (v) => {
                    if (v) {
                      setValues({
                        dateOfTravel: v.toString()
                      })
                    } else {
                      setValues({
                        dateOfTravel: ''
                      })
                    }
                  }
                "
              />
            </PopoverContent>
          </Popover>
          <FormDescription> Select the date of the flight. </FormDescription>
          <FormMessage />
        </FormItem>
      </FormField>
      <div class="sm:flex">
        <div class="sm:flex-1">
          <FormField name="airline">
            <FormItem class="flex flex-col">
              <FormLabel>Airline</FormLabel>
              <Popover>
                <PopoverTrigger as-child>
                  <FormControl>
                    <Button
                      variant="outline"
                      role="combobox"
                      :class="
                        cn('w-[200px] justify-between', !values.airline && 'text-muted-foreground')
                      "
                    >
                      {{
                        values.airline
                          ? airlines.find((airline) => airline.value === values.airline)?.label
                          : 'Select airline...'
                      }}
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
                          @select="
                            () => {
                              setValues({
                                airline: airline.value
                              })
                            }
                          "
                        >
                          <Check
                            :class="
                              cn(
                                'mr-2 h-4 w-4',
                                airline.value === values.airline ? 'opacity-100' : 'opacity-0'
                              )
                            "
                          />
                          {{ `${airline.label} (${airline.value})` }}
                        </CommandItem>
                      </CommandGroup>
                    </CommandList>
                  </Command>
                </PopoverContent>
              </Popover>
              <FormDescription> Select an airline from the list. </FormDescription>
              <FormMessage />
            </FormItem>
          </FormField>
        </div>
        <div class="sm:flex-1">
          <FormField v-slot="{ componentField }" name="flightNo">
            <FormItem class="flex flex-col">
              <FormLabel>Flight Number</FormLabel>
              <FormControl>
                <Input
                  class="max-w-[240px]"
                  type="text"
                  placeholder="ex: 1234"
                  v-bind="componentField"
                />
              </FormControl>
              <FormDescription> Enter your flight number. </FormDescription>
              <FormMessage />
            </FormItem>
          </FormField>
        </div>
      </div>
      <div class="text-right">
        <Button class="mr-2" as="a" variant="link" @click="onPrevStepClick"> Go Back </Button>
        <Button type="submit"> Next </Button>
      </div>
    </form>
  </ComplaintFormStepLayout>
</template>
