const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

app.use(express.static(path.join(__dirname, "../frontend/dist")))

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend/dist/index.html"))
})

app.listen(port, () => {
    console.log('Server is running on port 5000');
});
app.get('/', (req, res) => {
    res.send('Hello World');
});
