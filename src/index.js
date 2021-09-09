const express = require('express');
const app = express();

app.set('port', process.env.PORT || '3000');

// middelwares
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// routes
app.use(require('./routes/index'));

app.listen(app.get('port'));
console.log(`Server on port ${app.get('port')}`);