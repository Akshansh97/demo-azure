const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();

app.use(express.json());
app.use(cors());
app.use(express.static("../frontend/dist"))


app.get("*", () => {
    res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"))
}
)
app.listen(5000, () => {
    console.log('Server is running on port 5000');
});
app.get('/', (req, res) => {
    res.send('Hello World');
});
