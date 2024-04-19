/*jshint esversion: 8 */
/*jshint sub:true*/
const express = require('express');
const mongoose = require('mongoose');
const fs = require('fs');
const cors = require('cors');
const app = express();
const port = 3030;

app.use(cors());
app.use(require('body-parser').urlencoded({ extended: false }));

const reviews_data = JSON.parse(fs.readFileSync("reviews.json", 'utf8'));
const movies_data = JSON.parse(fs.readFileSync("movies.json", 'utf8'));

mongoose.connect("mongodb://mongo_db:27017/",{'dbName':'moviesDB'});


const Reviews = require('./review');

const Movies = require('./movie');

try {
  Reviews.deleteMany({}).then(()=>{
    Reviews.insertMany(reviews_data['reviews']);
  });
  Movies.deleteMany({}).then(()=>{
    Movies.insertMany(movies_data['movies']);
  });
  
} catch (error) {
  console.log(error);
}


// Express route to home
app.get('/', async (req, res) => {
    res.send("Welcome to the Mongoose API");
});

// Express route to fetch all reviews
app.get('/fetchReviews', async (req, res) => {
  try {
    const documents = await Reviews.find();
    res.json(documents);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching documents' });
  }
});

// Express route to fetch reviews by a particular Movie
app.get('/fetchReviews/movie/:id', async (req, res) => {
  try {
    const documents = await Reviews.find({movie: req.params.id});
    res.json(documents);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching documents' });
  }
});

// Express route to fetch all Movies
app.get('/fetchMovies', async (req, res) => {
    try {
        const documents = await Movies.find();
        res.json(documents);
      } catch (error) {
        res.status(500).json({ error: 'Error fetching documents' });
      }
});
// Express route to fetch all Movies by search term
app.get('/fetchMovies/:search', async (req, res) => {
	
    	const search_term = req.params.search;
 
	
	try {
     // const documents = await Movies.find({ title: { $regex: search_term, $options: 'i' } });
    const documents = await Movies.find({
		$or: [
			{ title: { $regex: search_term, $options: 'i' } },
			{ director: { $regex: search_term, $options: 'i' } }
		]
	});
 
        res.json(documents);
      } catch (error) {
        res.status(500).json({ error: 'Error fetching documents' });
      }
});


// Express route to fetch Movie by a particular id
app.get('/fetchMovie/:id', async (req, res) => {
    try {
        const documents = await Movies.find({id: req.params.id});
        res.json(documents);
      } catch (error) {
        res.status(500).json({ error: 'Error fetching documents' });
      }
});

//////////////////////////////////////////////////////////////////////////

// Express route to fetch Movies by a particular year
app.get('/fetchMovie/year/:year', async (req, res) => {
    try {
        const documents = await Movies.find({year: req.params.year});
        res.json(documents);
      } catch (error) {
        res.status(500).json({ error: 'Error fetching documents' });
      }
});

// Express route to fetch Movies by a particular country
app.get('/fetchMovie/country/:country', async (req, res) => {
    try {
        const documents = await Movies.find({country: req.params.country});
        res.json(documents);
      } catch (error) {
        res.status(500).json({ error: 'Error fetching documents' });
      }
});

// Express route to fetch Movies by a particular genre
app.get('/fetchMovie/genre/:genre', async (req, res) => {
    try {
        const documents = await Movies.find({genre: req.params.genre});
        res.json(documents);
      } catch (error) {
        res.status(500).json({ error: 'Error fetching documents' });
      }
});

// Express route to fetch Movies by a particular director
app.get('/fetchMovie/director/:director', async (req, res) => {
    try {
        const documents = await Movies.find({director: req.params.director});
        res.json(documents);
      } catch (error) {
        res.status(500).json({ error: 'Error fetching documents' });
      }
});

//////////////////////////////////////////////////////////////////////////

//Express route to insert review
app.post('/insert_review', express.raw({ type: '*/*' }), async (req, res) => {
  data = JSON.parse(req.body);
  const documents = await Reviews.find().sort( { id: -1 } );
  let new_id = documents[0]['id']+1;

  const review = new Reviews({
		"id": new_id,
		"name": data['name'],
		"movie": data['movie'],
		"review": data['review'],
		"review_date": data['review_date'],
		"rating": data['rating'],
	});

  try {
    const savedReview = await review.save();
    res.json(savedReview);
  } catch (error) {
		console.log(error);
    res.status(500).json({ error: 'Error inserting review' });
  }
});

// Start the Express server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
