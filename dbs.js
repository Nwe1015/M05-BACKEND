const monsgoose = require('mongoose')
monsgoose.connect("mongodb+srv://SDev256:password256@songnw.bzt2p3a.mongodb.net/?appName=SongNW",{useNewURLParser: true})


module.exports = monsgoose