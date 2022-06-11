const express = require('express')
const { create} = require("express-handlebars"); 
const app = express()


// esto es para que el navegador renderice el home
const hbs = create({
    extname: ".hbs",
});

app.engine(".hbs", hbs.engine); 
app.set("view engine", ".hbs"); 
app.set("views", "./views"); 

//------------------------>



app.get("/", (req,res) => {
    const urls = [
        {origin: "www.google.com", shortURL: "asdasd1"},
        {origin: "www.google.com", shortURL: "asdasd2"},
        {origin: "www.google.com", shortURL: "asdasd3"},
    ];
    res.render('home',{urls});
});

app.get("/login", (req,res) => {
    res.render('login')
}) 
app.use(express.static(__dirname + "/public")); 


app.listen(5000, () => console.log("Servidor funcionando")); 
