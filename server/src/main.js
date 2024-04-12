import express from "express";
const port = process.env.PORT || 8091;
const app = express();

app.get("/data", async (req, res) => {
  const user = {
    id: 23123,
    name: "Saurabh Duryodhan",
    age: 27,
    designation: "Fullstack Developer (MERN Stack Developer)",
  };
  res.send(user);
});

app.listen(port, () =>
  console.log(
    `server started at port number: ${port}\nVisit server on: http://localhost:8091`
  )
);
