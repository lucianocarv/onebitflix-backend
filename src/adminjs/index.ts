import AdminJS from "adminjs";
import AdminJSExpress from "@adminjs/express";
import AdminJSSequelize from "@adminjs/sequelize";
import { sequelize } from "../database";
import { adminJSResources } from "./resources";
import { locale } from "./locale";
import { dashboardOptions } from "./dashboard";
import { brandingOptions } from "./branding";
import { authenticationOptions } from "./authentication";

AdminJS.registerAdapter(AdminJSSequelize); // passa para o AdminJS o adpatador que vamos usar no DB

export const adminJs = new AdminJS({
	databases: [sequelize], // passa o banco de dados instanciado como sequelize
	rootPath: "/admin", // rota para acessar o painel administrativo
	resources: adminJSResources, // define os recursos no adminjs
	branding: brandingOptions,
	locale: locale,
	dashboard: dashboardOptions,
});

export const adminJsRouter = AdminJSExpress.buildAuthenticatedRouter(adminJs, authenticationOptions, null, {
	resave: false,
	saveUninitialized: false,
}); // cria as rotas de acesso para o adminjs
