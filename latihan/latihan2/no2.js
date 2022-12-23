const cekHariKerja = (day) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const dataDay = ["Senin", "Selasa", "Rabu", "Kamis", "Jumat"];
      let cek = dataDay.find((item) => {
        return item === day;
      });
      if (cek) {
        resolve(cek);
      } else {
        reject(new Error("Hari ini bukan hari kerja"));
      }
    }, 1000);
  });
};

// cekHariKerja("Senin")
//   .then((result) => {
//     console.log(`Hari ${result} adalah hari kerja`);
//   })
//   .catch((error) => {
//     console.log(error);
//   });


async function cekHari() {
  try {
    const result = await cekHariKerja("Senin");
    console.log(`Hari ${result} adalah hari kerja`);
  } catch (error) {
    console.log(error);
  } finally {
    console.log(`Proses Selesai`);
  }
}

cekHari();
