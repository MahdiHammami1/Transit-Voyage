const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(bodyParser.json());
app.use(cors());

// MongoDB connection
connectDb = async () => {
    try {
      await mongoose.connect('mongodb+srv://mahdi1:test123@cluster0.ng1c9f9.mongodb.net/1', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      console.log("db connected")
    } catch (error) {
      console.log(error.message)
    }
  }

  const Travel = require('./models/travels');

// Route to add a new travel
app.post('/', async (req, res) => {
  const travel = new Travel(req.body);
  try {
    const savedTravel = await travel.save();
    res.status(201).json(savedTravel);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Route to get all travels
app.get('/', async (req, res) => {
  try {
    const travels = await Travel.find();
    res.status(200).json(travels);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Route to delete a travel by ID
app.delete('/:id', async (req, res) => {
  try {
    const deletedTravel = await Travel.findByIdAndDelete(req.params.id);
    res.status(200).json(deletedTravel);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

app.listen(port, () => {
    connectDb(); 
  console.log(`Server is running on http://localhost:${port}`);
});
