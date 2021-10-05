import { createStore } from 'vuex'

export default createStore({
  state: {
  },
  mutations: {
  },
  actions: {
    // authLogin({commit, dispatch}, authData){
    //     dispatch('authStart')
    //     axios.post('/auth/employer/login', {
    //         email : authData.email,
    //         password : authData.password
    //     })
    //     .then(res => {
    //         console.log(res)
    //         const user = res.data
    //         // const token = res.data.token
    //         localStorage.setItem('token', user.token)
    //         localStorage.setItem('user-role', user.role)
    //         commit('authSuccess', user)
    //         router.push('/ViewJobsCompany')
    //         dispatch('authStopLoading')
             
    //     })
    //     .catch(err => {
    //         console.log(err.message)
    //         commit('authFail', err)
    //         commit('errMessageType', err.message)
    //         dispatch('authStopLoading')
    //     })
        
    //     // dispatch('authStart')
    //     // dispatch('authStopLoading')
    // },
    // Example POST method implementation:
// async function postData(url = '', data = {}) {
//   // Default options are marked with *
//   const response = await fetch(url, {
//     method: 'POST', // *GET, POST, PUT, DELETE, etc.
//     mode: 'cors', // no-cors, *cors, same-origin
//     cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
//     credentials: 'same-origin', // include, *same-origin, omit
//     headers: {
//       'Content-Type': 'application/json'
//       // 'Content-Type': 'application/x-www-form-urlencoded',
//     },
//     redirect: 'follow', // manual, *follow, error
//     referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
//     body: JSON.stringify(data) // body data type must match "Content-Type" header
//   });
//   return response.json(); // parses JSON response into native JavaScript objects
// }

// postData('https://example.com/answer', { answer: 42 })
//   .then(data => {
//     console.log(data); // JSON data parsed by `data.json()` call
//   });

  },
  modules: {
  }
})
