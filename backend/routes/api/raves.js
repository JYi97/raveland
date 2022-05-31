const express = require('express')
const asyncHandler = require('express-async-handler');

const { requireAuth } = require('../../utils/auth');
const { Rave, User } = require('../../db/models');

const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

const router = express.Router();

const validateRaves = [

    check("title")
        .exists({ checkFalsy: true })
        .withMessage("Please provide title of the rave")
        .isLength({ max: 100 })
        .withMessage("Title cannot exceed 100 characters"),
    check("image")
        .exists({ checkFalsy: true })
        .withMessage("Please provide URL for image")
        .isURL({ require_protocol: false, require_host: false }),
    check("description")
        .exists({ checkFalsy: true })
        .withMessage("Please provide description of the rave"),
    check("address")
        .exists({ checkFalsy: true })
        .withMessage("Please provide address")
        .isLength({ max: 100 })
        .withMessage("Address cannot exceed 100 characters"),
    check("city")
        .exists({ checkFalsy: true })
        .withMessage("Please provide city")
        .isLength({ max: 100 })
        .withMessage("City cannot exceed 100 characters"),
    check("state")
        .exists({ checkFalsy: true })
        .withMessage("Please provide state")
        .isLength({ max: 100 })
        .withMessage("State cannot exceed 100 characters"),
    check("date")
        .exists({ checkFalsy: true })
        .withMessage("Please provide date")
        .isLength({ max: 100 })
        .withMessage("Date cannot exceed 100 characters"),
    handleValidationErrors
]

router.get("/", asyncHandler(async (req, res) => {
    const allRaves = await Rave.findAll({include: {model: User}})
    res.json(allRaves)
}))

router.post("/",
 validateRaves,
 asyncHandler(async (req, res) => {
     const rave = await Rave.create(req.body);
     return res.json(rave)
 }))

module.exports = router;
