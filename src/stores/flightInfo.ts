import { ref } from 'vue'
import { defineStore } from 'pinia'

import { type DateValue } from '@internationalized/date'

/**
 * We validate that the flight number is a positive integer between 1 and 9999
 * but we store it as a string so that we can have an empty string as a
 * placeholder value in the form input
 */
export type BasicFlightInfo = {
  airlineCode: string
  flightNo: string
  date?: DateValue
}

export const useFlightInfoStore = defineStore('flightInfo', () => {
  const airline = ref('')
  const flightNumber = ref('')
  const dateOfTravel = ref<DateValue>()

  function setFlightInfo({ airlineCode, flightNo, date }: BasicFlightInfo) {
    airline.value = airlineCode
    flightNumber.value = flightNo
    dateOfTravel.value = date
  }

  function reset() {
    airline.value = ''
    flightNumber.value = ''
    dateOfTravel.value = undefined
  }

  return { airline, flightNumber, dateOfTravel, setFlightInfo, reset }
})
