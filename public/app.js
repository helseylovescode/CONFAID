const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'aStro2005@',
    database: 'confaid'
});

db.connect(err => {
    if (err) throw err;
    console.log('MySQL Connected...');
});

app.post('/api/book', (req, res) => {
    const booking = { name: req.body.name, date: req.body.date, time: req.body.time };
    const sql = 'INSERT INTO bookings SET ?';
    db.query(sql, booking, (err, result) => {
        if (err) throw err;
        res.send('Booking added...');
    });
});



// Route to get resources
app.get('/api/resources', (req, res) => {
    const sql = 'SELECT * FROM resources';
    db.query(sql, (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).json({ error: 'Failed to fetch resources' });
        } else {
            res.json(results);
        }
    });
});



// Handle contact form submission
app.post('/submit-contact', (req, res) => {
    const { name, email, message } = req.body;
  
    const query = 'INSERT INTO contact_messages (name, email, message) VALUES (?, ?, ?)';
    db.query(query, [name, email, message], (err, result) => {
      if (err) {
        console.error(err);
        return res.status(500).send('Something went wrong.');
      }
      res.send('<h2>Thank you for reaching out! Your message has been received.</h2>');
    });
  });



app.listen(3000, () => console.log('Server running on port 3000'));
