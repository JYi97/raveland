const express = require('express')
const asyncHandler = require('express-async-handler');

const { Rave, User } = require('../../db/models');
const { singleMulterUpload, singlePublicFileUpload } = require('../../awsS3')

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

router.get("/users/:id", asyncHandler(async (req, res) => {
    const userId = parseInt(req.params.id, 10);
    const raves = await Rave.findAll({where: {userId: userId}})
    return res.json(raves)
}))

router.post("/", singleMulterUpload("image"),
    asyncHandler(async (req, res) => {
        const { userId, title, description, address, city, state, zipCode, date } = req.body
        let { image } = req.body
        if (req.file) {
            photoUrl = await singlePublicFileUpload(req.file);
        } else {
            photoUrl = image
        }
        const rave = await Rave.create({ userId, title, photoUrl, description, address, city, state, zipCode, date, createdAt: new Date(), updatedAt: new Date() });
        return res.json(rave)
    }))

router.put("/:id", singleMulterUpload('image'), asyncHandler(async (req, res) => {

    const { userId, title, description, address, city, state, zipCode, date } = req.body

    // console.log("THIS IS THE EDIT ROUTE IN THE BACKEND", req.file.fieldname)

    if (req.file && req.file.fieldname === "image") {
        let photoUrl = await singlePublicFileUpload(req.file);
        const raveId = parseInt(req.params.id, 10);

        const rave = await Rave.findByPk(raveId)

        rave.userId = userId
        rave.title = title
        rave.photoUrl = photoUrl
        rave.description = description
        rave.address = address
        rave.city = city
        rave.state = state
        rave.zipCode = zipCode
        rave.date = date

        await rave.save();
        return res.json(rave)
    } if (!req.file) {
        const raveId = parseInt(req.params.id, 10);

        const rave = await Rave.findByPk(raveId)

        let photoUrl = rave.photoUrl

        rave.userId = userId
        rave.title = title
        rave.photoUrl = photoUrl
        rave.description = description
        rave.address = address
        rave.city = city
        rave.state = state
        rave.zipCode = zipCode
        rave.date = date

        await rave.save();
        return res.json(rave)
    }




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
