const mongoose = require('mongoose')
const Schema = mongoose.Schema


//Create Schema 
const MovieSchema = new Schema({

  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  movie_id: {
    type: Number
  },
  movie: {
    type: Object
  },
  likes: [
    {
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    }
       
    }
  ],
  reviews: [
    {
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
   
       
     headline: {
       type: String,
       required: true
     },
     text: {
       type:String,
       required: true
     },
     name: {
       type: String
     },
     avatar: {
       type:String
     }, 
     
     date: {
       type:Date,
       default: Date.now
     }
    }
  ]
})

module.exports = Movie = mongoose.model('movie', MovieSchema);