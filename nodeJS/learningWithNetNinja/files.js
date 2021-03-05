const fs = require("fs");

//reading files
const readData = fs.readFile("./docs/blog1.txt", (err, data) => {
  if (err) {
    console.log(err);
  } else if (data.toString().includes("dowgsthis")) {
    console.log("it actually contains that...");
    const newData = data.toString().replace("dowgsthis", "dogs this");
    fs.writeFile("./docs/blog1.txt", newData, () => {
      console.log("new data just overwrote the old data. ez");
      console.log(newData);
    });
  }
});

// console.log("last line");

// //writing files

// fs.writeFile("./docs/blog1.txt", "hellow, dowgs", () => {
//   console.log("file was writttten");
// });

// fs.appendFile("./docs/blog1.txt", "this has just been added", () =>
//   console.log("file appended")
// );
// //directories
// if (!fs.existsSync("./assets")) {
//   fs.mkdir("./assets", (err) => {
//     if (err) {
//       console.log(err);
//     }
//     console.log("folder created");
//   });
// } else {
//   fs.rmdir("./assets", (err) => {
//     if (err) {
//       console.log(err);
//     }
//     console.log("folder deleted");
//   });
// }

// //deleting files
// if (fs.existsSync("./docs/deleteme.txt")) {
//   fs.unlink("./docs/deleteme.txt", (err) => {
//     if (err) {
//       console.log(err);
//     }
//     console.log("file deleted");
//   });
// }
