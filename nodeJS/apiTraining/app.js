const request = require("postman-request");

const url =
  "http://api.weatherstack.com/current?access_key=3f6d1c25971d124fcb1364921c33af5d&query=37.8267,-122.4233";

request({ url: url, json: true }, (error, response) => {
  if (error) {
    console.log("unable to connect to weather services");
  } else {
    console.log(response.body.current);
  }
});

// next one Geocode
const geoCodeUrl =
  "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiY2FuenJjb2x0IiwiYSI6ImNramE0cGpiMTF2bm4ycW55MWFyaTdoMzkifQ.RI-x2wqEzxGBq-qpF_yuwg";

request({ url: geoCodeUrl, json: true }, (error, response) => {
  const latitude = response.body.features[0].center[1];
  const longitude = response.body.features[0].center[0];
  console.log(latitude, longitude);
});
