const express = require('express')
const asyncHandler = require('express-async-handler');

const { Review } = require('../../db/models');
const {singleMulterUpload, singlePublicFileUpload} = require('../../awsS3')

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
// router.put("/:id", asyncHandler(async (req, res) => {
//     const reviewId = req.params.id

//     const review = await Review.findByPk(reviewId)
//     const { userId, raveId, content, image } = req.body;

//     const reviewEdited = await review.update({
//         userId,
//         raveId,
//         content,
//         image
//     })
//     return res.json(reviewEdited)
// }))

// Delete a review
router.delete("/:id", asyncHandler(async (req, res) => {
    const review = await Review.findByPk(req.params.id)
    await review.destroy()
    return res.json(review);
}))

module.exports = router;
