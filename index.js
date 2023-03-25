const app = require("./src/app");

const port = parseInt(process.env.APP_PORT, 10);

app.listen(port, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`server address : http://localhost:${port}`);
  }
});
