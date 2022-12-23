// const cuaca = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve([
//       {
//         kota: "Surabaya",
//         temp: 26,
//         kondisi: "Cerah",
//       },
//     ]);
//   }, 1000);
// });

// const tempat = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve([
//       {
//         negara: "Indonesia",
//         kota: "Surabaya",
//         kondisi: "Cerah",
//       },
//     ]);
//   }, 500);
// });

// cuaca.then((response) => console.log(response));
// tempat.then((response) => console.log(response));

const cekNegara = () => {
  return new Promise((resolve, reject) => {
    let dataNegara = true;
    if (dataNegara === true) {
      setTimeout(() => {
        resolve([
          {
            kota: "Surabaya",
            temp: 26,
            kondisi: "Cerah",
          },
        ]);
      }, 2000);
    } else {
      setTimeout(() => {
        reject(new Error("Data tidak ditemukan"));
      }, 2000);
    }
  });
};

const cekCuaca = () => {
  return new Promise((resolve, reject) => {
    let dataCuaca = true;
    if (dataCuaca === true) {
      setTimeout(() => {
        resolve([
          {
            negara: "Indonesia",
            kota: "Surabaya",
            kondisi: "Cerah",
          },
        ]);
      }, 1000);
    } else {
      setTimeout(() => {
        reject(new Error("Data tidak ditemukan"));
      }, 1000);
    }
  });
};

// cekNegara()
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// cekCuaca()
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

async function cekTempat() {
  try {
    const result = await cekNegara();
    console.log(result);
  } catch (error) {
    console.log(error);
  } finally {
    console.log(`Proses Selesai`);
  }
}

cekTempat();

async function cekCuacaHI() {
  try {
    const result = await cekCuaca();
    console.log(result);
  } catch (error) {
    console.log(error);
  } finally {
    console.log(`Proses Selesai`);
  }
}

cekCuacaHI();
