var express = require('express');
var cors = require('cors');
var router = express.Router();

router.use(cors());

const db = require('../model/helper');

// GET home page.
/*router.get("/", function (req, res, next) {
  res.send({ title: "Express" });
});

router.get("/collection", async function (req, res, next) {
  const API_Key = "IagrCxtB";
  const apiUrl = `https://www.rijksmuseum.nl/api/en/collection?key=${API_Key}&hasImage=true&p=10.000&ps=100`;
  try {
    let results = await fetch(apiUrl);
    const data = await results.json();
    res.json(data);
  } catch (err) {
    res.status(500).send(err);
  }
});*/

// REMEMBER!! FOR FavoritesView ROUTES START WITH /favorites
// DB STRUCTURE mysql/art/favorites
// DATA FROM API: artObject.objectNumber, artObject.longtitle, artObject.webImage.url

router.get('/', function (req, res, next) {
	res.send({ title: 'Express' });
});

function getFavoritesList(req, res) {
	db('SELECT * FROM favorites')
		.then((results) => {
			res.send(results);
		})
		.catch((err) => res.status(500).send(err));
}

// GET ALL FAVORITE ART
router.get('/favorites', async function (req, res) {
	getFavoritesList(req, res);
});

//ADD A FAVORITE PIECE OF ART
// ART ADDED BY CLICKING "Add to Favorites" BUTTON ON ArtView
router.post('/favorites', function (req, res) {
	let { objectNumber, title, imageURL } = req.body;
	let sql = `INSERT INTO favorites (objectNumber, title, imageURL) VALUES ('${objectNumber}', '${title}', '${imageURL}');`;
	db(sql)
		.then((results) => {
			getFavoritesList(req, res);
		})
		.catch((err) => res.status(500).send(err));
});

//DELETE A FAVORITE PIECE OF ART
// ART DELETED BY CLICKING "Remove from Favorites" BUTTON ON ArtView
router.delete('/favorites/:objectNumber', function (req, res) {
	let sql = `DELETE FROM favorites WHERE objectNumber = ${req.params.objectNumber};`;
	db(sql)
		.then((results) => {
			getFavoritesList(req, res);
		})
		.catch((err) => res.status(500).send(err));
});

/* router.listen(5002, function () {
	console.log('CORS-enabled web server listening on port 5002');
}); */
module.exports = router;
