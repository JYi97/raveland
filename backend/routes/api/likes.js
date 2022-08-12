const express = require('express')
const asyncHandler = require('express-async-handler');

const { Like, User, Rave } = require('../../db/models');

const router = express.Router();

// Get likes for user

router.get("/", asyncHandler(async (req, res) => {
    // const userId = parseInt(req.params.userId)
    // console.log("THIS IS THE USER ID IN THE BACKEND", userId)

    // const likes = await Like.findAll()
    const likes = await Like.findAll()
    // console.log("THIS IS THE LIKES IN THE BACKEND", likes)
    return res.json(likes)
}))

// Get

module.exports = router;
