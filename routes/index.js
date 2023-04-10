var express = require('express');
var cors = require('cors');
var router = express.Router();

router.use(cors());

/* GET home page. */
router.get('/', function (req, res, next) {
	res.send({ title: 'Express' });
});

router.get('/collection', async function (req, res, next) {
	const API_Key = 'IagrCxtB';
	const apiUrl = `https://www.rijksmuseum.nl/api/en/collection?key=${API_Key}&hasImage=true&p=10.000&ps=100`;
	try {
		let results = await fetch(apiUrl);
		const data = await results.json();
		res.json(data);
	} catch (err) {
		res.status(500).send(err);
	}
});

/* router.listen(5002, function () {
	console.log('CORS-enabled web server listening on port 5002');
}); */
module.exports = router;
