const express = require('express');
const router = express.Router(); // allows making HTTP requests

router.get('/', (req, res) => {
	res.json("Welcome to the Machine");
});

module.exports = router;
