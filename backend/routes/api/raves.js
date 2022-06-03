const express = require('express')
const asyncHandler = require('express-async-handler');

const { Rave, User } = require('../../db/models');

const router = express.Router();

router.get("/", asyncHandler(async (req, res) => {
    const allRaves = await Rave.findAll({ include: { model: User } })
    return res.json(allRaves)
}))

router.get("/:id", asyncHandler(async (req, res) => {
    const raveId = parseInt(req.params.id, 10);
    const rave = await Rave.findByPk(raveId)
    return res.json(rave)
}))

router.post("/",
    asyncHandler(async (req, res) => {
        const {userId, title, image, description, address, city, state, zipCode, date} = req.body
        const rave = await Rave.create({userId, title, image, description, address, city, state, zipCode, date, createdAt: new Date(), updatedAt: new Date()});
        return res.json(rave)
    }))

router.put("/:id", asyncHandler(async (req, res) => {
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
    return res.json(rave)
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
