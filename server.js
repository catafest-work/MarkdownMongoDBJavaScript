const express = require('express')
const mongoose = require('mongoose')
const Article = require('./models/article')
const articleRouter = require('./routes/articles')
const methodOverride = require('method-override')
const app = express()

mongoose.connect('mongodb://localhost/blog', {
  useNewUrlParser: true, useUnifiedTopology: true
}, err => {
  if(err) throw err;
  console.log('Connected to MongoDB!!!')
  });
  
app.set('view engine', 'ejs')

app.use(express.urlencoded({ extended: false }))
app.use(methodOverride('_method'))

app.get('/', async (req, res) => {
  const articles = await Article.find().sort({ createdAt: 'desc' })
  //res.render('index', {text: 'Hello'}) // send the articles out to the main page for rendering in index.ejs where is set the text 
  // just one res.render - need to check this 
  res.render('articles/index', { articles: articles })
})
//res.render('index', {text: 'Hello'}) // send the articles out to the main page for rendering in index.ejs where is set the text 
// just one res.render - need to check this 

app.use('/articles', articleRouter)

app.listen(5000)