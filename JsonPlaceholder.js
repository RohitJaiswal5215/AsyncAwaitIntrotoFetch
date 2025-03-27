async function fetchUsers() {
    try {
      const response = await 
   fetch('https://jsonplaceholder.typicode.com/users')
      const users = await response.json()

      // Loop through the users and log their names in the console
      users.forEach(user => {
        console.log(user.name)
      })
    } catch (error) {
      console.error('Error fetching users:', error)
    }
  }

 
  fetchUsers()