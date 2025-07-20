
const db = require('../db');

exports.createUser = async (name, email, passwordHash) =>
  db.query(
    'INSERT INTO users (name, email, password_hash) VALUES ($1, $2, $3) RETURNING id, name, email',
    [name, email, passwordHash]
  );

exports.findUserByEmail = async (email) =>
  db.query('SELECT * FROM users WHERE email = $1', [email]);

