//setup.. this is similar to when we use our default tags in html
const express = require ("express")
//we have to use cors in order to host a front end and backend on the same  devices
var cors = require('cors')
//activiate or tell this app variable to be an express sever
const app = express()
app.use(cors())
const router = express.Router()

//making an api using routes
//Routes are used to handle browser requests. The look like Urls. Thw diffrence is that when a browser request a route, it is dynamically handled by using a function.

router.get ("/songs", function (req, res){
    const songs = [
    {
        title: "Shape of you",
        artist: "Ed Sheeran",
        popularity: "10",
        releasedate: new Date ("2017-01-06"),
        genre : ["pop", "dancehall", "tropical house"]
    },
    {
        title: "Blinding lights",
        artist: "The Weeknd",
        popularity: "9",
        releasedate: new Date ("2019-11-29"),
        genre : ["synthwave", "electropop", "disco"]
    }
    ];
    res.json (songs)
})


// all request that usally use an api start with /api. so the url would be localhost:3000/api/songs
app.use ("/api", router)
app.listen(4000)