//The data in Post model is received by clicking on review, add to watchlist, or ratings once you
//are redirected to the main page of a movie after clicking on it.


const express = require('express')
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport')
const Movie = require('../../models/Movie')
const Profile = require('../../models/Profile')

const validatePostInput = require('../../validation/movies');


router.get('/', (req,res)=>{
  Movie.find({}).then(function (movies) {
    res.send(movies);
    });
})






router.post('/', passport.authenticate('jwt', {session:false}),
(req, res) => {
  // const movieId = req.body.movie_id
 Movie.findOne({movie_id:req.body.movie_id})
  .then(movie => {
     if(!movie){
      const newMovie = new Movie({
        movie_id:req.body.movie_id,
        movie: req.body.movie,
        user: req.user.id
      
      })
      
      newMovie.save().then(movie => res.json(movie))
       
  
  
     }

  
  })
  .catch(err => console.log(err))
     
  
   
 
 


})

router.post('/watchlist/:id', passport.authenticate('jwt', {session: false}),
(req,res) => {
  Profile.findOne({user: req.user.id}).then(profile => {
    Movie.findById(req.params.id)
      .then(movie => {
        if(movie.watchlist.filter(watchlist => watchlist.user.toString() === req.user.id).length > 0){
          return res.status(400).json({inwatchlist: 'User already added to watchlist'});
        }

        //Add user id to likes array
        movie.watchlist.unshift({
          user: req.user.id
        
        })

        movie.save().then(movie => res.json(movie))
      })
      .catch(err => res.status(404).json({movienotfound: 'No movie found'}))
  })

  })


  router.post('/unwatchlist/:id', passport.authenticate('jwt', {session: false}),
  (req,res) => {
    Profile.findOne({user: req.user.id}).then(profile => {
      Movie.findById(req.params.id)
        .then(movie => {
          if(movie.watchlist.filter(watchlist => watchlist.user.toString() === req.user.id).length === 0){
            return res.status(400).json({inwatchlist: 'You have not added it in the watchlist yet'});
          }
  
          //Get remove index
          const removeIndex = movie.likes
            .map(item => item.user.toString())
            .indexOf(req.user.id)

            //Splice out of array
            movie.watchlist.splice(removeIndex, 1)

            //Save
            movie.save().then(movie => res.json(movie))
        })
        .catch(err => res.status(404).json({movienotfound: 'No movie found'}))
    })
    })
  





  


// @route  POST api/movie/like/:id
// @desc   Like post
// @access Private
router.post('/like/:id', passport.authenticate('jwt', {session: false}),
(req,res) => {
  Profile.findOne({user: req.user.id}).then(profile => {
    console.log()
  const movieId = Number(req.params.id)
  console.log(req.params)
  Movie.findOne({movie_id: movieId})
  .then(movie =>{
    if(movie.likes.filter(like =>like.user.toString() === req.user.id).length > 0){
      console.log('already liked')
      //  return res.status(400).json({alreadyliked: 'User already liked this post'})
    }else{
  //   //Add user id to likes array
    movie.likes.unshift({user: req.user.id})

    movie.save().then(movie => res.json(movie))
    }
   })
   .catch(err => res.status(404).json({ error: 'error' }))
  })


})


  // @route  POST api/movie/unlike/:id
  // @desc   unLike post
  // @access Private
  router.post('/unlike/:id', passport.authenticate('jwt', {session: false}),
  (req,res) => {
    Profile.findOne({user: req.user.id}).then(profile => {
    const movieId = Number(req.params.id)
  
    Movie.findOne({movie_id: movieId})
        .then(movie => {
          if(movie.likes.filter(like => like.user.toString() === req.user.id).length === 0){
                console.log('not liked yet')
          }else{
          //Get remove index
          const removeIndex = movie.likes
            .map(item => item.user.toString())
            .indexOf(req.user.id)

            //Splice out of array
            movie.likes.splice(removeIndex, 1)

            //Save
            movie.save().then(movie => res.json(movie))
          }
        })
        .catch(err => res.status(404).json({error: 'error'}))
      })
    })
   
  




router.post('/review/:id', passport.authenticate('jwt', {session: false}),
(req,res) => {
 


  Movie.findById(req.params.id)
    .then(movie => {
      // if(movie.reviews.length > 0){
      //   return res.status(400).json({alreadyReviewed:'You already reviewed this movie!'})

      // }
      const newReview = {
        user: req.user.id,
        movie_id: req.body.movie_id,
        headline: req.body.headline,
        text:req.body.text,
        name: req.body.name,
        avatar: req.body.avatar
        
      }

    
      //Add to reviews array
      movie.reviews.unshift(newReview);

      //Save
      movie.save().then(movie => res.json(movie))
    })
    .catch(err => res.status(404).json({reviewnotfound: 'No reviews yet'}))
  
  })

  //@route DELETE api/movies/comment/:id/:comment_id
  //@desc Remove comment from movies
  //@access Private
  router.delete('/review/:id/:review_id',  passport.authenticate('jwt', {session:false}), (req, res) =>{
   Movie.findById(req.params.id)
   .then(movie =>{   
   //check to see if comment exists
   if(movie.reviews.filter(review => review._id.toString() === req.params.review_id).length === 0){
  
    return res.status(404).json({reviewnotexists: 'Review does not exist' })
  
   }
  
   //Get remove index
   const removeIndex = movie.reviews
   .map(item =>item._id.toString())
   .indexOf(req.params.review_id)
  
  
   //splice comment out of array
   movie.reviews.splice(removeIndex, 1);
  
   movie.save().then(movie => res.json(movie))
  
  
    
  })
  .catch(err => res.status(404).json({nomoviesfound: 'No movies found'}))
  });
  
  

module.exports = router;
