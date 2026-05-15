const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.use(express.static('../frontend'));

mongoose.connect('mongodb+srv://priyagurumella_db_user:priya1234@cluster0.rd7hh7e.mongodb.net/portfolio')
.then(() => console.log('MongoDB Connected!'))
.catch(err => console.log('Error:', err));

const contactRoute = require('./routes/contact');
app.use('/api/contact', contactRoute);

app.listen(5000, () => {
  console.log('Server running on port 5000');
});