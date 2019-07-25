const express = require('express');
const app = express();
const port = 3000;

// app.get('/', (req, res) => res.send('from express server'));
app.use(express.static('public'));

app.listen(port, () => console.log(`App listening on port ${port}.`));