import express from "express";
import { adminJs, adminJsRouter } from "./adminjs";
import { sequelize } from "./database";
import { router } from "./routes";
import cors from "cors";

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

app.use(express.static("public"));
app.use(adminJs.options.rootPath, adminJsRouter);

app.use(express.json());

app.use(router);

app.listen(port, () => {
	sequelize.authenticate().then(() => {
		console.log("DB Connected...");
	});
	console.log(`App listen at port ${port}...`);
});
