import express from "express";
import Route from "./router/route.js";

const app = express();
const PORT = 5000;

app.use("/api", Route);

app.listen(PORT, () => {
  console.log(`Server is running in http://localhost:${PORT}`);
});
