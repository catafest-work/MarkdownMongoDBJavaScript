const express = require('express')
const articleRouter = require('./routes/articles')
const app = express()

app.set('view engine', 'ejs')

app.use('/articles', articleRouter); // defined like : URL and exported from module

app.get('/', (req, res) => {
  //res.send('Hello World')
  //res.render('index', {articles: articles}) // send the articles 
  const articles = [
    {
      title: 'Test article',
      createdAt: new Date(), //Date.now(),
      description: 'Test description'
    }
  ]
  //res.render('index', {text: 'Hello'}) // send the articles out to the main page for rendering in index.ejs where is set the text 
  // just one res.render - need to check this 
  res.render('index', { articles:articles })
})

app.listen(5000)