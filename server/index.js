const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const Url = require("./schema/db");
dotenv.config();
const port = process.env.PORT;

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.post("/api/shortUrl", async (req, res) => {
  try {
    const { fullUrl } = req.body;
    const urlfound = await Url.find({
      fullUrl,
    });

    if (urlfound.length > 0) {
      res.status(409);
      res.send(urlfound);
    } else {
      const createUrl = await Url.create({
        fullUrl,
      });

      res.status(201);
      res.send(createUrl);
    }
  } catch (error) {
    res.status(500).send({ Message: "Something went wrong" });
  }
});

app.get("/api/shortUrl", async (req, res) => {
  try {
    const shorturl = await Url.find().sort({ createdAt: -1 });
    if (shorturl.length < 0) {
      res.status(404).send({ message: "ShortUrl not found" });
    } else {
      res.status(200).send(shorturl);
    }
  } catch (error) {
    res.status(500).send({ Message: "Something went wrong" });
  }
});

app.get("/api/shortUrl/:id", async (req, res) => {
  try {
    const shortUrl = await Url.findOne({ shortUrl: req.params.id });
    if (!shortUrl) {
      res.status(404).send({ Message: "Full URL not found" });
    } else {
      shortUrl.click++;
      shortUrl.save();
      res.redirect(`${shortUrl.fullUrl}`);
    }
  } catch (error) {
    res.status(500).send({ Message: "Something went wrong" });
  }
});

app.delete("/api/shortUrl/:id", async (req, res) => {
  try {
    const shortUrl = await Url.findByIdAndDelete({ _id: req.params.id });
    if (shortUrl) {
      res.status(204);
      res.json({
        msg: "URL deleted",
      });
    }
  } catch (error) {
    res.status(500).send({ Message: "Something went wrong" });
  }
});

app.listen(port, () => {
  console.log(`Server Started on port ${port}`);
});
