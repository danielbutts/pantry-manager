if (process.env.NODE_ENV !== 'production' && !process.env.IS_BUILD) {
  require('dotenv').config(); // eslint-disable-line global-require
}

const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');
const bodyParser = require('body-parser');

const index = require('./routes/index');
const users = require('./routes/users');
const session = require('./routes/session').router;
const checkSession = require('./routes/session').checkSession;
const recipes = require('./routes/recipes');
const items = require('./routes/items');

// const tags = require('./routes/tags');
// const pantries = require('./routes/pantries');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cookieSession({
  name: 'pantry-weasel',
  secret: process.env.SESSION_SECRET,
  secure: app.get('env') === 'production',
}));

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/session', session);
app.use('/users', users);
app.use(checkSession);
app.use('/recipes', recipes);
app.use('/items', items);
// app.use('/tags', tags);
// app.use('/pantries', pantries);


// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
  // set locals, only providing error in development
  const userId = req.session.userId;
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('pages/error', { error: res.locals.error, message: res.locals.message, userId });
});

module.exports = app;
