let uangJoko = 0;
let today = new Date().toLocaleDateString("id-ID", { weekday: "long" });
today2 = "Jumat";
console.log(today);
switch (today) {
  case "Senin":
    uangJoko += 0;
  case "Selasa":
    uangJoko += 200000;
  case "Rabu":
    uangJoko += 0;
  case "Kamis":
    uangJoko += 0;
  case "Jumat":
    uangJoko += 50000;
}
if (typeof uangJoko !== "number") {
  console.log("data yang di input harus number");
} else {
  console.log(uangJoko);
  let bayarUtang = (uangJoko) =>
    new Promise((resolve, reject) => {
      if (uangJoko > 200000 && today >= "Jumat") {
        resolve("Hutang saya akan saya bayar Hari ini");
      } else {
        reject("Maaf Saya masih belom ada duit");
      }
      return bayarUtang;
    });
  // bayarUtang(uangJoko)
  //   .then((result) => {
  //     console.log(result);
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });

  async function bayarHutang() {
    try {
      const result = await bayarUtang(uangJoko);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  }
  bayarHutang();
}
