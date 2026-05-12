const express = require('express')
const bodyParser = require('body-parser')
const Song = require("./models/song")
var cors = require('cors')
const app = express()

//middleware the parse HTTP request with JSON body
app.use(express.json());


const router = express.Router()

// Get list of songs in the database
router.get("/songs", async (req, res) => {
    try {
        const songs = await Song.find({})
        res.send(songs)
        console.log(songs)
    } catch (err) {
        console.log(err)
    }
})
//grab a single song in the database 
router.get("/songs/:id", async (req, res) => {
    try {
        const song = await Song.findById(req.params.id)
        res.send(song)
    }
    catch(err){
        res.status(400).send(err)
    }
})

//added a song to the database
router.post("/songs", async (req, res) => {
    try {
        const song = new Song(req.body)
        await song.save()
        res.status(201).json(song)
        console.log(song)
    } catch (err) {
        res.status(400).send(err)
    }
})

//update is to update an exisiting record/ resource/ datatbase entry.. it use a put request
router.put("/songs/:id", async (req, res) =>{
    //first wee need to find and update the song the front end wants us to update.
    //to do this wee need to request the id of the song from request
    //and the find it in the he database and update it 
    try {
         const song = req.body
         await Song.updateOne({_id: req.params.id}, song)
         console.log(song)
         res.sendStatus(204)

    }
    catch(err){
            res.status(400).send(err)
    }
})

app.use(router)

app.listen(3000);
