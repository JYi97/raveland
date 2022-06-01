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
    const allRaves = await Rave.findAll({ include: { model: User } })
    return res.json(allRaves)
}))

router.get("/:id", asyncHandler(async (req, res) => {
    const raveId = parseInt(req.params.id, 10);
    const rave = await Rave.findByPk(raveId)
    return res.json(rave)
}))

router.post("/new",
    validateRaves,
    asyncHandler(async (req, res) => {
        const rave = await Rave.create(req.body);
        return res.json(rave)
    }))

router.put("/:id", requireAuth, handleValidationErrors, asyncHandler(async (req, res) => {
    const raveId = parseInt(req.params.id, 10);

    const rave = await Rave.findByPk(raveId)

    rave.userId = req.body.userId
    rave.title = req.body.title
    rave.image = req.body.image
    rave.description = req.body.description
    rave.address = req.body.address
    rave.city = req.body.city
    rave.state = req.body.state
    rave.zipCode = req.body.zipCode
    rave.date = req.body.date

    await rave.save();
    res.json(rave)
}))

router.delete("/:id", asyncHandler(async (req, res) => {
    const raveId = parseInt(req.params.id, 10);
    const rave = await Rave.findByPk(raveId)
    if (rave) {
        await rave.destroy()
        res.json({ message: 'Rave successfully deleted' })
    } else {
        res.json({ message: 'Failed to delete Rave' })
    }
}))

module.exports = router;
