const express = require('express');
const app = express();
const port = 3000;

// app.get('/', (req, res) => res.send('from express server'));
app.use(express.static('public'));
// app.get('/public/assets/sounds/Fate_kick_02.mp3', (req, res) => {
//   res.send('test');
//   console.log('test');
// });

app.listen(port, () => console.log(`App listening on port ${port}.`));