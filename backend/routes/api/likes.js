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

// Get likes for one rave
router.get("/:raveId", asyncHandler(async(req, res) => {
    const raveId = parseInt(req.params.raveId)
    // console.log("THIS IS THE RAVE ID IN THE LIKES BACK END", raveId)
    const likes = await Like.findAll({where: {raveId: raveId}})
    // console.log("THIS IS THE LIKES IN THE BACKEND", likes)
    return res.json(likes)
}))

// Create One Like for rave
router.post("/new", asyncHandler(async(req, res) => {
    const {userId, raveId} = req.body
    const like = await Like.create({
        userId,
        raveId
    })
    return res.json(like)
}))

// Delete One Like for rave
router.delete("/:likeId", asyncHandler(async(req, res) => {
    const likeId = req.params.likeId
    console.log("THIS IS THE LIKE ID IN THE DELETE ROUTE", likeId)
    const like = await Like.findByPk(likeId)
    await like.destroy()
    return res.json(like)
}))

module.exports = router;
