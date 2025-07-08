# Practice Express App

This is a practice Express.js application where I explored and implemented two main concepts:

- Flash Messages in Express
- Intermediate-level MongoDB Queries using Mongoose

---

## 🚨 Flash Messages in Express

Flash messages are temporary alerts (like success or error popups) that allow sending messages from one route to another.

### 🔧 Steps to Implement Flash Messages:

1. **Install `connect-flash`**
   ```bash
   npm install connect-flash

2) Setup Express Session (required for flash to work)

-> Install:

npm install express-session

-> Require and configure in app.js:

const session = require('express-session');
app.use(session({ secret: 'secretKey', resave: false, saveUninitialized: true }));

-> Use connect-flash after session:

const flash = require('connect-flash');
app.use(flash());

3) Create a flash message in any route:

req.flash("name", "value");

4) Access the flash message in another route:

console.log(req.flash("name"));

🧠 Intermediate MongoDB with Mongoose

📦 Mongoose Setup :

1) Install Mongoose:

npm install mongoose

2) Connect Mongoose and set up schemas in user.js:

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/yourDBname');

🛠️ Topics Covered

> Case-sensitive search queries
> Find documents where an array field contains all specified values
> Search documents based on a specific data range
> Filter documents based on an existing field
> Filter documents by specific field's length

📁 Project Structure (Example)

├── app.js
├── routes/
│   ├── index.js
├── models/
│   ├── user.js
├── views/
│   ├── ...
├── package.json

📜 License

This project is for learning and practice purposes.
