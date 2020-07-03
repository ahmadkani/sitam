const adminsignin = async (user) => {
    try {
      let response = await fetch('/auth/adminsignin/', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify(user)
      })
      return await response.json()
    } catch(err) {
      console.log(err)
    }
  }
  
  const adminsignout = async () => {
    try {
      let response = await fetch('/auth/adminsignout/', { method: 'GET' })
      return await response.json()
    } catch(err) {
      console.log(err)
    }
  }
  
  export {
    adminsignin,
    adminsignout
  }
  