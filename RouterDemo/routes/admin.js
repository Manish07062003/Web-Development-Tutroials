const express = require('express');
const router = express.Router();


router.use((req, res, next) => {
    if (req.query.isAdmin) {
        next();
    }
    res.send("sorry your not an admin!!");
})

router.get('/topsecret', (req, res) => {
    res.send("THIS IS TOP SECRET");
})
router.get('/deleteeverything', (req, res) => {
    res.send("DELETE EVERY THING");
})

module.exports = router;