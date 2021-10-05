fetch("http://cpe-dbms.unaux.com/", {
      method: "POST",
        mode: "no-cors", 
        body: {
      name: "addUser",
      param: {
        email: "addUser",
        password: "hmmmmmphh",
      }
       }
    })
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.error(err);
      });