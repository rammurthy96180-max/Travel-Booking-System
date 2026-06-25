const express = require("express");
const router = express.Router();

const Travel = require("../models/travel");


// CREATE
router.post("/", async (req, res) => {

    try {

        const travel = new Travel(req.body);

        await travel.save();

        res.status(201).json({
            message: "Travel Added Successfully",
            travel
        });

    } catch (err) {

        res.status(500).json({
            error: err.message
        });

    }

});


// READ ALL
router.get("/", async (req, res) => {

    try {

        const travels = await Travel.find();

        res.json(travels);

    } catch (err) {

        res.status(500).json({
            error: err.message
        });

    }

});


// READ BY ID
router.get("/:id", async (req, res) => {

    try {

        const travel = await Travel.findById(req.params.id);

        if (!travel) {
            return res.status(404).json({
                message: "Travel Record Not Found"
            });
        }

        res.json(travel);

    } catch (err) {

        res.status(500).json({
            error: err.message
        });

    }

});


// UPDATE
router.put("/:id", async (req, res) => {

    try {

        const travel = await Travel.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        if (!travel) {
            return res.status(404).json({
                message: "Travel Record Not Found"
            });
        }

        res.json({
            message: "Travel Updated Successfully",
            travel
        });

    } catch (err) {

        res.status(500).json({
            error: err.message
        });

    }

});


// DELETE
router.delete("/:id", async (req, res) => {

    try {

        const travel = await Travel.findByIdAndDelete(req.params.id);

        if (!travel) {
            return res.status(404).json({
                message: "Travel Record Not Found"
            });
        }

        res.json({
            message: "Travel Deleted Successfully"
        });

    } catch (err) {

        res.status(500).json({
            error: err.message
        });

    }

});

module.exports = router;