import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useInflightComplaintStore = defineStore('inflightComplaint', () => {
  const hadIssues = ref(false)
  const whatHappened = ref('')

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

  return { hadIssues, whatHappened, setHadIssues, setWhatHappened, reset }
})
