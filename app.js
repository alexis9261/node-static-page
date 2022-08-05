import express from "express";
import path from 'path';

const app = express()

const __dirname = path.resolve(path.dirname(''));

// Servir contenido estatico
app.use( express.static('public') );

app.get('/about-us', function (req, res) {
  res.sendFile( __dirname + '/public/about-us.html' )
})

app.get('/menu', function (req, res) {
  res.sendFile( __dirname + '/public/menu.html' )
})

app.get('/reservation', function (req, res) {
  res.sendFile( __dirname + '/public/reservation.html' )
})

app.get('/news-and-events', function (req, res) {
  res.sendFile( __dirname + '/public/news-and-events.html' )
})

app.get('/gallery', function (req, res) {
  res.sendFile( __dirname + '/public/gallery.html' )
})

app.get('/contact-us', function (req, res) {
  res.sendFile( __dirname + '/public/contact-us.html' )
})

app.get('*', function (req, res) {
  res.send('404 | Page not found')
})

app.listen(3000)