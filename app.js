const express = ("express");
const app = express ();
const port = 3040
const path = ("path");


app.use(express.static("public"));
app.listen(port, () => console.log("El servidor esta funcionando en el puerto" + port));
app.get("/", (req, res) =>  res.sendFile(path.join(__dirname, "views", "home.html")));
