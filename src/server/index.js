function getUser(user){
   return new Promise((resolve, reject)=>{
       if(user) resolve({ username : user.username, token : 'abcdeef12345878' })
       else reject(new Error('User not found'))
   })
}

export default getUser;