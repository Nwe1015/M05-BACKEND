const db = require("../db")
//create a model from schema
const Song = db.model("Song",{
    //hidden parameter of _id
    title:{type:String, required:true},
    artist: String,
    popularity: {type: Number, min:0, max:10},
    releaseDate: {type: Date, default: Date.now},
    genre: [String],
    student: [Object]
})

module.exports = Song;