const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect('mongodb+srv://Rlrken:rlrkenudd@cluster0.nmbmiw8.mongodb.net/pokedex?retryWrites=true&w=majority').then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => console.log('Connection error', err));

const pokemonSchema = new mongoose.Schema({
  name: String,
  type: String,
  level: Number,
  image: String,
});

const Pokemon = mongoose.model('Pokemon', pokemonSchema);

app.post('/pokemon', async (req, res) => {
  try {
    const newpokemon = new Pokemon(req.body);
    await newpokemon.save();
    console.log('Pokemon saved to database');
    res.json(newpokemon);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get('/pokemon', async (req, res) => {
  try {
    const data = await Pokemon.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.put('/pokemon/:id', async (req, res) => {
  try {
    const updatedPokemon = await Pokemon.findByIdAndUpdate(
      req.params.id, 
      req.body, 
      { new: true }
    );
    res.json(updatedPokemon);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.delete('/pokemon/:id', async (req, res) => {
  try {
    await Pokemon.findByIdAndDelete(req.params.id);
    res.json({ message: 'Pokemon deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


app.listen(8000, () => {
  console.log('Server is running on port 8000');
});