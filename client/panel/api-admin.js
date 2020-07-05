const getAll = async (credentials, signal) => {
    try {
      let response = await fetch('/api/admin/getall', {
        method: 'GET',
        signal: signal,
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + credentials.t
        }
      })    
      console.log('res1' , response)
      return await response.json()
    } catch(err) {
      console.log(err)
    }
  }


  const getAllContacts = async (credentials, signal) => {
    try {
      let response = await fetch('/api/admin/getallContacts', {
        method: 'GET',
        signal: signal,
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + credentials.t
        }
      })    
      console.log('res' , response)
      return await response.json()
    } catch(err) {
      console.log(err)
    }
  }

  
export {
  getAll,
  getAllContacts
}