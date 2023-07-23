
const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

const events = require('./data/events.json');
const news = require('./data/news.json');
const newsCategories = require('./data/newsCategories.json');

app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.get('/events', (req, res) => {
  res.send(events)
})

app.get('/events/:id', (req, res) => {
  const id = req.params.id;
  const event = events.find(e => e.eventId === id);
  res.send(event)
})

app.get('/news-categories', (req, res) => {
  res.send(newsCategories);
})

app.get('/category/:id', (req, res) => {
  const id = req.params.id;
  if (id === '1') {
      res.send(news);
  }
  else {
      const category_news = news.filter(n => n.category_id === id);
      res.send(category_news);
  }
})

app.get('/news', (req, res) => {
  res.send(news)
})

app.get('/news/:id', (req, res) => {
  const id = req.params.id;
  const selectedNews = news.find(n => n._id === id);
  res.send(selectedNews);
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})