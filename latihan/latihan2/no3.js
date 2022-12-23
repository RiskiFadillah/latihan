const getMonth = (callback) => {
  setTimeout(() => {
    let error = false;
    let month = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    if (!error) {
      callback(null, month);
    } else {
      callback(new Error("Sorry Data Not Found"), []);
    }
  }, 4000);
};

getMonth(async (pesan, month) => {
  // console.log(pesan);
  month.map((item) => {
    console.log(item);
  }),
    (error) => {
      console.log(`${error}.name ${error}.message`);
    };
});

// getMonth(
//   (pesan, month) => {
//     console.log(pesan, month);
//   },
//   (error) => {
//     console.log(`${error}.name ${error}.message`);
//   }
// );
