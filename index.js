const express = require('express');
require('dotenv').config();
const postRoute = require("./routes/posts");
const CategoryRoute = require("./routes/category")

const app = express();
const port = process.env.PORT || 5000; // Set the port for your server

// Middleware
app.use(express.json()); // Parse JSON bodies

// Routes
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// app.use("/api/posts",postRoute);
app.use(postRoute);
app.use(CategoryRoute);


// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
