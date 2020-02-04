const express = require('express')
const router = express.Router()
const {
    createBootcamp, deleteBootcamp, getBootcamp, getBootcamps, updateBootcamp
} = require('../controllers/bootcamp')

router.route('/')
    .post(createBootcamp)
    .get(getBootcamps)

router.route('/:id')
    .get(getBootcamp)
    .put(updateBootcamp)
    .delete(deleteBootcamp)

module.exports = router