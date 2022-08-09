const express = require('express')
const asyncHandler = require('express-async-handler');

const { Rave } = require('../../db/models');

const router = express.Router();

router.get("/", asyncHandler(async(req, res) => {
    const allRaves = await Rave.findAll()
    return res.json(allRaves)
}))

module.exports = router;
