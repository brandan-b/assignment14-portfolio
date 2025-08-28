const express = require('express');
const compression = require('compression');
const path = require('path');

const app = express();
app.use(compression());

const buildPath = path.join(__dirname, 'build');
app.use(express.static(buildPath));

app.get('*', (req, res) => {
  res.sendFile(path.join(buildPath, 'index.html'));
});

const port = process.env.PORT || 5575;
app.listen(port, () => {
  console.log(`Portfolio running at http://127.0.0.1:${port}`);
});
