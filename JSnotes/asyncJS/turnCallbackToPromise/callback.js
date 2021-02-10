const userLeft = false;
const userWatchingCatMeme = true;

// function watchTutorialCallback(callback, errorCallback) {
//   if (userLeft) {
//     errorCallback({
//       name: "User Left",
//       message: ":(",
//     });
//   } else if (userWatchingCatMeme) {
//     errorCallback({
//       name: "User Watching Cat Meme",
//       message: "WebDevSimplified < Cat",
//     });
//   } else {
//     callback("thumbs up and subscribey");
//   }
// }

// watchTutorialCallback(
//   (message) => {
//     console.log("Success: " + message);
//   },
//   (error) => {
//     console.log(error.name + " " + error.message);
//   }
// );

const hasDog = "11";

function cuteDogs(callback, errorCallBack) {
  if (hasDog == true) {
    callback("supman");
  } else {
    errorCallBack("nahmahn");
  }
}

cuteDogs(
  (cuteString) => console.log(cuteString),
  (uglyString) => console.log(uglyString)
);

const hasPuff = "15";

function eatPuff() {
  return new Promise((resolve, reject) => {
    if (hasPuff) {
      resolve("hallelujah");
    } else {
      reject("nahhh");
    }
  });
}

eatPuff()
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.log(error);
  });
