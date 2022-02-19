const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('ALL SHELTERS');
})
router.get('/:id', (req, res) => {
    res.send('VIEWING ONE SHELTER');
})
router.post('/', (req, res) => {
    res.send('CREATING SHELTER');
})
router.get('/:id/edit', (req, res) => {
    res.send('EDITING SHELTER');
})

module.exports = router;