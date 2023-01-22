import express from 'express'
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import App from '../client/app/App'
import {StaticRouter} from 'react-router-dom/server'
const path = require('path')
const app = express()
const fs = require('fs')

app.use(express.static(path.resolve(__dirname, '..','dist')));
app.get('*', (req, res) => {
  const markup = path.resolve(__dirname,'./static/index.html')
  const html = ReactDOMServer.renderToString(
  <StaticRouter location={req.url}>
      <App/>
  </StaticRouter>
);
  fs.readFile(markup,'utf8',(err , data) => {
    if(err){
        console.log(err)
        return res.status(500).send('Something went wrong !')
    }
    return res.send(data.replace('<div id="root"></div>', `<div id="root">${html}</div>`))
  })
})


app.listen(3000, () => {
  console.log(`Server running on http://localhost:3000`)
})