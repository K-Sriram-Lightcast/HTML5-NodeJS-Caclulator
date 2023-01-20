const express = require("express")
const bodyParser = require("body-parser")
const app = express()
app.use(bodyParser.urlencoded({ extended: true })) 



app.get("/" ,function(req,res){
    res.sendFile(__dirname + "/index.html")
    //console.log("I'm nodejs")
})

app.post("/add",function(req,res){
   // res.send("Thanks")
   var n1 = Number(req.body.num1)
   var n2 = Number(req.body.num2)
   var ans = n1 + n2

   res.send("Sum is " + ans)


})

app.post("/sub",function(req,res){
    // res.send("Thanks")
    var n1 = Number(req.body.num1)
    var n2 = Number(req.body.num2)
    var ans = n1 - n2
 
    res.send("Difference is " + ans)
 
 
 })

 app.post("/mul",function(req,res){
    // res.send("Thanks")
    var n1 = Number(req.body.num1)
    var n2 = Number(req.body.num2)
    var ans = n1 * n2
 
    res.send("Product is " + ans)
 
 
 })

 app.post("/div",function(req,res){
    var n1 = Number(req.body.num1)
    var n2 = Number(req.body.num2)
    
    var ans = n1 / n2
    
    // var d  = document.getElementById("op")
    // d.value = ans
   res.send("Amswer is" + ans)
   //  res.render("<em>Answer is  + $ans</em>")
    
 
 
 })


app.listen(8080 , function(){console.log("Server running")})