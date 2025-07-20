const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const authRoutes = require('./routes/auth');
require('dotenv').config();

const app = express();
app.use(cors({ origin: 'http://localhost:3000', credentials: true })); // Use your frontend URL
app.use(express.json());
app.use(cookieParser());
app.use('/auth', authRoutes);

app.get('/', (req, res) => res.send('API running'));
app.listen(4000, () => console.log('Server running on port 4000'));
