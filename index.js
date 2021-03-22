const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('Thanks for calling me dude....'));
app.listen(3000, () => console.log('listening to the port 3000'))