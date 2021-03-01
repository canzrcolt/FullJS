const dog = fetch("https://reqres.in/api/users", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    name: "User 1",
  }),
})
  .then((res) => {
    if (res.ok) {
      console.log("successr");
    } else {
      console.log("not successful");
    }
    res.json();
  })
  .then((data) => console.log(data));

