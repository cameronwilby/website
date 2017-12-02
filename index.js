const express = require('express');
const path = require('path');
const sass = require('node-sass-middleware');

const app = express();

app.use('/styles', sass({
    src: path.join(__dirname, 'sass'),
    dest: path.join(__dirname, 'public', 'styles'),
    outputStyle: 'compressed'
}));

app.use(express.static('public'));

app.get('/.well-known/acme-challenge/:content', function(req, res) {
    res.send(process.env.CHALLENGE_KEY);
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));