const express = require('express')
const mongoose = require('mongoose')
const app = express()
const Fine = require('./models/fineModel')

app.use(express.json())

// Route

app.get('/', (req, res) => {
    res.send("Hello Node API");
})

app.get('/fines', async (req, res) => {
    try {
        const fines = await Fine.find({})
        res.status(200).json(fines)
    }
    catch (error) {
        console.log(error.message);
        res.status(500).json({
            message: error.message
        })
    }
})

app.put('/fines/:id', async (req, res) => {
    try {
        const {id} = req.params;
        const fine = await Fine.findByIdAndUpdate(id, req.body);
        if (!fine) {
            return res.status(400).json({
                message: `Cannot find any fine with id: ${id}`
            })
        }
        res.status(200).json(fine)
    }
    catch (error) {
        console.log(error.message);
        res.status(500).json({
            message: error.message
        })
    }
})

app.delete('/fines/:id', async (req, res) => {
    try {
        const {id} = req.params;
        const fine = await Fine.findByIdAndDelete(id);
        if (!fine) {
            return res.status(400).json({
                message: `Cannot find any fine with id: ${id}`
            })
        }
        res.status(200).json(fine)
    }
    catch (error) {
        console.log(error.message);
        res.status(500).json({
            message: error.message
        })
    }
})

app.get('/fines/:id', async (req, res) => {
    try {
        const {id} = req.params;
        const fine = await Fine.findById(id);
        res.status(200).json(fine)
    }
    catch (error) {
        console.log(error.message);
        res.status(500).json({
            message: error.message
        })
    }
})


app.post('/fines', async (req, res) => {
    try {
        const fine = await Fine.create(req.body)
        res.status(200).json(fine)
    }
    catch (error) {
        console.log(error.message);
        res.status(500).json({
            message: error.message
        })
    }
})

mongoose
    .connect('mongodb+srv://admin:admin@finesapi.3rt07rl.mongodb.net/Fines-API?retryWrites=true&w=majority&appName=FinesAPI')
    .then(() => {
        console.log("Connected to MongoDB Collection");
        app.listen(4000, () => {
            console.log("Node API app is running on port 4000");
        })
    })
    .catch(() => {
        console.log(error)
    })