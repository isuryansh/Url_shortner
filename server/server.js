const express = require('express');
const cors = require('cors');
const shortUrl = require('./Routes/urlRoutes')
dotenv.config();


const port =  5001;

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