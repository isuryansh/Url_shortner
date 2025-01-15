const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const shortUrl = require('./Routes/urlRoutes')
dotenv.config();
const port = process.env.PORT;

const app = express ();

app.use(express.json());
app.use(cors());
app.use(
    express.urlencoded({ extended: true })
);

app.use("/api", shortUrl)

app.listen(port, () => {
    console.log(`Server Started on port ${port}`);
    
})