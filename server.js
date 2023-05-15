const express = require("express");
const app = express();
const PORT = process.env.PORT || 3030;

// your code
app.use((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.end("<html><body><h1>This is an Express Server</h1></body></html>");
});

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
