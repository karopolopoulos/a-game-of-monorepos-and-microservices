/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import app from './app';

const PORT = 3002;

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
