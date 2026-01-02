const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3002;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hospital Patient Management API is running');
});

// ✅ FIXED ROUTE IMPORT
app.use('/patients', require('./hospital'));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
