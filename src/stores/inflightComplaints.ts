import { ref } from 'vue'
import { defineStore } from 'pinia'

import complaintService from '@/lib/complaintsService'

export const useInflightComplaintStore = defineStore('inflightComplaint', () => {
  const hadIssues = ref(false)
  const whatHappened = ref('')

  function saveComplaints() {
    complaintService.saveComplaints({
      whatHappened,
      hadIssues
    }).then(() => {
      // do something with response if appropriates
    })
  }

  function setWhatHappened(what: string) {
    whatHappened.value = what
  }

  function setHadIssues(had: boolean) {
    hadIssues.value = had
  }

  function reset() {
    whatHappened.value = ''
    hadIssues.value = false
  }

  return { hadIssues, whatHappened, setHadIssues, setWhatHappened, saveComplaints, reset }
})
