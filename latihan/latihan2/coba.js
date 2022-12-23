let getUsers = () => {
  return new Promise((resolve, reject) => {
    fetch("https://63a00dca24d74f9fe82ce566.mockapi.io/users")
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
            const markup = `<li> ${item.name} </li>`;

            document
              .querySelector(`ul`)
              .insertAdjacentHTML("beforeend", markup);
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

// getUsers()
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

async function cekUsers() {
  try {
    const result = await getUsers();
    console.log(result);
  } catch (error) {
    console.log(error);
  } finally {
    console.log(`Proses Selesai`);
  }
}

cekUsers();
