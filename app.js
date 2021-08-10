const express = require('express');
const connectDB = require('./config/db');
var cors = require('cors')

//routes
const notes = require('./routes/api/generatedNoteItem')

const app = express();

connectDB();

//cors
app.use(cors({ origin: true, credentials: true }));

//Middleware init

app.use(express.json());


app.get('/', (req, res) => res.send('Hello world!'));

//use routes
app.use('/api/notes', notes)

const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));
