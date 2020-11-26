const app = require('./app');

const PORT = 3001;

app.listen(PORT, () => {
  console.log(`Quotes service listening at http://localhost:${PORT}`);
});
