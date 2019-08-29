const express = require('express');
const exphbs = require('express-handlebars');

const app = express();
const home = require('./routes/home/get');
const about = require('./routes/about/get');
const contact = require('./routes/contact/get');
const PORT = process.env.PORT || 8080;

app.use(express.static('public'));
app.engine('.hbs', exphbs({extname: '.hbs', defaultLayout: 'main'}));
app.set('view engine', '.hbs');
app.set('views',__dirname + '/views')

app.get('/smoke', (req, res) => {
  res.send('smoke test');
});

app.use('/',home);
app.use('/about',about);
app.use('/contact',contact);

app.listen(PORT, () => {
  console.log(`Server started on port: ${PORT}`);
});
