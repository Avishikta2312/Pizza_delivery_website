const mongoose = require('mongoose');

const mongoURL = 'mongodb://localhost:27017/mern_pizza';

mongoose.connect(mongoURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;   // <-- ✔ the live connection instance

db.on('connected', () => {
  console.log('✅  Database connected');
});

db.on('error', (err) => {
  console.error('❌  MongoDB connection error:', err);
});

module.exports = db;              // export the connection (or mongoose if you prefer)
