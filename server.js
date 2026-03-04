const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

app.get('/health', (req, res) => {
  res.json({ status: 'ok', service: 'dummy-restart-api', time: new Date().toISOString() });
});

app.post('/restart', (req, res) => {
  res.status(202).json({ status: 'accepted', message: 'Restart initiated' });
});

app.post('/reboot', (req, res) => {
  //const { service, requestedBy, reason } = req.body;
  //console.log("Reboot API called", { service, requestedBy, reason });
  res.status(202).json({ status: 'accepted', message: 'Reboot initiated' });
});


// *** This line must exist; otherwise the app exits immediately ***
app.listen(PORT, () => {
  console.log(`Dummy API running on http://localhost:${PORT}`);
});
