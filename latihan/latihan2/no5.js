// Cara 1

// fetch("https://jsonplaceholder.typicode.com/users/")
//   .then((response) => response.json())
//   .then((data) => {
//     data.map((users) => {
//       console.log(users.name);
//     });
//   })
//   .catch((err) => console.log(`data tidak bisa di fetch 404`));

//Cara 2
let getUsers = () => {
  return new Promise((resolve, reject) => {
    fetch("https://jsonplaceholder.typicode.com/users/")
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          return reject({
            message: "Failed to get data",
            data: [],
          });
        }
      })
      .then((data) => {
        return resolve({
          message: "Successful get data",
          data: data.map((item) => {
            return item.name;
          }),
        });
      });
  }).catch(() =>
    reject({
      message: "Fail to fetch",
      data: [],
    })
  );
};

getUsers()
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });
