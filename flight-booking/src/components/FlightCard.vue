<template>
  <div class="home">
    <div class="card">
      <div class="card-body">This is some text within a card body.</div>
    </div>
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  //   name: 'Home',
  //   components: {
  //     HelloWorld
  //   }
  methods: {
    // Example POST method implementation:
    async postData(data) {
      // Default options are marked with *
      const response = await fetch("http://cpe-dbms.unaux.com/", {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        mode: "no-cors", // no-cors, *cors, same-origin
        body: data, // body data type must match "Content-Type" header
      });

      console.log(data);
      //   return response.json(); // parses JSON response into native JavaScript objects
      return response; // parses JSON response into native JavaScript objects
    },
    //       // Example POST method implementation:
    // async postData(url = '', data = {}) {
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
  },
  created() {
    // this.postData("http://cpe-dbms.unaux.com/", {
    // this.postData({
    //   name: "addUser",
    //   param: {
    //     email: "addUser",
    //     password: "hmmmmmphh",
    //   },
    // }).then((data) => {
    //   console.log(data); // JSON data parsed by `data.json()` call
    // });
    // this.postData("http://cpe-dbms.unaux.com/", {
    //   name: "getAllFlights",
    //   param: {
    //   }
    // }).then((data) => {
    //   console.log(data); // JSON data parsed by `data.json()` call
    // });
    // this.postData("http://cpe-dbms.unaux.com/", {
    //   name: "getFlightDetails",
    //   param: {
    //     flightId: 1,
    //   },
    // }).then((data) => {
    //   console.log(data); // JSON data parsed by `data.json()` call
    // });
    // this.postData("https://example.com/answer", { answer: 42 }).then((data) => {
    //   console.log(data); // JSON data parsed by `data.json()` call
    // });
    // fetch("http://cpe-dbms.unaux.com/", {
    //   name: "getFlightDetails",
    //   param: {
    //     flightId: 1,
    //   },
    // })
    //   .then((result) => {
    //     console.log(result);
    //   })
    //   .catch((err) => {
    //     console.error(err);
    //   });
    //   this.axios.post('http://cpe-dbms.unaux.com/', {
    //       name: "getFlightDetails",
    //       param: {
    //           flightId: 1
    //       }
    //   }).then((result) => {
    //      console.log(result);
    //   }).catch((err) => {
    //       console.error(err);
    //   });
      this.axios.post('http://cpe-dbms.unaux.com/', {
        // method: "POST", // *GET, POST, PUT, DELETE, etc.
        mode: "no-cors", // no-cors, *cors, same-origin
        body: {
          name: "getFlightDetails",
          param: {
              flightId: 1
          }
      }, // body data type must match "Content-Type" header
      }).then((result) => {
         console.log(result);
      }).catch((err) => {
          console.error(err);
      });
  },
};
</script>
