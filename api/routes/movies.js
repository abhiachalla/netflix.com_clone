const router = require("express").Router();
const Movie = require("../models/Movies");
const verify = require("../verifyToken");





//CREATE
router.post("/", verify, async (req,res)=> {
    //add only if the user is an admin
    if(req.user.isAdmin) {
      console.log("object")
    const newMovie = new Movie(req.body);
        try {
            const savedMovie = await newMovie.save();
            res.status(201).json(savedMovie);
        } catch(err) {
            res.status(500).json(err);
        }
    } else {
        res.status(403).json("Not an admin to add a movie!");
    }
    
});





//UPDATE
router.put("/:id", verify, async (req,res)=> {
    //add only if the user is an admin
    if(req.user.isAdmin) {
        try {
            const updatedMovie = await findByIdAndUpdate(req.params.id,{
                $set: req.body
            },{new: true});
            res.status(200).json(savedMovie);
        } catch(err) {
            res.status(500).json(err);
        }
    } else {
        res.status(403).json("Not an admin to add a movie!");
    }
    
});

//DELETE
router.delete("/:id", verify, async (req, res) => {
    if (req.user.isAdmin) {
      try {
        await Movie.findByIdAndDelete(req.params.id);
        res.status(200).json("The movie has been deleted...");
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      res.status(403).json("You are not allowed!");
    }
  });
  



//GET
router.get("/find/:id", verify, async (req, res) => {
    try {
      const movie = await Movie.findById(req.params.id);
      res.status(200).json(movie);
    } catch (err) {
      res.status(500).json(err);
    }
  });




//GET ALL
router.get("/", verify, async (req, res) => {
    if (req.user.isAdmin) {
      try {
        const movies = await Movie.find();
        res.status(200).json(movies.reverse());
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      res.status(403).json("You are not allowed!");
    }
  });
  

//GET RANDOM
router.get("/random", verify, async (req, res) => {
    const type = req.query.type;
    let movie;
    try {
      if (type === "series") {
        movie = await Movie.aggregate([
          { $match: { isSeries: true } },
          { $sample: { size: 1 } },
        ]);
      } else {
        movie = await Movie.aggregate([
          { $match: { isSeries: false } },
          { $sample: { size: 1 } },
        ]);
      }
      res.status(200).json(movie);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  



module.exports = router;
