const express = require('express')
const asyncHandler = require('express-async-handler');

const { requireAuth } = require('../../utils/auth');
const { Review } = require('../../db/models');

const router = express.Router();


// Get all reviews of a specific rave
router.get("/:raveId", asyncHandler(async (req, res) => {

    const raveId = req.params.raveId
    const reviews = await Review.findAll({
        where: {
            raveId: raveId
        },
        order: [["createdAt", "DESC"]]
    })
    return res.json(reviews)
}))

// Get a specific review
router.get("/:id", asyncHandler(async (req, res) => {
    const review = await Review.findByPk(req.params.id)
    return res.json(review)
}))

// Post a new review
router.post("/", asyncHandler(async (req, res) => {
    const { userId, raveId, content, images } = req.body;
    await Review.create({
        userId,
        raveId,
        content,
        images
    })
    const reviews = await Review.findAll({
        where: {
            raveId: raveId
        },
        order: [["createdAt", "DESC"]]
    })
    return res.json(reviews)
}))

// Edit a review
router.put("/:id", asyncHandler(async(req, res)=> {
    const reviewId = req.params.id

    const review = await Review.findByPk(reviewId)
    const {userId, raveId, content, images} = req.body;

    const reviewEdited = await review.update({
        userId,
        raveId,
        content,
        images
    })
    return res.json(reviewEdited)
}))

// Delete a review
router.delete("/:id", asyncHandler(async(req, res)=> {
    const review = await Review.findByPk(req.params.id)
    await review.destroy()
    return res.json(review);
}))

module.exports = router;
