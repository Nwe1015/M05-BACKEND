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

app.use(router)

