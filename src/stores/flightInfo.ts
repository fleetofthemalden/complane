import { ref } from 'vue'
import { defineStore } from 'pinia'

import { todaysDate } from '@/lib/utils';

export const useFlightInfoStore = defineStore('flightInfo', () => {
  const airline = ref('')
  const flightNumber = ref('')
  const dateOfTravel = ref(todaysDate)

  function setFlightInfo(airlineCode: string, flightNo: string, date: string) {
    airline.value = airlineCode
    flightNumber.value = flightNo
    dateOfTravel.value = date
  }


  function reset() {
    airline.value = ''
    flightNumber.value = ''
    dateOfTravel.value = todaysDate
  }

  return { airline, flightNumber, dateOfTravel, reset }
})
