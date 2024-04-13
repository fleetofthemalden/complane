import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useInflightComplaintStore = defineStore('inflightComplaint', () => {
  const inFlightComplaints = ref({
    whatHappened: ''
  })

  function setWhatHappened(whatHappened: string) {
    inFlightComplaints.value.whatHappened = whatHappened;
  }
  

  return { inFlightComplaints, setWhatHappened }
})
