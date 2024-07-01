// import mockApi from 'src/somewhere'
const mockApi = {
  hitEndpoint: async function(params: any) {
    return new Promise((resolve, reject) => {
      resolve(true)
    })
  }
}

type ComplaintType = {
  hadIssues: boolean
  whatHappened: string
}

const complaintService = {
  saveComplaints: async function(complaints: ComplaintType) {
    let success = false
    try {
      success = await mockApi.hitEndpoint(complaints)
    } catch (e) {
      // if (e === KNOWN_ERROR) {
      //   notificationStore.update(KNOWN_ERROR)
      // }
      // logger.log(e)
    }
    return success
  }
}
