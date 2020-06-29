const express = require('express');
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');
const authRouter = require('./routes/admin/auth');
const prodctsRouter = require('./routes/admin/products');

const app = express();

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  cookieSession({
    keys: ['f435t34rtf34ytg345tyg35rtg5r'],
  }),
);
app.use(authRouter);
app.use(prodctsRouter);

app.listen(3000, () => {
  console.log('>>>>>>>>>Listening.........');
});
