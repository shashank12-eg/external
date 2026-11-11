const express = require("express");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.post("/register", (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const phone = req.body.phone;

  console.log("Name:", name);
  console.log("Email:", email);
  console.log("Phone:", phone);

  res.redirect("/dashboard.html");
});

app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
