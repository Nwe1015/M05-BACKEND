//setup.. this is similar to when we use our default tags in html
const express = require ("express")
//activiate or tell this app variable to be an express sever
const app = express()


//start the web sever ... app . listen (portnumber, function)
app.listen( 3000, function (){
    console.log ("Listening on port 3000")
})

//making an api using routes
//Routes are used to handle browser requests. The look like Urls. Thw diffrence is that when a browser request a route, it is dynamically handled by using a function.

//Get or regular reguest when somone goes to http://localhot:3000/hello. When using a function an a route, we almost always have parameter or handle a response and request
app.get("/hello", function(req,res){
    res.send("<h1>Hello Express</h1>")
})
app.get("/hello", function(req,res){
    res.send("<h1>Goodbye Express</h1>")
})
