const express = require('express');
const path = require('path');
const app=express();
const hbs=require('hbs');
const port=process.env.PORT||3000;
// Public Static Path
const staticpath=path.join(__dirname , "..","public");
const templatepath=path.join(__dirname,"../templates/views")
const partialspath=path.join(__dirname,"../templates/partials")
// console.log("Path is --"+path.join(__dirname , "..","public") );
app.set("view engine","hbs");
app.set("views",templatepath);
hbs.registerPartials(partialspath);
app.use(express.static(staticpath));
// Routing path
app.get("/",(req,res)=>{
    // res.send("Welcome to ayush kumar server pp");
    res.render("index");
})
app.get("/about",(req,res)=>{
    // res.send("Welcome to about us page");
    res.render("about");
})
app.get("/weather",(req,res)=>{
    // res.send("Welcome to the weather page");
    res.render("weather");
})
app.get("*",(req,res)=>{
    // res.send("404 oops an error occured");
    res.render("404error");
})


app.listen(port,()=>{
    console.log(`Listning to the port at ${port}`);
}) 