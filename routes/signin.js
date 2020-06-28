
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json({ msg: "get index" });
});

module.exports = router;