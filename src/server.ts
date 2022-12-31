import express from "express";
import { adminJs, adminJsRouter } from "./adminjs";
import { sequelize } from "./database";
import { router } from "./routes";

const app = express();

app.use(express.static("public"));
// passa o caminho de acesso do admin, e a rota
app.use(adminJs.options.rootPath, adminJsRouter);
const port = process.env.PORT || 3000;

app.use(express.json());

app.use(router);

app.listen(port, () => {
	sequelize.authenticate().then(() => {
		console.log("DB Connected...");
	});
	console.log(`App listen at port ${port}...`);
});
