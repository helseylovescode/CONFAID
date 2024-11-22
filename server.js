const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const session = require('express-session');
const bcrypt = require('bcryptjs');
const mysql = require('mysql2');
require('dotenv').config();

const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Configure session
app.use(
  session({
    secret: 'your_secret_key', // Change this to a secure, random string
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 60000 * 60 }, // Session expires in 1 hour
  })
);

// MySQL connection
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

db.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL database.');
});

// Middleware to protect routes
function authMiddleware(req, res, next) {
    if (req.session.loggedIn) {
      next(); // User is authenticated, proceed to the requested page
    } else {
      // Serve a page with a pop-up message
      res.send(`
        <html>
          <head>
            <title>Restricted Access</title>
            <script type="text/javascript">
              alert("You need to log in first.");
              window.location.href = '/'; // Redirect to home page after alert
            </script>
          </head>
          <body>
            <!-- This body won't be seen, since alert and redirect happen immediately -->
          </body>
        </html>
      `);
    }
  }
  

// Routes
// Serve home page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Registration route
app.post('/register', async (req, res) => {
  const { fullName, email, phone, password, confirmPassword } = req.body;

  if (password !== confirmPassword) {
    return res.send('Passwords do not match! <a href="/">Go Back</a>');
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const query =
    'INSERT INTO users (full_name, email, phone, password) VALUES (?, ?, ?, ?)';
  db.query(query, [fullName, email, phone, hashedPassword], (err) => {
    if (err) throw err;

    req.session.loggedIn = true;
    req.session.user = { email, fullName };
    res.redirect('/therapy'); // Redirect to therapy page after registration
  });
});

// Login route
app.post('/login', (req, res) => {
  const { email, password } = req.body;

  const query = 'SELECT * FROM users WHERE email = ?';
  db.query(query, [email], async (err, results) => {
    if (err) throw err;

    if (results.length > 0) {
      const user = results[0];
      const match = await bcrypt.compare(password, user.password);

      if (match) {
        req.session.loggedIn = true;
        req.session.user = { email: user.email, fullName: user.full_name };
        res.redirect('/therapy'); // Redirect to therapy page after login
      } else {
        res.send('Invalid password! <a href="/">Go Back</a>');
      }
    } else {
      res.send('User not found! <a href="/">Go Back</a>');
    }
  });
});

// Logout route
app.get('/logout', (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res.send('Error logging out.');
    }
    res.redirect('/');
  });
});

// Protected routes
app.get('/resources', authMiddleware, (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'resources.html'));
});

app.get('/therapy', authMiddleware, (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'therapy.html'));
});

app.get('/community', authMiddleware, (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'community.html'));
});

app.get('/blog', authMiddleware, (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'blog.html'));
});

app.get('/contact', authMiddleware, (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'contact.html'));
});

// Start the server
//const PORT = process.env.PORT || 3000;
//app.listen(PORT, () => {
 // console.log(`Server running on http://localhost:${PORT}`);
//});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Node.js server running at http://127.0.0.1:${PORT}`);
});
