const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname)));

app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));
app.get('/booking', (req, res) => res.sendFile(path.join(__dirname, 'booking.html')));
app.get('/thankyou', (req, res) => res.sendFile(path.join(__dirname, 'thankyou.html')));
app.get('/disqualified', (req, res) => res.sendFile(path.join(__dirname, 'disqualified.html')));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
