const express = require('express')
const asyncHandler = require('express-async-handler');

const { Review, User } = require('../../db/models');
const {singleMulterUpload, singlePublicFileUpload} = require('../../awsS3')

const router = express.Router();


// Get all reviews of a specific rave
router.get("/:raveId", asyncHandler(async (req, res) => {

    const raveId = req.params.raveId
    const reviews = await Review.findAll({ include: {model: User},
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
router.post("/",  singleMulterUpload("image"), asyncHandler(async (req, res) => {
    const { userId, raveId, content} = req.body;
    let {image} =  req.body
    if(req.file){
        photoUrl = await singlePublicFileUpload(req.file);
       }else{
         photoUrl = image
       }
    const review = await Review.create({
        userId,
        raveId,
        content,
        photoUrl,
        createdAt: new Date(),
        updatedAt: new Date()
    })
    return res.json(review)
}))

// Edit a review
router.put("/:id", singleMulterUpload("image"), asyncHandler(async (req, res) => {

    // console.log("IS THIS ROUTE EVEN HITTING????????????????")

    const { userId, raveId, content, reviewId } = req.body;

    // console.log("THIS IS THE USERID ------------------------------", userId)
    // console.log("THIS IS THE RAVEID ------------------------------", raveId)
    // console.log("THIS IS THE CONTENT------------------------------", content)
    // console.log("THIS IS THE REVIEWID ------------------------------", reviewId)

    let photoUrl = await singlePublicFileUpload(req.file);

    const review = await Review.findByPk(reviewId)

    // console.log("THIS IS THE REVIEW I HOPE", review)

    review.userId = userId
    review.content = content
    review.photoUrl = photoUrl
    review.raveId = raveId

    await review.save()
    return res.json(review)
}))

// Delete a review
router.delete("/:id", asyncHandler(async (req, res) => {
    const review = await Review.findByPk(req.params.id)
    await review.destroy()
    return res.json(review);
}))

module.exports = router;
