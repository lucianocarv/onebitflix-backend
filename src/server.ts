import express from "express";
import { sequelize } from "./database";

const app = express();
const port = process.env.PORT || 3000;

app.listen(port, () => {
  sequelize.authenticate().then(() => {
    console.log("DB Connected...");
  });
  console.log(`App listen at port ${port}...`);
});
